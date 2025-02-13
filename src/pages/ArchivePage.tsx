import { Project } from '@/components/pages/archive/Project';
import { Review } from '@/components/pages/archive/Review';
import { Projectph } from '@/components/pages/archive/Projectph';
import { Reviewph } from '@/components/pages/archive/Reviewph';

export const ArchivePage = () => {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="dt:w-[1440px] flex flex-col">
        <h1 className="text-white ph:heading1-eng dt:heading1-eng ph:ml-[26px] dt:ml-[98px] ph:mt-5 dt:mt-[84px]">
          ARCHIVE
        </h1>
        <p className="dt:text-gray4 ph:text-gray6 ph:body2 dt:body1 ph:mt-[1px] dt:mt-[-24px] ph:ml-7 dt:ml-[104px] ph:w-[241px] dt:w-[auto]">
          홍익대학교 멋쟁이사자처럼 12기에서 진행한 프로젝트를 소개합니다.
        </p>
        <div className="ph:hidden dt:block">
          <Project/>
          <div className= "text-white dt:subhead1 ml-[28px] mb-[40px]">활동사진</div>
          <div className="flex justify-center mb-[142px]">
            <Review />
          </div>
        </div>

        <div className="ph:block dt:hidden justify-center">
          <div className="absolute mt-[90px] z-10 w-[64px] h-[576px] bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 mt-[90px] z-10 w-[64px] h-[576px] bg-gradient-to-l from-black to-transparent" />
          <Projectph/>
          <div className="flex justify-center mb-[100px]">
          <Reviewph/>   
          </div>
        </div>
      </div>
    </div>
  );
};
