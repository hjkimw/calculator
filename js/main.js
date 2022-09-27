let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

// 고차함수를(hight order function)사용한 함수 중복제거 방법
// 함수를 호출해서 리턴값으로 함수를 받는다

// const onClickNumber = (number) => (event) => {
//     if (operator) { // 존재한다
//         numTow += number;
//     } else { // 존재하지 않는다
//         numOne += number;
//     }
//     $result.value += number;
// }

// event.target.textConent를 사용하여 해당 이벤트걸린 타켓의 값을 가져오는방법

const onClickNumber = (e) => {
  if (!operator) {
    // operator가 없을경우
    numOne += e.target.textContent;
    $result.value += e.target.textContent;
    return;
  }
  // operator가 존재할 경우에만 실행됨
  if (!numTwo) {
    //numTwo가 없을경우 문장 실행
    $result.value = ""; // numTwo가 없을 경우 $result input창의 값을 지움
  }
  numTwo += e.target.textContent;
  $result.value += e.target.textContent;
};

document.querySelector("#num-0").addEventListener("click", onClickNumber); //함수 호출 onClickNumber('0')은 undefined가 아닌 함수를 리턴받게됨
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (oper) => (e) => {
  if (numOne) {
    operator = oper;
    $operator.value = oper;
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  // 계산
  if (numTwo) {
    // numTwo가 있는가? 있으면 true로 형변환됨
    if (operator === "+") {
      $result.value = parseInt(numOne) + parseInt(numTwo);
    } else if (operator === "-") {
      $result.value = parseInt(numOne) - parseInt(numTwo);
    } else if (operator === "*") {
      $result.value = parseInt(numOne) * parseInt(numTwo);
    } else if (operator === "/") {
      $result.value = parseInt(numOne) / parseInt(numTwo);
    }
  } else {
    alert("숫자를 먼저 입력해주세요.");
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
