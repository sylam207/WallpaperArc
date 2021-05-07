import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink){
            this.props.onAddPhoto(post) 
        }

    }

    render() {
        return (
        <div className="form">
          <form onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="Link" name="link"/>
               <input type ="text" placeholder="Description" name="description"/>
               <button>Upload</button>
          </form>
          <h3>Only links with jpeg, png, gifs will work</h3>
          <h2>Created by Si Yuen Lam</h2>
        </div>
    )
    }
}



export default AddPhoto