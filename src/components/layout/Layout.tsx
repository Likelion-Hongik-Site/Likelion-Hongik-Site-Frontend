import { Navbar } from '@/components/layout/Navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="mt-[88px]">
        <Outlet />
      </main>
    </div>
  );
};
