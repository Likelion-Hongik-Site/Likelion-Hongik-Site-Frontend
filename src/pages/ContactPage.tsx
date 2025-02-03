import { ProfileCardList } from '@/components/pages/contact/ProfileCardList';

export const ContactPage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] flex flex-col">
        <h1 className="text-white heading1-eng ml-[98px] mt-[84px]">CONTACT</h1>
        <p className="text-gray4 body1 mt-[-24px] ml-[104px]">
          문의사항이 있다면 언제든 연락바랍니다.
        </p>
        <div className="flex gap-7 body1-eng ml-[104px] mt-[30px]">
          <span className="text-gray0">Email</span>
          <span className="text-gray4">hongik.likelion@gmail.com</span>
        </div>
        <p className="mt-[20px] text-white subhead2 ml-[104px]">13기 운영진</p>
        <ul className="m-auto mt-[26px] flex gap-[48px]">
          <ProfileCardList />
        </ul>
      </div>
    </div>
  );
};
