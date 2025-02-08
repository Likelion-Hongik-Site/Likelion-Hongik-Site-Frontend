import { TrackData } from '@/data/TrackData';

export const ScheduleContent = () => {
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
              (단, 반드시 1년간 활동이 가능해야합니다.)
            </span>
          </div>
        </div>
        <span className="text-gray0 dt:subhead2 ph:subhead3">트랙 소개</span>
      </div>
      <div className="flex justify-center max-[376px]:mx-7 min-[375px]:w-screen min-[441px]:w-full">
        <div
          className={
            'flex flex-row dt:gap-5 ph:gap-2 dt:mt-[46px] ph:mt-2 dt:w-full max-[376px]:justify-between items-center w-full min-[376px]:w-[calc(100%-56px)] min-[376px]:justify-center'
          }
        >
          <div
            className={`w-full max-[376px]:pr-7 flex flex-nowrap dt:gap-5 ph:gap-3 max-[376px]:max-w-[347px] min-[376px]:max-w-[319px] dt:max-w-[1230px] ph:overflow-x-auto dt:overflow-x-hidden ph:[&::-webkit-scrollbar]:hidden dt:[&::-webkit-scrollbar]:block`}
          >
            {TrackData.map((track, index) => (
              <div
                key={index}
                className="flex flex-col justify-center dt:w-[395px] dt:h-[432px] ph:w-[204px] ph:h-[256px] bg-gray9 text-white dt:rounded-[40px] ph:rounded-[25px] dt:pl-[58px] dt:pr-[57px] dt:pt-[259px] dt:pb-[52px] ph:px-6 ph:py-7 relative gap-3 shrink-0"
              >
                <span className="dt:subhead3 ph:subhead6 text-gray0">{track.title}</span>
                <span className="dt:body3 ph:body3 text-gray4">{track.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
