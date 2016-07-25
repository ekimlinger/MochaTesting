var app = {
  logString: function(){
    console.log("Hey I am sending you this string");
  },
  doubleNumber: function(number){
    return number*2;
  },
  squareNumber: function(number){
    return number * number;
  },
  checkSecretPassword: function(password){
    var correct;
    if(password == "Mission to Alderan"){
      correct = true;
    }else{
      correct = false;
      console.log("These aren't the droids you're looking for.");
    }
    return correct;
  }
}


module.exports = app;
