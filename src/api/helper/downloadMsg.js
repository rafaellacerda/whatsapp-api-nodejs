const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

module.exports = async function downloadMessage(msg, msgType) {
    let buffer = Buffer.from([])
    // let base64 = ''

    try {
        const stream = await downloadContentFromMessage(msg, msgType)
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        // console.log('buffer', buffer)

        // base64 = Buffer.from(buffer).toString('base64')
    } catch {
        return console.log('error downloading file-message')
    }

    return buffer.toString('base64')
}
