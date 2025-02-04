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
    <div className="w-full h-full dt:mt-[68px] ph:mt-7">
      <div className="flex flex-col dt:gap-[42px] ph:gap-3">
        <div className="flex gap-7">
          <span className="text-gray0 dt:subhead2 ph:subhead3">모집 일정</span>
          <span className="text-gray4 dt:body1 ph:subhead3">2025년 2월 17일 ~ 3월 6일 24:00</span>
        </div>
        <div className="flex gap-7">
          <span className="text-gray0 dt:subhead2 ph:subhead3">모집 대상</span>
          <div className="flex dt:gap-[21px] ph:flex-col dt:flex-row">
            <span className="text-gray4 dt:body1 ph:subhead3">
              홍익대학교 재학생, 휴학생, 졸업유예생
            </span>
            <span className="text-gray4 dt:body1 ph:subhead3">
              (단, 반드시 1년간 활동이 가능해야합니다.)
            </span>
          </div>
        </div>
        <span className="text-gray0 dt:subhead2 ph:subhead3">트랙 소개</span>
      </div>
      <div className="flex flex-row gap-5 dt:mt-[46px] ph:mt-2 w-full overflow-x-auto dt:pr-[105px]">
        <div className="flex flex-nowrap gap-5">
          {tracks.map((track, index) => (
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
  );
};
