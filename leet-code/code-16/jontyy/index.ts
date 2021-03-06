/**
 * @param {number[]} a
 * @return {number[]}
 */
const constructArr = (a: number[]): number[] => {
  const arrLength = a.length;

  if (arrLength <= 1) {
    return a;
  }

  // 左数组初始化，第一位是1， 因为1乘任何值都是1， 可以这样理解， 当n=2的时候，他左边的值， 就等于左数组的前一位1 * 原数组的第一位
  // n=3时， 左边的值，就等于n-1情况下， 乘以原数组的n-1
  const leftArr: number[] = [];
  leftArr[0] = 1;

  const rightArr: number[] = [];
  rightArr[arrLength - 1] = 1;

  const finalArr: number[] = [];

  // 构造左数组
  for (let i = 1; i !== arrLength; i++) {
    leftArr[i] = leftArr[i - 1] * a[i - 1];
  }

  // 构造右数组
  for (let i = arrLength - 2; i !== -1; i--) {
    rightArr[i] = rightArr[i + 1] * a[i + 1];
  }

  // 构造最终数组
  for (let i = 0; i !== arrLength; i++) {
    finalArr[i] = leftArr[i] * rightArr[i];
  }
  return finalArr;
};
constructArr([1, 2, 3, 4, 5]);
