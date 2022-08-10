const jwt = require('jsonwebtoken');

const defaultSecret = '8aa5A69hp8@1'

function encodeString(stringToEncode, secret = defaultSecret){
	return jwt.sign({ saludo: stringToEncode }, secret);
}

function decodeString(tokenToDecode, secret = defaultSecret){
	try {
		const verified = jwt.verify(tokenToDecode, secret)
		if (verified) {
			return jwt.decode(tokenToDecode)
		}

		return { verified: false }
	} catch (error) {
		return { error }
	}
}

module.exports = {
	encodeString,
	decodeString
}