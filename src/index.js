import 'source-map-support/register'
import 'babel-polyfill'

async function test(){
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  });
  console.log(`Hello, es7!`)
}

test();
