/*
  # Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address for follow-up
      - `inquiry_type` (text) - Type of inquiry (school, parent, partner, other)
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to insert their own inquiries
    - Add policy for authenticated users to view all inquiries (for admin purposes)

  3. Notes
    - This table stores all contact form submissions from the Youth Matterz website
    - RLS ensures data privacy while allowing form submissions
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  inquiry_type text DEFAULT 'other',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);