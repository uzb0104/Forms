// const names = ["test", "fest"];
// const values = [
//   [12, 44],
//   [44, 33],
//   [55, 99],
// ];

// let res = values.reduce((acc, currentvalue) => {
//   return acc.concat({ [MediaKeyMessageEvent[0]]: currentvalue[0] });
// }, []);
// console.log(res);

let questions = [{ id: 1, title: "Question without title" }];

function shoWindowQuestion(questions) {
  const addquestionsHtml = questions
    .map(
      (question) => `
      <div class="question">
          <h3>${question.title} ${question.id}</h3>
          <label><input type="radio" name="option${question.id}" id="option${question.id}-1"> Вариант 1</label>
          <label><input type="radio" name="option${question.id}" id="option${question.id}-1"> Add option</label>
      </div>
  `
    )
    

  document.getElementById("add-new-icon").innerHTML = addquestionsHtml;
  document.getElementById("add-new-question") .plusQuestion("click", plusQuestion);
}

function plusQuestion() {
  const addQuestion = questions.length + 1;
  questions.push({ id: addQuestion, title: "Question without title" });
  shoWindowQuestion(questions);
}

shoWindowQuestion(questions);
