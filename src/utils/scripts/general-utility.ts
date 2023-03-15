
export const removePxFromCssValue = (value: string): number => {
  const indexOfPx = value.indexOf('px');
  return Number(value.slice(0, indexOfPx));
}