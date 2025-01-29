export const ScheduleBar = () => {
  // 일정 데이터
  const schedule = [
    { date: '3월', event: 'OT' },
    { date: '3월', event: 'MT' },
    { date: '5월', event: '아이디어톤' },
    { date: '8월', event: '애거돈' },
    { date: '9월', event: '해커톤' },
    { date: '10월', event: '신촌톤' },
    { date: '12월', event: '데모데이' },
  ];

  return (
    <div className="w-full mt-[98px] pb-32 flex flex-col">
      <span className="text-white text-2xl mb-[116px]">활동 계획</span>
      <div className="flex w-full relative">
        {schedule.map((item, index) => (
          <div key={index} className="flex flex-col items-center relative w-[150px]">
            {index === 0 || item.date !== schedule[index - 1].date ? (
              <span className="text-white text-2xl mb-2">{item.date}</span>
            ) : (
              <span className="h-[40px]" />
            )}

            <div className="w-3 h-3 bg-[#d9d9d9] rounded-full flex items-center justify-center" />
            <span className="text-[#969696] text-2xl mt-[23px]">{item.event}</span>
            {index < schedule.length - 1 && (
              <div className="w-[757px] h-[1px] bg-white absolute top-[45px] left-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
