const {readFile} = require("fs")

console.log("Started a first task")
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    console.log("Completed the first task")
})

console.log("Starting new task")


////The starting new task is logged to the console before the readfile fuction is run