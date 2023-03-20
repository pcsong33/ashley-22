
const ASHLEYTYPES = {
    TECH: "Tech Bro Ashley",
    TF: "TF Ashley",
    HS: "High School Ashley",
    DANCE: "Dance Ashley",
    DATAMATCH: "Datamatch Ashley",
    FOODIE: "Foodie Ashley"
}

// this is the quiz
const QUESTIONS = [
{
    question: "It's Ashley's birthday! Which gift would you most like to receive?",
    answers: {
        [ASHLEYTYPES.TECH]: "A LinkedIn Premium subscription and a viral post starting with \“I'm overjoyed to announce that I'm returning to Stripe this summer!\”",
        [ASHLEYTYPES.TF]: "Getting out of grading psets for the rest of the semester",
        [ASHLEYTYPES.HS]: "22 shooting stars across the night sky",
        [ASHLEYTYPES.DANCE]: "A $30,000 anonymous donation to Eleganza",
        [ASHLEYTYPES.DATAMATCH]: "Hugs and kisses ❤️",
        [ASHLEYTYPES.FOODIE]: "A Breakfast BLT on a whole wheat bagel from Black Sheep"
    }
},
{
  question: "You need to put together a squad for a trivia night at a bar. Who do you call first?",
  answers: {
      [ASHLEYTYPES.TECH]: "ChatGPT",
      [ASHLEYTYPES.TF]: "Brian Yu, Madhu Sudan, and Adam Hesterberg",
      [ASHLEYTYPES.HS]: "Your old APUSH teacher",
      [ASHLEYTYPES.DANCE]: "Callia (Team Cashley)",
      [ASHLEYTYPES.DATAMATCH]: "Tarun and Anurag (Team Web Leads)",
      [ASHLEYTYPES.FOODIE]: "The bar (to see if they serve Melona Soju)"
  }
},
{
  question: "You're planning a workout for tomorrow. What's the first thing that comes to your mind?",
  answers: {
      [ASHLEYTYPES.TECH]: "A one hour session of typeracer to mantain your WPM fitness",
      [ASHLEYTYPES.TF]: "Carrying a box of 300 CS124 midterms from the science center to the SEC and back",
      [ASHLEYTYPES.HS]: "A 7 minute shredded abs workout by Chloe Ting",
      [ASHLEYTYPES.DANCE]: "Listening to your Eleganza set songs while on a 12 mile run to figure out dance formations",
      [ASHLEYTYPES.DATAMATCH]: "Completing a set of pull(up) requests",
      [ASHLEYTYPES.FOODIE]: "...the full bag of hot cheetos you ate 10 minutes ago"
  }
},
{
  question: "Ashley has an interview, what's your opening line?",
  answers: {
      [ASHLEYTYPES.TECH]: "At Stripe, I pioneered a feature that allows Stripe App developers to expire sensitive data being stored by the Stripe API, using Java, Ruby, and MongoDB.\
       During my Faceboook internship, I implemented new features for Messenger Desktop’s in-call settings that allow users to self-correct audio issues. Sorry, what was your question again?",
      [ASHLEYTYPES.TF]: "Do you deserve to hire me? Let me ask a couple questions.",
      [ASHLEYTYPES.HS]: "A firm handshake",
      [ASHLEYTYPES.DANCE]: "...performs a badass dance routine before dramatically sitting down to face her interviewer on Zoom...",
      [ASHLEYTYPES.DATAMATCH]: "I built a match-making web application for college students at 30+ schools, which had over 37k users in 2020, 40k users in 2021, and 50k users in 2022.",
      [ASHLEYTYPES.FOODIE]: "Taaake onnn meeeeeee! TAKE ME ON!"
  }
},
{
  question: "Choose a language",
  answers: {
      [ASHLEYTYPES.TECH]: "Pseudocode",
      [ASHLEYTYPES.TF]: "Proofs",
      [ASHLEYTYPES.HS]: "Excel",
      [ASHLEYTYPES.DANCE]: "Python",
      [ASHLEYTYPES.DATAMATCH]: "React/Redux/Firebase",
      [ASHLEYTYPES.FOODIE]: "Chinese"
  }
},
{
  question: "Choose a song",
  answers: {
      [ASHLEYTYPES.TECH]: "\“Fix you\" - Coldplay",
      [ASHLEYTYPES.TF]: "\“You're On Your Own, Kid\" - Taylor Swift",
      [ASHLEYTYPES.HS]: "\“when the party's over\" - Billie Eilish",
      [ASHLEYTYPES.DANCE]: "\“God is a woman\" - Ariana Grande",
      [ASHLEYTYPES.DATAMATCH]: "\“We Find Love\" - Daniel Caesar",
      [ASHLEYTYPES.FOODIE]: "\“SUGAR\" - BROCKHAMPTON"
  }
},
{
  question: "A magical genie offers you one wish. What do you ask for?",
  answers: {
      [ASHLEYTYPES.TECH]: "A return offer with generous stock options",
      [ASHLEYTYPES.TF]: "To be besties with Adam Hesty :)",
      [ASHLEYTYPES.HS]: "A (promising) update to your Harvard application portal",
      [ASHLEYTYPES.DANCE]: "A reboot of \"World of Dance\"",
      [ASHLEYTYPES.DATAMATCH]: "A personal magic show from none other than the legendary Sam Sam the Magic Man",
      [ASHLEYTYPES.FOODIE]: "An unlimited supply of home-made dumplings from your Dad"
  }
},
{
  question: "You walk into the scene of a murder mystery. What's the first thing you notice?",
  answers: {
      [ASHLEYTYPES.TECH]: "Time complexity of the murder: O(n logn). Space complexity: O(n).",
      [ASHLEYTYPES.TF]: "-10 points for correctness, but +3 points for style ",
      [ASHLEYTYPES.HS]: "...",
      [ASHLEYTYPES.DANCE]: "...",
      [ASHLEYTYPES.DATAMATCH]: "...",
      [ASHLEYTYPES.FOODIE]: "A strange orange powdered dust on the floor that smells suspiciously like hot cheetos"
  }
},
];

