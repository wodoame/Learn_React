// In React, the `useState` hook is a function that allows functional components to manage state.
// It is part of the Hooks API introduced in React 16.8. The `useState` hook returns an array with two elements: the current state value and a function that lets you update it.

// Here's a simple example of how to use `useState` in a functional component:

import React, { useState } from 'react';

const MyComponent = () => {
  // useState returns an array with two elements: the current state and a function to update it
  const [count, setCount] = useState(0);

  // Event handler to update the state
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;


// In this example:

// 1. `useState(0)` initializes the state variable `count` with an initial value of 0.
// 2. The `setCount` function is used to update the value of `count`. It takes a new value and triggers a re-render with the updated state.
// 3. The `handleClick` function is an event handler attached to a button. When the button is clicked, it calls `setCount` to increment the count.

// It's important to note that the argument passed to `useState` is the initial state.
// The hook returns an array with the current state and a function to update it. When the state is updated, React re-renders the component, and the new state value is reflected in the UI.
