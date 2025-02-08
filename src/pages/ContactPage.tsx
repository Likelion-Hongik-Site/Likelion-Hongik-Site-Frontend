import { ProfileCardList } from '@/components/pages/contact/ProfileCardList';

export const ContactPage = () => {
  return (
    <div className="min-h-screen w-full ph:max-w-[440px] flex justify-center">
      <div className="dt:w-[1440px] flex flex-col">
        <h1 className="text-white ph:heading1-eng dt:heading1-eng ph:ml-[26px] dt:ml-[98px] ph:mt-5 dt:mt-[84px]">
          CONTACT
        </h1>
        <p className="text-gray4 ph:body2 dt:body1 ph:mt-[1px] dt:mt-[-24px] ph:ml-7 dt:ml-[104px]">
          문의사항이 있다면 언제든 연락바랍니다.
        </p>
        <div className="flex ph:gap-3 dt:gap-7 ph:subhead2-eng dt:body1-eng ph:ml-7 dt:ml-[104px] ph:mt-4 dt:mt-[30px]">
          <span className="text-gray0">Email</span>
          <span className="text-gray4">hongik.likelion@gmail.com</span>
        </div>
        <p className="ph:mt-3 dt:mt-5 text-white ph:subhead3 dt:subhead2 ph:ml-7 dt:ml-[104px]">
          13기 운영진
        </p>
        <ul className="ph:mx-7 dt:m-auto ph:mt-[13px] dt:mt-[26px] dt:flex dt:gap-[48px] ph:grid ph:grid-cols-4 ph:grid-rows-2 ph:gap-x-[10px] ph:gap-y-8">
          <ProfileCardList />
        </ul>
      </div>
    </div>
  );
};
