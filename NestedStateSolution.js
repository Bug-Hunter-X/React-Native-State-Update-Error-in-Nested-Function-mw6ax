The solution involves using a closure or refactoring the code. Using a closure is often the best approach, this way it will not require re-rendering the component which can cause a lot of unnecessary renders and lag:

```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const nestedFunction = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); // Correct way to update in nested function
    }, 1000);
  };

  return (
    <view>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Increment in Nested" onPress={nestedFunction} />
    </view>
  );
};

export default MyComponent;
```