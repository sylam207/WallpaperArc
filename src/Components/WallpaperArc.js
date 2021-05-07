import React, {Component} from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';


class WallpaperArc extends Component {
    render() {
        return ( <div>
            <Link className = "addIcon" to="/AddPhoto"></Link>
            <div className = "photoGrid"> 
                    {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
                </div>
                </div>)
    }
}


export default WallpaperArc;