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
    <div className="w-full h-full mt-[105px]">
      <div className="flex  flex-col gap-[42px]">
        <div className="flex gap-[23px]">
          <span className="text-white text-2xl">모집 일정</span>
          <span className="text-[#969696] text-2xl">모집 일정</span>
        </div>
        <div className="flex gap-[23px]">
          <span className="text-white text-2xl">모집 대상</span>
          <span className="text-[#969696] text-2xl">홍익대학교 재학생, 휴학생, 졸업유예생</span>
        </div>
        <span className="text-white text-2xl">트랙 소개</span>
      </div>
      <div className="flex flex-row gap-5 mt-[46px]">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-[390px] h-[432px] bg-white/10 text-white rounded-[40px] pl-[37px] pr-[42px] gap-3"
          >
            <span className="text-xl text-white font-bold">{track.title}</span>
            <span className="text-xl text-[#9f9f9f]">{track.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
