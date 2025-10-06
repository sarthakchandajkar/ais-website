-- Fix security issue with newsletter views
-- Run this script in your Supabase SQL editor

-- Drop the existing view if it exists (this will work)
DROP VIEW IF EXISTS active_newsletter_subscribers CASCADE;

-- Recreate the view with proper security settings
CREATE VIEW active_newsletter_subscribers AS
SELECT 
  id,
  email,
  subscribed_at,
  created_at
FROM newsletter_subscribers
WHERE status = 'active'
ORDER BY subscribed_at DESC;

-- Set the view to use security invoker (inherits RLS from base table)
ALTER VIEW active_newsletter_subscribers SET (security_invoker = true);

-- Create a secure stats view that only shows aggregated data (no personal info)
CREATE OR REPLACE VIEW newsletter_stats AS
SELECT 
  COUNT(*) as total_subscribers,
  COUNT(CASE WHEN status = 'active' THEN 1 END) as active_subscribers,
  COUNT(CASE WHEN status = 'unsubscribed' THEN 1 END) as unsubscribed_count,
  COUNT(CASE WHEN subscribed_at >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as new_subscribers_last_30_days
FROM newsletter_subscribers;

-- Create a monthly stats view
CREATE OR REPLACE VIEW newsletter_monthly_stats AS
SELECT 
  DATE_TRUNC('month', subscribed_at) as month,
  COUNT(*) as monthly_subscriptions,
  COUNT(CASE WHEN status = 'active' THEN 1 END) as active_in_month
FROM newsletter_subscribers
GROUP BY DATE_TRUNC('month', subscribed_at)
ORDER BY month DESC;

-- Add RLS policies for the views (they inherit from the base table, but let's be explicit)
-- Note: Views with security_invoker = true will automatically inherit RLS from the base table

-- Optional: If you want to completely restrict access to the active_newsletter_subscribers view,
-- you can drop it and only use the stats views
-- DROP VIEW IF EXISTS active_newsletter_subscribers;
