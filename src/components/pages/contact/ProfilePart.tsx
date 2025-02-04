interface ProfilePartProps {
  part: string;
}

export const ProfilePart = ({ part }: ProfilePartProps) => {
  return (
    <div className="flex items-center absolute left-1/2 transform -translate-x-1/2 ph:bottom-[-12px] dt:bottom-[-14px] ph:px-2 dt:px-[10px] py-1 ph:rounded-[12px] dt:rounded-[18px] bg-gray8">
      <span className="ph:caption1 dt:caption1 text-gray3 truncate">{part}</span>
    </div>
  );
};
