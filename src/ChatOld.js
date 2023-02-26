import React from 'react'

export default class Chat extends React.Component{

constructor(){
    super();
    this.state = {
        count : 1,
        comment : [],
        bgcolor : ''
    }
    this.myRef = React.createRef();
}

getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.comment;

    if (comment !== '') {
        comments.push(comment);
        this.setState({
            'comments' : comments,
            bgcolor : this.getRandomColor()
        });
        this.myRef.current.value = '';
    }
}

render(){
    return(
        <>
            <h1>Live chat (class)</h1>
            <div className='out'>
                    <ul>
                        {this.state.comment.map((item,count) => <li key={count} style={{backgroundColor : this.state.bgcolor}}>{item}</li>).reverse()}
                    </ul>
            </div>
            <div className="block">
                <textarea ref={this.myRef} rows="10" cols="50" placeholder="enter your comments"></textarea>
                <button onClick={this.addComment}>ADD COMMENT</button>
            </div>
        </>
    )
}
}