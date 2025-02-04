import { ProfilePart } from '@/components/pages/contact/ProfilePart';

interface ProfileCardData {
  profile: {
    part: string;
    name: string;
    department: string;
    phoneNumber: string;
  };
}

export const ProfileCard = ({ profile }: ProfileCardData) => {
  const { part, name, department, phoneNumber } = profile;

  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-full w-[96px] h-[96px] bg-gray9">
        <ProfilePart part={part} />
      </div>
      <span className="text-gray0 dt:subhead3 mt-[21px]">{name}</span>
      <span className="mt-[6px] text-gray7 dt:caption1 truncate">{department}</span>
      <span className="mt-[2px] text-gray7 dt:caption1 truncate mb-[42px]">{phoneNumber}</span>
    </div>
  );
};
