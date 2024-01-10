// 1. string 문자열
//  - 텍스트 정보
//  - 숫자, 특수문자도 따옴표 안에 있으면 문자열
// 따옴표 안에 따옴펴가 있다면
//  "안에 '작은 따옴표'가 있어요"
//  '안에 "큰 따옴표"가 있어요'
let myName = "진형";
let number1 = '123'
console.log(myName)
console.log(number1)

//  2.number (숫자)
let number2 = 123
let opacity = 0.7
console.log(number2)
console.log(opacity)

// NaN (not a number)
console.log('apple' - 3)

//3. boolean
// true나 false
let checked = true;
let isShow = false;
console.log(checked, isShow)

// 4.undefined
// 값도 없고 타입도 지정되지 않은 상태
let undef;
console.log(undef)

let empty = null
console.log(empty)

// 5.배열(array)
let fruits = ["orange", "pineapple", "strawberry"]
console.log(fruits[2])
console.log(fruits[0])

let data = [22,'22', false]
console.log(data[0])
console.log(data[1])

// 2차원 배열
const korean = [
    ["가", '나', '다'],
    ["라", '마', '바'],
    ["사", '아', '자']
]
console.log(korean[0]) //배열 ["가", '나', '다']
console.log(korean[0][1]) // '나'

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0])
console.log(letters[1][3])
console.log(letters[0][1])
console.log(letters[0][3])
console.log(letters[2][2])

// 3차원 배열
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]
//8찾기
console.log(nums[1][0][1])

/* object */
// {}
// 배열은 순서가 있는 반면, object는 키-값 형태로 저장
// 데이터에 접근 시 key이름을 이용해서 접근
//{키이름:val1, 키이름2:val2}
let cat = {
    name: '나비',
    age: 2,
    isCute: true,
    new: function(){
        return '냐옹'
    }
}
console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)
console.log(cat.new)
cat.like = 'tuna'
cat.age = 3
console.log(cat)

// 대괄호 표기법
let dog = {
    name: 'coco',
    isPoodle:true,
    age:3,
    sibling:['max', 'nucy']
}

console.log(dog.name)
console.log(dog["name"])
console.log(dog['age'])
console.log(dog['sibling'][1])


// // typeof
// let mathScore = prompt("수학 점수를 입력 하세요"); //'50'
// let engScore = prompt("영어 점수를 입력 하세요"); //'50'
// let mathNumber = Number(mathScore)
// let engNumber = Number(engScore)
// let avg = (mathNumber + engNumber)/2  //'5050 / 2'
// console.log(avg);

// console.log(typeof '문자') //string
// console.log(typeof mathScore) //string
// console.log(typeof mathNumber) //number
// console.log(typeof true)
// console.log(typeof [])
// console.log(typeof {})
// console.log(typeof NaN)
// console.log(typeof null)
// console.log(typeof undefined)

// 형변환
console.log('-----------------')
let str1 = true; //boolean
let str2 = 123; //number
let str3 = null; //null
console.log(String(str1))
console.log(String(str2))
console.log(String(str3))
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))

// 2. ?-> number
let n1 = true; //true -> 1
let n2 = false; // false -> 0
let n3 = 123;
let n4 = '123.9';

console.log(Number(n1))
console.log(Number(n2))
console.log(Number(n3))
console.log(Number(n4))
console.log(typeof Number(n4))
console.log(parseInt(n4)) //123, 소수점은 버리고 정수형으로 변경

console.log(typeof 10 + "isn't" + [])
console.log 


let mathScore = "77";
let engScore = "88";
let mathNumber = Number(mathScore)
let engNumber = Number(engScore)
let avgScore = (mathNumber+engNumber)/2
console.log(avgScore)

// let과 const
/* let과 const는 같은 이름으로 변수를 또 만들 수 는 없다
    하지만 만들어 놓은 변수에 다른값을 재설정 할 수 있다.
    예) let a = 100
        let a = 200 이런식으로 불가능
        let a = 100
        a = 200 으로 변경 가능*/
// let은 초기화시 값설정 안할 수 있다.
// const는 초기화시 값설정 무조건건 해야한다.