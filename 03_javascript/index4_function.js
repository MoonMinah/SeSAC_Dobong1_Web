/*함수
    - 어떤 작업을 수행하기 위해 "독립적으로"설계된 코드의 집합
    - 함수를 정의(선언)하고 호출(사용)
    - 선언방식 3가지
        - 함수 선언문
            - 선언 후 어디에서나 ㅏㅅ용 ㅏㄱ능
        - 함수 표현식
            - 선언 이후에만 사용 가능
        - 화살표 함수
            - 화살표 함수와 함수표현식은 변수에 익명함수를 다아둔 모양
            - 화살표 함수와 함수 표현시은 동일함 (모양만 다르고 똑같다.)
*/
// 함수 선언문
helloWorld1();

function helloWorld1(){
    console.log('helloWorld1')
}
helloWorld1();
helloWorld1();

//함수 표현식


const helloWorld2 = function(){
    console.log('hello world 2')
}
helloWorld2();

//화살표 함수
const helloWorld3 = function(){
    console.log('hello World 3')
}
helloWorld3();

//함수에 인자(parameter) 전달
function add(number1, number2){
    console.log(number1 + number2);
}
add(1, 2)
console.log(add(1,1))

/*return
    - 반환 값으로 함수 내부 코드의 '최종결고값'을 가지고 있는 것
    - console.log 등으로 출려하는데 그치지 않고 값을 저장하고 보관하기 위한 키워드
    - return을 만나면 함수 실행 중단
*/
const add1 = function(number1, number2){
    console.log('리턴 전에는 잘 실행돼요')
    return number1 + number2;
    console.log('리턴 이후에는 실행되지 않아요')
}
console.log(add1(3,5))
const result1 = add(3,5)
const result2 = add(3,2)
console.log(result1)
console.log(result2)

const sayHello= function(){
    return Text;
}
console.log(sayHello('Alli'))

function sayHello2(text, name){
    return `${text}${name}`
}
console.log(sayHello2('hi', 'alli'))

//함수 표현식(sayHello3), 화살표 함수(sayHello4)
// const sayHello3 = function(text, name){
//     return text + name;
// }
// const sayHello4 = ()=>{
//     return text + name;
// }

// console.log(sayHello3('hi3','allie'))
// console.log(sayHello4('hi4','allie'))

//연습문제
// multifly();
// function multifly(a,b){
//     console.log(a*b);
// }
// console.log(multifly(3,7));
// console.log(multifly(2,2));


const square = function(a){
    console.log(a**2)
}
square(4)
square(11)
square(5)