import React, { useState } from 'react';
import { ScheduleContent } from '@/components/Recruit/ScheduleContent';
import { ScheduleBar } from '@/components/Recruit/ScheduleBar';

export const RecruitPage = () => {
  const [selected, setSelected] = useState('schedule');
  const applicationFormURL = 'https://naver.com';

  return (
    <div className="w-full h-full bg-black pl-[105px]">
      <div className="flex flex-col">
        <span className="text-white text-[160px]">RECRUITING</span>
        <span className="text-white opacity-50 text-2xl">
          2025년 멋쟁이사자처럼을 함께할 13기 멤버를 모집합니다. 일정 및 소개를 반드시 읽고 폼을
          제출해주세요.
        </span>
      </div>
      <div className="flex items-center gap-[21px] mt-10">
        <button
          className={`flex items-center justify-center w-[249px] h-[91px] rounded-[50px] text-white text-center text-[32px] cursor-pointer
            ${selected === 'schedule' ? 'bg-[#1c1c1c]' : 'bg-black'}`}
          onClick={() => setSelected('schedule')}
        >
          일정 및 소개
        </button>

        <a
          href={applicationFormURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[285px] h-[91px] rounded-[50px] bg-black text-white text-center text-[32px] cursor-pointer hover:bg-[#1c1c1c] transition"
        >
          지원 폼 작성하기
        </a>
      </div>
      <ScheduleContent />
      <ScheduleBar />
    </div>
  );
};
