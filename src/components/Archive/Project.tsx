import { useState } from 'react';

import leftArrow from '@/assets/webps/project/left.svg';
import rightArrow from '@/assets/webps/project/right.svg';

import dm1 from '@/assets/webps/project/dm_1.webp';
import dm2 from '@/assets/webps/project/dm_2.webp';
import dm3 from '@/assets/webps/project/dm_3.webp';
import dm4 from '@/assets/webps/project/dm_4.webp';

import id1 from '@/assets/webps/project/id_1.webp';
import id2 from '@/assets/webps/project/id_2.webp';
import id3 from '@/assets/webps/project/id_3.webp';
import id4 from '@/assets/webps/project/id_4.webp';
import id5 from '@/assets/webps/project/id_5.webp';

import ht1 from '@/assets/webps/project/ht_1.webp';
import ht2 from '@/assets/webps/project/ht_2.webp';
import ht3 from '@/assets/webps/project/ht_3.webp';
import ht4 from '@/assets/webps/project/ht_4.webp';

import fest1 from '@/assets/webps/project/fest_1.webp';
import fest2 from '@/assets/webps/project/fest_2.webp';

const demoday = [
  { image: dm1, name: "아이스브레이킹 서비스" },
  { image: dm2, name: "팁 공유 서비스" },
  { image: dm3, name: "포트폴리오 공유 플랫폼" },
  { image: dm4, name: "여행 경비 정산 서비스" }
];
const ideathon = [  
  { image: id1, name: "식단 관리 서비스" },
  { image: id2, name: "의지 업체 연결 서비스" },
  { image: id3, name: "아이돌 캐릭터 키우기 서비스" },
  { image: id4, name: "건강 정보 제공 서비스" },
  { image: id5, name: "생활 루틴 개선 서비스" }
];
const hackathon = [
  { image: ht1, name: "약 관리 서비스" },
  { image: ht2, name: "직장인 다이어리 서비스" },
  { image: ht3, name: "건강한 야작 플랫폼" },
  { image: ht4, name: "반려동물 펫로스 케어 서비스" }
];
const festival = [
  { image: fest1, name: "대동제 프로젝트" },
  { image: fest2, name: "대동제 프로젝트" },
];

