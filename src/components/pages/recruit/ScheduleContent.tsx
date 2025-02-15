import { useState, useEffect } from 'react';
import { TrackData } from '@/data/TrackData';

export const ScheduleContent = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1220);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1220);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="w-full h-full dt:mt-[68px] ph:mt-7">
      <div className="flex flex-col dt:gap-[42px] ph:gap-3 ph:ml-7 dt:ml-0 ">
        <div className="flex dt:gap-7 ph:gap-3">
          <span className="text-gray0 dt:subhead2 ph:subhead3">모집 일정</span>
          <span className="text-gray4 dt:body1 ph:subhead3">2025년 2월 17일 ~ 3월 6일 24:00</span>
        </div>
        <div className="flex dt:gap-7 ph:gap-3">
          <span className="text-gray0 dt:subhead2 ph:subhead3">모집 대상</span>
          <div className="flex dt:gap-[21px] ph:flex-col dt:flex-row">
            <span className="text-gray4 dt:body1 ph:subhead3">홍익대학교 재학생, 휴학생</span>
            <span className="text-gray4 dt:body1 ph:subhead3">
              (단, 반드시 1년간 활동이 가능해야 합니다.)
            </span>
          </div>
        </div>
        <span className="text-gray0 dt:subhead2 ph:subhead3">트랙 소개</span>
      </div>
      <div className="flex dt:px-0 box-border justify-end min-[360px]:w-screen min-[441px]:w-full">
        <div
          className={
            'flex flex-row dt:gap-5 ph:gap-2 dt:mt-[46px] ph:mt-2 dt:w-full max-[375px]:justify-between items-center w-full min-[375px]:w-full ml-auto'
          }
        >
          <div
            className={`w-full max-dt:pr-7 max-[375px]:pl-7 flex flex-nowrap dt:gap-5 ph:gap-3 max-[375px]:w-full dt:max-w-[1230px] ph:overflow-x-auto dt:overflow-x-hidden ph:[&::-webkit-scrollbar]:hidden dt:[&::-webkit-scrollbar]:block`}
          >
            {TrackData.map((track, index) => (
              <div
                key={index}
                className={`flex flex-col justify-end dt:w-[395px] dt:h-[508px] dt:ml-0 ph:w-[204px] ph:h-[253px] bg-gray9 text-white dt:rounded-[40px] ph:rounded-[25px] dt:pl-[58px] dt:pr-[57px] dt:pb-[58px] ph:px-6 ph:pb-[25px] box-border relative shrink-0 
                  ${index === 0 ? 'min-[375px]:ml-7' : ''}
                `}
              >
                <img
                  src={track.image}
                  alt={track.title}
                  className="object-contain mx-auto"
                  style={{
                    width: isDesktop ? `${track.dtWidth}px` : `${track.phWidth}px`,
                    height: isDesktop ? `${track.dtHeight}px` : `${track.phHeight}px`,
                    marginBottom: isDesktop
                      ? `${track.dtMarginBottom}px`
                      : `${track.phMarginBottom}px`,
                  }}
                />

                <span className="dt:subhead3 ph:subhead6 text-gray0 mb-3">{track.title}</span>
                <span className="dt:body3 ph:body3 text-gray4">{track.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
