import { Component } from 'react'


import Searchbar from 'components/Searchbar/Searchbar'
import fetchImgWithQuery from 'components/services/api'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'
// import Contacts from 'components/ImageGalleryItem/ImageGalleryItem'
// import Filter from './ImageGallery/ImageGallery'
// import css from './App.module.css'


class App extends Component {

  state = {
    value: '',
    imgs: null,
    searchQuery: null,
    page: 0,
    isVisible: false,
    isShowModal: false,
    largeImageURL: null,

  }

  componentDidMount() {

            
  }
  
  componentDidUpdate(prevProps, prevState) {
   
    // if (prevState.value.length > 0) { console.log(api.fetchImgWithQuery(this.state.value)) }

  }

  handleChange= (evt) => {
    this.setState({ value: evt.target.value })

  }

  handleSubmit = async (evt) => {

    evt.preventDefault()

    this.setState({ imgs: null, searchQuery: this.state.value, isVisible: true })
    // const searchQuery = this.state.value;
    // console.log(this.state.value);

    this.setState({ page: 1 })

    const response = await fetchImgWithQuery(this.state.value, 1)
    console.log(response.data.hits);
    this.setState({ isVisible: false, imgs: response.data.hits })
    this.setState(prevState => { return { page: prevState.page + 1 } })
    this.setState({ value: '' })
  }
  
  handleLoadMore = async () => {
    this.setState({ isVisible: true })
    
    const response = await fetchImgWithQuery(this.state.searchQuery, this.state.page)
    
    this.setState({ isVisible: false})
    this.setState({ imgs: [...this.state.imgs, ...response.data.hits] })
    this.setState(prevState => { return { page: prevState.page + 1 } })
    
    
    
  }
  
  showModal = () => {
    this.setState({isShowModal: true})
  }

  closeModal = () => {
    this.setState({isShowModal: false})
  }

  onClick = (url) => {
    this.setState({ largeImageURL: url })
    console.log(this.state.largeImageURL);
    
  }


  render() {

      
    return (
      <>
        <Searchbar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        
        {this.state.imgs && <ImageGallery onClick={this.onClick} imgs={this.state.imgs} showModal={this.showModal} closeModal={this.closeModal} />}
        {this.state.isVisible &&  <Loader/>}
        {this.state.imgs && <Button handleLoadMore={this.handleLoadMore} />}
        {this.state.isShowModal && <Modal largeImageURL={this.largeImageURL} />}
        
      </>

    )
  }

}



export default App

