import { Component } from 'react'
import css from './Modal.module.css'


class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.closeModalKey();
    }
  }
  
  render() {

    const { largeImageURL, closeModalClick } = this.props;

    return (<>
      <div className={css.modal} onClick={closeModalClick}>
        <div className={css.modalContent}>
          {/* <h1>Modal</h1> */}
          <img src={largeImageURL} alt='largeImage' />
        </div>
      </div>
    </>)

  }
}

export default Modal