import { useLocation } from 'react-router-dom';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({ children, onClick, href }: ButtonProps) => {
  const location = useLocation();
  const isActive = href === location.pathname;
  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(children);

  const handleClick = () => {
    if (href === 'https://www.instagram.com/likelion_hongik/') {
      window.open(href, '_blank');
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer px-6 py-[10px] bg-gray9 hover:bg-gray8 transition duration-200 ease-in-out rounded-[120px] flex justify-center items-center 
        ${isActive ? 'ring-1 ring-gray2 ring-inset transition duration-200 ease-in-out' : ''}`}
    >
      <span className={`text-gray1 h-5 ${isKorean ? 'caption1' : 'caption1-eng'}`}>{children}</span>
    </button>
  );
};
