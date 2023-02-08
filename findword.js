// input parameters.
let wordsSource = '';
let letters = '';
let wordLength = 0;

// insert parameters.
process.argv.forEach(function (val, index, array) {
  switch(index) {
	case 2:
	  wordsSource = val;
	  break;
	case 3:
	  letters = val;
	  break;
	case 4:
	  wordLength = val;
	  break;
  }
});

// normalize parameters.
wordLength = Number(wordLength);
letters = letters.replaceAll(',', '');
letters = letters.replaceAll(' ', '');
letters = letters.toLowerCase();
letters = letters.split('');

// validate parameters.
if (isNaN(wordLength)) {
  console.error('Bad parameters.');
  process.exit(1);
}

// include words list.
let wordsList = require(wordsSource);

// filter words by length.
let filteredWordsByLength = [];
for (let word of wordsList) {
  if (word.length === wordLength) {
	filteredWordsByLength.push(word);
  }
}

// create regexp.
let r = '';
for (let i = 0; i < wordLength; i++) {
  r += `(${letters.toString()})`;
}
r = r.replaceAll(',', '|');
r = `^${r}$`;

// find words by regexp.
let foundWords = [];
for (let word of filteredWordsByLength) {
  if (new RegExp(r).test(word)) {
	foundWords.push(word);
  }
}

// output found words.
if (foundWords.length > 0) {
  console.log(`Found words: ${foundWords.toString()}`);
} else {
  console.log('No words found.');
}

