import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { GradientCursor } from '@/components/ui/gradientCursor';

export const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black">
      <div className="dt:min-w-screen flex flex-col dt:items-center ph:max-w-[440px] ph:items-start bg-black ph:px-2">
        <GradientCursor />
        <Navbar />
        <main className="ph:mt-5 dt:mt-[88px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
