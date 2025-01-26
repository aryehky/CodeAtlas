# Cypress Testing Framework

## Introduction
Cypress is a modern, all-in-one testing framework for web applications. It addresses the key pain points developers face when testing modern applications.

## Key Concepts

### Test Structure
```javascript
describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
  })

  it('finds an element', () => {
    cy.get('.my-element').should('exist')
  })
})
```

### Commands and Assertions
- `cy.get()`: Select elements
- `cy.contains()`: Find element by text
- `cy.click()`: Click elements
- `cy.type()`: Enter text
- `should()`: Make assertions

### Best Practices
1. Use data-* attributes for testing
2. Don't rely on text content
3. Keep tests independent
4. Use custom commands for reusable actions

### Common Patterns
```javascript
// Custom Command
Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-cy=email]').type(email)
  cy.get('[data-cy=password]').type(password)
  cy.get('[data-cy=submit]').click()
})

// Using Custom Command
cy.login('user@example.com', 'password123')
```

## Testing Scenarios

### Testing Navigation
```javascript
cy.visit('/home')
cy.url().should('include', '/home')
cy.get('nav').contains('About').click()
cy.url().should('include', '/about')
```

### Testing Forms
```javascript
cy.get('form').within(() => {
  cy.get('input[name="email"]').type('test@example.com')
  cy.get('input[name="password"]').type('password123')
  cy.root().submit()
})
```

### Testing API Requests
```javascript
cy.intercept('GET', '/api/users').as('getUsers')
cy.visit('/users')
cy.wait('@getUsers')
cy.get('.user-list').should('be.visible')
```

## Advanced Features

### Fixtures and Mocking
```javascript
cy.fixture('users.json').then((users) => {
  cy.intercept('GET', '/api/users', users)
})
```

### Screenshots and Videos
```javascript
// Automatically capture screenshots on failure
cy.screenshot()
// Videos are recorded by default in CI
```

### Environment Variables
```javascript
// cypress.config.js
module.exports = {
  env: {
    apiUrl: 'http://localhost:3000',
    apiKey: 'your-api-key'
  }
}
```

## Debugging

### Interactive Mode
- Time Travel
- Command Log
- Real-time Reloading

### Common Commands
```bash
# Open Cypress Test Runner
npx cypress open

# Run tests headlessly
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/mytest.cy.js"
```

## CI/CD Integration

### GitHub Actions Example
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: cypress-io/github-action@v2
    with:
      browser: chrome
      headless: true
```

## Best Practices

### Selectors Priority
1. `data-cy` attributes
2. `data-test` attributes
3. Class or ID
4. Element type

### Performance
- Use `cy.route()` to stub network requests
- Avoid unnecessary waiting
- Use `beforeEach()` for setup
- Clean up after tests 