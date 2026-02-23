import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore - for older browsers
        navigator.msMaxTouchPoints > 0
      );
    };

    setIsTouchDevice(checkTouchDevice());

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 12);
      mouseY.set(event.clientY - 12);
    };

    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY, isTouchDevice]);

  // Don't render cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-trace pointer-events-none z-[9999] backdrop-invert backdrop-opacity-10"
      style={{ x: springX, y: springY }}
    />
  );
}

export default CustomCursor;

