import { useState, useEffect } from 'react';

export const ScheduleBar = () => {
  const schedule = [
    { date: '3월', event: 'OT', detail: '멋쟁이사자처럼 13기 출발!' },
    { date: '3월', event: 'MT', detail: '바닷가에서 진행하는 첫 네트워킹 행사' },
    { date: '5월', event: '아이디어톤', detail: '아이디어 뿜뿜 행사' },
    { date: '7월', event: '방학 세션', detail: '해커톤 전 실력 올리기!' },
    { date: '7월', event: '애거돈', detail: '멋사 홍대에서만 진행하는 실전 대비 무박2일 해커톤' },
    {
      date: '8월',
      event: '중앙 해커톤',
      detail: '멋쟁이사자처럼 대학에서 진행하는 전국 연합 해커톤',
    },
    { date: '10월', event: '신촌톤', detail: '신촌 연합(서강, 이화, 연세, 홍익) 무박2일 해커톤' },
    { date: '12월', event: '데모데이', detail: '신촌 연합 데모데이 발표일' },
  ];

  const [gridColumns, setGridColumns] = useState(window.innerWidth >= 768 ? 4 : 2);
  const rowHeight = 398; // 줄 간격 고정값
  const totalRows = Math.ceil(schedule.length / gridColumns); // 총 줄 개수
  const lastCircleIndex = schedule.length - 1; // 마지막 일정 인덱스
  const lastRowLimit = lastCircleIndex % gridColumns;

  useEffect(() => {
    const handleResize = () => {
      setGridColumns(window.innerWidth >= 768 ? 4 : 2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full mt-[98px] pb-[324px] flex flex-col">
      <span className="text-gray0 dt:subhead2 mb-[62px]">활동 계획</span>

      <div className="relative w-full">
        {Array.from({ length: totalRows }).map((_, rowIndex) => {
          const isFirstRow = rowIndex === 0;
          const isLastRow = rowIndex === totalRows - 1;

          let lineWidth = '100%';
          if (isLastRow) {
            lineWidth = `${((lastRowLimit + 1) / gridColumns) * 93}%`;
          }

          return (
            <div
              key={`line-${rowIndex}`}
              className="absolute h-[1px]"
              style={{
                top: `${65 + rowIndex * rowHeight}px`,
                left: isFirstRow ? '105px' : '0px',
                width: lineWidth,
                background: isFirstRow
                  ? 'linear-gradient(90deg, #FFF 87.5%, #000 100%)'
                  : 'linear-gradient(270deg, #FFF 87.5%, #000 100%)',
              }}
            />
          );
        })}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-24 gap-y-[180px] md:gap-x-6 md:gap-y-[180px] w-full">
          {schedule.map((item, index) => {
            // 현재 항목이 몇 번째 줄에 있는지 계산
            const rowIndex = Math.floor(index / gridColumns);

            return (
              <div
                key={index}
                className={`flex flex-col items-center w-[210px] relative transition-all`}
                style={{
                  transform: rowIndex % 2 === 1 ? 'translateX(98px)' : 'translateX(0px)',
                }}
              >
                {/* 같은 달이면 날짜 한 번만 표시 */}
                {index === 0 || item.date !== schedule[index - 1].date ? (
                  <span className="dt:body1 text-gray6 mb-6">{item.date}</span>
                ) : (
                  <span className="block h-[60px]" />
                )}

                <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center" />
                <span className="dt:subhead1 text-gray0 mt-8">{item.event}</span>
                <span className="dt:body2 w-[210px] text-gray6 mt-[18px] text-center">
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
    </div>
  );
};
