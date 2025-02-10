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
    <div className="relative ph:w-full ph:min-w-[304px] ph:max-w-[319px] dt:max-w-full">
      {Array.from({ length: totalRows }).map((_, rowIndex) => {
        const isFirstRow = rowIndex === 0;
        const isLastRow = rowIndex === totalRows - 1;
        const phlineWidth = isLastRow ? `${((lastRowLimit + 1) / gridColumns) * 78}%` : '100%';
        const dtlineWidth = isLastRow ? `${((lastRowLimit + 1) / gridColumns) * 95}%` : '100%';

        return (
          <div
            key={`line-${rowIndex}`}
            className={`absolute h-[1px] ph:mx-7 dt:ml-0 ${
              isFirstRow
                ? 'dt:left-[135px] min-[441px]:left-25 max-[441px]:left-[calc(69px+_((100vw-376px)_*_0.5))] ph:max-w-[252px] dt:max-w-[1108px]'
                : isLastRow
                  ? 'dt:left-[15px] min-[441px]:left-8 max-[441px]:left-[calc(0px+_((100vw-376px)_*_0.5))]'
                  : 'min-[441px]:left-8 max-[441px]:left-[calc(0px+_((100vw-376px)_*_0.5))] ph:w-[319px]'
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
