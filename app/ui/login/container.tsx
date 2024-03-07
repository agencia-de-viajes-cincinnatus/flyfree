'use client';
import LoginForm from './form';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
export default function Container() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []); // Se ejecuta solo una vez al montar el componente

  const animationProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(20px)',
    config: { duration: 500 },
  });
  return (
    <div
      className='container mx-auto p-8 bg-primary text-white h-screen'
      style={{
        backgroundImage: "url('/img-fondo-login.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <animated.div style={animationProps}>
        <LoginForm />
      </animated.div>
    </div>
  );
}
