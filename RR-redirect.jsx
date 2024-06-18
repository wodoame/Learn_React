// In React Router, you can use the `redirect` function to redirect to another route. Here's how you can do it:


import { redirect } from 'react-router-dom';

const loader = async () => {
  const user = await getUser(); // Replace with your data fetching logic
  if (!user) {
    return redirect('/login');
  }
  return null;
};


// The `redirect` function is a shortcut for creating a 302 status response with the specified URL. It's recommended to use `redirect` in loaders and actions when the redirect is in response to data.
