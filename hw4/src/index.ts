console.log("TASK 1");

const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);
};

console.log(sumEvenNumbers([1, 2, 3, 21312, 12, 112, 33, 12, 122]));
console.log(sumEvenNumbers([1, 3]));

console.log("TASK 2");

interface StringToBooleanFunction {
  (str: string): boolean;
}

const isNonEmptyString: StringToBooleanFunction = (str) => str.length > 0;

console.log(isNonEmptyString(""));
console.log(isNonEmptyString("sadsa"));

console.log("TASK 3");

type CompareStrings = (str1: string, str2: string) => boolean;

const CompareStr: CompareStrings = (str1, str2) => str1 === str2;

console.log(CompareStr("str1", "STR1"));
console.log(CompareStr("str1", "str1"));

console.log("TASK 4");

function getLastElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
// const getLastElement = <T>(arr: T[]): T | undefined => arr.length > 0 ? arr[arr.length - 1] : undefined;

console.log(getLastElement([1, 2, , 3, 4, 5]));
console.log(getLastElement([]));

console.log("TASK 5");

// function makeTriple<T>(a: T, b: T, c: T): T[] {
//   return [a, b, c];
// }

const makeTriple = <T>(a: T, b: T, c: T): T[] => [a, b, c];

console.log(makeTriple("a", "b", "c"));
console.log(makeTriple(1, 2, 3));
