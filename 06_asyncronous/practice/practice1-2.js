function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(name);
      res(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("back");
      res("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res("hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행
async function execute() {
  const name = await call("kim");
  console.log(name + "반가워");

  const txt = await back();
  console.log(txt + "을 실행했구나");

  const message = await hell();
  console.log("여기는 " + message);
}
execute();
