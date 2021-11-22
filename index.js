/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);
console.log("todos: ", window.todos);

function checkingUserLetterInput (userInputLetterParameter) {

    let stringToArray = userInputLetterParameter.split("")
    if ( Number(userInputLetterParameter) || stringToArray.length >= 2 ) {

        alert("Please enter again this time enter a character not a number, or a multi letters, or empty or maybe you entered more than one letter, or empty : ")
        console.log("Please enter again this time enter a character not a number, or empty, or 2 or more letters ! : ")
        userInputLetter = prompt("Hi User, please enter a letter : ")

        if ( Number(userInputLetter) || stringToArray.length >= 2 ) {
            alert("You are troller !")
            throw new Error("Troll he doesnt follow the instuctions!")
        }

    }
    
}

function checkingUserIdNumberInput (userInputIdParameter) {
    
    if ( Number.isNaN(userInputIdParameter) || (userInputIdParameter > 10 || userInputIdParameter < 1) ) {
    alert("Please user enter a number not a string dont enter big values or negative")
    userInputIdParameter = Number(prompt("Please enter again this time a number 1-10 : "))

        if (Number.isNaN(userInputIdParameter)) {
            alert("Sorry User we terminate the program you are trolling us.")
            throw new Error("This user is trolling entering numbers in place of string")
        }
    }

}

function checkingUserLetterMatch (userInputLetterParameter) {

    let messageDisplay = ``
    for (let element of users) {

        if (element.name.includes(userInputLetterParameter)) {
            messageDisplay += `Hi user : ${element.name} \n`
        }

   }
   // Loop ends here

   if(messageDisplay.length > 0) {
   // if at least something was added to the message
     console.log(messageDisplay)
     alert(messageDisplay)
   }

    else {
     // message empty. Nothing was found
     alert("Oops, no match!")
   }

}

function checkingUserToDoIdMatch (userIdInputParameter) {

    let messageDisplay = ``
    for (let element of todos) {

        if (element.userId === userIdInputParameter) {
             messageDisplay += `Hi user with todo title: ${element.title} \n and todo id : ${element.id} \n and the status : ${element.completed} \n \n`
        }
    }

    // Loop ends here

   if(messageDisplay.length > 0) {
    // if at least something was added to the message
      console.log(messageDisplay)
      alert(messageDisplay)
    }

     else {
      // message empty. Nothing was found
      alert("Oops, no match!")
    }

}

let userInputLetter = prompt("Hi User, please enter a letter : ")
checkingUserLetterInput(userInputLetter)
checkingUserLetterMatch(userInputLetter)

let userIdInput = Number(prompt("Enter User id in number from 1-10 :"))
checkingUserIdNumberInput(userIdInput)
checkingUserToDoIdMatch(userIdInput)