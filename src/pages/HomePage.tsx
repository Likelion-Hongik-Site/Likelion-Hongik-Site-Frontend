import { useNavigate } from 'react-router-dom';
import rightArrow from '@/assets/svgs/pages/home/rightArrow.svg';

export const HomePage = () => {
  const nav = useNavigate();

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="heading1 text-white mt-[100px]">멋쟁이사자처럼</h1>
      <div className="body1 text-gray7 flex flex-col items-center mt-[14px]">
        <p>‘멋쟁이사자처럼’은 국내 최대 규모의 전국 대학 연합 IT 동아리입니다.</p>
        <p>코딩을 모르더라도 함께 배우며 아이디어를 실현하려는 열정만 있다면 지원 가능합니다.</p>
      </div>
      <div className="flex flex-col gap-3 subhead3 mt-9">
        <p className="flex gap-4">
          <span className="text-gray0">모집 기간</span>
          <span className="text-gray4">2025. 2. 17~ 2025. 3. 9</span>
        </p>
        <p className="flex gap-4">
          <span className="text-gray0">모집 대상</span>
          <span className="text-gray4">홍익대학교 재학생, 휴학생, 졸업유예생</span>
        </p>
      </div>
      <div
        onClick={() => nav('/recruit')}
        className="w-[416px] h-[74px] mt-[66px] flex justify-center items-center rounded-[120px] cursor-pointer mb-[78px]
      bg-linear-[92deg,#5FACFF_12%,#5F9AFF_30%,#5F74FF_102%]"
      >
        <span className="subhead1 text-gray9 mr-[22px]">홍익대학교 멋사 13기 지원하기</span>
        <img src={rightArrow} alt="right arrow" className="w-[30px]" />
      </div>
    </div>
  );
};
