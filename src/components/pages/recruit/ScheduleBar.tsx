import { useState, useEffect } from 'react';
import { ScheduleData } from '@/data/ScheduleData';

export const ScheduleBar = () => {
  const [gridColumns, setGridColumns] = useState(window.innerWidth >= 1220 ? 4 : 2);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const totalRows = Math.ceil(ScheduleData.length / gridColumns); // 총 줄 개수
  const lastCircleIndex = ScheduleData.length - 1; // 마지막 일정 인덱스
  const lastRowLimit = lastCircleIndex % gridColumns;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setGridColumns(window.innerWidth >= 1220 ? 4 : 2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-[1230px] dt:mt-[98px] ph:mt-7 dt:pb-[324px] ph:pb-[87px] flex flex-col ph:mr-7 dt:mr-0 ">
      <span className="text-gray0 dt:subhead2 ph:subhead3 dt:mb-[62px] ph:mb-2">활동 계획</span>

      <div className="relative ph:max-w-[319px] dt:max-w-full ">
        {Array.from({ length: totalRows }).map((_, rowIndex) => {
          const isFirstRow = rowIndex === 0;
          const isLastRow = rowIndex === totalRows - 1;

          const phlineWidth = isLastRow ? `${((lastRowLimit + 1) / gridColumns) * 78}%` : '100%';
          const dtlineWidth = isLastRow ? `${((lastRowLimit + 1) / gridColumns) * 89}%` : '100%';

          return (
            <div
              key={`line-${rowIndex}`}
              className={`absolute h-[1px] dt:w-full ${
                isFirstRow
                  ? 'dt:left-[120px] ph:left-[65px] ph:max-w-[232px] dt:max-w-full'
                  : isLastRow
                    ? 'dt:left-[120px] ph:left-0 ph:w-[232px]'
                    : 'dt:left-[15px] ph:left-0 ph:w-[319px] dt:w-full'
              }`}
              style={{
                top: `${(screenWidth >= 1220 ? 65 : 26) + rowIndex * (screenWidth >= 1220 ? 290 : 110)}px`,
                width: screenWidth >= 1220 ? dtlineWidth : phlineWidth,
                background: isFirstRow
                  ? 'linear-gradient(90deg, #FFF 87.5%, #000 100%)'
                  : isLastRow
                    ? 'linear-gradient(270deg, #FFF 87.5%, #000 100%)'
                    : 'linear-gradient(90deg, #000 0%, #FFF 12%, #FFF 87.5%, #000 100%)',
                backgroundRepeat: 'no-repeat',
              }}
            />
          );
        })}
      </div>

      <div className="grid ph:grid-cols-2 dt:grid-cols-4 dt:gap-x-24 dt:gap-y-18 ph:gap-x-12 ph:gap-y-4 dt:w-full ph:w-[319px] place-items-center items-start ">
        {ScheduleData.map((item, index) => {
          const rowIndex = Math.floor(index / gridColumns);

          return (
            <div
              key={index}
              className={`flex flex-col items-center dt:w-[208px] ph:w-[104px] ph:h-auto relative transition-all 
    ${rowIndex % 2 === 1 ? 'dt:translate-x-[98px]' : 'dt:translate-x-0'}`}
            >
              {/* 같은 달이면 날짜 한 번만 표시 */}
              {index === 0 || item.date !== ScheduleData[index - 1].date ? (
                <span className="dt:body1 ph:body3 text-gray6 dt:mb-6 ph:mb-[9px]">
                  {item.date}
                </span>
              ) : (
                <span className="block dt:h-[60px] ph:h-6" />
              )}

              <div className="dt:w-3 dt:h-3 ph:w-[6px] ph:h-[6px] bg-white rounded-full flex items-center justify-center" />
              <span
                className={`text-gray0 dt:mt-8 ph:mt-[15px] ${
                  /[a-zA-Z]/.test(item.event)
                    ? 'dt:subhead1-eng ph:subhead3-eng'
                    : 'dt:subhead1 ph:subhead5'
                }`}
              >
                {item.event}
              </span>
              <span className="dt:body2 ph:body3 dt:w-[210px] ph:w-[105px] text-gray6 dt:mt-[18px] ph:mt-[6px] text-center">
                {item.detail.includes('바닷가에서 진행하는') ? (
                  <>
                    <span className="whitespace-nowrap">바닷가에서 진행하는</span>
                    <br />
                    {item.detail.replace('바닷가에서 진행하는 ', '')}
                  </>
                ) : (
                  item.detail
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
