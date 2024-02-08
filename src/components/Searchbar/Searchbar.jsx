import { Component } from 'react'
// import css from './Phonebook.module.css'


class Searchbar extends Component { 

    render() {
       
        return (
            <>
                <header className="searchbar">
                    <form className="form" onSubmit={this.props.handleSubmit}>
                        <button type="submit" className="button">
                        <span className="button-label">Search</span>
                        </button>

                        <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                        />
                    </form>
</header>
                
            </>
        )
    }
}

export default Searchbar