//query videos ul li
const videos = document.querySelectorAll('[data-duration]');
console.log(videos);

//convert to array
const videoArray = Array.from(videos);
console.log(videoArray);

//filter videos js or php by content of p tag
const jsVideos = videoArray.filter(video => video.textContent.includes('JS'));
console.log(jsVideos);

const phpVideos = videoArray.filter(video => video.textContent.includes('PHP'));
console.log(phpVideos);

//change video duration to number
const jsDuration = jsVideos.map(video => video.dataset.duration);
console.log(jsDuration);

const phpDuration = phpVideos.map(video => video.dataset.duration);
console.log(phpDuration);

//add up all video durations from each category
const jsTotalSeconds = jsDuration.map(time => {
    const parts = time.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
}).reduce((total, seconds) => total + seconds);

console.log(jsTotalSeconds);

const phpTotalSeconds = phpDuration.map(time => {
    const parts = time.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
}).reduce((total, seconds) => total + seconds);

console.log(phpTotalSeconds);

//change back duration to hours minutes seconds
let jsSecondsLeft = jsTotalSeconds;
const jsHours = Math.floor(jsSecondsLeft / 3600);
jsSecondsLeft = jsSecondsLeft % 3600;

const jsMinutes = Math.floor(jsSecondsLeft / 60);
jsSecondsLeft = jsSecondsLeft % 60;

console.log(jsHours, jsMinutes, jsSecondsLeft);

let phpSecondsLeft = phpTotalSeconds;
const phpHours = Math.floor(phpSecondsLeft / 3600);
phpSecondsLeft = phpSecondsLeft % 3600;

const phpMinutes = Math.floor(phpSecondsLeft / 60);
phpSecondsLeft = phpSecondsLeft % 60;

console.log(phpHours, phpMinutes, phpSecondsLeft);

//display total videos and total duration each category in DOM
const totalJsVideos = jsVideos.length;
const totalPhpVideos = phpVideos.length;

const totalJsDuration = `${jsHours} hours, ${jsMinutes} minutes, ${jsSecondsLeft} seconds`;
const totalPhpDuration = `${phpHours} hours, ${phpMinutes} minutes, ${phpSecondsLeft} seconds`;

// show JS Videos
const totalPhp = document.createElement('p');
totalPhp.textContent = `${totalPhpVideos} Videos`;
document.querySelector('.phpVideos').appendChild(totalPhp);

const totalPhpDur = document.createElement('p');
totalPhpDur.textContent = totalPhpDuration;
document.querySelector('.phpDurations').appendChild(totalPhpDur);

// show php Videos
const totalJs = document.createElement('p');
totalJs.textContent = `${totalJsVideos} Videos`;
document.querySelector('.jsVideos').appendChild(totalJs);

const totalJsDur = document.createElement('p');
totalJsDur.textContent = totalJsDuration;
document.querySelector('.jsDurations').appendChild(totalJsDur);





