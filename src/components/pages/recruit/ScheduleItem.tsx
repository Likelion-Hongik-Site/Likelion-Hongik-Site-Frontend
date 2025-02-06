import { ScheduleData } from '@/data/ScheduleData';

interface ScheduleItemProps {
  item: {
    date: string;
    event: string;
    detail: string;
  };
  index: number;
  gridColumns: number;
}

export const ScheduleItem = ({ item, index, gridColumns }: ScheduleItemProps) => {
  const rowIndex = Math.floor(index / gridColumns);
  const showDate = index === 0 || item.date !== ScheduleData[index - 1].date;

  return (
    <div
      key={index}
      className={`flex flex-col items-center dt:w-[208px] ph:w-[104px] ph:h-24 dt:h-[218px] relative transition-all 
      ${rowIndex % 2 === 1 ? 'dt:translate-x-[98px]' : 'dt:translate-x-0'}`}
    >
      {/* 같은 날짜면 한 번만 표시 */}
      {showDate ? (
        <span className="dt:body1 ph:body3 text-gray6 dt:mb-6 ph:mb-[9px]">{item.date}</span>
      ) : (
        <span className="block dt:h-[60px] ph:h-6" />
      )}

      {/* 일정 점 */}
      <div className="dt:w-3 dt:h-3 ph:w-[6px] ph:h-[6px] bg-white rounded-full flex items-center justify-center" />

      {/* 이벤트 이름 */}
      <span
        className={`text-gray0 dt:mt-8 ph:mt-3 ${
          /[a-zA-Z]/.test(item.event)
            ? 'dt:subhead1-eng ph:subhead3-eng'
            : 'dt:subhead1 ph:subhead5'
        }`}
      >
        {item.event}
      </span>

      {/* 상세 설명 */}
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
};
