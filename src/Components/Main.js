import React, {Component} from 'react';
import WallpaperArc from './WallpaperArc';
import AddPhoto from  './AddPhoto';
import {Route} from 'react-router-dom';


class Main extends Component {

    constructor() {
        super() 
        this.state = {
            posts: [{
                id: 0,
                description: "Sora",
                imageLink: "https://cdn.mos.cms.futurecdn.net/Fj7mPzm88J9FYDwZzcpTCn.jpg"
            },
             {   id: 1,
                 description: "Sora, Riku, Mickey",
                 imageLink: "https://images8.alphacoders.com/517/thumb-1920-517037.jpg"
             },
             {
                 id: 2,
                 description: "Axel, Roxas, Xion",
                 imageLink: "http://images6.fanpop.com/image/photos/35800000/-Axel-Xion-Roxas-Kingdom-Hearts-illusiondolls-35887341-510-361.jpg"
             },
             {
                 id: 3,
                 description: "Terra, Ventus, Aqua",
                 imageLink: "https://i.pinimg.com/originals/df/63/8e/df638e91d3ffbe2071de7cfac47b90db.jpg"
             }
          ]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved) {
        this.setState((state) => ({
            posts: state.posts.filter(post => post!== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState((state) => ({
            posts:state.posts.concat([postSubmitted])
        }))
    }

    render() {
        return (<div>
                    <h1 className='font-face'>WallpaperArc</h1>
                   <Route exact path ="/" render = {() => (
                    <div>
                        <WallpaperArc posts = {this.state.posts} onRemovePhoto={this.removePhoto}/>
                    </div>
                    )}/>
                  
                    <Route path="/AddPhoto" render = {({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost)
                            history.push('/')
                        }}/>
                    )}/>
                    
                </div>)
    }
} 



export default Main;