-- Add course_ratings table for 1-5 star ratings per user per course
-- One rating per user per course (upsert pattern expected)

CREATE TABLE IF NOT EXISTS course_ratings (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES users(id),
  course_id  TEXT NOT NULL,
  rating     INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id)
);

-- Index on course_id for avg rating queries (e.g. SELECT AVG(rating) WHERE course_id = ?)
CREATE INDEX IF NOT EXISTS idx_course_ratings_course_id ON course_ratings(course_id);

-- FK index on user_id (serves JOIN to users and cascade deletes)
CREATE INDEX IF NOT EXISTS idx_course_ratings_user_id ON course_ratings(user_id);
