const repeatString = function(string, num) {
    let final = '';
    if (num < 0){
      final = 'ERROR';
    } else if (num > 0) {
      for (let i=0; i<num; i++) {
        final = final + string;
      }
    }
    return final
}

module.exports = repeatString
