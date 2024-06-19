The `useNavigation` hook in React Navigation provides access to the navigation object. It's particularly useful when you cannot directly pass the navigation prop into a component or when dealing with deeply nested child components. Here's how you can use it:

```javascript
import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

// Example usage with a class component
class MyBackButton extends React.Component {
  render() {
    // Get it from props
    const { navigation } = this.props;
    // ...
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigation();
  return <MyBackButton {...props} navigation={navigation} />;
}
```

```javascript
// You can use it to add a class when the page is loading or is in another state.
// This snippet is from the React Router official documentation
// Explanation:
// useNavigation returns the current navigation state: it can be one of "idle" | "submitting" | "loading".
// In our case, we add a "loading" class to the main part of the app if we're not idle.
// The CSS then adds a nice fade after a short delay (to avoid flickering the UI for fast loads).
// You could do anything you want though, like show a spinner or loading bar across the top.

  import {
  // existing code
  useNavigation,
} from "react-router-dom";

// existing code

export default function Root() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">{/* existing code */}</div>
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}
```

Feel free to explore more examples and documentation for the navigation prop.
