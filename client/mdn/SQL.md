# SQL

## Introduction
SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. It provides commands for data queries, updates, and database administration.

## Database Management

### Database Operations
```sql
-- Create Database
CREATE DATABASE database_name;

-- Use Database
USE database_name;

-- Delete Database
DROP DATABASE database_name;
```

### Table Operations
```sql
-- Create Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Modify Table
ALTER TABLE users
ADD COLUMN age INT;

-- Delete Table
DROP TABLE users;
```

## Data Manipulation

### Basic Queries
```sql
-- Select All Columns
SELECT * FROM users;

-- Select Specific Columns
SELECT username, email FROM users;

-- Conditional Selection
SELECT * FROM users
WHERE age >= 18;

-- Ordered Results
SELECT * FROM users
ORDER BY username ASC;

-- Limit Results
SELECT * FROM users
LIMIT 10;
```

### Data Modification
```sql
-- Insert Data
INSERT INTO users (username, email)
VALUES ('john_doe', 'john@example.com');

-- Update Data
UPDATE users
SET email = 'new_email@example.com'
WHERE username = 'john_doe';

-- Delete Data
DELETE FROM users
WHERE username = 'john_doe';
```

## Advanced Queries

### Joins
```sql
-- Inner Join
SELECT orders.id, users.username
FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- Left Join
SELECT users.username, orders.id
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Right Join
SELECT users.username, orders.id
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

### Aggregation
```sql
-- Count Records
SELECT COUNT(*) FROM users;

-- Group By
SELECT country, COUNT(*) as user_count
FROM users
GROUP BY country;

-- Having Clause
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 50000;
```

### Subqueries
```sql
-- Subquery in WHERE
SELECT username
FROM users
WHERE id IN (
    SELECT user_id
    FROM orders
    WHERE total > 1000
);

-- Subquery in FROM
SELECT avg_order
FROM (
    SELECT user_id, AVG(total) as avg_total
    FROM orders
    GROUP BY user_id
) as order_averages;
```

## Database Design

### Keys and Constraints
```sql
-- Primary Key
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Foreign Key
CREATE TABLE orders (
    id INT PRIMARY KEY,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Unique Constraint
ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);
```

### Indexes
```sql
-- Create Index
CREATE INDEX idx_username
ON users(username);

-- Create Composite Index
CREATE INDEX idx_name_email
ON users(username, email);

-- Remove Index
DROP INDEX idx_username ON users;
```

## Transactions

### Transaction Control
```sql
-- Start Transaction
START TRANSACTION;

-- Commit Changes
COMMIT;

-- Rollback Changes
ROLLBACK;

-- Transaction with Savepoint
START TRANSACTION;
SAVEPOINT save1;
-- operations
ROLLBACK TO save1;
```

## Best Practices

### Query Optimization
1. Use appropriate indexes
2. Write efficient joins
3. Avoid SELECT *
4. Use EXPLAIN for query analysis

### Database Design
1. Normalize database structure
2. Use appropriate data types
3. Implement proper constraints
4. Document schema changes

### Security
1. Use prepared statements
2. Implement proper access control
3. Regular backups
4. Audit sensitive operations

## Additional Resources

### Documentation
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQL Standard](https://www.iso.org/standard/63555.html)

### Tools
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [pgAdmin](https://www.pgadmin.org/)
- [DBeaver](https://dbeaver.io/)
