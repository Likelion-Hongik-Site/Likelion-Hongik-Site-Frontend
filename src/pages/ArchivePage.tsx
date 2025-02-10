import { Project } from "@/components/Archive/Project";
import { Review } from "@/components/Archive/Review";

export const ArchivePage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="dt:w-[1440px] flex flex-col">
        <h1 className="text-white ph:heading1-eng dt:heading1-eng ph:ml-[26px] dt:ml-[98px] ph:mt-5 dt:mt-[84px]">
          ARCHIVE
        </h1>
        <p className="text-gray4 ph:body2 dt:body1 ph:mt-[1px] dt:mt-[-24px] ph:ml-7 dt:ml-[104px] ph:w-[241px] dt:w-[auto]">
          홍익대학교 멋쟁이사자처럼 12기에서 진행한 프로젝트를 소개합니다.
        </p>
        <div className="ph:hidden dt:block">
          <Project/>

          <div className="flex justify-center mb-[142px]">
            <Review />
          </div>
        </div>

        <div className="ph:block dt:hidden">
          {/* <Projectph/> */}
          {/* <Reviewph/> */}
        </div>
      </div>
    </div>
  );
};
