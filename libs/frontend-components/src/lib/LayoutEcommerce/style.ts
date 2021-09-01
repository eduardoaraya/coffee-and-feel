export const rectanglePattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
) => {
  return {
    zIndex: '-1',
    backgroundColor: `#e5e5f7`,
    backgroundImage: `repeating-linear-gradient(45deg, #444cf7 25%, transparent 25%, transparent 75%, #444cf7 75%, #444cf7), repeating-linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%, #e5e5f7 75%, #444cf7 75%, #444cf7)`,
    backgroundPosition: '0 0, 4px 4px',
    backgroundSize: '8px 8px',
    // backgroundColor: bgColor,
    // opacity: opacity,
    // backgroundPosition: `0 0, ${spacing * 0.4}px  ${spacing * 0.4}px`,
    // backgroundSize: `${spacing * 0.8}px ${spacing * 0.8}px`,
    // backgroundImage: `repeating-linear-gradient(45deg, ${patternColor} 25%, transparent 25%, transparent 75%, ${patternColor} 75%, ${patternColor})
    //                   repeating-linear-gradient(45deg, ${patternColor} 25%, ${bgColor} 25%, ${bgColor} 75%, ${patternColor} 75%, ${patternColor})`,
  };
};
