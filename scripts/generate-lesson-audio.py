#!/usr/bin/env python3
"""
Generate MP3 audio for all lessons using edge-tts (Microsoft Neural TTS).
Free, no API key needed, high-quality neural voices.

Usage:
    python3 scripts/generate-lesson-audio.py

Voices:
    Spanish: es-MX-DaliaNeural (Mexican, warm)
    English: en-US-JennyNeural (US, clear)
"""

import asyncio
import os
import re
import sys

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


async def main():
    # All course content files
    course_files = [
        ("curso1-content.ts", "c1"),
        ("curso2-content.ts", "c2"),
        ("curso3-content.ts", "c3"),
        ("curso4-content.ts", "c4"),
        ("curso5-content.ts", "c5"),
        ("curso6-content.ts", "c6"),
        ("curso7-content.ts", "c7"),
        ("curso8-content.ts", "c8"),
        ("curso9-content.ts", "c9"),
        ("curso10-content.ts", "c10"),
        ("curso11-content.ts", "c11"),
        ("curso12-content.ts", "c12"),
        ("curso13-content.ts", "c13"),
        ("curso14-content.ts", "c14"),
        ("curso15-content.ts", "c15"),
    ]

    os.makedirs(os.path.join(AUDIO_DIR, "es"), exist_ok=True)

    total_generated = 0

    for filename, prefix in course_files:
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
                clean = clean[:5000] + "... Fin de la sección."

            slug = f"{prefix}-{name}"
            output_path = os.path.join(AUDIO_DIR, "es", f"{slug}.mp3")

            if os.path.exists(output_path):
                print(f"  {slug}.mp3 already exists, skipping")
                continue

            print(f"  Generating {slug}.mp3 ({len(clean)} chars)...")
            try:
                await generate_audio(clean, output_path)
                total_generated += 1
            except Exception as e:
                print(f"  ERROR on {slug}: {e}")

    print(f"\nDone! Generated {total_generated} audio files.")
    print(f"Audio files in: {os.path.join(AUDIO_DIR, 'es')}")


if __name__ == "__main__":
    asyncio.run(main())
