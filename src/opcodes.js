
/* Useful OP codes for the scripting language
 * Obtained from: https://github.com/litecoin-project/litecoin/blob/master/src/script/script.h
 */

module.exports = {
    OP_DUP: '76',
    OP_HASH160: 'a9',
    OP_EQUALVERIFY: '88',
    OP_CHECKSIG: 'ac',
    OP_CHECKBLOCKATHEIGHT: 'b4', //Litecoin is not using this, originally from: https://github.com/ZencashOfficial/zen/blob/master/src/script/script.h
    OP_EQUAL: '87',
    OP_REVERSED: '89' //this on is strange, as it should be 50 imo
};