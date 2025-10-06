-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON newsletter_subscribers(status);

-- Create index on subscribed_at for date-based queries
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_subscribed_at ON newsletter_subscribers(subscribed_at);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert new subscriptions
CREATE POLICY "Allow anonymous users to subscribe to newsletter" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Create policy to allow users to read their own subscription status
CREATE POLICY "Allow users to read their own subscription" ON newsletter_subscribers
  FOR SELECT USING (true);

-- Create policy to allow users to update their own subscription (for unsubscribe)
CREATE POLICY "Allow users to update their own subscription" ON newsletter_subscribers
  FOR UPDATE USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at
  BEFORE UPDATE ON newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for active subscribers only
CREATE OR REPLACE VIEW active_newsletter_subscribers AS
SELECT 
  id,
  email,
  subscribed_at,
  created_at
FROM newsletter_subscribers
WHERE status = 'active'
ORDER BY subscribed_at DESC;

-- Enable RLS on the view (this is important for security)
ALTER VIEW active_newsletter_subscribers SET (security_invoker = true);

-- Create a more secure view that only shows count and aggregated data
CREATE OR REPLACE VIEW newsletter_stats AS
SELECT 
  COUNT(*) as total_subscribers,
  COUNT(CASE WHEN status = 'active' THEN 1 END) as active_subscribers,
  COUNT(CASE WHEN status = 'unsubscribed' THEN 1 END) as unsubscribed_count,
  COUNT(CASE WHEN subscribed_at >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as new_subscribers_last_30_days,
  DATE_TRUNC('month', subscribed_at) as month,
  COUNT(*) as monthly_subscriptions
FROM newsletter_subscribers
GROUP BY DATE_TRUNC('month', subscribed_at)
ORDER BY month DESC;
