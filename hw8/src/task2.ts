import getRandomDelay from "./getRandomDelay.js";

console.log("TASK 2");
function processString(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Обработана строка: ${str}`);
      resolve(str.toUpperCase());
    }, getRandomDelay());
  });
}

async function processArray(strings: string[]) {
  const promises = strings.map((str) => processString(str));
  const results = await Promise.all(promises);
  console.log("Все результаты:", results);
  return results;
}

processArray(["hello", "world", "async", "await", "typescript"]);
