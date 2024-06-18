// The `useLoaderData` hook in React Router is a powerful tool for managing data fetching in your application.
// When a request is made to a specific route, the route will invoke the loader function to fetch the data before rendering the component.
// This approach improves performance and prevents empty states. You can use it like this:

import { useLoaderData } from 'react-router-dom';

function MyRouteComponent() {
  const data = useLoaderData();

  // Use the fetched data in your component
  // ...
}

// This hook simplifies data management and ensures stable data between renders, making it safe to include in dependency arrays for React hooks like `useEffect`.
