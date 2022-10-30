// Java : Exception 클래스가 마련되어 있음
// Javascript: Error 클래스
// const array = new Array(100000000000000);

// Error Handling(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}
function run() {
  const fileName = "not exist!";
  try {
    console.log(readFile(fileName));
  } catch (e) {
    console.log("cought");
    return;
  } finally {
    closeFile(fileName);
    console.log("finally closed!");
  }
  closeFile(fileName);
  console.log("closed!");
}
run();
