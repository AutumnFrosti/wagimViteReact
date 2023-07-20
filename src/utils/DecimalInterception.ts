import BigNumber from 'bignumber.js'



// 当precision为0 的时候返回整数,不为0时则 返回输入的指定位数的小数点

export function truncateFloat(input: number | string, precision: number): string {
  const num = new BigNumber(input);
  const numStr = num.toFixed();
  const decimalIndex = numStr.indexOf('.');

  if (precision === 0) {
    return decimalIndex === -1 ? numStr : numStr.slice(0, decimalIndex);
  } else {
    const end = decimalIndex === -1 ? numStr.length : decimalIndex + precision + 1;
    return numStr.slice(0, end);
  }
}