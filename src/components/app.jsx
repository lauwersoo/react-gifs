import React, { Component } from 'react'
import giphy from 'giphy-api'

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      SelectedGifid: "idGucHuLaal8ItUVtd"
    }

    this.search("homer");
  }

  search = (query) => {
    giphy("PT9Ecs2uzIoEuM2vgbhibYkGjgaCFUP1").search({
      q: query,
      rating: 'g'
      }, (error, result) => {
        this.setState ({
          gifs: result.data
      })
    })
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.SelectedGifid}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
