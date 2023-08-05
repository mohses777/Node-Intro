const {readFile,writeFile} = require("fs")///or using .promises here
const util = require("util")
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try{
        const first = await readFilePromise('./content/first.txt','utf-8')
        const second = await readFilePromise('./content/second.txt','utf-8')
        await writeFilePromise('./content/result3.txt',`THIS IS AWESOME: ${first} ${second}`)
        console.log(first,second)
    }catch(err){
        console.log(err)
    }
}

start()