import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const nav = useNavigate();
  return (
    <nav className="w-full h-[88px] fixed flex flex-col items-center justify-center">
      <li onClick={() => nav('/archive')}>지난 활동</li>
    </nav>
  );
};
