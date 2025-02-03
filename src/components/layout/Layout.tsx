import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { GradientCursor } from '@/components/ui/gradientCursor';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <GradientCursor />
      <Navbar />
      <main className="mt-[88px]">
        <Outlet />
      </main>
    </div>
  );
};
