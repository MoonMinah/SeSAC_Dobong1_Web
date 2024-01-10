//1. for 문
/* for(변수 선언과 초기값 할다; 조건식(어디까지 중가인지감소인지); 증감식){
    반복할 코드;
}
*/

for(let i = 0; i < 10; i=i+1){
    console.log('안녕', i)
}
for(let i = 0; i<10; i+=2){
    console.log(`안녕하세요 ${i}`);
}
// 1~5 증가
for(let i =1; i<=5; i++){
    console.log(i)
}
for(let i =0; i<5; i++){
    console.log(i+1)
}
// 1~5 감소
for(let i =5; i>0; i--){
    console.log(i)
}
// 1부터 n까지의 덧셈
let n = 11;
let sum1 = 0;
for(let i = 1; i < n+1; i++){
    console.log(i)
    sum1 += i;
}
console.log(sum1)

//배열과 함께 하용하는 for문
let fruits = ['사과', '망고', '오렌지', '망고스틴']
console.log(fruits.length) //length는 배열의 길이 확인
for(let i = 1; i<fruits.length; i++){
    console.log('i like', fruits[i-1])
}

let numsArr = [99, 99, 98, 85, 77];
let sum2 =0;
//console.log(numsArr.length)
for(let i = 0; i<numsArr.length; i++){
    
    sum2+= numsArr[i]; //그냥 i를 쓰면 0,1,2,3,4가 더해짐
}
console.log(sum2)


// 2. while문
/*
초기화식
while(조건식){
    조건이 참일 때 실행할 문장;
    증감식;
} 
*/
let n2=1; // 초기화식
while(n2 <= 5){ //조거식
    console.log(n2); //실행문
    n2++; //증감식
}
console.log('----------------------')
n2 = 10;
while(n2>4){
    console.log(n2);
    n2--;
}
//1~10까지 짝수만
// n2 = 1;
// while(n1<=10){
//     if(n2 %2 === 0){
//         console.log(n2);
//     }
//     n2++;
// }

//10부터 1까지 감소하는데 홀수만 출력
n2=10;
while(1<=n2){
    if(n2%2===1){
        console.log(n2);
    }
    n2--;
}

let b = 0;
while(true){
    console.log(b);
    b++;
    if(b >10) break;
}
console.log('----------------------')

let sum3 = 0;
for(let i = 0; i<10; i++){
    if(i%2===0) continue; //i가 짝수일 때 반복하지 않고 다음 반복으로 넘김
    sum3 +=i;
}
//console.log(num3)

// let n3 = 0;
// while(confirm('계속 진행할까요?')){
//     n3++;
//     alert(`${n3}번째 alret 창`)
// } 

//실습문제 

//let a = 13;
let a = prompt('숫자를 입력하세요')
for(let i = 1; i<=1000; i++){
    if(a%13==0 && a%2 !=0) break;
}

//2단부터 9단까지 구구단
//let c = [2,3,4,5,6,7,8,9];
for(let i =1; i<=9; i++){
}
console.log(i,'*', i)

// 0~100의 숫자 중 2 또는 5 배수
for(let i=0; i<=100; i++){
    if(i%2==0 || i%5==0)
}