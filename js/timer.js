const timer = function checkTime(message, cb) {
  const _message = message || 'Code executed for';
  const start = Date.now();
  const results = cb();
  const end = Date.now();
  const total = `${_message}: ${end - start} ms`;
  console.log(total);
  return results;
};
