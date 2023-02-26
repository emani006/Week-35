import React from 'react'
import { useState} from 'react';

export default function ChatFunc(){
const [count, setCount] = useState(1);
const [comment, setComment] = useState([]);
const [bgcolor, setBgColor] = useState('');

let myRef = React.createRef();

// const handlerComment = () => {
//     let currentCount = count;
//     currentCount++;
//     setCount(currentCount);
// }

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

const addComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    let bg = getRandomColor();

    if (commentValue !== '') {
        setComment(comments);
        setBgColor(bg);
        myRef.current.value = '';
    }
}


    return(
        <>
            <h1>Comments chat (functional)</h1>
            <div className="block">
                <div>
                    <ol start={count}>
                        {comment.map((item,index) => <li key={index}><span style={{backgroundColor : bgcolor}}>{item}</span></li>).reverse()}
                    </ol>
                </div>
                <div>
                    <textarea ref={myRef} rows="10" cols="50" placeholder="enter your comments"></textarea>
                    <button onClick={addComment}>ADD COMMENT</button>
                </div>
            </div>
        </>
    )
}
// const regV = /viagra/gi;
// const regX = /[x]{3,}/gi;
// const subst = '***';
// let arrayCom = [];  
// let arr = [];
// let arrayContainer = [];

// document.getElementById('send').addEventListener('click',() => {
//     let str = document.getElementById('comment').value;

//     arr = str.split(' ');
//     for (let i=0; i<arr.length; i++){
//             if (arr[i] !== '') {
//                 arrayCom.push(arr[i]);
//             }
//         }

//     for (let i=0; i<arrayCom.length; i++){
//             if (arrayCom[i].match(regV) || arrayCom[i].match(regX)) {
//                 arrayCom[i] = subst;
//             }
//         }
//     arrayContainer.push(arrayCom);

    
//     let div = document.createElement('div');
//     div.className = 'out';
//     document.getElementById('add').append(div);
//     div.innerHTML = arrayCom.join(' ');

//     //document.getElementById('out').innerHTML = arrayCom.join(' ');
//     document.getElementById('comment').value = '';
//     arrayCom = [];
// })
