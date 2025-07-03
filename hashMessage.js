const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const bytes = utf8ToBytes("Vote Yes on Proposal 327");
    const hash = keccak256(bytes);

    console.log(toHex(hash));

    return message;
}

module.exports = hashMessage;