import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { GradientCursor } from '@/components/ui/gradientCursor';
import { useEffect } from 'react';

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black overflow-hidden">
      <GradientCursor />
      <div className="relative ph:[clip-path:inset(0_0_0_0)] dt:min-w-screen ph:min-w-[375px] ph:w-full ph:max-w-[440px] overflow-hidden flex flex-col dt:items-center ph:items-start bg-black">
        <Navbar />
        <main className="ph:min-h-[calc(100vh-72px)] ph:mt-[72px] dt:min-h-[calc(100vh-88px)] dt:mt-[88px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
