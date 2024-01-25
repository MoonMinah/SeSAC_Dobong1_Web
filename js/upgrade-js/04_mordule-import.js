// 모듈 사용 - import 키워드를 이용

const { getflr } = require("./04_export1");

//import { flr, getflr } from "./04_export1";
console.log(flr);
console.log(getflr(2))
console.log(getflr(3))

console.log(flowers)
console.log(flowers.flr)
console.log(flowers.getflr(1))


import {showAnimals, animals} from './04_export2.js'