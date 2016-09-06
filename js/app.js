// Load all questions and answers for the user.

$(document).ready(function() {
  var currentQuestion = 0;
  var score = 0;
  var quiz = {
    name: "coding",
    questions:[
      {
        q: "Computer programming is one of the fastest growing occupations currently",
        choices: ["True", "False"],
        correct: "true"
      }, {
        q: "The first virus was created in 1983",
        choices: ["True", "False"],
        correct: "true"
      }, {
        q: "In fact, almost anything powered by electricity uses code.",
        choices: ["True", "False"],
        correct: "true"
      }, {
        q: "Most coders are self-taught",
        choices: ["True", "False"],
        correct: "true"
      }, {
        q: "The first computer programmer was a female, named Ada Lovelace.",
        choices: ["True", "False"],
        correct: "true"
      }, {
        q: "Happy coders work from home",
        choices: ["True, False"],
        correct: "true"
      }
    ]
  };

  //Array to store answers
  var storeAnswers = [];

  // New Game Button
  $("#new-game").click(function(){
    newGame();
  });

  //Display question
  function displayQuestion(question) {
    console.log("Displaying Question...");
    $("#question").text(quiz.questions[question].q);
  }

  function checkAnswer(answer) {
    return (answer === quiz.questions[currentQuestion].answer)
  }

  //Submit on this form, do these things.
  $("#answer-form").submit(function(e) {
    e.preventDefault();
    console.log("Submitting Answer...");
    var answer = $("input[name='answer-choice']:checked").val();
    storeAnswers.push(answer);
    currentQuestion++;
    $("#counter").text(currentQuestion + "/" + quiz.questions.length)
    if (checkAnswer(answer)) {
      //Counter currenly surpasses the question value of 6.
      score++;
    }
  });

  //End of quiz? Display results
  function startQuiz() {
    console.log("Starting Quiz..."); 
    displayQuestion(currentQuestion); 
  }

  startQuiz();

  function newGame(){
    console.log("New Game Button Enabled...")
    currentQuestion = 0;
    $("#question").text(quiz.questions[question].q);
    $("counter").text(0 + "/");
  }

});
