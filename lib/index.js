const { RED, server } = require("./server")
const { name: appName, version } = require("../package.json")

const PORT = process.env.PORT || 80
server.listen(PORT, () => {
    const appAboutMsg = `${appName} v${version}`
    const separator = "".padStart(appAboutMsg.length, "=")
    console.log(`${appAboutMsg}\n${separator}\n`)
    console.log(`fluxos iniciados na porta ${process.env.PORT}`)
})
RED.start()