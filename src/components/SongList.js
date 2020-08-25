import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//deze naam is conventie
const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songs }; // dit komt terug als prop in ons component
};

// Component is tweede function call
//Tweede parameter is de function creator. Dit komt dan in prop
export default connect(mapStateToProps, { selectSong })(SongList);
