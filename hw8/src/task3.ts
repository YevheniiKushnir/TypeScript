console.log("TASK 3");

(async () => {
  const funcArray: Array<() => Promise<number>> = [];

  let count = 3;

  while (count > 0) {
    const taskNumber = count;
    funcArray.push(() => {
      return new Promise<number>((resolve, reject) => {
        if (taskNumber % 2 === 0) {
          resolve(taskNumber);
        } else {
          reject("Error");
        }
      });
    });
    count--;
  }

  try {
    const promises = funcArray.map((func) => func());
    const results = await Promise.all(promises);
    console.log("Все результаты:", results);
  } catch (err) {
    console.error("Ошибка при выполнении промисов:", err);
  }
})();
