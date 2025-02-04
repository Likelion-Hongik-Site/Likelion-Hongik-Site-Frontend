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
      <div className="relative rounded-full ph:w-[72px] ph:h-[72px] dt:w-[96px] dt:h-[96px] bg-gray9">
        <ProfilePart part={part} />
      </div>
      <span className="text-gray0 ph:subhead4 dt:subhead3 ph:mt-[19px] dt:mt-[21px]">{name}</span>
      <span className="ph:mt-[7px] dt:mt-[6px] text-gray7 ph:caption2 dt:caption1 truncate">
        {department}
      </span>
      <span className="mt-[2px] text-gray7 ph:caption2 dt:caption1 truncate dt:mb-[42px]">
        {phoneNumber}
      </span>
    </div>
  );
};
