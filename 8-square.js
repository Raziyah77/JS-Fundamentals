const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 0; j < num; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
