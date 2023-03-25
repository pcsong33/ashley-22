
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
    question: "It's Ashley's birthday! Which gift would you like to give her?",
    answers: {
        [ASHLEYTYPES.TECH]: "A LinkedIn Premium subscription and a viral post starting with \“I'm overjoyed to announce that I'm returning to Stripe this summer!\”",
        [ASHLEYTYPES.TF]: "Getting out of grading psets for the rest of the semester",
        [ASHLEYTYPES.HS]: "22 shooting stars across the night sky",
        [ASHLEYTYPES.DANCE]: "A $30,000 anonymous donation to Eleganza",
        [ASHLEYTYPES.DATAMATCH]: "Hugs and kisses ❤️",
        [ASHLEYTYPES.FOODIE]: "A Breakfast BLT on a whole wheat bagel with avocado from Black Sheep"
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
  question: "You have an interview, what's your opening line?",
  answers: {
      [ASHLEYTYPES.TECH]: "At Stripe, I pioneered a feature that allows Stripe App developers to expire sensitive data being stored by the Stripe API, using Java, Ruby, and MongoDB.\
       During my Faceboook internship, I implemented new features for Messenger Desktop’s in-call settings that allow users to self-correct audio issues. Sorry, what was your question again?",
      [ASHLEYTYPES.TF]: "Do you deserve to hire me? Let me ask a couple questions.",
      [ASHLEYTYPES.HS]: "A firm handshake",
      [ASHLEYTYPES.DANCE]: "Performs a side aerial (not a front aerial) inside a single spotlight before dramatically sitting down to face her interviewer on Zoom",
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
      [ASHLEYTYPES.HS]: "A Celestron C-14 telescope capable of collecting images of Near-Earth Asteroids",
      [ASHLEYTYPES.DANCE]: "An empty dance studio and a set of mysterious text messages from your dancers with suspicious excuses about why they can’t make it to practice",
      [ASHLEYTYPES.DATAMATCH]: "LGTM!",
      [ASHLEYTYPES.FOODIE]: "A strange orange powdered dust on the floor that smells suspiciously like hot cheetos"
  }
},
{
  question: "After hours of effort, you finally break into the laptop at the scene of the crime, inspect it for a minute, and promptly declare that its owner must be the murderer. What gave it away?",
  answers: {
    [ASHLEYTYPES.TECH]: "Sublime Text installed instead of VS Code",
    [ASHLEYTYPES.TF]: "An installed Zoom plugin that disables all reaction emojis except 😒",
    [ASHLEYTYPES.HS]: "An extremely unorganized Downloads folder containing 90% of the files on disk, dating back to December 2016",
    [ASHLEYTYPES.DANCE]: "Daily GCal events that run until 4 am for holding auditions for 4 different dance shows and 1 musical",
    [ASHLEYTYPES.DATAMATCH]: "Git commit messages that were both all-lowercase AND in past tense",
    [ASHLEYTYPES.FOODIE]: "An Annenberg grill order asking for toast with runny eggs",
  }
},
{
  question: "Pick a plushie",
  answers: {
    [ASHLEYTYPES.TECH]: "Octocat",
    [ASHLEYTYPES.TF]: "Mudkip",
    [ASHLEYTYPES.HS]: "Pumpkin",
    [ASHLEYTYPES.DANCE]: "Mochi",
    [ASHLEYTYPES.DATAMATCH]: "Club Penguin",
    [ASHLEYTYPES.FOODIE]: "Avocado"
  }
},
{
  question: "You wake up in a cold sweat from a terrible nightmare. What was it about?",
  answers: {
    [ASHLEYTYPES.TECH]: "You're in a dark room, and you can't find your laptop charger. You're running out of battery, and you're about to miss your interview with Facebook.", // lol GitHub copilot came up with this one
    [ASHLEYTYPES.TF]: "You were supposed to grade problem 4(c) on the pset but you haven't started and it's due tonight! But that's a later problem, right now you need to answer questions on Ed (WHY DOES NO ONE ELSE ANSWER QUESTIONS ON ED??). Oh and office hours begin in 30 minutes and you just received yet another Slack message about a certain someone overwriting names on the TF task allocation sheet.",
    [ASHLEYTYPES.HS]: "You've been waiting anxiously for your final grade for a class. You refresh the page one last time, only to see *GASP* an A-.",
    [ASHLEYTYPES.DANCE]: "You're choregraphing a scene for Eleganza and you've been practicing with your group for months. It's finally your big day and you arrive at the venue only to discover that no one showed up to watch.",
    [ASHLEYTYPES.DATAMATCH]: "You pushed to production without testing your code and went to bed. You wake up the next morning and the world is on fire.",
    [ASHLEYTYPES.FOODIE]: "Congrats, you've been accepted to TF CS50! Minutes after you accept the offer, you receive an email from David Malan: \"Unfortunately, due to COVID restrictions, we will not be having Friday lunches at Changsho this year.\""
  }
}
];

