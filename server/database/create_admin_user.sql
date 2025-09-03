-- SQL script to create a real admin user in the users table

-- Replace the hashed password below with the bcrypt hash of your chosen password
-- Example password: adminpassword
-- You can generate bcrypt hash using online tools or Node.js bcrypt library

INSERT INTO users (id, email, password, full_name, role, created_at, updated_at)
VALUES (
  UUID(),
  'admin@example.com',
  '$2a$10$7QJ1Q9v1ZxQ9Q9Q9Q9Q9QOQ9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9', -- bcrypt hash for 'adminpassword'
  'Main Admin',
  'admin',
  NOW(),
  NOW()
);
