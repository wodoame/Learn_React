// In JSX (JavaScript XML), which is commonly used in React for defining components and their structure, you can use props (short for properties) to pass data from a parent component to a child component.
// Props are a way of communicating and sharing data between React components. Here's a basic overview of how you can use props in JSX:

// 1. **Passing Props:**
//    In the parent component, when rendering the child component, you can pass data as props like this:

   // ParentComponent.jsx
   import React from 'react';
   import ChildComponent from './ChildComponent';

   const ParentComponent = () => {
     const dataValue = "Hello from Parent!";

     return (
       <ChildComponent data={dataValue} />
     );
   };

   export default ParentComponent;

// In this example, the `data` prop is assigned the value of `dataValue` in the parent component.

// 2. **Accessing Props:**
//    In the child component, you can access the passed props like this:

   // ChildComponent.jsx
   import React from 'react';

   const ChildComponent = (props) => {
     return (
       <div>
         <p>{props.data}</p>
       </div>
     );
   };

   export default ChildComponent;

// In the `ChildComponent`, the value of the `data` prop is accessed using `props.data` and rendered inside a paragraph (`<p>`) element.

// 3. **Destructuring Props:**
//    You can also destructure props directly in the function parameters for cleaner code:

   // ChildComponent.jsx
   import React from 'react';

   const ChildComponent = ({ data }) => {
     return (
       <div>
         <p>{data}</p>
       </div>
     );
   };
   export default ChildComponent;

   // Here, `({ data })` is using destructuring to extract the `data` prop directly.

// Remember that props are read-only, and a child component cannot modify the values received as props from its parent.
// If you need to modify the data, you typically use state in the parent component and pass down callback functions as props to update the state.
