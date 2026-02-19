let currentQuestion = 1;
const totalQuestions = 3;

const hints = {
    1: [
        "Think about who argues more... 😏",
        "Who never gives up easily? 😤",
        "The answer starts with 'Y'... 💕"
    ],
    2: [
        "Who's writing this website? 🥰",
        "Who wants to meet even for 10 mins? 💖",
        "The one who can't stop thinking about you... ❤️"
    ],
    3: [
        "What do you always want to eat? 🧠",
        "It's something I have that you love... 😏",
        "Think about what keeps you interested... 🤔"
    ]
};

let hintIndex = {
    1: 0,
    2: 0,
    3: 0
};

function startQuiz() {
    document.getElementById('welcomePage').classList.remove('active');
    document.getElementById('quizPage').classList.add('active');
    updateProgress();
}

function updateProgress() {
    const progress = ((currentQuestion - 1) / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function checkAnswer(questionNum, answer) {
    const correctAnswers = {
        1: 'you',
        2: 'me',
        3: 'brain'
    };

    if (answer === correctAnswers[questionNum]) {
        // Correct answer
        const currentCard = document.getElementById('question' + questionNum);
        currentCard.style.animation = 'fadeOut 0.5s ease';
        
        setTimeout(() => {
            currentCard.classList.add('hidden');
            
            if (questionNum < totalQuestions) {
                // Show next question
                currentQuestion++;
                updateProgress();
                const nextCard = document.getElementById('question' + (questionNum + 1));
                nextCard.classList.remove('hidden');
                nextCard.style.animation = 'fadeInScale 0.5s ease';
            } else {
                // Show final page
                document.getElementById('quizPage').classList.remove('active');
                document.getElementById('finalPage').classList.add('active');
                createConfetti();
            }
        }, 500);
    } else {
        // Wrong answer - shake and show hint
        const buttons = document.querySelectorAll(`#question${questionNum} .option`);
        buttons.forEach(btn => {
            if (btn.textContent.includes(getAnswerText(questionNum, answer))) {
                btn.classList.add('shake');
                setTimeout(() => btn.classList.remove('shake'), 500);
            }
        });

        // Show hint
        showHint(questionNum);
    }
}

function getAnswerText(questionNum, answer) {
    const answerMap = {
        1: { 'me': 'Me', 'you': 'You', 'both': 'Both' },
        2: { 'me': 'Me', 'you': 'You', 'equal': 'equally' },
        3: { 'pizza': 'Pizza', 'brain': 'Brain', 'chocolate': 'Chocolate', 'biryani': 'Biryani' }
    };
    return answerMap[questionNum][answer];
}

function showHint(questionNum) {
    const hintElement = document.getElementById('hint' + questionNum);
    const currentHintIndex = hintIndex[questionNum];
    
    if (currentHintIndex < hints[questionNum].length) {
        hintElement.textContent = hints[questionNum][currentHintIndex];
        hintElement.style.animation = 'fadeInUp 0.5s ease';
        hintIndex[questionNum]++;
    }
}

function createConfetti() {
    // Create floating hearts as confetti
    const colors = ['#ff6b6b', '#ee5a6f', '#f06595', '#cc5de8', '#ff8787'];
    const container = document.querySelector('#finalPage .hearts-background');
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.background = colors[Math.floor(Math.random() * colors.length)];
            heart.style.width = (Math.random() * 30 + 20) + 'px';
            heart.style.height = (Math.random() * 30 + 20) + 'px';
            
            // Update pseudo elements size
            const size = parseInt(heart.style.width);
            heart.style.setProperty('--heart-size', size + 'px');
            
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }, i * 100);
    }
}

// Add CSS for fadeOut animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
`;
document.head.appendChild(style);

