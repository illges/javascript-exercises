const fibonacci = function(n) {
  let fib = [1, 1];
  if (n < 0) {
    return 'OOPS'
  } else {
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i-1]+fib[i-2];
    }
    return fib[n-1]
  }
}

module.exports = fibonacci
