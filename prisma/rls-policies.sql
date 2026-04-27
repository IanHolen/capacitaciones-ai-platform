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
-- USER GOALS: users can only see/manage their own goal
-- ============================================================

ALTER TABLE user_goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_goals_read_own" ON user_goals
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "user_goals_insert_own" ON user_goals
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "user_goals_update_own" ON user_goals
  FOR UPDATE USING (auth.uid()::text = user_id::text);

-- ============================================================
-- ADMIN: admin_users table + read access on all tables
-- ============================================================

CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admin_users_read_own" ON admin_users
  FOR SELECT USING (auth.jwt() ->> 'email' = email);

-- Admin read policies (SELECT on all tables for admin users)
CREATE POLICY "users_admin_read" ON users FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "levels_admin_read" ON levels FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "courses_admin_read" ON courses FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "lessons_admin_read" ON lessons FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "lesson_contents_admin_read" ON lesson_contents FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "exercises_admin_read" ON exercises FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "quiz_options_admin_read" ON quiz_options FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "enrollments_admin_read" ON enrollments FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "user_progress_admin_read" ON user_progress FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "user_exercise_results_admin_read" ON user_exercise_results FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "badges_admin_read" ON badges FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "user_badges_admin_read" ON user_badges FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));
CREATE POLICY "comments_admin_read" ON comments FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt() ->> 'email'));

-- ============================================================
-- RPC FUNCTIONS: metrics for admin dashboard
-- ============================================================

CREATE OR REPLACE FUNCTION platform_metrics()
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE result JSON;
BEGIN
  SELECT json_build_object(
    'total_users', (SELECT count(*) FROM users WHERE deleted_at IS NULL),
    'active_users_7d', (SELECT count(DISTINCT user_id) FROM user_progress WHERE updated_at > now() - interval '7 days'),
    'total_enrollments', (SELECT count(*) FROM enrollments),
    'active_enrollments', (SELECT count(*) FROM enrollments WHERE status = 'ACTIVE'),
    'completed_enrollments', (SELECT count(*) FROM enrollments WHERE status = 'COMPLETED'),
    'total_lessons_completed', (SELECT count(*) FROM user_progress WHERE completed = true),
    'total_quizzes_passed', (SELECT count(*) FROM user_exercise_results WHERE is_correct = true),
    'total_comments', (SELECT count(*) FROM comments),
    'total_badges_earned', (SELECT count(*) FROM user_badges),
    'courses_count', (SELECT count(*) FROM courses WHERE deleted_at IS NULL),
    'lessons_count', (SELECT count(*) FROM lessons WHERE deleted_at IS NULL)
  ) INTO result;
  RETURN result;
END; $$;

CREATE OR REPLACE FUNCTION db_table_counts()
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE result JSON;
BEGIN
  SELECT json_build_object(
    'users', (SELECT count(*) FROM users),
    'levels', (SELECT count(*) FROM levels),
    'courses', (SELECT count(*) FROM courses),
    'lessons', (SELECT count(*) FROM lessons),
    'lesson_contents', (SELECT count(*) FROM lesson_contents),
    'exercises', (SELECT count(*) FROM exercises),
    'quiz_options', (SELECT count(*) FROM quiz_options),
    'enrollments', (SELECT count(*) FROM enrollments),
    'user_progress', (SELECT count(*) FROM user_progress),
    'user_exercise_results', (SELECT count(*) FROM user_exercise_results),
    'badges', (SELECT count(*) FROM badges),
    'user_badges', (SELECT count(*) FROM user_badges),
    'comments', (SELECT count(*) FROM comments),
    'admin_users', (SELECT count(*) FROM admin_users)
  ) INTO result;
  RETURN result;
END; $$;
