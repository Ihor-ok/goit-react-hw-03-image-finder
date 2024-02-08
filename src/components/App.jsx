import { Component } from 'react'

import Searchbar from 'components/Searchbar/Searchbar'
// import Contacts from 'components/ImageGalleryItem/ImageGalleryItem'
// import Filter from './ImageGallery/ImageGallery'
// import css from './App.module.css'


class App extends Component {

  state = {
    value: '',
  }

  componentDidMount() {
            
  }
  
  componentDidUpdate(prevProps, prevState) {
   
  }

  handleChange= (evt) => {
    this.setState({ value: evt.target.value })

  }

  handleSubmit = (evt) => {

    evt.preventDefault()
    console.log(this.state.value);
    this.setState({ value: '' })
   }


  render() {

      
    return (
      <>
        <Searchbar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        
      </>

    )
  }

}



export default App

