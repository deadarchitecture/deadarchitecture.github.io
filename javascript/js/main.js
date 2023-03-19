const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 68 fahrenheit outside, so :insertx: got in a space ship. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 tonnes, and it was a cold day.';
const insertX = ['Jerry Garcia', 'Bob', 'Buckminster Fuller'];
const insertY = ['the ENVD building', 'Ibiza', 'Bed Stuy'];
const insertZ = ['imploded', 'turned into Flubber, from the 1997 film starring Robin Williams', 'became four dimensional beings'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} feathers`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} BTUs`;
    newStory = newStory.replaceAll('3000 kelvin', temperature);
    newStory = newStory.replaceAll('1 Quintillion pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}