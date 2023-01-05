export const randomColor = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export function invertHex(hex: string) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  if (hex.length != 6) {
    console.warn('Hex color must be six hex numbers in length.');
    return '#' + hex;
  }

  hex = hex.toUpperCase();
  const splitNum = hex.split('');
  let resultNum = '';
  const simpleNum = 'FEDCBA9876'.split('');
  const complexNum = {
    A: '5', B: '4', C: '3', D: '2', E: '1', F: '0'
  };

  for (let i = 0; i < 6; i++) {
    if (!isNaN(Number(splitNum[i]))) {
      resultNum += simpleNum[splitNum[i]];
    } else if (complexNum[splitNum[i]]) {
      resultNum += complexNum[splitNum[i]];
    } else {
      console.warn('Hex colors must only include hex numbers 0-9, and A-F');
      return '#' + hex;
    }
  }

  return '#' + resultNum;
}