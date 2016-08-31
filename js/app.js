// Load all questions and answers for the user.

$(document).ready(function()  {
  var currentQuestion = 0;
  var quiz = {
    name: "coding",
    questions:[{
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
    }]
  };


  //Array to store answers
  var storeAnswers = [];

  //Display question
  function displayQuestion(question) {
    console.log("display question!")
    $("#question").text(quiz.questions[currentQuestion].q);
  }

  //Submit on this form, do these things.
  $("#answer-form").submit(e) {
    e.preventDefault();
    console.log("answer");
    var answer = $("input[name='answer-choice']:checked").val();
    console.log(answer);  
  }
  //Listen for answer
  //Process answer
  //Increment score
  //Get feedback from user true, false
  //Go to next question
  //End of quiz? Display results
  function startQuiz () {
    console.log("start Quiz"); 
    displayQuestion(currentQuestion); 
  }

  startQuiz();
});