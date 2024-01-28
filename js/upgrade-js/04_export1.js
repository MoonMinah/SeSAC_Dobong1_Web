// 모듈만들기 export 이용
// 한번에 내보내기

const flowers = ["rose", "sunflower", "tulip"];
function getFlowers(idx) {
  if (idx >= flowers.length || idx < 0) return "x";
  return flowers[idx];
}

// export {flowers, getFlowers}
// as를 이용해 별칭으로 내보낼 수 있다.
export { flowers as flr, getFlowers as getflr };
