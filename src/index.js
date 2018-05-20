import style from "./main.css";
import App from "./App";

console.log(`I'm a silly entry point`);
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);

async function add(x,y){
  return x + y;
}

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log(sum);
});
window.iAmJavascriptES6 = iAmJavascriptES6;