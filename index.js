let quizForm = document.querySelector("#quiz-form");
let btn = document.getElementsByClassName("submit-btn");
var output = document.querySelector(".output");

const correctAns = ["A", "B", "C", "D", "A", "A"];
console.log(btn);

function showOutput() {
  output.style.display = "block";
  output.innerText = `Your score is ${score}`;
}
function check() {
  scrollTo(0, 0);

  let score = 0;
  let index = 0;
  let formData = new FormData(quizForm);
  console.log(formData);
  for (let values of formData.values()) {
    console.log(values);

    if (values === correctAns[index]) {
      score++;
    }
    index++;
  }
  output.style.display = "block";
  output.innerText = `Your score is ${score}`;
  console.log("Your Score is" + score);
}
quizForm.addEventListener("submit", check);
