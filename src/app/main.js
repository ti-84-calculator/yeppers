import rocketVideo from './boom.mp4';
import "./style.css";

document.querySelector('#app').innerHTML = 
  `<div class="click-to-start">
    <h1>Click to Start</h1>
  </div>`;

document.querySelector('.click-to-start').addEventListener('click', () => {
  const videoElement = document.createElement('video');
  videoElement.src = rocketVideo;
  videoElement.classList.add('full-screen-video');
  videoElement.autoplay = true;
  videoElement.loop = true;
  videoElement.muted = false;
  videoElement.volume = 1; // Set volume to 100%

  document.querySelector('#app').innerHTML = '';
  document.querySelector('#app').appendChild(videoElement);
});

// Add CSS to style the video and message
const style = document.createElement('style');
style.textContent = `
  body, html, #app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .click-to-start {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ensure the div fills the entire screen */
    width: 100%;   /* Ensure the div spans the entire width */
    background-color: red; /* Set background to red */
    color: yellow; /* Set text color to yellow */
    font-size: 2rem;
    cursor: pointer;
    position: absolute; /* Position it absolutely to fill the screen */
  }

  .full-screen-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
document.head.appendChild(style);
