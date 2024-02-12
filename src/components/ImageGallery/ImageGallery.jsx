import { Component } from 'react'
import css from './ImageGallery.module.css'

import Modal from 'components/Modal/Modal'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"


class ImageGallery extends Component { 

    state = {
    largeImageURL: null,

    }
    
    showModal = () => {
    this.setState({isShowModal: true})
    }

  closeModalClick = (e) => {
      if (e.target.tagName === 'IMG') { return }
      
      this.setState({ isShowModal: false })

    }

    closeModalKey = () => {
      
      this.setState({ isShowModal: false })
     
    }

  onClick = (url) => {
      this.setState({ largeImageURL: url })
      this.showModal()
    
    }

    render() {
       
        return (
            <>
                <ul className={css.gallery}>
                    <ImageGalleryItem imgs={this.props.imgs} onClick={this.onClick } showModal={this.showModal} />
                
                </ul>
                
                {this.state.isShowModal && <Modal largeImageURL={this.state.largeImageURL} closeModalKey={this.closeModalKey} closeModalClick={this.closeModalClick} />}
            </>
        )
    }
}

export default ImageGallery