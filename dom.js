let nav=document.querySelector('nav');

/////add link 1 
nav.insertAdjacentHTML('afterbegin', '<a href="#">link 1</a>');

/////////add link4
let a4=nav.querySelectorAll("a")[3];
a4.insertAdjacentHTML('beforebegin', '<a href="#">link 4</a>');


//////////////////add link 7 
nav.insertAdjacentHTML('beforeend', '<a href="#">link 7</a>');



////////////////////////modify the head  
h1=document.querySelector('h1');
h1.innerHTML="Main content here";



////////////////////// add style color to all "p" inside main
let main=document.querySelector('main');
let allP=main.querySelectorAll("p");

for(p of allP){
p.style.color="purple";
}




////////////// remove all comments

let aside=document.querySelector('aside');
comments=aside.querySelectorAll('p');
for(comment of comments){
comment.remove();

}


/////////////add title and comments to aside then add style for each one 

aside.insertAdjacentHTML('beforeEnd', '<div><span>title 1</span><p>comment 1</p></div>');
aside.insertAdjacentHTML('beforeEnd', '<div><span>title 2</span><p>comment 2</p></div>');
aside.insertAdjacentHTML('beforeEnd', '<div><span>title 3</span><p>comment 3</p></div>');

let title=aside.querySelectorAll("div");
title[0].style.color="red"
title[1].style.color="blue"
title[2].style.color="green"


