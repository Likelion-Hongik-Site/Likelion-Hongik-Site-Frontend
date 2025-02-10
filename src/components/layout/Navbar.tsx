import { useEffect, useRef, useState } from 'react';
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
  const [isAnimating, setIsAnimating] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleSidebarOpen = () => {
    setIsAnimating(true);
    setIsOpen(true);
  };

  const handleSidebarClose = () => {
    setIsAnimating(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // sidebar 닫히는 시간
  };

  // 너비 1220px 이상에서 사이드바 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1220 && isOpen) {
        setIsAnimating(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // 사이드바 & 헤더 바깥 클릭 시 사이드바 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        handleSidebarClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // 사이드바가 열렸을 때 바깥 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
      {/* header */}
      <nav
        ref={headerRef}
        className="dt:hidden ph:fixed ph:flex w-full max-w-[440px] h-[72px] bg-black/70 items-center z-[99]"
      >
        <img
          src={hamberger}
          alt="menu"
          onClick={handleSidebarOpen}
          className="w-6 h-6 ml-6 cursor-pointer z-100"
        />
      </nav>

      {/* menu bar */}
      <div
        className={`relative inset-0 transition-opacity duration-300 ${
          isOpen || isAnimating ? 'opacity-100 visible' : 'opacity-100 invisible'
        }`}
      >
        <div
          ref={sidebarRef}
          className={`fixed top-0 w-[260px] h-screen bg-black/80 backdrop-blur-[20px] 
            transform transition-transform duration-300 ease-in-out z-100
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <button className="absolute top-6 left-6 cursor-pointer" onClick={handleSidebarClose}>
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
                handleSidebarClose();
              }}
            >
              멋쟁이사자처럼 홍익대학교
            </li>
            <li
              className="w-full flex justify-center cursor-pointer"
              onClick={() => {
                nav('/archive');
                handleSidebarClose();
              }}
            >
              지난 활동
            </li>
            <li
              className="w-full flex justify-center cursor-pointer"
              onClick={() => {
                nav('/recruit');
                handleSidebarClose();
              }}
            >
              지원하기
            </li>
            <li
              className="w-full flex justify-center cursor-pointer"
              onClick={() => {
                nav('/contact');
                handleSidebarClose();
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
    </>
  );
};
