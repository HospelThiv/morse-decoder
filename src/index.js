const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr,) {
    let coder = (decoding = "")
    for (let i = 0; i < expr.length; i += 10) {
        for (let j = 0; j < 10; j += 2) {
            if (`${expr.charAt(j + i)}${expr.charAt(j + i + 1)}` == '11') coder = `${coder}-`
            if (`${expr.charAt(j + i)}${expr.charAt(j + i + 1)}` == '10') coder = `${coder}.`
            if (`${expr.charAt(j + i)}${expr.charAt(j + i + 1)}` == '**') {
                decoding = `${decoding} `
                break;
            };
            if (j == 8) {
                decoding = `${decoding}${MORSE_TABLE[coder]}`;
                coder = "";
            }
        };
    };
    return decoding;
}

module.exports = {
    decode
}