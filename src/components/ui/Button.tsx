interface ButtonProps {
  children: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({ children, onClick, href }: ButtonProps) => {
  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(children);

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer px-6 py-[10px] bg-gray9 rounded-[120px] flex justify-center items-center"
    >
      <span className={`text-gray1 h-5 ${isKorean ? 'caption1' : 'caption1-eng'}`}>{children}</span>
    </button>
  );
};
