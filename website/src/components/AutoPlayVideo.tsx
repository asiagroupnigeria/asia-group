'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function AutoPlayVideo() {
  const pathname = usePathname();
  
  useEffect(() => {
    const playVideos = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (video.hasAttribute('autoplay') || video.hasAttribute('autoPlay') || video.autoplay) {
          video.play().catch(() => {});
        }
      });
    };
    
    // Slight delay to ensure dangerouslySetInnerHTML has fully rendered the DOM
    const timeoutId = setTimeout(playVideos, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
