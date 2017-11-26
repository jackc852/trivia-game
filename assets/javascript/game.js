//Pseudo code
//Timer set to 30 seconds
//4 multiple choice questions at a time


function generateQuestions(questions, questionContainer, resultsContainer, submitButton) {

	function showQuestions(questions, questionContainer) {

	}

	//show questions
	showQuestions(questions, questionContainer);

	submitButton.onclick=function() {
		showResults(questions, questionContainer, resultsContainer);
	}
}

//multiple choice questions
var myQuestions = [
	{
		question: "This MC studied drama at Baltimore’s School For The Arts",

		answers: {
			a: "The Notorious BIG",
			b: "Jay-Z",
			c: "Tupac",
			d: "Eminem",
		},
		correctAnswer: "c"
	},
	{
		question: "This DJ served as the show DJ for the rap group Rugged N Raw",

		answers: {
			a: "DJ Cash Money",
			b: "Jay Phillz",
			c: "Roc Raida",
			d: "DJ Q-Bert",
		},
		correctAnswer: "b"
	},
	{
		question: "This MC is often referred to as the 'God MC'",

		answers: {
			a: "KRS-One",
			b: "Eminem",
			c: "Big Daddy Kane",
			d: "Rakim",
		},
		correctAnswer: "d"
	},
	{
		question: "Ice Cube has a cousin in the Bay Area Rap Group The Hieroglyphics. He is",

		answers: {
			a: "Del the Funky Homosapien",
			b: "Casual",
			c: "Pep Love",
			d: "Domino",
		},
		correctAnswer: "a"
	},
	{
		question: "KRS-One teamed with this DJ to form Boogie Down Productions",

		answers: {
			a: "Mix Master Mike",
			b: "DJ Scott La Rock",
			c: "DJ A-Trak",
			d: "DJ Craze",
		},
		correctAnswer: "b"
	},
	{
		question: "This rapper lost his voice after damaging his vocal cords in a car accident after releasing his critically-acclaimed debut album.",
	
		answers: {
			a: "The D.O.C.",
			b: "MC Ren",
			c: "MC Eiht",
			d: "Warren G",
		},
		correctAnswer: "a"
	},
	{
		question: "He as the unofficial 5th member of A Tribe Called Quest in the album Beats, Rhymes and Life"
	
		answers: {
			a: "Common",
			b: "Biz Markie",
			c: "Slick Rick",
			d: "Busta Rhymes",
		},
		correctAnswer: "d"
	},
	{
		question: "Which group performed the song Cool Like That?"

		answers: {
			a: "Audio Two",
			b: "The U.M.C.'s",
			c: "Diggable Planets",
			d: "Arrested Development",
		},
	}
];


function showQuestions(questions, questionContainer) {
	//store output and answers
	var output = [];
	var answers;

	for(var i=0; i<qusetions.length; i++) {
		//reset answers
		answers = [];

		//for answers
	for(letter in questions[i]answers) {
		//add radio button
		answers.push(
			"<label>" 
			+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
			+ letter + ': '
			+ questions[i].answers[letter]
		+ '</label>'
			);
	}

	output.push(
		'<div class="question">' + questions[i].question + '</div>'
		+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	questionContainer.innerHTML = output.join('');

	//showQuestions(questions, questionContainer);

}

function showResults(questions, questionContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = questionContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// on submit, show results
submitButton.onclick = function(){
	showResults(questions, questionContainer, resultsContainer);
}

var questionContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, questionContainer, resultsContainer, submitButton);

//timer set to 30 seconds
var timeleft = 30;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);