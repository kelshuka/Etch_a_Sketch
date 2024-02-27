
const container = document.querySelector('#container');

function gridStructure(num =16) {
    let gSize = 640 / num;
    for (let i=0;i<num ; i++ ) {
        const content = document.createElement('div');
        content.classList.add('content');

        for (let j=1;j<=num ; j++) {
            const contents = document.createElement('div');
            contents.classList.add('contents');
            //contents.innerText = (i * num) + j;
            contents.style.height = `${gSize}px`;
            contents.style.width = `${gSize}px`;
            content.appendChild(contents);
        }
        container.appendChild(content);
    }
    
    //container.style.width = '750px';
    //container.style.height = '100%' ;

    const contents = document.querySelectorAll('.contents');

    contents.forEach(contents => {
        contents.addEventListener('mouseover', function(){
            contents.style.backgroundColor = 'purple';
        })
    })

}





const cont1 = document.querySelector('#container1');

function clearGrid() {
    container.innerHTML = ``;
}

const butn = document.querySelector('#gridSize');

const content = document.querySelector('.content');


butn.addEventListener('click', function(){
    let inpt = +prompt('What size is your grid? Size <=100',);
    if (inpt > 100) {
        return 'Error';
    } else {
        const contents2 = document.querySelectorAll('.contents');
        contents2.forEach(ele => {
            ele.remove();
        })
        // or clearGrid(); or
        //while (container.firstChild) {
        //    container.removeChild(container.firstChild);
        //}
        gridStructure(inpt);
    }
})


gridStructure();



//contents.forEach(contents => {
//    contents.addEventListener('click', function(){
//        contents.style.backgroundColor = 'purple';
//    })
//})




