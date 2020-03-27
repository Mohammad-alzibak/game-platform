var img = ['https://media.gettyimages.com/photos/cat-headphones-wearing-sunglasses-relaxing-in-the-grass-picture-id512291806?s=2048x2048','https://media.gettyimages.com/vectors/cute-cartoon-dachshunds-in-love-vector-id865392634?s=2048x2048','https://media.gettyimages.com/vectors/heart-shaped-sea-otters-in-love-vector-graphics-vector-id1183276814?s=2048x2048','https://media.gettyimages.com/vectors/funny-no-prob-llama-vector-illustration-vector-id1089951888?s=2048x2048','https://media.gettyimages.com/vectors/cute-sloth-sitting-in-lotus-yoga-pose-cartoon-sloth-bear-vector-vector-id1076571820?s=2048x2048','https://media.gettyimages.com/vectors/hand-drawing-hipster-fantasy-animal-unicorn-illustration-vector-id1065322868?s=2048x2048']
var old = 5
function randomize() {
  let root = document.documentElement
  root.style.setProperty('--image','url('+img[old]+')')
  old++
  if(old > 5) {
    old = 0
  }  
  var ul = document.querySelector('#puzz');
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}
randomize()

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.className);   
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text")
  
  if(ev.target.className == data){
     ev.target.classList.add('dropped')
     document.querySelector('.'+data+"[draggable='true']").classList.add('done')
    
    if(document.querySelectorAll('.dropped').length == 9) {
      document.querySelector('#puz').classList.add('allDone')
      document.querySelector('#puz').style.border = 'none'  
      document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'  
      
      setTimeout(function(){
        reload()
        randomize()
      },1500)
    }    
  }  
}

function reload() {
  document.body.innerHTML = "<div id='puz'>  <i class='first' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='secon' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='third' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='fourt' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='fifth' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='sixth' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='seven' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='eight' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='ninth' ondrop='drop(event)' ondragover='allowDrop(event)'></i></div><div id='puzz'>  <i class='third' draggable='true' ondragstart='drag(event)'></i>  <i class='first' draggable='true' ondragstart='drag(event)'></i>  <i class='secon' draggable='true' ondragstart='drag(event)'></i>  <i class='fourt' draggable='true' ondragstart='drag(event)'></i>  <i class='fifth' draggable='true' ondragstart='drag(event)'></i>  <i class='sixth' draggable='true' ondragstart='drag(event)'></i>  <i class='seven' draggable='true' ondragstart='drag(event)'></i>  <i class='eight' draggable='true' ondragstart='drag(event)'></i>  <i class='ninth' draggable='true' ondragstart='drag(event)'></i>  </div>";
}