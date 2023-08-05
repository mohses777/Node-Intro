const EventEmiiter = require('events')

const customEmitter = new EventEmiiter()

customEmitter.on('response',()=>{
    console.log(`data recieved`)
})

customEmitter.emit('response')