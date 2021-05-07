import React, {Component} from 'react'

class Photo extends Component {
    render() {
        const post = this.props.post
        return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}></img>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
            <button onClick= {() => {this.props.onRemovePhoto(post)}}>Delete</button>
            </div> 
        </figure>
    }
}

export default Photo;