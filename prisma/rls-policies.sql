-- ============================================================
-- Row Level Security (RLS) Policies
-- Plataforma Educativa de IA
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_exercise_results ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- PUBLIC READ: Levels, Courses, Lessons, Content, Exercises
-- Anyone can browse the catalog
-- ============================================================

CREATE POLICY "levels_public_read" ON levels
  FOR SELECT USING (true);

CREATE POLICY "courses_public_read" ON courses
  FOR SELECT USING (published = true AND deleted_at IS NULL);

CREATE POLICY "lessons_public_read" ON lessons
  FOR SELECT USING (published = true AND deleted_at IS NULL);

CREATE POLICY "lesson_contents_public_read" ON lesson_contents
  FOR SELECT USING (true);

CREATE POLICY "exercises_public_read" ON exercises
  FOR SELECT USING (true);

CREATE POLICY "quiz_options_public_read" ON quiz_options
  FOR SELECT USING (true);

-- ============================================================
-- USERS: can only read/update their own profile
-- ============================================================

CREATE POLICY "users_read_own" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "users_update_own" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);

-- ============================================================
-- ENROLLMENTS: users can only see/manage their own enrollments
-- ============================================================

CREATE POLICY "enrollments_read_own" ON enrollments
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "enrollments_insert_own" ON enrollments
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "enrollments_update_own" ON enrollments
  FOR UPDATE USING (auth.uid()::text = user_id::text);

-- ============================================================
-- USER PROGRESS: users can only see/manage their own progress
-- ============================================================

CREATE POLICY "user_progress_read_own" ON user_progress
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "user_progress_insert_own" ON user_progress
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "user_progress_update_own" ON user_progress
  FOR UPDATE USING (auth.uid()::text = user_id::text);

-- ============================================================
-- USER EXERCISE RESULTS: users can only see/manage their own
-- ============================================================

CREATE POLICY "user_exercise_results_read_own" ON user_exercise_results
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "user_exercise_results_insert_own" ON user_exercise_results
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- ============================================================
-- BADGES: public read, system-managed
-- ============================================================

ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "badges_public_read" ON badges
  FOR SELECT USING (true);

CREATE POLICY "user_badges_read_own" ON user_badges
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "user_badges_insert_own" ON user_badges
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- ============================================================
-- COMMENTS: all users read, own user edit/delete
-- ============================================================

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "comments_public_read" ON comments
  FOR SELECT USING (true);

CREATE POLICY "comments_insert_own" ON comments
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "comments_update_own" ON comments
  FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "comments_delete_own" ON comments
  FOR DELETE USING (auth.uid()::text = user_id::text);

-- ============================================================
-- ADMIN: full access for admin role (via service key)
-- These use the Supabase service_role which bypasses RLS
-- ============================================================
