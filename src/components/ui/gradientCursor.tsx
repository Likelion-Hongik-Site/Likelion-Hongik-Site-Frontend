import { useState, useEffect } from 'react';

export const GradientCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(window.innerWidth > 440); // 440px 초과 시 true

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (isVisible) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth > 440);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  if (!isVisible) return null; // 440px 이하에서는 커서를 렌더링하지 않음

  return (
    <>
      {/* 전체 페이지에서 기본 커서 숨기기 */}
      <style>{`body { cursor: none; }`}</style>

      <div
        className="fixed top-0 left-0 w-[120px] h-[120px] pointer-events-none"
        style={{
          transform: `translate(${position.x - 60}px, ${position.y - 60}px)`,
          background:
            'radial-gradient(circle, rgba(106, 95, 255, 1) 0%, rgba(106, 95, 255, 0) 80%)',
          filter: 'blur(12px)',
          borderRadius: '50%',
          zIndex: 9999,
        }}
      />
    </>
  );
};
