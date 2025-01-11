/**
 * 
Write code to print following pattern on the console
11111
22222
33333
44444
55555
 * */

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += i;
  }
  console.log(parseInt(row));
}
