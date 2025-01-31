import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import likelionLogo from '@/assets/webps/layout/likelionLogo.webp';

export const Navbar = () => {
  const nav = useNavigate();
  return (
    <nav className="w-full bg-black h-[88px] fixed flex items-center justify-between">
      <div className="ml-10 flex items-center">
        <img src={likelionLogo} alt="logo" className="cursor-pointer w-40 h-5 mr-4" onClick={() => nav('/')} />
        <div className="flex gap-[14px]">
          <Button href="https://www.instagram.com/likelion_hongik/">Instagram</Button>
          <Button href="/contact" onClick={() => nav('/contact')}>Contact</Button>
        </div>
      </div>
      <div className="mr-10 flex items-center">
        <div className="flex gap-[14px]">
          <Button href="/archive" onClick={() => nav('/archive')}>지난 활동</Button>
          <Button href="/recruit" onClick={() => nav('/recruit')}>지원하기</Button>
        </div>
      </div>
    </nav>
  );
};
