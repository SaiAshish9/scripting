const { exec } = require("child_process");

exec("node --version", (err, stdout, stderr) => {
  console.log({ err, stdout, stderr });
  console.log(stdout);
});

exec("../python/s.sh", (err, stdout, stderr) => {
  console.log({ err, stdout, stderr });
  console.log(stdout);
});

// Output :
// { err: null, stdout: 'v12.22.1\n', stderr: '' }
// v12.22.1

// { err: null, stdout: 'Hello\n', stderr: '' }
// Hello

