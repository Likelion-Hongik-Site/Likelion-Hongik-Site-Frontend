import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import logo from '@/assets/webps/layout/logo.webp';
import likelion from '@/assets/webps/layout/likelion.webp';

export const Navbar = () => {
  const nav = useNavigate();
  return (
    <nav className="w-full bg-black h-[88px] fixed flex items-center justify-between z-999">
      <div className="ml-11 flex items-center">
        <div className="flex items-center mr-4 cursor-pointer" onClick={() => nav('/')}>
          <img src={logo} alt="logo" className="w-[25px] h-[25px] mr-[10px]" />
          <img src={likelion} alt="likelion logo" className="w-[120px] h-[19px]" />
        </div>
        <div className="flex gap-[14px]">
          <Button href="https://www.instagram.com/likelion_hongik/">Instagram</Button>
          <Button href="/contact" onClick={() => nav('/contact')}>
            Contact
          </Button>
        </div>
      </div>
      <div className="mr-10 flex items-center">
        <div className="flex gap-[14px]">
          <Button href="/archive" onClick={() => nav('/archive')}>
            지난 활동
          </Button>
          <Button href="/recruit" onClick={() => nav('/recruit')}>
            지원하기
          </Button>
        </div>
      </div>
    </nav>
  );
};
