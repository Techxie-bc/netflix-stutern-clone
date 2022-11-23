const questions = document.querySelectorAll(".contentBody");
questions.forEach(function (question) {
  const btn = question.querySelector(".detailed");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("active");
      }
    });
    question.classList.toggle("active");
  });
});

