const reverseString = function(string) {
    let final='';
    for (let i=1; i<=string.length; i++) {
        final = final + string[string.length-i];
    }
    return final
}

module.exports = reverseString
