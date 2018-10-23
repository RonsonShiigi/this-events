//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
//class = navi
//class to reveal is class = inner
var barNav = document.getElementsByClassName('navi');
for(var i=0; i<barNav.length; i++){
    barNav[i].addEventListener('click',poof)
}
function poof(){
    // console.log(this.innerHTML)
    var bigReveal = this.querySelectorAll('.inner')[0];
    if(bigReveal.style.display === 'block'){
        bigReveal.style.display = 'none';
    }else{bigReveal.style.display = 'block'}
}








/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var order = document.getElementsByClassName('name');
for(var i=0; i<order.length; i++){
    order[i].addEventListener('click',orderUp)
}
function orderUp(){
    // console.log(this.innerHTML)
var secretMenu = this.querySelectorAll('.menu')[0];
if(secretMenu.style.display === 'block'){
    secretMenu.style.display = 'none';
}else{secretMenu.style.display= 'block';}
}
/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
var thumbsDown = document.getElementsByClassName('thumb')
for (var i=0; i<thumbsDown.length; i++){
    thumbsDown[i].addEventListener('click', tick)
    var more = document.createElement('div');
    more.className = 'bad';
    thumbsDown[i].appendChild(more);

}
function tick(){
    var final = this.querySelectorAll('.bad')[0];
    final.innerHTML++;
}
    


