# SQL (Structured Query Language)

## Introduction
SQL is a standard language for managing and manipulating relational databases. It's the foundation for many database systems.

## Key Concepts

### Basic Queries
```sql
-- Basic SELECT query
SELECT column1, column2
FROM table_name
WHERE condition;

-- Joining tables
SELECT orders.id, customers.name
FROM orders
JOIN customers ON orders.customer_id = customers.id;
```

### Data Manipulation
```sql
-- Insert data
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);

-- Update data
UPDATE table_name
SET column1 = value1
WHERE condition;

-- Delete data
DELETE FROM table_name
WHERE condition;
```

### Standard Features
1. ACID Compliance
2. Basic Data Types
   - INTEGER
   - VARCHAR
   - DATE
   - DECIMAL
3. Table Constraints
   - PRIMARY KEY
   - FOREIGN KEY
   - UNIQUE
   - NOT NULL

### Common Operations
```sql
-- Aggregation
SELECT COUNT(*), AVG(price)
FROM products
GROUP BY category;

-- Subqueries
SELECT name
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

## Best Practices
1. Use proper indexing
2. Write readable queries
3. Avoid SELECT *
4. Use appropriate data types
5. Implement proper constraints

## Additional Resources

### Documentation
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQL Standard](https://www.iso.org/standard/63555.html)

### Tools
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [pgAdmin](https://www.pgadmin.org/)
- [DBeaver](https://dbeaver.io/)
