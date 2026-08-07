const { readFile, writeFile } = require("fs");

readFile("./starting/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  const firstfile = data;

  readFile("./starting/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    const secondfile = data;

    writeFile(
      "./starting/filethreeasync.txt",
      `This is asyncfilecontent: ${firstfile} ${secondfile}`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
      },
    );
  });
});
