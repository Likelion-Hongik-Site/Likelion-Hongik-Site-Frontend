import { useState } from 'react';
import { ScheduleBar } from '@/components/pages/recruit/ScheduleBar';
import { ScheduleContent } from '@/components/pages/recruit/ScheduleContent';

export const RecruitPage = () => {
  const [selected, setSelected] = useState('schedule');
  const applicationFormURL = 'https://naver.com';

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center dt:mt-[84px] ph:mt-5 dt:ml-0">
      <div className="dt:w-[1230px] relative">
        <div className="flex flex-col items-start text-left relative">
          <span className="text-white dt:heading1-eng ph:heading1-eng ph:ml-6 dt:ml-0">
            RECRUITING
          </span>
          <span className="text-gray4 absolute left-0 dt:top-[215px] ph:top-[67px] opacity-50 dt:body1 ph:body2 ph:ml-7 dt:ml-[13px]">
            <span className="dt:inline ph:hidden">2025년</span> 멋쟁이사자처럼을 함께할 13기 멤버를
            모집합니다.&nbsp;
            <span className="ph:block dt:inline">
              일정 및 소개를 반드시 읽고 폼을 제출해주세요.
            </span>
          </span>
        </div>

        <div className="flex gap-[18px] mt-10 ph:gap-3 ph:mt-[57px] ph:ml-7 dt:ml-0">
          <button
            className={`flex items-center justify-center dt:subhead2 ph:subhead2 dt:px-7 dt:py-4 ph:px-[18px] ph:py-[10px] dt:rounded-[100px] ph:rounded-[66.667px] text-center cursor-pointer transition duration-200 ease-in-out
            ${selected === 'schedule' ? 'text-black bg-blue2' : 'text-blue2 bg-black'}`}
            onClick={() => setSelected('schedule')}
          >
            일정 및 소개
          </button>

          <a
            href={applicationFormURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center dt:subhead2 ph:subhead2 dt:px-7 dt:py-4 ph:px-[18px] ph:py-[10px] dt:rounded-[100px] ph:rounded-[66.667px] bg-black text-blue2 text-center cursor-pointer border-blue2 ring-1 hover:bg-blue2 hover:text-black transition duration-200 ease-in-out"
          >
            지원 폼 작성하기
          </a>
        </div>

        <div className="w-full flex flex-col ph:ml-7 dt:ml-0">
          <ScheduleContent />
          <ScheduleBar />
        </div>
      </div>
    </div>
  );
};
