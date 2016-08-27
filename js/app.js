// Load all questions and answers for the user.

$(document).ready(function()  {
  var currentQuestion = 0;
  var codeQuestions = [{
    q: "Code is a set of instructions (or rules) that computers can understand; it might be helpful to think of code as a recipe.",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "People write code, code powers computers and computers power many everyday objects like phones, watches, microwaves and cars.",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "In fact, almost anything powered by electricity uses code.",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "There are many names for people who code: coders, programmers, developers, computer scientists, software engineers, etc.",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "Perl is sometimes known as the “Swiss-Army knife” of programming languages because of it’s multi-functionality.",
    choices: ["True", "False"],
    correct: 0
  }, {
    q: "There are “low-level” and “high-level” coding languages. Lower-level languages more closely resemble binary code while higher-level languages are easier to code in",
    choices: ["True, False"],
    correct: 0
  }];
});

  //Get the input from the user

