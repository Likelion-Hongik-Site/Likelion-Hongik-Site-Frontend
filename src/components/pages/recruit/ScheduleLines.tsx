interface ScheduleLinesProps {
  totalRows: number;
  screenWidth: number;
  gridColumns: number;
  lastRowLimit: number;
}
export const ScheduleLines = ({
  totalRows,
  screenWidth,
  gridColumns,
  lastRowLimit,
}: ScheduleLinesProps) => {
  return (
    <div className="relative ph:max-w-[319px] dt:max-w-full">
      {Array.from({ length: totalRows }).map((_, rowIndex) => {
        const isFirstRow = rowIndex === 0;
        const isLastRow = rowIndex === totalRows - 1;
        const phlineWidth = isLastRow ? `${((lastRowLimit + 1) / gridColumns) * 78}%` : '100%';
        const dtlineWidth = isLastRow ? `${((lastRowLimit + 1) / gridColumns) * 89}%` : '100%';

        return (
          <div
            key={`line-${rowIndex}`}
            className={`absolute h-[1px] dt:w-full ${
              isFirstRow
                ? 'dt:left-[120px] ph:left-[65px] ph:max-w-[254px] dt:max-w-[1108px]'
                : isLastRow
                  ? 'dt:left-[120px] ph:left-0 ph:w-[232px]'
                  : 'dt:left-[15px] ph:left-0 ph:w-[319px] dt:w-full'
            }`}
            style={{
              top: `${(screenWidth >= 1220 ? 65 : 26.5) + rowIndex * (screenWidth >= 1220 ? 290 : 112)}px`,
              width: screenWidth >= 1220 ? dtlineWidth : phlineWidth,
              background: isFirstRow
                ? 'linear-gradient(90deg, #FFF 87.5%, #000 100%)'
                : isLastRow
                  ? 'linear-gradient(270deg, #FFF 87.5%, #000 100%)'
                  : 'linear-gradient(90deg, #000 0%, #FFF 12%, #FFF 87.5%, #000 100%)',
              backgroundRepeat: 'no-repeat',
            }}
          />
        );
      })}
    </div>
  );
};
