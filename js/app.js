// Load all questions and answers for the user.

$(document).ready(function()  {
  var currentQuestion = 0;
  var codeQuestions = [{
    q: "Computer programming is one of the fastest growing occupations currently",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "The first virus was created in 1983",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "In fact, almost anything powered by electricity uses code.",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "Most coders are self-taught",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "The first computer programmer was a female, named Ada Lovelace.",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "Happy coders work from home",
    choices: ["True, False"],
    correct: 0
  }];
});

function quizView() {
  if (currentQuestion == codeQuestions.length) {
    $("#question").html("Please attempt to submit an answer.");
    $("#submit, #answers")
  }
}



  //Get the input from the user

//submitting questions

// Counter

//  Display question

// Submit event on form

// Get submit event, evaluate the answer right/wrong

// Running score, true or false.

// Increment the counter, questions.

// Display next question

// Counter > array.length > jump to final answer

// Replace the ID paragraph.

