export function sum(list: number[]): number {
  return list.reduce((total, cur) => {
    total += cur;
    return total;
  }, 0)
}
