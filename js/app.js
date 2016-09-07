// Load all questions and answers for the user.
var answer;

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

  //New Game Button click function.
  
  $("#new-game").click(function(){
   newGame();
  });
  

  //Display question
  function displayQuestion(currentQuestion) {
    $("#question").text(quiz.questions[currentQuestion].q);
    $("#counter").text((currentQuestion + 1) + "/" + quiz.questions.length);
  }

  //Check if the answer is correct
  function checkAnswer() {
    if (answer === quiz.questions[currentQuestion].correct) {
        score++;
      } 
    }

  //Submit on this form, do these things.
  $("#answer-form").submit(function(e) {
    e.preventDefault();
    console.log("Submitting Answer...");
    //Answer = The value they put in.
    answer = $("input[name='answer-choice']:checked").val();
    $("input[name='answer-choice']").prop("checked", false);
    console.log(currentQuestion);
    checkAnswer();
    if(currentQuestion < quiz.questions.length) {
      displayQuestion(currentQuestion);
      currentQuestion++;
    } else {
      showScore();
    }
  });

  //Display Quiz questions
  function startQuiz() {
    console.log("Starting Quiz..."); 
    displayQuestion(currentQuestion); 
  }

  function showScore() {
    console.log("Show Score!")
    $("#results").append("<p>Your score is " + score + "</p>");
  };
  startQuiz();

 //The newGame button is supposed to display question #1.
 //0 & "/" is the counter and the slash next to it, replacing these values only, not the total questions. **BUG**
 
  function newGame() {
    console.log("New Game Button Enabled...")
    currentQuestion = 1;
    score = 0;
    startQuiz();
  }
});

