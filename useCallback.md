The `useCallback` hook in React is used to memoize callback functions, which can help optimize performance by preventing unnecessary re-creations of functions on every render. Here's a brief overview:

### What is `useCallback`?

`useCallback` returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

### Basic Usage

Here's a simple example:

```jsx
import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const Todos = React.memo(({ todos, addTodo }) => {
  console.log("child render");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});

export default MyComponent;
```

### When to Use `useCallback`

- **Preventing Unnecessary Renders**: When you pass a function as a prop to a child component that uses `React.memo`, `useCallback` ensures the function reference remains the same unless dependencies change.
- **Performance Optimization**: In cases where functions are expensive to create, `useCallback` can help by memoizing the function.

### Key Points

- **Dependencies**: The second argument to `useCallback` is an array of dependencies. The memoized function will only change if one of these dependencies changes.
- **Referential Equality**: Helps in maintaining the same function reference between renders, which is crucial for performance optimizations.
