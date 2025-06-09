import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-100 w-[75px] h-[75px] text-3xl rounded-full bg-blue-600 text-white shadow-md transition-opacity duration-300 hover:bg-blue-700
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        block md:hidden`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
