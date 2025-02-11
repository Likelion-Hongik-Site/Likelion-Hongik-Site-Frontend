import { useNavigate } from 'react-router-dom';
import rightArrow from '@/assets/svgs/pages/home/rightArrow.svg';
import rightArrowS from '@/assets/svgs/pages/home/rightArrowS.svg';

export const HomePage = () => {
  const nav = useNavigate();

  return (
    <div className="w-full flex flex-col ph:items-start dt:items-center">
      <h1 className="ph:heading1 dt:heading1 text-white ph:ml-[26px] ph:mt-5 dt:mt-[100px]">
        멋쟁이사자처럼
      </h1>
      <div className="ph:body2 dt:body1 ph:ml-[28px] text-gray7 flex flex-col dt:items-center ph:mt-[3px] dt:mt-[14px]">
        <p className="ph:hidden dt:block">
          ‘멋쟁이사자처럼’은 국내 최대 규모의 IT 창업 연합 동아리입니다.
        </p>
        <p className="ph:hidden dt:block">
          처음 시작하더라도 함께 배우며 아이디어를 실현하려는 열정만 있다면 지원 가능합니다.
        </p>
        <p className="ph:block dt:hidden">‘멋쟁이사자처럼’은 국내 최대 규모의 IT 창업 연합</p>
        <p className="ph:block dt:hidden">동아리입니다. 처음 시작하더라도 함께 배우며</p>
        <p className="ph:block dt:hidden">아이디어를 실현하려는 열정만 있다면 지원 가능합니다.</p>
      </div>
      <div className="flex flex-col ph:ml-[28px] ph:gap-[6px] dt:gap-3 ph:subhead3 dt:subhead3 ph:mt-[33px] dt:mt-9">
        <p className="flex ph:gap-2 dt:gap-4">
          <span className="text-gray0">모집 기간</span>
          <span className="text-gray4">2025년 2월 17일 ~ 3월 6일 24:00</span>
        </p>
        <p className="flex ph:gap-2 dt:gap-4">
          <span className="text-gray0">모집 대상</span>
          <span className="text-gray4">홍익대학교 재학생, 휴학생</span>
        </p>
      </div>
      <div
        onClick={() => nav('/recruit')}
        className="ph:w-[258px] ph:h-[44px] dt:w-[416px] dt:h-[74px] ph:ml-7 ph:mt-[38px] dt:mt-[66px] flex justify-center items-center rounded-[120px] cursor-pointer mb-[78px]
      bg-linear-[92deg,#3356EE_10%,#564AFF_48%,#714AFF_95%]"
      >
        <span className="ph:subhead1 dt:subhead1 text-gray9 ph:mr-[9px] dt:mr-[22px]">
          홍익대학교 멋사 13기 지원하기
        </span>
        <img src={rightArrow} alt="right arrow" className="ph:hidden dt:block w-[30px]" />
        <img src={rightArrowS} alt="right arrow" className="ph:block dt:hidden w-[13px]" />
      </div>
    </div>
  );
};
