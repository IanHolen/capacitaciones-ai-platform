-- Add English translation columns to all translatable tables
-- These columns are nullable: when NULL, the frontend/API falls back to the Spanish value

ALTER TABLE levels ADD COLUMN IF NOT EXISTS name_en TEXT;
ALTER TABLE levels ADD COLUMN IF NOT EXISTS description_en TEXT;

ALTER TABLE courses ADD COLUMN IF NOT EXISTS title_en TEXT;
ALTER TABLE courses ADD COLUMN IF NOT EXISTS description_en TEXT;

ALTER TABLE lessons ADD COLUMN IF NOT EXISTS title_en TEXT;
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS description_en TEXT;

ALTER TABLE lesson_contents ADD COLUMN IF NOT EXISTS body_en TEXT;

ALTER TABLE exercises ADD COLUMN IF NOT EXISTS title_en TEXT;
ALTER TABLE exercises ADD COLUMN IF NOT EXISTS instructions_en TEXT;

ALTER TABLE quiz_options ADD COLUMN IF NOT EXISTS text_en TEXT;

ALTER TABLE badges ADD COLUMN IF NOT EXISTS name_en TEXT;
ALTER TABLE badges ADD COLUMN IF NOT EXISTS description_en TEXT;
