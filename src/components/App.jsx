import { Component } from 'react'


import Searchbar from 'components/Searchbar/Searchbar'
import fetchImgWithQuery from 'components/services/api'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import Loader from './Loader/Loader'

// import Contacts from 'components/ImageGalleryItem/ImageGalleryItem'
// import Filter from './ImageGallery/ImageGallery'
// import css from './App.module.css'


class App extends Component {

  state = {
    value: '',
    imgs: null,
    searchQuery: null,
    page: 0,
    isVisibleLoader: false,
    isShowModal: false,
    largeImageURL: null,
    isVisibleButtonLoad: false,

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
    if (this.state.value === '') { return}

    this.setState({ imgs: null, searchQuery: this.state.value, isVisibleLoader: true })
    // const searchQuery = this.state.value;
    // console.log(this.state.value);

    this.setState({ page: 1 })
  

    const response = await fetchImgWithQuery(this.state.value, 1)
    this.setState({isVisibleButtonLoad: true})
    if (response.data.hits.length === 0) {
      this.setState({ isVisibleButtonLoad: false })
      alert('This image was not found! Enter a new name for the image.')

    }
  
    this.setState({ isVisibleLoader: false, imgs: response.data.hits })
    this.setState(prevState => { return { page: prevState.page + 1 } })
    this.setState({ value: '' })
  }
  
  handleLoadMore = async () => {
    this.setState({ isVisibleLoader: true })
    
    const response = await fetchImgWithQuery(this.state.searchQuery, this.state.page)
    
    this.setState({ isVisibleLoader: false})
    this.setState({ imgs: [...this.state.imgs, ...response.data.hits] })
    this.setState(prevState => { return { page: prevState.page + 1 } })
    
    
    
  }
  
  
  render() {

      
    return (
      <>
        <Searchbar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        
        {this.state.imgs && <ImageGallery imgs={this.state.imgs} />}
        {this.state.isVisibleLoader &&  <Loader/>}
        {this.state.isVisibleButtonLoad && <Button handleLoadMore={this.handleLoadMore} />}
        
        
      </>

    )
  }

}



export default App

