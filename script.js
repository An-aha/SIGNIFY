// combinedScript.js

// English Speech to Text
const outputDivEnglish = document.getElementById('transcription'); // Updated to distinguish from Malayalam output
const startButtonEnglish = document.getElementById('startButton'); // Updated to distinguish from Malayalam start button
const stopButtonEnglish = document.getElementById('stopButton'); // Updated to distinguish from Malayalam stop button
const recognitionEnglish = new webkitSpeechRecognition() || new SpeechRecognition(); // Initialize English recognition
let isRecordingEnglish = false;

recognitionEnglish.lang = 'en-US'; // Set language to English (United States)
recognitionEnglish.continuous = true;
recognitionEnglish.interimResults = true;

recognitionEnglish.onresult = function(event) {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
        } else {
            transcript += event.results[i][0].transcript + ' ';
        }
    }
    outputDivEnglish.textContent = transcript; // Update the English transcription display
};

recognitionEnglish.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

startButtonEnglish.addEventListener('click', function() {
    if (!isRecordingEnglish) {
        recognitionEnglish.start();
        startButtonEnglish.disabled = true;
        stopButtonEnglish.disabled = false;
        outputDivEnglish.textContent = 'Listening...';
        isRecordingEnglish = true;
    }
});

stopButtonEnglish.addEventListener('click', function() {
    if (isRecordingEnglish) {
        recognitionEnglish.stop();
        startButtonEnglish.disabled = false;
        stopButtonEnglish.disabled = true;
        isRecordingEnglish = false;
    }
});

// Malayalam Speech to Text
const outputDivMalayalam = document.getElementById('output'); // Updated to distinguish from English output
const startButtonMalayalam = document.getElementById('startButtonMalayalam'); // Updated to distinguish from English start button
const stopButtonMalayalam = document.getElementById('stopButtonMalayalam'); // Updated to distinguish from English stop button
const recognitionMalayalam = new webkitSpeechRecognition() || new SpeechRecognition(); // Initialize Malayalam recognition
let isRecordingMalayalam = false;

recognitionMalayalam.lang = 'ml-IN'; // Set language to Malayalam (India)
recognitionMalayalam.continuous = true;
recognitionMalayalam.interimResults = true;

recognitionMalayalam.onresult = function(event) {
    let finalTranscript = '';
    let interimTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
        } else {
            interimTranscript += event.results[i][0].transcript;
        }
    }

    outputDivMalayalam.innerHTML = finalTranscript; // Update the Malayalam transcription display
};

recognitionMalayalam.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

startButtonMalayalam.addEventListener('click', function() {
    if (!isRecordingMalayalam) {
        recognitionMalayalam.start();
        startButtonMalayalam.disabled = true;
        stopButtonMalayalam.disabled = false;
        outputDivMalayalam.innerHTML = 'Listening...';
        isRecordingMalayalam = true;
    }
});

stopButtonMalayalam.addEventListener('click', function() {
    if (isRecordingMalayalam) {
        recognitionMalayalam.stop();
        startButtonMalayalam.disabled = false;
        stopButtonMalayalam.disabled = true;
        isRecordingMalayalam = false;
    }
});

// Alphabet Animation
const alphabetImages = {
    a: "images/a.jpg",
    b: "images/b.jpg",
    c: "images/c.jpg",
    d: "images/d.jpg",
    e: "images/e.jpg",
    f: "images/f.jpg",
    g: "images/g.jpg",
    h: "images/h.jpg",
    i: "images/i.jpg",
    j: "images/j.jpg",
    k: "images/k.jpg",
    l: "images/l.jpg",
    m: "images/m.jpg",
    n: "images/n.jpg",
    o: "images/o.jpg",
    p: "images/p.jpg",
    q: "images/q.jpg",
    r: "images/r.jpg",
    s: "images/s.jpg",
    t: "images/t.jpg",
    u: "images/u.jpg",
    v: "images/v.jpg",
    w: "images/w.jpg",
    x: "images/x.jpg",
    y: "images/y.jpg",
    z: "images/z.jpg",
    // Add more alphabet images here
};

function animateText() {
    const inputText = document.getElementById('textInput').value.toLowerCase();
    const animationContainer = document.getElementById('animationContainer');
    animationContainer.innerHTML = '';

    let index = 0;
    const interval = setInterval(() => {
        if (index < inputText.length) {
            const currentLetter = inputText[index];
            const image = new Image();
            image.src = alphabetImages[currentLetter] || ''; // If alphabet image not found, show empty image
            image.className = 'letterImage';
            animationContainer.innerHTML = ''; // Clear previous image
            animationContainer.appendChild(image);
            index++;
        } else {
            clearInterval(interval); // Stop the animation when all letters are displayed
        }
    }, 1000); // Interval between each letter (adjust as needed)
}


