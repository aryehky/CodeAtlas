# React

## Introduction
React is a JavaScript library for building user interfaces, particularly single-page applications. It enables developers to create reusable UI components that manage their own state.

## Core Concepts

### Components

#### Functional Components
Functional components are JavaScript functions that return React elements. They're simpler, more readable, and with the introduction of Hooks, can handle state and side effects.

```javascript
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

**When to use:**
- For simpler UI components
- When you need hooks functionality
- When you want better code readability
- For better performance (smaller bundle size)
- When you don't need lifecycle methods (pre-hooks)

#### Class Components
Class components are ES6 classes that extend React.Component. They provide more features like lifecycle methods and local state management.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**When to use:**
- When working with legacy code
- When you need error boundaries (only available in class components)
- When you prefer object-oriented programming patterns
- When you need to use lifecycle methods directly

### Hooks

#### useState
useState allows functional components to manage state. It returns current state and a function to update it.

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

**When to use:**
- When you need to manage local component state
- For form input values
- For toggling UI states
- When state updates are simple

#### useEffect
useEffect handles side effects in functional components, like data fetching, subscriptions, or DOM manipulations.

```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, [userId]);

  return <div>{user?.name}</div>;
}
```

**When to use:**
- For data fetching
- For subscriptions/event listeners
- When you need to sync with external systems
- For DOM manipulations
- When you need cleanup operations

### Props and State

#### Props
Props are read-only properties passed to components. They allow components to be reusable and configurable.

```javascript
function Button({ text, onClick, color = 'blue' }) {
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}
```

**When to use:**
- To pass data from parent to child
- For component configuration
- When data doesn't need to change
- For event handler functions
- For component composition

#### State
State is mutable data that can change over time and triggers re-renders when updated.

```javascript
function Form() {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsValid(e.target.value.length > 0);
  };

  return <input value={inputValue} onChange={handleChange} />;
}
```

**When to use:**
- For data that changes over time
- For user input handling
- For toggling UI states
- For local component data
- For loading/error states

### Event Handling
React events are named using camelCase and passed as JSX attributes.

```javascript
function HandleEvents() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**When to use:**
- For user interactions
- Form submissions
- Input changes
- Mouse/keyboard events
- Custom event handling

### Conditional Rendering
Conditional rendering allows components to display different content based on conditions.

```javascript
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <UserGreeting />
      ) : (
        <GuestGreeting />
      )}
    </div>
  );
}
```

**When to use:**
- To show/hide elements
- For permission-based rendering
- For loading states
- For error handling
- For feature toggles

### Lists and Keys
Keys help React identify which items have changed, been added, or been removed.

```javascript
function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
```

**When to use:**
- When rendering arrays of elements
- For dynamic lists
- When elements can be added/removed
- For optimizing list updates
- For maintaining component state in lists

## Event Handling

### Synthetic Events
```jsx
function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    );
}
```

## Performance Optimization

### Memoization
```jsx
const MemoizedComponent = React.memo(function MyComponent(props) {
    return (
        <div>
            {/* Component content */}
        </div>
    );
});

function ParentComponent() {
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    const memoizedCallback = useCallback(() => {
        doSomething(a, b);
    }, [a, b]);

    return <MemoizedComponent value={memoizedValue} onClick={memoizedCallback} />;
}
```

## Best Practices

### Component Design
1. Keep components focused and single-responsibility
2. Use proper component composition
3. Implement proper prop validation
4. Maintain consistent naming conventions

### State Management
1. Lift state up when needed
2. Use context for global state
3. Implement proper state initialization
4. Handle side effects appropriately

### Performance
1. Use proper memoization techniques
2. Implement lazy loading
3. Optimize re-renders
4. Handle cleanup in useEffect

## Additional Resources

### Documentation
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Hooks Reference](https://reactjs.org/docs/hooks-reference.html)
- [Create React App](https://create-react-app.dev/)

### Tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [ESLint React Plugin](https://www.npmjs.com/package/eslint-plugin-react)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
