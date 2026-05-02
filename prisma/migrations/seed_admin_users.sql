-- Seed admin_users table with initial admin email.
-- This ensures RLS admin policies work for holenderian@gmail.com
-- without relying on hardcoded fallback in application code.
-- Idempotent: ON CONFLICT does nothing if row already exists.

INSERT INTO admin_users (email, role)
VALUES ('holenderian@gmail.com', 'admin')
ON CONFLICT (email) DO NOTHING;
