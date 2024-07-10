The `useRef` hook in React serves multiple purposes. Let me break it down for you:

1. **Persisting Values Between Renders:**
   - With `useRef`, you can store mutable values that don't trigger re-renders when updated. For example:
     ```jsx
     import { useState, useEffect, useRef } from "react";

     function App() {
       const [inputValue, setInputValue] = useState("");
       const count = useRef(0);

       useEffect(() => {
         count.current = count.current + 1;
       });

       return (
         <>
           <input
             type="text"
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
           />
           <h1>Render Count: {count.current}</h1>
         </>
       );
     }
     ```
   - In this example, `count` persists across renders without causing re-renders.

2. **Accessing DOM Elements:**
   - You can use `useRef` to directly access DOM elements. For instance:
     ```jsx
     function App() {
       const inputElement = useRef();

       const focusInput = () => {
         inputElement.current.focus();
       };

       return (
         <>
           <input type="text" ref={inputElement} />
           <button onClick={focusInput}>Focus Input</button>
         </>
       );
     }
     ```
   - Here, `inputElement.current` refers to the input element in the DOM.

3. **Tracking State Changes:**
   - `useRef` can also track previous state values:
     ```jsx
     function App() {
       const [inputValue, setInputValue] = useState("");
       const previousInputValue = useRef("");

       useEffect(() => {
         previousInputValue.current = inputValue;
       }, [inputValue]);

       return (
         <>
           <input
             type="text"
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
           />
           <h2>Current Value: {inputValue}</h2>
           <h2>Previous Value: {previousInputValue.current}</h2>
         </>
       );
     }
     ```
   - Here, `previousInputValue` keeps track of the previous input value.

Remember, `useRef` returns an object with a `current` property. It's like initializing `count` as `{ current: 0 }`.
