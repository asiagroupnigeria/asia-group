'use client';

import { useEffect } from 'react';

export function FadeUpObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1 });

    const observeAll = () => {
      document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
