const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const sliced = publicKey.sliced(1);
    const hash = keccak256(sliced);

    return hash.slice(-20);
}

module.exports = getAddress;