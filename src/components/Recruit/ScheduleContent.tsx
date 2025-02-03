export const ScheduleContent = () => {
  const tracks = [
    {
      title: '기획 & 디자인',
      subtitle:
        '사용자 경험 중심의 서비스를 기획하여 이를 바탕으로 인터페이스를 디자인하고 프로젝트 전체 여정을 리드합니다.',
    },
    {
      title: '프론트엔드',
      subtitle:
        'API를 통해 주고받은 데이터를 이용하여 최적의 사용자 경험과 성능을 이끌어낼 수 있는 서비스를 개발합니다.',
    },
    {
      title: '백엔드',
      subtitle:
        'API 개발 및 데이터를 관리하고, 다양한 프레임워크를 이용해 서비스의 전체적인 인프라를 구현합니다. ',
    },
  ];
  return (
    <div className="w-full h-full mt-[84px]">
      <div className="flex  flex-col gap-[42px]">
        <div className="flex gap-7">
          <span className="text-gray0 subhead2">모집 일정</span>
          <span className="text-gray4 body1">2025년 2월 17일~ 2025년 3월 6일 24:00</span>
        </div>
        <div className="flex gap-7">
          <span className="text-gray0 subhead2">모집 대상</span>
          <div className="flex gap-[21px]">
            <span className="text-gray4 body1">홍익대학교 재학생, 휴학생, 졸업유예생</span>
            <span className="text-gray4 body1">(단, 반드시 1년간 활동이 가능해야합니다.)</span>
          </div>
        </div>
        <span className="text-gray0 subhead2">트랙 소개</span>
      </div>
      <div className="flex flex-row gap-5 mt-[46px] w-full overflow-x-auto pr-[105px]">
        <div className="flex flex-nowrap gap-5">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="flex flex-col justify-center w-[395px] h-[432px] bg-gray9 text-white rounded-[40px] pl-[58px] pr-[57px] pt-[259px] pb-[52px] relative gap-3 shrink-0"
            >
              <span className="subhead3 text-gray0">{track.title}</span>
              <span className="body3 text-gray4">{track.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
