import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { GradientCursor } from '@/components/ui/gradientCursor';

export const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black overflow-hidden">
      <div className="dt:min-w-screen ph:min-w-[375px] ph:w-full ph:max-w-[440px] flex flex-col dt:items-center ph:items-start bg-black">
        <GradientCursor />
        <Navbar />
        <main className="ph:mt-[72px] dt:mt-[88px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
