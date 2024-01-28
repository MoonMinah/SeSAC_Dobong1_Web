//comonJS와 다르게 함수 선언문도 export가능
export const animals = ["dog", "cat"];
export function showAnimals() {
  animals.forEach((el) => console.log(el));
}
