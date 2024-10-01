import inquirer from 'inquirer'

const choices = ['Number', 'Name', 'Numeric Array']
let typeOfInput = ""

console.log("Hello there!")

inquirer
    .prompt([
        {
            type: 'list',
            name: 'selectedOption',
            message: 'What are you going to type:',
            choices: choices
        }
    ])
    .then((answers) => {
        typeOfInput = answers.selectedOption;
        console.log(`Great, You have chosen: ${typeOfInput === "Numeric Array" ? "Numeric Array. Example: 1, 2, 3, 4, 5" : typeOfInput }`)
        return inquirer.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: "Please type it here:"
            }
        ])
    })
    .then((answers) => {
        const userInput = answers.userInput;
        if (typeOfInput === "Number") {
            if (parseInt(userInput, 10) > 7) {
                console.log("Hello")
            }
        } else if (typeOfInput === "Name") {
            if (userInput === "John") {
                console.log("Hello, John")
            } else {
                console.log("There is no such name")
            }
        } else if (typeOfInput === "Numeric Array") {
            const arrayInput = userInput.split(", ")
            const arrayNumbers =  arrayInput.map(element => parseInt(element, 10))
            const arrayResult = arrayNumbers.filter(number => number % 3 === 0)
            console.log("Elements that are multiples of 3:", arrayResult);
        }

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Your terminal doesn't support interactive prompts.")
        } else {
            console.log("An error occurred:", error)
        }
    })