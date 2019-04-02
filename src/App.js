import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentList/CommentList.react';
import CreateComment from './CreateComment/CreateComment.react';

class App extends Component {

  constructor(props){
super(props)
    this.state ={
      commentList:[
      {name:"ramesh",image:"nurse.jpg",time:"12.30",comment:"excellent"},
      {name:"suresh",image:"software.png",time:"11.30",comment:"great"},
      {name:"magesh",image:"teacher.png",time:"1.13",comment:"awesome"},
    
    ]}

  }

  addComment = (comment)=> {

    const c ={name:"magesh",image:"software.png",time:"16.30",comment:"very great"};


    console.log(comment);
    this.setState({
      commentList: [c, ...this.state.commentList]
    });
  }

  render() {
    return (
      <div>
        <header>
        <h2>React Example</h2>
        </header>
        <div>
          <div>
          <p>Say something about our product</p>
          <CreateComment addComment={this.addComment}/>
          </div>
          <div>
           <CommentList comments={this.state.commentList}></CommentList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
