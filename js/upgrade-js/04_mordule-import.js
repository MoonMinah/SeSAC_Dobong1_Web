// 모듈 사용 - import 키워드를 이용

const { getflr } = require("./04_export1");

// 따로따로 가지고 오는 방법
//import { flr, getflr } from "./04_export1";
// console.log(flr);
// console.log(getflr(2));
// console.log(getflr(3));

// 한번에 가지고 오는 방법(따로따로 가져오는게 효율면에선 더 좋다고함.)
import * as flowers from "./04_export1.js";

// flowers라는 이름의 객체로 담아오기
console.log(flowers);
console.log(flowers.flr);
console.log(flowers.getflr(1));

//export2 불러오기
//구조할당 이용
import { showAnimals, animals } from "./04_export2.js";
console.log(animals);
showAnimals();

import sayHi from "./05_exportdefault.js";
sayHi();
