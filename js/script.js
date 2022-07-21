function insert(num){
    var mystring = document.forms["form"]["textview"].value;
    var lastchar = mystring[mystring.length-1];
        if( mystring.length < 30){
            if(!isNaN(lastchar) || lastchar == null || !isNaN(num)){
                document.forms["form"]["textview"].value = mystring + num;
            }else if(num != lastchar){
                document.forms["form"]["textview"].value = mystring.replace(lastchar, num);
            }
        }
}
function equal(){
    var sum = document.forms["form"]["textview"].value;
    if(sum){
        document.forms["form"]["textview"].value= eval(sum);
    }
}
function clean(){
    document.forms["form"]["textview"].value ='';
}
function back(){
    var exp = document.forms["form"]["textview"].value;
    document.forms["form"]["textview"].value = exp.substring(0, exp, length-1);
}