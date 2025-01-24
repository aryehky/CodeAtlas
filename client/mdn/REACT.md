# React

## Introduction
React is a JavaScript library for building user interfaces, particularly single-page applications. It enables developers to create reusable UI components that manage their own state.

## Core Concepts

### Components

#### Functional Components
```jsx
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}

// Arrow Function Component
const Profile = ({ user }) => (
    <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
    </div>
);
```

#### Class Components
```jsx
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}
```

### Hooks

#### State Management
```jsx
function UserProfile() {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    const updateName = (name) => {
        setUser(prevUser => ({
            ...prevUser,
            name
        }));
    };

    return (
        <div>
            <input
                value={user.name}
                onChange={(e) => updateName(e.target.value)}
            />
        </div>
    );
}
```

#### Side Effects
```jsx
function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('api/data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    return <div>{/* Render data */}</div>;
}
```

### Props and State

#### Props Usage
```jsx
function Button({ label, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="custom-button"
        >
            {label}
        </button>
    );
}

// Usage
<Button
    label="Submit"
    onClick={() => handleSubmit()}
    disabled={false}
/>
```

#### Context API
```jsx
const ThemeContext = React.createContext('light');

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme } = useContext(ThemeContext);
    return <button className={theme}>Themed Button</button>;
}
```

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
