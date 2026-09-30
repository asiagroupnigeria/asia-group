'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export function AnimatedNumber({
  value,
  duration = 2
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration: duration,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
          }
        }
      });
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>0</span>;
}
