let squarer;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => new WebAssembly.Instance(module));
}

console.time('wasm');
loadWebAssembly('squarer.wasm')
  .then((instance) => {
    squarer = instance.exports._Z7squareri;
    console.log('Finished compiling! Ready when you are...');

    for (let i = 1; i < 1e5; i += 1) {
      squarer(i);
    }
    console.log('done');
  });
console.timeEnd('wasm');

function squarerJS(num) {
  return num * num;
}

console.time('js');
// console.log(squarerJS(9));
for (let i = 1; i < 1e5; i += 1) {
  squarerJS(i);
}
console.log('done');
console.timeEnd('js');
