// input parameters.
let wordsSource = '';
let word = '';

// insert parameters.
process.argv.forEach(function (val, index, array) {
  switch(index) {
	case 2:
	  wordsSource = val;
	  break;
	case 3:
	  word = val;
	  break;
  }
});

// normalize parameters.
word = word.toLowerCase();

// include words list.
let wordsList = require(wordsSource);

// get word length.
let wordLength = word.length;

// filter words by length.
let filteredWordsByLength = [];
for (let word of wordsList) {
  if (word.length === wordLength) {
	filteredWordsByLength.push(word);
  }
}

// create regexp.
let r = `^${word}$`;
r = r.replaceAll('.', '.{1}');

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

