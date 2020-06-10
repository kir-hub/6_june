

1
const options = {
    rootMargin: "25px",
    threshold: 1.0
};

const io = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        console.log('entry', entry)
        if(entry.intersectionRatio > 0.5){
            entry.target.classList.add('activeElem');
            entry.target.innerHTML = '<h2> LOAD</h2>';
            io.unobserve(entry.target);
        }
    });
}, options);

const targetElem1 = document.querySelectorAll('.picClass')
for(let element of targetElem1){
    console.log('element', element)

    io.observe(element);
}

const targetElem = document.querySelectorAll('.backing-sheet')
for(let element of targetElem){
    console.log('element', element)

   io.observe(element);
}

/*

2
const list = document.getElementById('list');

const observer = new IntersectionObserver(observerCallBack);


observer.observe(document.getElementById('listLoader'));


function observerCallBack(entries, observer) {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            addItemToList();
        }
    })
}

function addItemToList(){
    for (let i=0; i<20; i++){
        list.prepend(createListItem());
    }
    list.scroll(0,700);
}

let countMes =  0;

function createListItem(){
    const li = document.createElement('li');
    li.classList.add('listItem');
    li.innerText=`${++countMes} : message`;
    return li;
}






let video = document.querySelector('video');
let isPaused = false;
let observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if(entry.intersectionRatio!=1 && !video.paused){
            video.pause();
            isPaused = true;
        }
        else if(isPaused){
            video.play();
            isPaused = false;
        }
    });
},{threshold: 1}); observer.observe(video);

*/






































