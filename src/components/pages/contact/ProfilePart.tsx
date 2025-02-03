interface ProfilePartProps {
  part: string;
}

export const ProfilePart = ({ part }: ProfilePartProps) => {
  return (
    <div className="flex items-center absolute left-1/2 transform -translate-x-1/2 bottom-[-14px] px-[10px] py-1 rounded-[18px] bg-gray8">
      <span className="caption1 text-gray3 truncate">{part}</span>
    </div>
  );
};