// this is the Ashley Type Descriptions
const DESCRIPTIONS = {
    [ASHLEYTYPES.TECH]:
    {
        photo: "assets/TECH_Ashley.jpeg",
        description: "LinkedIn Message from tech Ashley. “Please add me to your LinkedIn network.” I have extensive experience in both research and industry, having worked as a data science researcher for the CDC and a software engineer intern at Stripe and Facebook. Some of my (endorsed) technical skills include web development, observational astronomy, and OCaml."
    },
    [ASHLEYTYPES.TF]:
    {
        photo: "assets/TF_Ashley2.JPG",
        description: "This is (head) TF Ashley, and I just wanted to go over the highlights today's staff meeting agenda. Make sure you've finished grading your midterm assignments or I will personally hunt you down. Also, please react 🍩 or 🧁 to my message in the #staff-meeting slack channel to vote for your choice of snacks at the next staff meeting!"
    },
    [ASHLEYTYPES.HS]:
    {
        photo: "assets/highschool_ashley.jpeg",
        description: "We can only guess what high school Ashley was like, but this is how we imagine her: optimistic, passionate, and ready for the world. \"Hi, I'm Ashley and I live in Livermore, California. I developed burning passion for STEM through my intensive and transformative summer experience at SSP. One of the reasons I love STEM is because it is our future, and I cannot wait for mine! Of course, it’s impossible to really predict my future, but I’m extremely excited to see where life will take me!\""
    },
    [ASHLEYTYPES.DANCE]:
    {
        photo: "assets/dance_ashley.jpeg",
        description: "Congrats, you matched with Dance Ashley!"
    },
    [ASHLEYTYPES.DATAMATCH]:
    {
        photo: "assets/datamatch_ashley.jpeg",
        description: "Congrats, you matched with Datamatch Ashley!"
    },
    [ASHLEYTYPES.FOODIE]:
    {
        photo: "assets/foodie_ashley.jpeg",
        description: "You matched with foodie Ashley! Do you love dipping Hot Cheetos in sour cream? Have you spent two weeks of your life making and eating exclusively avocado toast? After eating a heaty meal, do you often lean back in your seat, close your eyes, and say \"that was sooo gooddddd\"? Then we have no doubts that you'll get along with foodie Ashley"
    }
};

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    // variable to store the HTML output
  const output = [];

  // for each question...
  QUESTIONS.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(Ashley_type in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
            `<label class="container">${currentQuestion.answers[Ashley_type]}
                <input type="radio" name="question${questionNumber}" value="${Ashley_type}">
                <span class="checkmark"></span>
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
         `<div class="question" id="one">
            <h1>${questionNumber + 1}. ${currentQuestion.question}</h1>
            <div class="answers"> ${answers.join('')} </div>
          </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let AshleyTypeCounts = {};
    for (AshleyType in ASHLEYTYPES) {
        AshleyTypeCounts[ASHLEYTYPES[AshleyType]] = 0;
    }

    // for each question...
    QUESTIONS.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        AshleyTypeCounts[userAnswer] += 1;
    });

    // find max
    maxAshleyTypeCount = 0
    maxAshleyType = ""
    for (AshleyType in AshleyTypeCounts) {
        AshleyTypeCount = AshleyTypeCounts[AshleyType];
        if (AshleyTypeCount > maxAshleyTypeCount) {
            maxAshleyTypeCount = AshleyTypeCount;
            maxAshleyType = AshleyType;
        }
    }

    if (maxAshleyType == "") {
        resultsContainer.innerHTML =
            `<div class="answer">
                <p>You are a mystery––we have no idea which Ashley you are. Please answer some questions and try again.</p>
            </div>`
    }
    else {
        resultsContainer.innerHTML =
            `<div class="answer">
                <h1>Congrats, you are ${maxAshleyType}!</h1>
                <img src=${DESCRIPTIONS[maxAshleyType].photo}>
                <p>${DESCRIPTIONS[maxAshleyType].description}</p>
            </div>`
    }

    resultsContainer.scrollIntoView();

    var audio = new Audio("assets/heart_react.m4a");
    audio.play();
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);