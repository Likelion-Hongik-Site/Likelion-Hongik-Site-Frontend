import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import logo from '@/assets/webps/layout/logo.webp';
import likelion from '@/assets/webps/layout/likelion.webp';
import hamberger from '@/assets/webps/layout/hamberger.webp';
import x from '@/assets/webps/layout/x.webp';
import insta from '@/assets/webps/layout/insta.webp';

export const Navbar = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* dt */}
      <nav className="ph:hidden dt:flex w-full bg-black h-[88px] fixed items-center justify-between z-999">
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

      {/* ph */}
      <nav className="dt:hidden ph:fixed ph:flex w-full h-[72px] bg-black/70 items-center z-[99]">
        <img
          src={hamberger}
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-6 ml-6 cursor-pointer z-100"
        />
      </nav>

      {/* menu bar */}
      {isOpen && (
        <div className="relative inset-0">
          <div
            className="absolute top-0 w-[260px] h-screen bg-black/80 backdrop-blur-md transform
            transition-transform duration-300 ease-in-out z-100"
          >
            <button
              className="absolute top-6 left-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <img src={x} alt="close btn" className="w-6 h-6" />
            </button>

            <div className="mt-[74px] flex flex-col items-center">
              <img src={logo} alt="logo" className="w-10 h-10" />
            </div>
            <ul className="text-gray0 ph:body1 mt-[52px] w-full flex flex-col items-center gap-6">
              <li
                className="w-full flex justify-center cursor-pointer"
                onClick={() => {
                  nav('/');
                  setIsOpen(false);
                }}
              >
                멋쟁이사자처럼 홍익대학교
              </li>
              <li
                className="w-full flex justify-center cursor-pointer"
                onClick={() => {
                  nav('/archive');
                  setIsOpen(false);
                }}
              >
                지난 활동
              </li>
              <li
                className="w-full flex justify-center cursor-pointer"
                onClick={() => {
                  nav('/recruit');
                  setIsOpen(false);
                }}
              >
                지원하기
              </li>
              <li
                className="w-full flex justify-center cursor-pointer"
                onClick={() => {
                  nav('/contact');
                  setIsOpen(false);
                }}
              >
                문의하기
              </li>
            </ul>
            <a
              href="https://www.instagram.com/likelion_hongik/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-full justify-center cursor-pointer bottom-[42px] flex gap-[6px] h-[22px]"
            >
              <img src={insta} alt="insta logo" className="w-5 h-[19px]" />
              <span className="ph:subhead1-eng text-gray0">Instagram</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
