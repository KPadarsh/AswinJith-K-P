import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * A custom React hook to apply a magnetic attraction effect to an element.
 * Attracts the element toward the cursor when within a 90px range, 
 * and springs it back smoothly on mouse leave.
 */
export default function useMagnetic() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // If the mouse is close enough, pull the element towards it
      if (distance < 90) {
        gsap.to(el, {
          x: dx * 0.35,
          y: dy * 0.35,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        // Otherwise, return to original position with a spring bounce
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        });
      }
    };

    const handleMouseLeave = () => {
      // Snaps back immediately on mouse leave
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
