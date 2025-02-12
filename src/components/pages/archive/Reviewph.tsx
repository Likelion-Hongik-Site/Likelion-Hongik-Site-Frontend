import React, { useState } from 'react';
import rv1 from '@/assets/webps/pages/archive/review/1.webp';  
import rv2 from '@/assets/webps/pages/archive/review/2.webp';
import rv3 from '@/assets/webps/pages/archive/review/3.webp';
import rv4 from '@/assets/webps/pages/archive/review/4.webp';
import rv5 from '@/assets/webps/pages/archive/review/5.webp';
import rv8 from '@/assets/webps/pages/archive/review/8.webp';
import rv9 from '@/assets/webps/pages/archive/review/9.webp';
import rv10 from '@/assets/webps/pages/archive/review/10.webp';
import rv11 from '@/assets/webps/pages/archive/review/11.webp';
import rv12 from '@/assets/webps/pages/archive/review/12.webp';
import rv13 from '@/assets/webps/pages/archive/review/13.webp';
import rv14 from '@/assets/webps/pages/archive/review/14.webp';
import rv15 from '@/assets/webps/pages/archive/review/15.webp';
import rv16 from '@/assets/webps/pages/archive/review/16.webp';
import rv17 from '@/assets/webps/pages/archive/review/17.webp';
import rv18 from '@/assets/webps/pages/archive/review/18.webp';
import rv19 from '@/assets/webps/pages/archive/review/19.webp';
import rv20 from '@/assets/webps/pages/archive/review/20.webp';
import rv21 from '@/assets/webps/pages/archive/review/21.webp';
import rv22 from '@/assets/webps/pages/archive/review/22.webp';
import rv23 from '@/assets/webps/pages/archive/review/23.webp';
import rv24 from '@/assets/webps/pages/archive/review/24.webp';
import rv25 from '@/assets/webps/pages/archive/review/25.webp';
import rv26 from '@/assets/webps/pages/archive/review/26.webp';
import rv27 from '@/assets/webps/pages/archive/review/27.webp';
import rv28 from '@/assets/webps/pages/archive/review/28.webp';
import rv29 from '@/assets/webps/pages/archive/review/29.webp';
import rv30 from '@/assets/webps/pages/archive/review/30.webp';
import rv31 from '@/assets/webps/pages/archive/review/31.webp';
import rv32 from '@/assets/webps/pages/archive/review/32.webp';
import rv33 from '@/assets/webps/pages/archive/review/33.webp';
import rv34 from '@/assets/webps/pages/archive/review/34.webp';
import rv35 from '@/assets/webps/pages/archive/review/35.webp';
import rv36 from '@/assets/webps/pages/archive/review/36.webp';

import ScrollContainer from 'react-indiana-drag-scroll';

