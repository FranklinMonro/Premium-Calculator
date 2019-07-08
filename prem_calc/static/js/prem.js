function investmentAmount(){ //function to get investment amount and brakcet
  var inv = document.getElementById("inv").value;
  if(inv == "1"){
    premBkt = "1";
    document.getElementById("premBracket").value =  premBkt;
  }else if(inv == "2"){
    premBkt = "2";
    document.getElementById("premBracket").value =  premBkt;
  }else if(inv == "3"){
    premBkt = "3";
    document.getElementById("premBracket").value =  premBkt;
}else if(inv == "4"){
  premBkt = "4";
  document.getElementById("premBracket").value =  premBkt;
}else if(inv == "5"){
    premBkt = "5";
    document.getElementById("premBracket").value =  premBkt;
  }else{
    document.getElementById("premBracket").value =  "Pick amount for investment";

  }

};

  function getAge() { // funtion to get age and age bracket
    var getID = document.getElementById("enterID").value;
    var idARRAY = getID.split("");
    var getYear = idARRAY.slice(0, 2).join("");
    var getMonth = idARRAY.slice(2,4).join("");
    var getDay = idARRAY.slice(4,6).join("");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth()+1;
    var currentDay = currentDate.getDate()
    var lastDig = currentYear.toString().substr(-2);

    if(getYear > lastDig){ // if statement to add century to birth year from ID
      var birthYear = "19"+getYear
    }else{
      var birthYear = "20"+getYear
    }
    document.getElementById("outputID2").value = birthYear + "-" + getMonth + "-" + getDay;
    document.getElementById("currentYear").value = currentYear + "-" + currentMonth + "-" + currentDay;

    if(currentMonth >= getMonth){ // if statement to get age
      var age = currentYear - birthYear;
      document.getElementById("currentAge").value = age;
    }else{
      age = currentYear - birthYear -1;
      document.getElementById("currentAge").value = age;
    }

    if(age >= 18 && age <= 25){ // if statement to give age bracket
      var ageBKT = "1";
      document.getElementById("ageBracket").value = ageBKT;
    }else if(age >= 26 && age <= 40){
      ageBKT = "2";
      document.getElementById("ageBracket").value = ageBKT;
    }else if(age >= 41 && age <= 45){
      ageBKT = "3";
      document.getElementById("ageBracket").value = ageBKT;
    }else if(age >= 46 && age <= 50){
      ageBKT = "4"
      document.getElementById("ageBracket").value = ageBKT;
    }else if(age >= 51 && age <= 55){
      ageBKT = "5";
      document.getElementById("ageBracket").value = ageBKT;
    }else if(age >= 56 && age <= 60){
      ageBKT = "6";
      document.getElementById("ageBracket").value = ageBKT;
    }else if(age >= 61 && age <= 65){
      ageBKT = "7";
      document.getElementById("ageBracket").value = ageBKT;
    }else{
      document.getElementById("ageBracket").value = "Sorry we can't help you";
    }

  };

  function feeBracket(){
    var age = document.getElementById("ageBracket").value;
    var inv = document.getElementById("premBracket").value;
    if(age == "1" && inv == "1"){
      var feeBkt = "1";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "1" && inv == "2" ){
      feeBkt = "2";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "1" && inv == "3" ){
      feeBkt = "3";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "1" && inv == "4" ){
      feeBkt = "4";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "1" && inv == "5" ){
      feeBkt = "5";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "2" && inv == "1" ){
      feeBkt = "6";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "2" && inv == "2" ){
      feeBkt = "7";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "2" && inv == "3" ){
      feeBkt = "8";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "2" && inv == "4" ){
      feeBkt = "9";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "2" && inv == "5" ){
      feeBkt = "10";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "3" && inv == "1" ){
      feeBkt = "11";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "3" && inv == "2" ){
      feeBkt = "12";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "3" && inv == "3" ){
      feeBkt = "13";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "3" && inv == "4" ){
      feeBkt = "14";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "3" && inv == "5" ){
      feeBkt = "15";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "4" && inv == "1" ){
      feeBkt = "16";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "4" && inv == "2" ){
      feeBkt = "17";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "4" && inv == "3" ){
      feeBkt = "18";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "4" && inv == "4" ){
      feeBkt = "19";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "4" && inv == "5" ){
      feeBkt = "20";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "5" && inv == "1" ){
      feeBkt = "21";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "5" && inv == "2" ){
      feeBkt = "22";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "5" && inv == "3" ){
      feeBkt = "23";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "5" && inv == "4" ){
      feeBkt = "24";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "5" && inv == "5" ){
      feeBkt = "25";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "6" && inv == "1" ){
      feeBkt = "26";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "6" && inv == "2" ){
      feeBkt = "27";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "6" && inv == "3" ){
      feeBkt = "28";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "6" && inv == "4" ){
      feeBkt = "29";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "6" && inv == "5" ){
      feeBkt = "30";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "7" && inv == "1" ){
      feeBkt = "31";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "7" && inv == "2" ){
      feeBkt = "32";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "7" && inv == "3" ){
      feeBkt = "33";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "7" && inv == "4" ){
      feeBkt = "34";
      document.getElementById("feebrak").value = feeBkt;
    }else if(age == "7" && inv == "5" ){
      feeBkt = "35";
      document.getElementById("feebrak").value = feeBkt;
    }else{
      document.getElementById("feebrak").value = "Check entries";
    }
  }


  function nonMemFee(){// When non member then this function to take in age bracket and premium bracket to give correct premium price
    var feeBkt = document.getElementById("feebrak").value;
    var policy_price = {1:30.00,
                        2:36.00,
                        3:39.96,
                        4:42.00,
                        5:63.00,
                        6:38.00,
                        7:48.95,
                        8:54.36,
                        9:58.00,
                        10:87.00,
                        11:42.00,
                        12:54.00,
                        13:61.56,
                        14:66.00,
                        15:99.00,
                        16:46.00,
                        17:58.95,
                        18:67.68,
                        19:73.00,
                        20:109.50,
                        21:51.00,
                        22:67.95,
                        23:78.48,
                        24:85.00,
                        25:127.50,
                        26:61.00,
                        27:82.05,
                        28:95.58,
                        29:104.00,
                        30:156.00,
                        31:74.00,
                        32:103.05,
                        33:120.24,
                        34:131.00,
                        35:196.50};
    for(var key in policy_price){
      document.getElementById("premiumFee").value = (policy_price[feeBkt])
    }

}

function memFee(){// When non member then this function to take in age bracket and premium bracket to give correct premium price
  var feeBkt = document.getElementById("feebrak").value;
  var policy_price = {1:36.00,
                      2:49.05,
                      3:57.06,
                      4:62.00,
                      5:93.00,
                      6:47.00,
                      7:64.95,
                      8:75.42,
                      9:82.00,
                      10:123.00,
                      11:52.00,
                      12:73.05,
                      13:85.32,
                      14:93.00,
                      15:139.50,
                      16:57.00,
                      17:79.95,
                      18:93.42,
                      19:102.00,
                      20:153.00,
                      21:64.00,
                      22:90.00,
                      23:105.84,
                      24:116.00,
                      25:174.00,
                      26:74.00,
                      27:106.05,
                      28:125.46,
                      29:138.00,
                      30:207.00,
                      31:90.00,
                      32:130.05,
                      33:154.26,
                      34:170.00,
                      35:255.00};
  for(var key in policy_price){
    document.getElementById("premiumFee").value = (policy_price[feeBkt])
  }

}

function totalFee(){
  var month = document.getElementById("monthlyfee").value;
  var premium = document.getElementById("premiumFee").value;
  document.getElementById("totalfee").value = parseFloat(month) + parseFloat(premium);
}
