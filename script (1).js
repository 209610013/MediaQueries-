
function checkViewport() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  alert(`Viewport width: ${viewportWidth}px`);
}


const testButton = document.createElement('button');
testButton.innerText = 'Check Viewport Width';
testButton.addEventListener('click', checkViewport);
document.body.appendChild(testButton);
