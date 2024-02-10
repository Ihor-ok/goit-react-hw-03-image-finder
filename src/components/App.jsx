import { Component } from 'react'

import Searchbar from 'components/Searchbar/Searchbar'
import fetchImgWithQuery from 'components/services/api'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
// import Contacts from 'components/ImageGalleryItem/ImageGalleryItem'
// import Filter from './ImageGallery/ImageGallery'
// import css from './App.module.css'


class App extends Component {

  state = {
    value: '',
    imgs: null,
    searchQuery: null,
    page: 0,
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

    this.setState({ searchQuery: this.state.value })
    // const searchQuery = this.state.value;
    // console.log(this.state.value);

    this.setState({ page: 1 })

    const response = await fetchImgWithQuery(this.state.value, 1)
    // console.log(response.data.hits);
    this.setState({ imgs: response.data.hits })
    this.setState(prevState => { console.log(this.state.page); return { page: prevState.page + 1 } })
    this.setState({ value: '' })
  }
  
  handleLoadMore = async () => {
   
    
    const response = await fetchImgWithQuery(this.state.searchQuery, this.state.page)
    
    this.setState({ imgs: [...this.state.imgs,  ...response.data.hits ] })
    this.setState(prevState => { return { page: prevState.page + 1 } })
    
   }


  render() {

      
    return (
      <>
        <Searchbar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {this.state.imgs && <ImageGallery imgs={this.state.imgs} />}
        {this.state.imgs && <Button handleLoadMore={ this.handleLoadMore } />}
      </>

    )
  }

}



export default App

