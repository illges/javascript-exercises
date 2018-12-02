function translate(string) {

	return string
					.split(' ')
					.map(word => {
						if (!/[aeiou]/.test(word[0])) {
							let i=0;
							while (!/[aeiou]/.test(word[i])) {
								i++
							}
							if (word[i]==='u' && word[i-1]==='q') {
								return word.slice(i+1) + word.slice(0, i+1) + 'ay'
							} else {
								return word.slice(i) + word.slice(0, i) + 'ay'
							}
						} else {
							return word + 'ay'
						}
					})
					.join(' ')
}


module.exports = {
	translate
}
