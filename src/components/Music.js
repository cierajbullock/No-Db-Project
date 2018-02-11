import React, {Component} from 'react';
import axios from 'axios';
import SearchMusic from './SearchMusic'

export default class Music extends Component {
    constructor(props) {
        super();

        this.state = {
            music: []
        };

    }

   search(event) {
       event.preventDefault();
       let artist = this._inputElement.value;
       console.log(this._inputElement.value)
       axios({
           method: 'GET',
           url: `https://itunes.apple.com/search?term=${artist}&entity=song`
       }).then(response => { console.log(response.data)
           this.setState({
               music: response
           });
       }).catch(err => {
           console.log(err)
       })
   }

    render() {
        const musicShown = this.state.music.map(response => { console.log(response.music.song)
        return(
            <div className = "music" key = {response}>
            <p>Song: {response.music.song}</p>
            </div>
        )})
        return(
            <div>
                <form onSubmit = {this.search}>
                    <input ref = {(a) => this._inputElement = a} placeholder="Search by Artist" />
                    <input placeholder="Search by Song Title" />
                    <button type="submit">Search</button>
                </form>
                {musicShown}
            </div>
        )}

    
}