export const Project = () => {
  const [activeTab, setActiveTab] = useState('ideathon');
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderImages = (images: { image: string, name: string }[]) => {
    const totalImages = images.length;

    const getIndex = (offset: number) => {
      return (currentIndex + offset + totalImages) % totalImages;
    };

    return (
      <div className="w-full max-w-[1614px] h-[397px] mx-auto flex justify-center dt:mb-[144px] overflow-hidden">
        <div className="w-[1440px] flex justify-center items-center mx-auto relative">
          <button
            className="absolute left-0 z-10 w-[300px] h-[511px]"
            onClick={() => setCurrentIndex(getIndex(-1))}
            style={{
              background: 'linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.73) 47%, rgba(0, 0, 0, 0.44) 78%, rgba(0, 0, 0, 0.00) 100%)'
            }}
          >
            <img className="w-[60px]" src={leftArrow} alt="left" />
          </button>
          
          <div className="flex justify-center items-center">
            {[0, 1, 2].map((offset, index, array) => (
              <div
                key={offset}
                className={`${
                  offset === 1 ? 'w-[540px] h-[369px]' : 'w-[486px] h-[332px]'
                } bg-gray9 ${index !== array.length - 1 ? 'mr-[51px]' : ''} rounded-[50px] px-[23px] py-[24px]`}
              >
                <div className="w-auto text-white dt:body4 ml-[27px] mb-[16px]"> 
                  {images[getIndex(offset)].name}
                </div>
                <img
                  src={images[getIndex(offset)].image}
                  alt={`project-${getIndex(offset)}`}
                  className={`${
                    offset === 1 ? 'w-[494px] h-[274px]' : 'w-[444.6px] h-[246.6px]'
                  } object-cover rounded-[30px]`}
                />
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 z-10 w-[300px] h-[511px] flex items-center"
            onClick={() => setCurrentIndex(getIndex(1))}
            style={{
              background: 'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.73) 47%, rgba(0, 0, 0, 0.44) 78%, rgba(0, 0, 0, 0.00) 100%)'
            }}
          >
            <img className="w-[60px] ml-auto" src={rightArrow} alt="right" />
          </button>
        </div>
      </div>
    );
  };

  const getButtonClass = (tab: string) => {
    return activeTab === tab ? 'text-black bg-blue2' : 'text-blue2 bg-black border-blue2 ring-1 hover:bg-blue2 hover:text-black transition';
  };

  const baseButtonClass = "flex items-center justify-center dt:subhead2 dt:px-7 dt:py-4 dt:rounded-[100px] text-center cursor-pointer transition duration-200 ease-in-out";

  return (
    <div>
      <div className="flex gap-[18px] mt-10 ml-25">
        <button onClick={() => setActiveTab('ideathon')} className={`${baseButtonClass} ${getButtonClass('ideathon')}`}>
          아이디어톤
        </button>
        <button onClick={() => setActiveTab('hackathon')} className={`${baseButtonClass} ${getButtonClass('hackathon')}`}>
          해커톤
        </button>
        <button onClick={() => setActiveTab('festival')} className={`${baseButtonClass} ${getButtonClass('festival')}`}>
          대동제
        </button>
        <button onClick={() => setActiveTab('demoday')} className={`${baseButtonClass} ${getButtonClass('demoday')}`}>
          데모데이
        </button>
      </div>

      <div className="mt-[56px] mx-0">
        {activeTab === 'ideathon' && renderImages(ideathon)}
        {activeTab === 'hackathon' && renderImages(hackathon)}
        {activeTab === 'festival' && renderImages(festival)}
        {activeTab === 'demoday' && renderImages(demoday)}
      </div>
    </div>
  );
};






// swiper 버전

// export const Project = () => {
//   const [activeTab, setActiveTab] = useState('ideathon');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const renderImages = (images: { image: string, name: string }[]) => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//       <div className="w-full max-w-[1665px] h-[397px] mx-auto flex justify-center dt:mb-[144px] overflow-hidden relative">
//         <div className="absolute left-1/2 transform -translate-x-1/2">
//           <Swiper
//             slidesPerView={3}
//             spaceBetween={51}
//             centeredSlides={true}
//             loop={true}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//             navigation={{
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             }}
//             modules={[Navigation]}
//             className="w-[1665px] flex justify-center items-center"
//           >
//             {images.map((item, index) => (
//               <SwiperSlide key={index} className="flex justify-center items-center">
//                 <div
//                   className={`${
//                     activeIndex === index ? 'w-[540px] h-[369px]' : 'w-[486px] h-[332px]'
//                   } bg-gray9 rounded-[50px] px-[23px] py-[24px]`}
//                 >
//                   <div className="w-auto text-white dt:body4 ml-[27px] mb-[16px]">
//                     {item.name}
//                   </div>
//                   <img
//                     src={item.image}
//                     alt={`project-${index}`}
//                     className={`${
//                       activeIndex === index ? 'w-[494px] h-[274px]' : 'w-[444.6px] h-[246.6px]'
//                     } object-cover rounded-[30px]`}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <button
//           className="swiper-button-prev absolute left-0 z-10 w-[300px] h-[511px]"
//           style={{
//             background: 'linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.73) 47%, rgba(0, 0, 0, 0.44) 78%, rgba(0, 0, 0, 0.00) 100%)'
//           }}
//         >
//           <img className="w-[60px]" src={leftArrow} alt="left" />
//         </button>
//         <button
//           className="swiper-button-next absolute right-0 z-10 w-[300px] h-[511px] flex items-center"
//           style={{
//             background: 'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.73) 47%, rgba(0, 0, 0, 0.44) 78%, rgba(0, 0, 0, 0.00) 100%)'
//           }}
//         >
//           <img className="w-[60px] ml-auto" src={rightArrow} alt="right" />
//         </button>
//       </div>
//     );
//   };