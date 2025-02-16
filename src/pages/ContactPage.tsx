import { ProfileCard } from '@/components/pages/contact/ProfileCard';
import { ProfileData } from '@/data/ProfileData';

export const ContactPage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="dt:w-[1440px] flex flex-col">
        <h1 className="text-white ph:heading1-eng dt:heading1-eng ph:ml-[26px] dt:ml-[98px] ph:mt-5 dt:mt-[84px]">
          CONTACT
        </h1>
        <p className="dt:text-gray4 ph:text-gray6 ph:body2 dt:body1 ph:mt-[1px] dt:mt-[-24px] ph:ml-7 dt:ml-[104px]">
          문의사항이 있다면 언제든 연락바랍니다.
        </p>
        <div className="flex ph:gap-3 dt:gap-7 ph:subhead2-eng dt:body1-eng ph:ml-7 dt:ml-[104px] ph:mt-4 dt:mt-[30px]">
          <span className="text-gray0">Email</span>
          <span className="text-gray4">hongik.likelion&#64;gmail.com</span>
        </div>
        <p className="ph:mt-3 dt:mt-5 text-white ph:subhead3 dt:subhead2 ph:ml-7 dt:ml-[104px]">
          13기 운영진
        </p>
        <ul className="dt:flex ph:hidden m-auto mt-[26px] gap-[48px]">
          {ProfileData.map((profile, index) => (
            <li key={index}>
              <ProfileCard profile={profile} />
            </li>
          ))}
        </ul>

        <ul className="dt:hidden ph:flex ph:max-w-[384px] ph:flex-col ph:w-full mx-7 mt-[13px] gap-8">
          {/* 첫 번째 줄 (4개) */}
          <div className="flex justify-between w-[calc(100vw-56px)] max-w-[384px]">
            {ProfileData.slice(0, 4).map((profile, index) => (
              <li key={index} className="flex justify-center">
                <ProfileCard profile={profile} />
              </li>
            ))}
          </div>
          {/* 두 번째 줄 (4개) */}
          <div className="flex justify-between w-[calc(100vw-56px)] max-w-[384px]">
            {ProfileData.slice(4, 8).map((profile, index) => (
              <li key={index} className="flex justify-center">
                <ProfileCard profile={profile} />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};
