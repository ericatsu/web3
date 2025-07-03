const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const hash = hashMessage(message);

    const publicKey = secp.recoverPublicKey(hash, signature, recoveryBit);
    return publicKey;
}

module.exports = recoverKey;