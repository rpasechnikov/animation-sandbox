import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(null);

  const animate = () => {
    setIsVisible(isVisible => !isVisible);
  };

  const contentClassNames = classNames(
    'content',
    { 
      'visible': isVisible,
      'hidden': !isVisible
    }
  );

  return (
    <div className='App'>
      <button onClick={animate}>Animate</button>
      <div className={contentClassNames}>Content</div>
    </div>
  );
}

export default App
