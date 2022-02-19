const formulaSumConsecutibeNumbersInline = (
  to: number,
  from: number = 0
): number => ((to + from) * (to - from + 1)) / 2;

function formulaSumConsecutibeNumbers(to: number, from: number = 0): number {
  const count = to - from + 1;
  console.log("🚀 ~ formulaSumConsecutibeNumbers ~ count", count);
  const sumConsecutiveNumbers = ((to + from) * count) / 2;
  console.log(
    "🚀 ~ formulaSumConsecutibeNumbers ~ sumConsecutiveNumbers",
    sumConsecutiveNumbers
  );
  return sumConsecutiveNumbers;
}

const result = formulaSumConsecutibeNumbers(10);
const resultInline = formulaSumConsecutibeNumbersInline(10);

console.log("🚀 ~ result", result);
console.log("🚀 ~ result inline", resultInline);

export {};