export const Reviewph = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageHeight, setImageHeight] = useState(0);

  const openModal = (image: string, height: number) => {
    setSelectedImage(image);
    setImageHeight(height * 1.65);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="">
      <div className="text-white ph:subhead2 dt:subhead1 ml-[28px]">활동사진</div>
      <ScrollContainer className="w-[440px] h-[270px] flex relative items-center">
        <div className="flex-none" onClick={() => openModal(rv1, 144)}>
          <img src={rv1} alt="review-1" className="h-[144px] object-cover ml-[28px] mr-[8px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv2, 144)}>
          <img src={rv2} alt="review-2" className="h-[144px] mr-[8px] object-cover rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv3, 144)}>
          <img src={rv3} alt="review-3" className="h-[144px] mr-[8px] object-cover rounded-[20px]" />
        </div>
          <div className="flex-none" onClick={() => openModal(rv4, 226)}>
            <img
              src={rv4}
              alt="review-4"
              className="h-[226px] object-cover transform rotate-[-4deg] ml-[8px] relative z-0 rounded-[16px]"
              style={{ boxShadow: '0px 0px 12px 2px #000' }}
            />
          </div>
          <div className="flex-none" onClick={() => openModal(rv5, 202)}>
            <img
              src={rv5}
              alt="review-5"
              className="h-[202px] object-cover transform rotate-[5deg] relative z-10 rounded-[16px]"
              style={{ marginRight: '10px', boxShadow: '0px 0px 12px 2px #000' }}
            />
          </div>
        <div className="flex-none" onClick={() => openModal(rv8, 135)}>
          <img src={rv8} alt="review-8" className="h-[144px] object-cover ml-[-10px] z-0 mr-[8px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv9, 144)}>
          <img src={rv9} alt="review-9" className="h-[144px] object-cover mr-[8px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv10, 144)}>
          <img src={rv10} alt="review-10" className="h-[144px] object-cover mr-[8px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv11, 224)}>
          <img src={rv11} alt="review-11" className="h-[224px] w-[154px] transform rotate-[5deg] relative z-0 rounded-[20px]"
            style={{ marginLeft: '-15px', boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv12, 144)}>
          <img src={rv12} alt="review-12" className="h-[144px] object-cover ml-[-16px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv13, 144)}>
          <img src={rv13} alt="review-13" className="h-[144px] object-cover ml-[-8px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv14, 196)}>
          <img src={rv14} alt="review-14" className="h-[196px] w-[132px] transform rotate-[-4deg] relative z-0 rounded-[20px]"
            style={{ marginLeft: '-8px', boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv15, 144)}>
          <img src={rv15} alt="review-15" className="h-[144px] w-[192px] ml-[-16px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv16, 144)}>
          <img src={rv16} alt="review-16" className="h-[144px] w-[192px] ml-[-8px] rounded-[20px]" />
        </div>
        <div className="flex-none" onClick={() => openModal(rv17, 180)}  >
          <img src={rv17} alt="review-17" className="h-[180px] w-[172px] transform rotate-[5deg] relative z-10 rounded-[20px]"
            style={{ marginLeft: '-16px', marginRight: '16px' , boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv18, 144)}>
          <img src={rv18} alt="review-18" className="h-[144px] w-[192px] rounded-[20px]"
          style={{ marginLeft: '-24px', marginRight: '24px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv19, 144)}>
          <img src={rv19} alt="review-19" className="h-[144px] object-cover rounded-[20px]"
          style={{ marginLeft: '-16px', marginRight: '16px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv20, 206)}>
          <img src={rv20} alt="review-20" className="h-[206px] w-[154px] transform rotate-[-4deg] relative z-0 rounded-[20px]"
            style={{ marginLeft: '-24px',  marginRight: '24px', boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv21, 144)}>
          <img src={rv21} alt="review-21" className="h-[144px] w-[192px] object-cover ml-[-16px] rounded-[20px]" 
          style={{ marginLeft: '-24px', marginRight: '24px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv22, 144)}>
          <img src={rv22} alt="review-22" className="h-[144px] w-[192px] rounded-[20px]" 
          style={{ marginLeft: '-16px', marginRight: '16px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv23, 178)}>
          <img src={rv23} alt="review-23" className="h-[178px] w-[132px] transform rotate-[-5deg] relative z-10 rounded-[20px]"
            style={{ marginLeft: '-24px', marginRight: '24px', boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv24, 204)}>
          <img src={rv24} alt="review-24" className="h-[204px] w-[146px] transform rotate-[5deg] relative z-0 rounded-[20px]"
            style={{ marginLeft: '-24px' , marginRight: '24px', boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv25, 144)}>
          <img src={rv25} alt="review-25" className="h-[144px] w-[206px] rounded-[20px]"
          style={{ marginLeft: '-24px', marginRight: '24px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv26, 120)}>
          <img src={rv26} alt="review-26" className="h-[144px] w-[304px] rounded-[20px]"
          style={{ marginLeft: '-16px', marginRight: '16px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv27, 220)}>
          <img src={rv27} alt="review-27" className="h-[192px] w-[124px] transform rotate-[-4deg] relative z-10 rounded-[20px]"
            style={{ marginLeft: '-16px', marginRight: '16px', boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv28, 144)}>
          <img src={rv28} alt="review-28" className="h-[144px] w-[192px] rounded-[20px]"
          style={{ marginLeft: '-16px', marginRight: '16px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv29, 144)}>
          <img src={rv29} alt="review-29" className="h-[144px] w-[186px] rounded-[20px]"
          style={{ marginLeft: '-8px', marginRight: '8px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv30, 180)}>
          <img src={rv30} alt="review-30" className="h-[104px] w-[114px] transform rotate-[8.672deg] relative z-10 rounded-[20px]"
            style={{ marginLeft: '-24px', marginRight: '24px', marginBottom: '100px', boxShadow: '0px 0px 12px 2px #000' }} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv31, 144)}>
          <img src={rv31} alt="review-31" className="h-[144px] w-[260px] rounded-[20px]"
          style={{ marginLeft: '-40px', marginRight: '40px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv32, 132)}>
          <img src={rv32} alt="review-32" className="h-[144px] w-[284px] rounded-[20px]"
          style={{ marginLeft: '-32px', marginRight: '32px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv33, 132)}>
          <img src={rv33} alt="review-33" className="h-[144px] w-[282px] rounded-[20px]"
          style={{ marginLeft: '-24px', marginRight: '24px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv34, 144)}>
          <img src={rv34} alt="review-34" className="h-[144px] w-[256px] rounded-[20px]"
          style={{ marginLeft: '-16px', marginRight: '16px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv35, 144)}>
          <img src={rv35} alt="review-35" className="h-[144px] w-[142px] rounded-[20px]"
          style={{ marginLeft: '-8px', marginRight: '8px'}} />
        </div>
        <div className="flex-none" onClick={() => openModal(rv36, 144)}>
          <img src={rv36} alt="review-36" className="h-[144px] w-[200px] rounded-[20px]"
          style={{ marginLeft: '', marginRight: ''}} />
        </div>
      </ScrollContainer>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-gray6 ph:subhead2 ph:body2 text-center">사진을 눌러보세요!</div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-150"
          onClick={closeModal}
        >
          <div 
            className="flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="modal" 
              className="object-cover rounded-[20px]" 
              style={{ height: `${imageHeight}px` }} 
            />
          </div>
        </div>
      )}
    </div>  
  );
};