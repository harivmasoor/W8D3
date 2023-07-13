const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0){
        rl.question('Input a number :', reader => {
           let sumNew = sum + parseInt(reader);
           let numsLeftNew = numsLeft -1;
            addNumbers(sumNew,numsLeftNew,completionCallback);
        });
    }
    else{
        completionCallback(sum);
        rl.close();
    }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));