import { useState } from 'react';
import { ScheduleBar } from '@/components/Recruit/ScheduleBar';
import { ScheduleContent } from '@/components/Recruit/ScheduleContent';

export const RecruitPage = () => {
  const [selected, setSelected] = useState('schedule');
  const applicationFormURL = 'https://naver.com';

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-full max-w-[1230px] relative">
        <div className="flex flex-col  items-start text-left relative">
          <span className="text-white heading1-eng">RECRUITING</span>
          <span className="text-gray4 absolute left-0 top-[215px] opacity-50 body1">
            2025년 멋쟁이사자처럼을 함께할 13기 멤버를 모집합니다. 일정 및 소개를 반드시 읽고 폼을
            제출해주세요.
          </span>
        </div>

        <div className="flex gap-[18px] mt-10">
          <button
            className={`flex items-center justify-center subhead2 px-7 py-4 rounded-[100px] text-center cursor-pointer
            ${selected === 'schedule' ? 'text-black bg-blue2' : 'text-blue2 bg-black'}`}
            onClick={() => setSelected('schedule')}
          >
            일정 및 소개
          </button>

          <a
            href={applicationFormURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center subhead2 px-7 py-4 rounded-[100px] bg-black text-blue2 text-center cursor-pointer border-blue2 ring-1 hover:bg-blue2 hover:text-black transition"
          >
            지원 폼 작성하기
          </a>
        </div>

        <div className="w-full flex flex-col items-center">
          <ScheduleContent />
          <ScheduleBar />
        </div>
      </div>
    </div>
  );
};
