-- Simple fix for newsletter security issue
-- Run this script in your Supabase SQL editor

-- Option 1: Simply drop the problematic view (recommended)
DROP VIEW IF EXISTS active_newsletter_subscribers;

-- Option 2: If you need the view, recreate it with proper security
-- Uncomment the lines below if you want to keep the view:

-- CREATE VIEW active_newsletter_subscribers AS
-- SELECT 
--   id,
--   email,
--   subscribed_at,
--   created_at
-- FROM newsletter_subscribers
-- WHERE status = 'active'
-- ORDER BY subscribed_at DESC;

-- ALTER VIEW active_newsletter_subscribers SET (security_invoker = true);

-- Create secure stats views (these are safe and useful)
CREATE OR REPLACE VIEW newsletter_stats AS
SELECT 
  COUNT(*) as total_subscribers,
  COUNT(CASE WHEN status = 'active' THEN 1 END) as active_subscribers,
  COUNT(CASE WHEN status = 'unsubscribed' THEN 1 END) as unsubscribed_count,
  COUNT(CASE WHEN subscribed_at >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as new_subscribers_last_30_days
FROM newsletter_subscribers;

-- Create monthly stats view
CREATE OR REPLACE VIEW newsletter_monthly_stats AS
SELECT 
  DATE_TRUNC('month', subscribed_at) as month,
  COUNT(*) as monthly_subscriptions,
  COUNT(CASE WHEN status = 'active' THEN 1 END) as active_in_month
FROM newsletter_subscribers
GROUP BY DATE_TRUNC('month', subscribed_at)
ORDER BY month DESC;
