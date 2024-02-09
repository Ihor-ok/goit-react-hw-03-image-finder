import { Component } from 'react'
import css from './ImageGallery.module.css'

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"


class ImageGallery extends Component { 

    render() {
       
        return (
            <>
                <ul className={css.gallery}>
                    <ImageGalleryItem imgs={this.props.imgs } />
                
                </ul>
               
            </>
        )
    }
}

export default ImageGallery