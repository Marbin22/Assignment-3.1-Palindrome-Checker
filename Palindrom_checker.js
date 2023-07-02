function palin() {// function name 

  
    var inputVal = document.getElementById("palindrome").value;// get the input 
    var input = inputVal.toLowerCase();// changes the input to lower case letters


  var split = input.split(""); // splits the word into individual letters
  var reverse = split.reverse();// reverses the split word
  var revWord = reverse.join("");// joins the revers word
  var result = document.getElementById("result");// updates the result
  

    if (revWord == input) {// does the revword equal the initial input
      result.innerHTML = "It is a Palindrome, try another one";// in the reverse word is the same as the input display this 
    } else {
      result.innerHTML = "It is  not a Palindrome, try again some examples (level, mom, noon, deed )"// if the reverse word is not the same as input then display this message
  }
}