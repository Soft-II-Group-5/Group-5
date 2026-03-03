-- Migration: 2026-03-02_practice_results_and_lessons_rls.sql
-- Purpose:
-- 1) Fix lessons visibility (RLS policy)
-- 2) Add practice_results table for practice submit persistence

-- =========================
-- 1) Lessons RLS policy fix
-- =========================

-- Remove misapplied policy (if present)
DROP POLICY IF EXISTS "dev_all_user_progress" ON public.lessons;

-- Ensure RLS enabled
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Allow both anon + authenticated to read lessons
DROP POLICY IF EXISTS "lessons_read_all" ON public.lessons;

CREATE POLICY "lessons_read_all"
ON public.lessons
FOR SELECT
TO anon, authenticated
USING (true);

-- Ensure privileges (policies don’t replace GRANTs)
GRANT SELECT ON public.lessons TO anon, authenticated;

-- =========================
-- 2) Create practice_results
-- =========================

CREATE TABLE IF NOT EXISTS public.practice_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES public.practice_sessions(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  results jsonb NULL,
  score int NULL,
  correct int NULL,
  total int NULL,
  duration_seconds int NULL,
  wpm numeric NULL,
  accuracy numeric NULL,
  error_count int NULL,
  time_seconds int NULL,
  tier int NULL,
  details jsonb NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS practice_results_session_id_idx
ON public.practice_results(session_id);

CREATE INDEX IF NOT EXISTS practice_results_user_id_idx
ON public.practice_results(user_id);
