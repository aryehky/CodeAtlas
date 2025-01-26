# GraphQL

## Introduction
GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It provides a complete and understandable description of the data in your API, giving clients the power to ask for exactly what they need.

## Getting Started

### Installation
For Node.js projects:
```bash
npm install graphql express-graphql
```

## Core Concepts

### Schema Definition
The schema defines the structure of your data and available operations.

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}
```

### Types

#### Scalar Types
- `String`: UTF-8 character sequence
- `Int`: 32-bit integer
- `Float`: Double-precision floating-point
- `Boolean`: true or false
- `ID`: Unique identifier

#### Object Types
```graphql
type Product {
  id: ID!
  name: String!
  price: Float!
  category: Category!
}
```

## Queries and Mutations

### Query Definition
```javascript
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        // Database query logic
        return findUserById(args.id);
      }
    }
  }
});
```

### Query Execution
```graphql
query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}
```

### Mutation Definition
```javascript
const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        // Database insertion logic
        return createUser(args);
      }
    }
  }
});
```

### Mutation Execution
```graphql
mutation {
  addUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}
```

## Advanced Features

### Subscriptions
```javascript
const SubscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    userAdded: {
      type: UserType,
      subscribe: () => pubsub.asyncIterator('USER_ADDED')
    }
  }
});
```

### Interfaces
```graphql
interface Node {
  id: ID!
}

type User implements Node {
  id: ID!
  name: String!
}
```

## Client Integration

### Apollo Client Setup
```javascript
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
```

### Query Components
```javascript
import { useQuery } from '@apollo/client';

function UserProfile({ id }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id }
  });

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return <div>{data.user.name}</div>;
}
```

## Best Practices

### Schema Design
1. Use clear, descriptive type names
2. Implement proper pagination
3. Handle errors consistently
4. Design with scalability in mind

### Performance
1. Implement field-level resolvers
2. Use DataLoader for batching
3. Optimize nested queries
4. Cache appropriately

### Security
1. Implement proper authentication
2. Use input validation
3. Set query complexity limits
4. Handle sensitive data carefully

## Additional Resources

### Documentation
- [GraphQL Official Documentation](https://graphql.org/learn/)
- [Apollo Documentation](https://www.apollographql.com/docs/)
- [GraphQL Specification](https://spec.graphql.org/)

### Tools
- [GraphQL Playground](https://github.com/graphql/graphql-playground)
- [GraphiQL](https://github.com/graphql/graphiql)
- [Apollo Studio](https://studio.apollographql.com/)
