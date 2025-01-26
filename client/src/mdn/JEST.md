# Jest Testing Framework

## Introduction
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more.

## Key Concepts

### Test Structure
```javascript
describe('group of tests', () => {
  test('individual test', () => {
    expect(2 + 2).toBe(4);
  });
});
```

### Common Matchers
- `toBe()`: Exact equality
- `toEqual()`: Deep equality
- `toBeNull()`: Checks for null
- `toBeDefined()`: Checks if defined
- `toBeUndefined()`: Checks if undefined
- `toBeTruthy()`: Checks if truthy
- `toBeFalsy()`: Checks if falsy

### Async Testing
```javascript
test('async test', async () => {
  const data = await fetchData();
  expect(data).toBe('data');
});
```

### Mocking
```javascript
// Mock function
const mockFn = jest.fn();

// Mock module
jest.mock('./someModule');

// Mock implementation
mockFn.mockImplementation(() => 'mocked result');
```

## Best Practices

### Test File Organization
- Place tests next to implementation files
- Use `.test.js` or `.spec.js` suffix
- Group related tests in describe blocks

### Writing Good Tests
1. Arrange: Set up test data
2. Act: Perform the action
3. Assert: Check the results

### Test Coverage
```bash
# Run tests with coverage report
jest --coverage
```

## Common Testing Scenarios

### Testing React Components
```javascript
import { render, screen } from '@testing-library/react';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

### Testing API Calls
```javascript
test('fetches data', async () => {
  const mockData = { id: 1 };
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(mockData)
  });

  const data = await fetchData();
  expect(data).toEqual(mockData);
});
```

## Debugging Tests

### Jest CLI Options
- `jest --watch`: Watch mode
- `jest --verbose`: Detailed output
- `jest --runInBand`: Run tests serially

### Common Issues
1. Test isolation problems
2. Async timing issues
3. Mocking complexities

## Advanced Topics

### Snapshot Testing
```javascript
test('component snapshot', () => {
  const tree = renderer
    .create(<MyComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

### Custom Matchers
```javascript
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    return {
      pass,
      message: () => `expected ${received} to be within range ${floor} - ${ceiling}`
    };
  }
});
``` 