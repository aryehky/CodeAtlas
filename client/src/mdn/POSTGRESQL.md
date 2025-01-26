# PostgreSQL

## Introduction
PostgreSQL is an advanced, open-source object-relational database system that extends and builds upon SQL.

## Key Differences from Standard SQL

### Advanced Data Types
```sql
-- Arrays
CREATE TABLE inventory (
    id INT,
    items TEXT[]
);
INSERT INTO inventory VALUES (1, ARRAY['item1', 'item2']);

-- JSON/JSONB
CREATE TABLE configs (
    id INT,
    settings JSONB
);
INSERT INTO configs VALUES (1, '{"theme": "dark", "notifications": true}');

-- Custom Types
CREATE TYPE address AS (
    street TEXT,
    city TEXT,
    postal_code TEXT
);
```

### Unique Features

#### Full-Text Search
```sql
-- Creating a text search vector
CREATE INDEX idx_search ON articles 
USING gin(to_tsvector('english', body));

-- Performing search
SELECT title 
FROM articles 
WHERE to_tsvector('english', body) @@ to_tsquery('search & terms');
```

#### Window Functions
```sql
-- Row number within partitions
SELECT 
    department,
    employee_name,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC)
FROM employees;
```

### PostgreSQL-Specific Extensions

#### Geographic Data with PostGIS
```sql
-- Enable PostGIS
CREATE EXTENSION postgis;

-- Create spatial data
CREATE TABLE locations (
    id INT,
    name TEXT,
    location GEOMETRY(Point, 4326)
);
```

#### Inheritance
```sql
-- Parent table
CREATE TABLE cities (
    name TEXT,
    population INT
);

-- Child table inheriting from cities
CREATE TABLE capitals (
    country TEXT
) INHERITS (cities);
```

## Advanced Features

### Materialized Views
```sql
CREATE MATERIALIZED VIEW sales_summary AS
SELECT 
    product_id,
    SUM(quantity) as total_sold
FROM sales
GROUP BY product_id;
```

### Custom Functions
```sql
CREATE FUNCTION calculate_age(birthday DATE)
RETURNS INT AS $$
BEGIN
    RETURN DATE_PART('year', AGE(CURRENT_DATE, birthday));
END;
$$ LANGUAGE plpgsql;
```

## Key Advantages Over Standard SQL
1. Advanced Data Types
   - Arrays
   - JSON/JSONB
   - Geometric types
   - Custom types
2. Extensibility
   - Custom functions
   - Custom operators
   - Custom data types
3. Concurrency Features
   - MVCC (Multi-Version Concurrency Control)
   - Table partitioning
4. Developer Features
   - Stored procedures
   - Triggers
   - Event triggers
5. Performance Features
   - Parallel queries
   - Just-In-Time compilation
   - Advanced indexing options 