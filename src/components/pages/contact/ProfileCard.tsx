interface ProfileCardData {
  profile: {
    name: string;
  };
}

export const ProfileCard = ({ profile }: ProfileCardData) => {
  const { name } = profile;

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="rounded-full w-[108px] h-[108px] bg-gray9" />
      <span className="text-gray0 subhead3">{name}</span>
    </div>
  );
};
