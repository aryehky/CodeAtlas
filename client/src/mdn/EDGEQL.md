# EdgeQL

## Introduction
EdgeQL is a query language designed for EdgeDB, a next-generation database system that combines the robustness of relational databases with the flexibility of document databases. It provides a type-safe, declarative approach to data manipulation and querying.

## Getting Started

### Installation
1. Install EdgeDB by following the official installation guide:
   [EdgeDB Installation Documentation](https://www.edgedb.com/docs/installation)

2. Initialize a new project:
```bash
edgedb project init my_project
cd my_project
```

## Core Concepts

### Basic Queries
Select operations form the foundation of data retrieval in EdgeQL:

```edgeql
SELECT User {
    id,
    name,
    email
};
```

Filter results using conditions:
```edgeql
SELECT User 
FILTER .name = 'Alice';
```

### Data Manipulation

#### Insert Operations
Create new records in the database:
```edgeql
INSERT User {
    name := 'Bob',
    email := 'bob@example.com'
};
```

#### Update Operations
Modify existing records:
```edgeql
UPDATE User
FILTER .name = 'Bob'
SET {
    email := 'bob_new@example.com'
};
```

#### Delete Operations
Remove records from the database:
```edgeql
DELETE User
FILTER .name = 'Bob';
```

## Advanced Features

### Functions
Define custom functions for reusable operations:

```edgeql
CREATE FUNCTION get_user_count() {
    USING (
        SELECT count(User)
    );
};
```

Execute defined functions:
```edgeql
SELECT get_user_count();
```

### Schema Management

#### Type Definition
Define new data types with required properties:
```edgeql
CREATE TYPE Product {
    required property name -> str;
    required property price -> decimal;
};
```

#### Schema Migration
Apply schema changes:
```bash
edgedb migration create
edgedb migrate
```

### Transaction Management
Ensure data integrity with transaction blocks:
```edgeql
BEGIN;
    INSERT User {
        name := 'Charlie',
        email := 'charlie@example.com'
    };
COMMIT;
```

### Command Line Interface
Execute queries directly from the command line:
```bash
edgedb query "SELECT User;"
```

## Additional Resources

### Official Documentation
- [EdgeDB Documentation](https://www.edgedb.com/docs)
- [EdgeQL Cheat Sheet](https://www.edgedb.com/docs/edgeql/cheatsheet)
- [Best Practices Guide](https://www.edgedb.com/docs/guides/deployment)

### Community
- [EdgeDB Forum](https://github.com/edgedb/edgedb/discussions)
- [GitHub Repository](https://github.com/edgedb/edgedb)
