function reversedStr(str){
    var listOfChar=str.split('');
    var reverseListOfChars = listOfChar.reverse();
    var reversedStr=reverseListOfChars.join('');
    return reversedStr;
}

function isPalindrome(str){
var reverse=reversedStr(str);
return str===reverse

}

function convertDateToStr(date){

var dateStr={day:'',month:'',year:''};
if(date.day<10){
    dateStr.day='0'+date.day;
}else{
    dateStr.day=date.day.toString();
}
if(date.month<10){
    dateStr.month='0'+date.month;
}else{
    dateStr.month=date.month.toString();
}

dateStr.year=date.year.toString();
return dateStr;
}


function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);
    var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year; 
    var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
    var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
    var ddmmyy  =dateStr.day+dateStr.month+dateStr.year.slice(-2);
    var mmddyy  =dateStr.month+dateStr.day+dateStr.year.slice(-2);
    var yymmdd=dateStr.year.slice(-2)+dateStr.month+dateStr.day;
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
}
function checkPalindromeForAllDateFormats(date){
var listOfPalindromes=getAllDateFormats(date);

var flag =false;
for(var i=0;i<listOfPalindromes.length;i++){
    if(isPalindrome(listOfPalindromes[i])) {
        flag=true;
        break;
    }
   
}
return flag;
}

function isLeapYear(year){
    if(year%400 ===0){
        return true;
    }if(year%100 ===0){
        return false;
    }if(year%4 ===0){
        return true;
    }
    return false;
}

function getNextDate(date){
    var day=date.date+1;
    var month=date.month;
    var year =date.year;

    var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31]
}

function getNextPalindromeDate(date){

}

var date={
    day:13,
    month:9,
    year:2011
}

console.log(isLeapYear(2020));
