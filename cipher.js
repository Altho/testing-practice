function cipher(string, offset) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upString = string.toUpperCase();
    let newString = '';
    for (let i = 0; i < upString.length; i++) {
        if (upString[i] === " ") {
            newString = newString + " ";
        } else if (specialChar(alphabet, upString[i]) === -1) {
            newString = newString + upString[i]
        } else {
            let letterIndex = alphabet.indexOf(upString[i]);
            if (letterIndex + offset > 25) {
                let newIndex = letterIndex + offset - 26;
                let newChar = newString + (alphabet[newIndex]);

                newString = newChar;

            } else {

                newString = newString + (alphabet[letterIndex + offset]);

            }

        }

    }
    return newString;
}

function specialChar(alphabet, char) {
    return alphabet.indexOf(char);
}

module.exports = cipher;