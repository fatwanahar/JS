// Query videos with data-duration attribute
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Filter videos by content of p tag
const filterVideos = (keyword) => videos.filter(video => video.textContent.includes(keyword));

// Get total duration in seconds
const getTotalSeconds = (videoArray) => videoArray
    .map(video => video.dataset.duration.split(':').map(Number))
    .reduce((total, [min, sec]) => total + min * 60 + sec, 0);

// Convert total seconds to hours, minutes, seconds
const formatDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

// Append results to DOM
const displayResults = (videoSelector, durationSelector, videos, duration) => {
    document.querySelector(videoSelector).querySelector('p').textContent += ` ${videos.length}`;
    document.querySelector(durationSelector).querySelector('p').textContent += ` ${duration}`;
};

// Process JS and PHP videos
const processVideos = (keyword, videoSelector, durationSelector) => {
    const filteredVideos = filterVideos(keyword);
    const totalSeconds = getTotalSeconds(filteredVideos);
    const formattedDuration = formatDuration(totalSeconds);
    displayResults(videoSelector, durationSelector, filteredVideos, formattedDuration);
};

// Execute processing
processVideos('JS', '.jsVideos', '.jsDurations');
processVideos('PHP', '.phpVideos', '.phpDurations');
