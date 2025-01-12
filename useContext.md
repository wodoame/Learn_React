The `useContext` hook in React is a powerful tool for managing state and passing data through the component tree without having to pass props down manually at every level. Here’s a quick overview:

### What is `useContext`?

`useContext` allows you to access the value of a context directly in a functional component. Context provides a way to share values like themes, user information, or any other data that needs to be accessible by many components at different nesting levels.

### How to Use `useContext`

1. **Create a Context**:
   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   // Create a context with a default value
   const MyContext = createContext('default value');
   ```

2. **Provide the Context**:
   - Wrap your component tree with the `Provider` component of the context.
   ```jsx
   function App() {
     const [value, setValue] = useState('Hello, World!');

     return (
       <MyContext.Provider value={value}>
         <ChildComponent />
       </MyContext.Provider>
     );
   }
   ```

3. **Consume the Context**:
   - Use the `useContext` hook to access the context value in any component.
   ```jsx
   function ChildComponent() {
     const contextValue = useContext(MyContext);

     return <div>{contextValue}</div>;
   }
   ```

### Example

Here’s a complete example to illustrate how `useContext` works:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

function App() {
  const [value, setValue] = useState('Hello, World!');

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
      <button onClick={() => setValue('New Value')}>Change Value</button>
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}

export default App;
```

In this example:
- `MyContext` is created with `createContext`.
- The `App` component provides the context value to its children using `MyContext.Provider`.
- `ChildComponent` consumes the context value using `useContext`.

### Benefits of `useContext`
- **Simplifies Prop Drilling**: Avoids the need to pass props through multiple levels of components.
- **Centralized State Management**: Makes it easier to manage and update state that needs to be shared across different parts of the application.

### Neat trick I learned (Make an abstraction for useContext)
```javascript
  import { createContext, useContext, useState} from "react";
// an abstraction for using context

// create your context
const ThemeContext = createContext();

// provide custom hooks for accessing the context 
export const useTheme = ()=>{
    return useContext(ThemeContext); 
};

// return a context provider abstraction
const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    if(!theme){
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }

    return(
        <>
          <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
          </ThemeContext.Provider>
        </>
    ); 
}; 
export default ThemeProvider;
```

### In your child components you can do this: 
```javascript
  const [theme, setTheme] = useTheme(); 
```
