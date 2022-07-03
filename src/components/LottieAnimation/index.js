import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';

export default LottieAnimation = () => {
  const animationRef = useRef(null);
  
  useEffect(() => {
    animationRef.current.play();
  }, [])

  return (
    <Lottie
      ref={animationRef}
      source={require('./animation.json')}
    />
  );
}