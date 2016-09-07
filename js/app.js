// Load all questions and answers for the user.
var answer;

$(document).ready(function() {
  var currentQuestion = 1;
  var score = 0;
  var quiz = {
    name: "coding",
    questions:[
      { 
        q:"",
        choices:"",
        correct:""
      },
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

  // New Game Button
  //$("#new-game").click(function(){
  // newGame();
  //});

  //Display question
  function displayQuestion(currentQuestion) {
    $("#question").text(quiz.questions[currentQuestion].q);
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
    console.log(currentQuestion);
    checkAnswer();
    displayQuestion(currentQuestion);
    currentQuestion++;
  });

  //End of quiz? Display results
  function startQuiz() {
    console.log("Starting Quiz..."); 
    //displayQuestion(currentQuestion); 
    $("#counter").text((currentQuestion + 1) + "/" + ((quiz.questions.length) - 1));
  }


  startQuiz();

 //The newGame button is supposed to display question #1, included a debugging console.log to verify function.
 //0 & "/" is the counter and the slash next to it, replacing these values only, not the total questions. **BUG**
 /* function newGame(){
    console.log("New Game Button Enabled...")
    currentQuestion = 0;
    $("#question").text(quiz.questions[q].q);
    $("counter").text(0 + "/");
  }
*/

});
