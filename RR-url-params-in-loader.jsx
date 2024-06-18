// Certainly! Let's discuss how to access route parameters in the loader function using JavaScript (without TypeScript).

// 1. **Defining the Route with a Placeholder:**
//    - Define your route with a placeholder for the parameter. For example:
     
     const Paths = {
       todoDetail: '/todos/:idTodo',
     };
     

// 2. **Accessing Parameters in the Loader Function:**
//    - Create your loader function and access the parameter from the `params` object:
     
     const todoLoader = async ({ params }) => {
       const { idTodo } = params;
       return await fetchData(idTodo);
     };
     

// 3. **Using the Loader in Your Route:**
//    - Finally, use the `todoLoader` in your route definition:
     
     const router = createBrowserRouter([
       {
         path: Paths.todoDetail,
         element: TodoComponent,
         loader: todoLoader,
       },
     ]);
     

// Remember to adjust the `fetchData` function to handle the expected data type (since `params.idTodo` is a string or undefined).
