/**
 * 
Use slice and trim to generate the following:
Slice is cool!
lice is cool!
ice is cool!
ce is cool!
e is cool!
is cool!
is cool!
s cool!
cool!
cool!
ool!
ol!
l!
!
 * */

function sliceWord(text: string) {
  let count = 0;
  let newWord = "";
  for (let i = 1; i <= text.length; i++) {
    newWord += text.slice(count, text.length).trim() + "\n";
    count += 1;
  }
  return newWord;
}

let text = "Slice is cool!";

console.log(sliceWord(text));
