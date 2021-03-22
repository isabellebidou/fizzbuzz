if (process.argv.length >= 3) {
  const n = parseInt(process.argv.slice(2));
  if (n) {
    console.log("thank you");
  } else {
    console.log("please try again with a digit");
  }
  var responses = wrapper(n);
  display(responses.length);
  var counter = 0;

  function wrapper(n) {
    var res = [];
    for (var i = 1; i < n; i++) {
      var response = i;
      if (i % 15 === 0) {
        response = "fizzbuzz";
      } else if (i % 5 === 0) {
        response = "buzz";
      } else if (i % 3 === 0) {
        response = "fizz";
      }
      res.push(response);
    }
    return res;
  }

  function display(r) {     
      if (r > 1){
        setTimeout(function() {
            console.log(responses[counter]);
            counter ++;    
            display(r-1);
          }, 1000);   
      }
  }
} else {
  console.log("please enter node server and a digit argument");
  console.log("like: ");
  console.log("       node server 27");
}
