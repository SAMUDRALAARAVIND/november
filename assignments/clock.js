// const line = document.querySelector("#line");
// console.log(line);
// let angle = 0;
// setInterval(() => {
//     angle += 2;
//     line.style.transform = `rotate(${angle}deg)`
// }, 20)


// Timer
// const timer = document.getElementById("timer");
// setInterval(() => {
//     let instance = new Date();
//     // date = mm/dd/yyyy
//     const date = `${instance.getMonth() + 1}/${instance.getDate()}/${instance.getFullYear()}`;

//     let hrs = instance.getHours(); // 24hr clock
//     const ampm = hrs >= 12 ? "PM" : "AM";

//     // 22:31 => 10:31 PM
//     hrs > 12 && (hrs -= 12);

//     // time = hh:mm:ss PM
//     const time = `${hrs}:${instance.getMinutes()}:${instance.getSeconds()} ${ampm}`
//     timer.innerText = `${date} , ${time}`
// }, 1000)

// let utterance = new SpeechSynthesisUtterance("Today elections are done in telangana");

// // speaks the message
// window.speechSynthesis(utterance);

// "12.89" => 12.89
// "12.89" => 12
function speak() {
    speechSynthesis.resume();
    const message = document.getElementById("message").value;
    let utterance = new SpeechSynthesisUtterance(message);
    const pitch = parseInt(document.getElementById("pitch").value);
    const rate = parseInt(document.getElementById("rate").value);
    utterance.pitch = pitch / 100; // [0 - 1]
    utterance.rate = rate / 100;
    speechSynthesis.speak(utterance);
}

function pause() {
    speechSynthesis.pause();
}

setTimeout(() => {
    let voices = speechSynthesis.getVoices();
    console.log(voices);
    // 176 voices 

    let speechObject = new SpeechSynthesisUtterance("Whatever the text you want");
    speechObject.voice = voices[100];
    speechSynthesis.resume();
    speechSynthesis.speak(speechObject);
}, 2000)