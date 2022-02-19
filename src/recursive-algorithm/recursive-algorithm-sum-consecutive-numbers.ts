const recursiceSumConsecutibeNumbersInline = (
  to: number,
  from: number = 0
): number =>
  to >= from ? to + recursiceSumConsecutibeNumbersInline(--to, from) : 0;

function recursiceSumConsecutibeNumbers(to: number, from: number = 0): number {
  if (to >= from) {
    console.log("🚀 ~ recursiceSumConsecutibeNumbers ~ to", to);
    return to + recursiceSumConsecutibeNumbers(--to, from);
  }

  console.log("🚀 ~ recursiceSumConsecutibeNumbers ~ to", to);
  return 0;
}

const result = recursiceSumConsecutibeNumbers(64, 32);
const resultInline = recursiceSumConsecutibeNumbersInline(64, 32);

console.log("🚀 ~ result", result);
console.log("🚀 ~ result inline", resultInline);

export {};
