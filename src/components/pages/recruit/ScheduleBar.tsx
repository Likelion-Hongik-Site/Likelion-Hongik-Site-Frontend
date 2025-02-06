import { useState, useEffect } from 'react';
import { ScheduleLines } from './ScheduleLines';
import { ScheduleItem } from './ScheduleItem';
import { ScheduleData } from '@/data/ScheduleData';

export const ScheduleBar = () => {
  const [gridColumns, setGridColumns] = useState(window.innerWidth >= 1220 ? 4 : 2);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const totalRows = Math.ceil(ScheduleData.length / gridColumns);
  const lastCircleIndex = ScheduleData.length - 1;
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

      <ScheduleLines
        totalRows={totalRows}
        screenWidth={screenWidth}
        gridColumns={gridColumns}
        lastRowLimit={lastRowLimit}
      />

      <div className="grid ph:grid-cols-2 dt:grid-cols-4 dt:gap-x-24 dt:gap-y-18 ph:gap-x-12 ph:gap-y-4 dt:w-full ph:w-[319px] place-items-center items-start">
        {ScheduleData.map((item, index) => (
          <ScheduleItem key={index} item={item} index={index} gridColumns={gridColumns} />
        ))}
      </div>
    </div>
  );
};
