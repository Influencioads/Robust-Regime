-- Insert real admin user with email admin@robustregime.com and password 'password' (hashed with bcrypt)

INSERT INTO users (id, email, password, full_name, role, created_at, updated_at)
VALUES (
  UUID(),
  'admin@robustregime.com',
  '$2b$10$ZfisJJmJ1xVVvUVEmLYbX.iOg7Jx4ta7hhHVk.xQ/4/EqmGMlrPO.',
  'Main Admin',
  'admin',
  NOW(),
  NOW()
);
