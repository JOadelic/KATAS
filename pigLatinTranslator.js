
const translator = (input) => {
  let final = [];

  for (let word of input) {
    word += word[0];
    word += 'ay';
    final.push(word.slice(1))
  }
  
  return final.join(' ');
}
console.log(translator(process.argv.slice(2)))