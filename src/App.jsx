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
      <div className={contentClassNames}>
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog. 
      </div>
    </div>
  );
}

export default App
