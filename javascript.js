
const container = document.querySelector('div');


//const content = document.createElement('div');
//content.classList.add('content');
//content.textContent = 'This is the glorious text-content!';

//container.appendChild(content);



function gridStructure(num) {
    for (let i=0;i<num ; i++ ) {
        const content = document.createElement('div');
        content.classList.add('content');

        for (let j=1;j<=num ; j++) {
            const contents = document.createElement('div');
            contents.classList.add('contents');
            //contents.innerText = (i * num) + j;
            content.appendChild(contents);
        }
        container.appendChild(content);
    }
}

gridStructure(16);

