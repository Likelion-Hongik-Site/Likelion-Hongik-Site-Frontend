import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import dm1 from '@/assets/webps/pages/archive/project/dm_1.webp';
import dm2 from '@/assets/webps/pages/archive/project/dm_2.webp';
import dm3 from '@/assets/webps/pages/archive/project/dm_3.webp';
import dm4 from '@/assets/webps/pages/archive/project/dm_4.webp';

import id1 from '@/assets/webps/pages/archive/project/id_1.webp';
import id2 from '@/assets/webps/pages/archive/project/id_2.webp';
import id3 from '@/assets/webps/pages/archive/project/id_3.webp';
import id4 from '@/assets/webps/pages/archive/project/id_4.webp';
import id5 from '@/assets/webps/pages/archive/project/id_5.webp';

import ht1 from '@/assets/webps/pages/archive/project/ht_1.webp';
import ht2 from '@/assets/webps/pages/archive/project/ht_2.webp';
import ht3 from '@/assets/webps/pages/archive/project/ht_3.webp';
import ht4 from '@/assets/webps/pages/archive/project/ht_4.webp';
import ht5 from '@/assets/webps/pages/archive/project/ht_5.webp';

import fest1 from '@/assets/webps/pages/archive/project/fest_1.webp';
import fest2 from '@/assets/webps/pages/archive/project/fest_2.webp';


const demoday = [
  { image: dm1, name: '아이스브레이킹 서비스' },
  { image: dm2, name: '팁 공유 서비스' },
  { image: dm3, name: '포트폴리오 공유 플랫폼' },
  { image: dm4, name: '여행 경비 정산 서비스' },
];
const ideathon = [
  { image: id1, name: '의지 업체 연결 서비스' },
  { image: id2, name: '식단 관리 서비스' },
  { image: id3, name: '아이돌 캐릭터 키우기 서비스' },
  { image: id4, name: '건강 정보 제공 서비스' },
  { image: id5, name: '생활 루틴 개선 서비스' },
];
const hackathon = [
  { image: ht1, name: '약 관리 서비스' },
  { image: ht2, name: '직장인 다이어리 서비스' },
  { image: ht3, name: '건강한 야작 플랫폼' },
  { image: ht4, name: '반려동물 펫로스 케어 서비스' },
  { image: ht5, name: '독서 활동 기록 서비스' },
];
const festival = [
  { image: fest1, name: '대동제 프로젝트' },
  { image: fest2, name: '와우 디제이 페스티벌' },
];

export const Projectph = () => {
  const [activeTab, setActiveTab] = useState('ideathon');

  const renderImages = (images: { image: string; name: string }[]) => {
    return (
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Swiper
          slidesPerView={3}
          spaceBetween={8}
          centeredSlides={true}
          initialSlide={0}
          loop={true}
          className="w-[840px] h-[195px]"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="w-[272px] h-[195px] bg-gray9 rounded-[24px] ph:px-[12px] ph:py-[14px]">
                <div className="w-auto text-white ph:subhead4 ph:ml-[16px] ph:mb-[8px]">
                  {item.name}
                </div>
                <img
                  src={item.image}
                  alt={`project-${index}`}
                  className="w-[248px] h-[139.5px] object-cover mx-auto rounded-[20px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  const renderImages1 = (images: { image: string; name: string }[]) => {
    return (
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Swiper
          slidesPerView={3}
          spaceBetween={8}
          centeredSlides={true}
          initialSlide={0}
          className="w-[840px] h-[195px]"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="w-[272px] h-[195px] bg-gray9 rounded-[24px] ph:px-[12px] ph:py-[14px]">
                <div className="w-auto text-white ph:subhead4 ph:ml-[16px] ph:mb-[8px]">
                  {item.name}
                </div>
                <img
                  src={item.image}
                  alt={`project-${index}`}
                  className="w-[248px] h-[139.5px] object-cover mx-auto rounded-[20px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  const getButtonClass = (tab: string) => {
    return activeTab === tab
      ? 'text-black bg-blue'
      : 'text-blue bg-black  hover:bg-blue30 hover:text-blue transition shadow-[inset_0_0_0_1px_#6a5fff]';
  };

  const baseButtonClass =
    'flex items-center h-[44px] justify-center ph:subhead2 ph:px-[18px] ph:py-[10px] ph:rounded-[66.667px] text-center cursor-pointer transition duration-200 ease-in-out';

  return (
    <div>
      <div className="ph:max-w-[418px]  mt-[14px] flex items-center overflow-x-auto scrollbar-hide">
        <div className="w-[360px] ml-[28px]">
        <div className=" w-[450px] flex gap-[12px] whitespace-nowrap cursor-grab">
          <button
            onClick={() => setActiveTab('ideathon')}
            className={`${baseButtonClass} ${getButtonClass('ideathon')}`}
          >
            아이디어톤
          </button>
          <button
            onClick={() => setActiveTab('hackathon')}
            className={`${baseButtonClass} ${getButtonClass('hackathon')}`}
          >
            해커톤
          </button>
          <button
            onClick={() => setActiveTab('festival')}
            className={`${baseButtonClass} ${getButtonClass('festival')}`}
          >
            대동제
          </button>
          <button
            onClick={() => setActiveTab('demoday')}
            className={`${baseButtonClass} ${getButtonClass('demoday')}`}
          >
            데모데이
          </button> 
        </div>
        </div>
      </div>

      <div className="mt-[37px] h-[195px] mb-[12px]">
        {activeTab === 'ideathon' && renderImages(ideathon)}
        {activeTab === 'hackathon' && renderImages(hackathon)}
        {activeTab === 'festival' && renderImages1(festival)}
        {activeTab === 'demoday' && renderImages(demoday)}
      </div>
    </div>
  );
};
