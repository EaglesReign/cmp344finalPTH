//Phil Hofer
//5/4/2015
//CMP344 Javascript 101
//problem2.js

var answer = 0;
function addself(a,b) {
  answer += a;     //add a to answer
  if (b == 0) {    //check if b == 0
    answer -= a;   //fixes a bug that I had
    return answer; //return the answer
  } 
  return addself(a, b - 1);//decrement b
}

print(addself(6,3));
