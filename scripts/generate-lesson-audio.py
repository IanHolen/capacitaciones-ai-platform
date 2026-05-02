#!/usr/bin/env python3
"""
Generate MP3 audio for all lessons using edge-tts (Microsoft Neural TTS).
Free, no API key needed, high-quality neural voices.

Usage:
    python3 scripts/generate-lesson-audio.py          # Generate Spanish audio
    python3 scripts/generate-lesson-audio.py --lang en # Generate English audio
    python3 scripts/generate-lesson-audio.py --lang all # Generate both

Voices:
    Spanish: es-MX-DaliaNeural (Mexican, warm)
    English: en-US-JennyNeural (US, clear)
"""

import argparse
import asyncio
import os
import re

import edge_tts

VOICE_ES = "es-MX-DaliaNeural"
VOICE_EN = "en-US-JennyNeural"
RATE = "-8%"  # Slightly slower for educational content

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LIB_DIR = os.path.join(REPO_ROOT, "lib")
AUDIO_DIR = os.path.join(REPO_ROOT, "public", "audio")


def extract_lessons_from_ts(filepath: str) -> dict[str, str]:
    """Extract exported string constants from a TypeScript file."""
    with open(filepath, "r") as f:
        content = f.read()

    lessons = {}
    # Match: export const NAME = `...`;
    pattern = r"export const (\w+)\s*=\s*`([\s\S]*?)`;"
    for match in re.finditer(pattern, content):
        name = match.group(1)
        text = match.group(2)
        lessons[name] = text

    return lessons


def clean_text_for_tts(text: str) -> str:
    """Remove markdown formatting and clean text for TTS."""
    # Remove markdown headers
    text = re.sub(r"#{1,6}\s+", "", text)
    # Remove bold/italic markers
    text = re.sub(r"\*{1,3}(.*?)\*{1,3}", r"\1", text)
    # Remove markdown links [text](url)
    text = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", text)
    # Remove markdown tables
    text = re.sub(r"\|[^\n]+\|", "", text)
    text = re.sub(r"---+", "", text)
    # Remove code blocks
    text = re.sub(r"```[\s\S]*?```", "", text)
    text = re.sub(r"`[^`]+`", "", text)
    # Remove blockquotes
    text = re.sub(r"^>\s*", "", text, flags=re.MULTILINE)
    # Remove list markers
    text = re.sub(r"^[\-\*]\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\d+\.\s+", "", text, flags=re.MULTILINE)
    # Remove emojis and special chars
    text = re.sub(r"[📧📊🎓✅❌⭐]", "", text)
    # Collapse whitespace
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = text.strip()
    return text


async def generate_audio(text: str, output_path: str, voice: str = VOICE_ES):
    """Generate audio file using edge-tts."""
    communicate = edge_tts.Communicate(text, voice, rate=RATE)
    await communicate.save(output_path)


async def generate_for_language(lang: str):
    """Generate audio files for a specific language."""
    voice = VOICE_EN if lang == "en" else VOICE_ES
    suffix = "-en" if lang == "en" else ""
    end_text = "... End of section." if lang == "en" else "... Fin de la sección."

    # All course content files
    course_files = [
        ("curso1-content", "c1"),
        ("curso2-content", "c2"),
        ("curso3-content", "c3"),
        ("curso4-content", "c4"),
        ("curso5-content", "c5"),
        ("curso6-content", "c6"),
        ("curso7-content", "c7"),
        ("curso8-content", "c8"),
        ("curso9-content", "c9"),
        ("curso10-content", "c10"),
        ("curso11-content", "c11"),
        ("curso12-content", "c12"),
        ("curso13-content", "c13"),
        ("curso14-content", "c14"),
        ("curso15-content", "c15"),
    ]

    output_dir = os.path.join(AUDIO_DIR, lang)
    os.makedirs(output_dir, exist_ok=True)

    total_generated = 0

    for base_name, prefix in course_files:
        filename = f"{base_name}{suffix}.ts"
        filepath = os.path.join(LIB_DIR, filename)
        if not os.path.exists(filepath):
            print(f"Skipping {filename} — file not found")
            continue

        print(f"\nProcessing {filename}...")
        lessons = extract_lessons_from_ts(filepath)

        for name, text in lessons.items():
            clean = clean_text_for_tts(text)

            if len(clean) < 50:
                print(f"  Skipping {name} — too short ({len(clean)} chars)")
                continue

            # Truncate very long texts (edge-tts has limits)
            if len(clean) > 5000:
                clean = clean[:5000] + end_text

            slug = f"{prefix}-{name}"
            output_path = os.path.join(output_dir, f"{slug}.mp3")

            if os.path.exists(output_path):
                print(f"  {slug}.mp3 already exists, skipping")
                continue

            print(f"  Generating {slug}.mp3 ({len(clean)} chars)...")
            try:
                await generate_audio(clean, output_path, voice)
                total_generated += 1
            except Exception as e:
                print(f"  ERROR on {slug}: {e}")

    print(f"\nDone ({lang})! Generated {total_generated} audio files.")
    print(f"Audio files in: {output_dir}")
    return total_generated


async def main():
    parser = argparse.ArgumentParser(description="Generate lesson audio with edge-tts")
    parser.add_argument(
        "--lang",
        choices=["es", "en", "all"],
        default="es",
        help="Language to generate: es (Spanish), en (English), all (both)",
    )
    args = parser.parse_args()

    languages = ["es", "en"] if args.lang == "all" else [args.lang]
    total = 0
    for lang in languages:
        total += await generate_for_language(lang)

    print(f"\nTotal generated: {total} audio files.")


if __name__ == "__main__":
    asyncio.run(main())
