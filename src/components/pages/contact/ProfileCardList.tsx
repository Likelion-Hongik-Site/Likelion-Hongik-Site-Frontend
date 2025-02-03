import { ProfileCard } from '@/components/pages/contact/ProfileCard';
import { ProfileData } from '@/data/ProfileData';

export const ProfileCardList = () => {
  return (
    <>
      {ProfileData.map((profile, index) => (
        <li key={index}>
          <ProfileCard profile={profile} />
        </li>
      ))}
    </>
  );
};