// this is the Ashley Type Descriptions
const DESCRIPTIONS = {
    [ASHLEYTYPES.TECH]:
    {
        photo: "assets/tech_bro_ashley_2.png",
        description: "LinkedIn Message Ashley Zhuang. “Please add me to your LinkedIn network.” I have extensive experience in both research, industry, and as a co-founder, having worked as a data science researcher for the CDC and a software engineer intern at Stripe and Facebook. Some of my (endorsed) technical skills include web development, observational astronomy, collaborative problem solving, and OCaml."
    },
    [ASHLEYTYPES.TF]:
    {
        photo: "assets/tf_ashley.jpg",
        description: "This is (head) TF Ashley, and I just wanted to go over the highlights for today's staff meeting agenda. Make sure you've finished grading your midterm assignments or I will personally hunt you down. Also, please react 🍩 or 🧁 to my message in the #staff-meeting slack channel to vote for your choice of snacks at our next meeting!"
    },
    [ASHLEYTYPES.HS]:
    {
        photo: "assets/grad_ashley.jpeg",
        description: "We can only guess what high school Ashley was like, but this is how we imagine her: optimistic, passionate, and ready for the world. \"Hi, I'm Ashley and I live in Livermore, California. I developed burning passion for STEM through my intensive and transformative summer experience at SSP. One of the reasons I love STEM is because it is our future, and I cannot wait for mine! Of course, it’s impossible to really predict my future, but I’m extremely excited to see where life will take me!\""
    },
    [ASHLEYTYPES.DANCE]:
    {
        photo: "assets/dance_ashley.jpeg",
        description: "If your ideal Woman can move like a Hurricane, break it down in the Streets, and have a suave Demeanor, look no further than Dance Ashley! From EXP Captain to musical theater choreographer to Eleganza Scene Director and Executive Producer, Dance Ashley is certainly the Highest (achiever) In The Room. For a first date, take her to the Lowell Dance Studio or the Bright-Landry Hockey Pavilion :)"
    },
    [ASHLEYTYPES.DATAMATCH]:
    {
        photo: "assets/datamatch_ashley.jpeg",
        description: "You've got a match! She sees you when you're sleeping, she knows when you're awake, and she especially knows when you haven't turned on push notifications, so be sure to do that for goodness' sake. Pioneer of landing pages, facilitator of search matches, inspirer of generations of weblings, Datamatch Ashley has done it all. Make sure to pay your respects to this (retired) Web Lead as you enjoy your free date together at Kung Fu Tea! sksksksksksksk."
    },
    [ASHLEYTYPES.FOODIE]:
    {
        photo: "assets/foodie_ashley.jpeg",
        description: "You matched with foodie Ashley! Do you love dipping Hot Cheetos in sour cream? Have you spent two weeks of your life making and eating exclusively avocado toast? After eating a hearty meal, do you often lean back in your seat, close your eyes, and say \"that was sooo gooddddd\"? Then we have no doubts that you'll get along with Ashley, lover of foods. Just make sure you take her out to hot pot."
    }
};

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

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
            `<label class="answerContainer">${currentQuestion.answers[Ashley_type]}
                <input type="radio" name="question${questionNumber}" value="${Ashley_type}">
                <span class="checkmark"></span>
            </label>`
        );
      }

      // shuffle the answers array so that Ashley types aren't always in the same position
      shuffleArray(answers);

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
        var subject = `I matched with ${maxAshleyType}!`;
        var body = "Hi Ashley,%0D%0DHAPPY BIRTHDAY :DDD%0DI matched with you on AshleyMatch (https://ashleymatch.com), the number one Ashley Zhuang matchmaking site!%0DAre you free for a date at 9pm in Lowell Underground on Sunday, March 26th?%0D"
        var link = `https://mail.google.com/mail/?view=cm&fs=1&to=psong@college.harvard.edu&su=${subject}&body=${body}`;
        resultsContainer.innerHTML =
            `<div class="answer">
                <h1>Congrats, you matched with ${maxAshleyType}!</h1>
                <img src=${DESCRIPTIONS[maxAshleyType].photo} class="ashley">
                <p>${DESCRIPTIONS[maxAshleyType].description}</p>
                <button onclick=" window.open('${link}','_blank')" class="submit center" id="submit">Message Ashley</button>
                <h4 class="center">Write Ashley a Happy Birthday Message!</h4>
            </div>`
            
    }

    resultsContainer.scrollIntoView();
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
