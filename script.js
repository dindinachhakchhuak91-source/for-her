
const slides = [
 {file:'Slide show 1.jpg', text:'Farewell zan kha I lam thiam em em naza 😊'},
 {file:'Slide show 2.jpg', text:'Kan soft launch ve deuh reuh ruah sur hnuai walk lai kha'},
 {file:'Slide show 3.jpg', text:'In fist bump lai lem lem'},
 {file:'Slide show 4.jpg', text:'Sport lai basketball in khelh nikha'},
 {file:'Slide show 5.jpg', text:'Pangai deuh a couple pic kan lak hmasak ve ber ni in ka hria'},
 {file:'Slide show 6.jpg', text:'Sport cultural day ni I mawi a hmelthat zia hi'},
 {file:'Slide show 7.jpg', text:'Min judge ami te hi aw ka ti tah hi chuan, nge ka hmai ah thil kai mi tih te 😊'},
 {file:'Slide show 8.mp4', text:'Polaroid pic kan lak lai kha'},
 {file:'Slide show 9.mp4', text:'Sport lai a powder mi min hnawih hluai hluai lai 😊'},
 {file:'Slide show 10.jpg', text:'I han awm dan vel hi cute reuh lutuk chuan Next tih hmet leh rawh one last surprise.'}
];

let index = 0;

function startJourney(){
 document.getElementById('intro').classList.remove('active');
 document.getElementById('slideshow').classList.add('active');
 const music = document.getElementById('bgMusic');
 music.volume = 0.25;
 music.play();
 loadSlide();
}

function loadSlide(){
 const container = document.getElementById('mediaContainer');
 container.innerHTML = '';
 const slide = slides[index];
 let el;
 if(slide.file.endsWith('.mp4')){
   el = document.createElement('video');
   el.src = slide.file;
   el.autoplay = true;
   el.loop = true;
   el.muted = true;
 } else {
   el = document.createElement('img');
   el.src = slide.file;
 }
 container.appendChild(el);
 document.getElementById('caption').innerText = slide.text;

 if(index === slides.length - 1){
   setTimeout(()=>{
     document.getElementById('slideshow').classList.remove('active');
     document.getElementById('envelopeScreen').classList.add('active');
   }, 2500);
 }
}

function nextSlide(){ if(index < slides.length-1){ index++; loadSlide(); }}
function prevSlide(){ if(index > 0){ index--; loadSlide(); }}

function openEnvelope(){
 document.getElementById('envelope').src = 'Envelope open.png';
 document.getElementById('letter').style.display = 'block';
}
