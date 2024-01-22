// class: 오브젝트를 마들 수 있는 틀
/*
속성
- 만들어진 연도 year
- 집의 이름 name
- 창문의 갯수 window
메소드
- 건물의 나이 출력 age()
- 창문의 개수 출력 getWindow()
 */

class House{
    constructor(year, name, window){
        this.name = name;
        this.uear = year;
        this.window = window;
    }
    // 메소드
    getAge(){
        console.log(`${this.name}은 건축한지 ${2024-this.year}년 됐어요.`);
    }
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

// const h1 = {
//     name: 'old',
//     year: 1789,
//     window: 1,
//     함수 ~~
// };

const house1 = new House(1789, "old", 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, "자이", 10);
house2.getAge();
house2.getWindow();

console.log("----------상속----------");
//extends키워드를 사용하여 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House{
    constructor(name, year, window, floor, windowMaker){
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
    }

    // overriding
    // 부모 클래스의 이름은 똑같이 쓰고 싶지만 내용은 다르게 만들고 싶을 때(메소드 재선언)
    getWindow(){
        return`${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`
    }

    // getAge() << 상속받아서 사용 가능
}

//name, year, window, floor, windowMaker
const apt1 = new Apartment(2022, 'raemian', 19, 50, "kcc");
console.log(apt1.getWindow());  //오버라이딩 함수, 메소드 재정의
console.log("***************");
console.log(apt1.getAptInfo()); // 새로운 메소드 정의
apt1.getAge();  // 부모 메소드 그대로 상속
console.log(apt1);


// 실습
// 클래스 생성
class shape{
    constructor(col, row){
        // super(col,row); ->상속받을 값이 없기때문에 사용x
        this.col = col;
        this.row = row;
    }

getArea(){
    return this.col *this.row;
}}
let rec1 = new shape(3,4);
console.log(rec1.getArea());

/* 실습 해답
Shape 클래스 만들기
가로, 세로 속성(number)
넓이 구하는 메소드(return) */
/*
class Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.area = Number(width * height);
    }
  
    getArea() {
      console.log(this.area); // 콘솔로 확인
      return this.width * this.height; //return 으로 확인
    }
  }
  
  let rec1 = new Shape(3, 4);
  console.log(rec1.getArea());
  rec1.getArea();
  
  // 선택 (상속 이용)
  // 1. Rectangle 클래스
  class Rectangle extends Shape {
    // constructor(width, height) {
    //   super(width, height);
    // } -> 상속받을거지만 속성 추가할 거 아니라면 굳이 없어도 됨
    getDiagonal() {
      return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
  }
  
  // 2. Triangle 클래스
  class Triangle extends Shape {
    // 오버 라이딩
    getArea() {
      return (this.height * this.width) / 2;
    }
  }
  
  // 3. Circle 클래스
  // circle class 같은 경우에는 사실은 width,height 는 필요없어서
  // 클래스 자체를 새로 만드는게 낫지만 상속 연습을 위해 진행!
  class Circle extends Shape {
    constructor(width, height, circle) {
      super(width, height);
      this.circle = circle;
    }
    getArea() {
      return this.circle ** 2 * Math.PI;
    }
  }
  let rec = new Rectangle(6, 8);
  let tri = new Triangle(6, 8);
  let circle = new Circle(1, 1, 5);
  console.log("사각형 넓이" + rec.getArea());
  console.log("대각선 길이" + rec.getDiagonal());
  
  console.log("삼각형 넓이" + tri.getArea());
  console.log("원 넓이" + circle.getArea());
  */