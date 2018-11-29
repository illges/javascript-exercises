const snakeCase = function(phrase) {

  if (phrase.match(/[^a-zA-Z]/)) {
    return phrase
            .split(/[^a-zA-Z]+/)
            .filter(current => (current !== ''))
            .join('_')
            .toLowerCase();
  } else {
    return phrase
            .split(/(?=[A-Z])/)
            .filter(current => (current !== ''))
            .join('_')
            .toLowerCase();
  }
}

module.exports = snakeCase
