import { Component } from 'react'

import Searchbar from 'components/Searchbar/Searchbar'
import fetchImgWithQuery from 'components/services/api'
import ImageGallery from './ImageGallery/ImageGallery'
// import Contacts from 'components/ImageGalleryItem/ImageGalleryItem'
// import Filter from './ImageGallery/ImageGallery'
// import css from './App.module.css'


class App extends Component {

  state = {
    value: '',
    imgs: null,
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
    const searchQuery = this.state.value;
    // console.log(this.state.value);
    const response = await fetchImgWithQuery(searchQuery)
    console.log(response.data.hits);
    this.setState({ imgs: response.data.hits })
    this.setState({ value: '' })
   }


  render() {

      
    return (
      <>
        <Searchbar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {this.state.imgs && <ImageGallery imgs={this.state.imgs} />}
      </>

    )
  }

}



export default App

