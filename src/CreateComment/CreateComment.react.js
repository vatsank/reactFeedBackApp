import React from 'react';



class CreateComment extends React.Component {
    constructor(props){

        super(props);

        this.state ={comment :{name: '',comment:''}}
    }

    submit = event =>{
        let comment = this.state
        event.preventDefault();
        console.log(comment);
        this.props.addComment(comment);
        // this.setState({
        //     comment: { ...comment, comment: "" }
        //   });


    }
    handleFieldChange = event => {
        const { value, name } = event.target;
    console.log(value);
        this.setState({
          ...this.state,
          comment: {
            ...this.state.comment,
            [name]: value
          }
        });
      };
    

    render() {
        return (
            <div >
  <h2>Add Comment ✔</h2>

  <form onSubmit={this.submit}>
     <label>Your Comment</label>
     <input type='text' name='comment' placeholder="😊"
       onChange={this.handleFieldChange} value={this.state.comment.comment}
     ></input>
<label>Your Name</label>
     <input type='text' name='name' placeholder="😊"
     onChange={this.handleFieldChange} 
     value={this.state.comment.name}
   ></input>

     <button>comment</button>
     </form>
            </div>
        );
    }
}

export default CreateComment;