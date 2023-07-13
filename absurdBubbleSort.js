const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2} ?`, res => {
     callback(res.toLowerCase() === 'yes');
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
if (i === arr.length - 1){
   return outerBubbleSortLoop(madeAnySwaps);
}
    askIfGreaterThan(arr[i],arr[i+1],
        function (isGrateThan) { 
            if (isGrateThan){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeAnySwaps = true;
            }
        console.log(arr);
        innerBubbleSortLoop(arr,i+1,madeAnySwaps, outerBubbleSortLoop);
    }
);}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps){
        innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    }
    else{       
         sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
};

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// askIfGreaterThan(1, 2, function (x) {console.log(x)}); 

// let arry = [3, 2, 1];
// innerBubbleSortLoop(arry,0,false,
//      madeAnySwaps=> {console.log(madeAnySwaps,'test');
// console.log('newArr Status',arry)});
