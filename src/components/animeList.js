import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Navigation from "../nav";

class animeList extends Component {
    static propTypes = {
        anime: PropTypes.object.isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

  onAnimeYouTubeCheck = (anime) => {
    if (anime.youtube.includes('http') === true) {

      return (
        <a href={anime.youtube}>
          {anime.title}
        </a>
      )
    } else {
      return (
        <div>
          {anime.title}
        </div>
      )
    }
  }

  onAnime = (anime, status) => {
    if (anime.status === status) {
      return (
        <div
          className="animeText"
          key={anime.id}
        >
          {this.onAnimeYouTubeCheck(anime)}
        </div>
      )
    }

  }

  render() {

    const sortTitles = (a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    }

    const animeListArray = this.props.anime

    const animeList = animeListArray.sort(sortTitles);

    return (
      <div className="App">
        {/* Navigation Component */}
        <div>
          <Navigation />
        </div>

        <div className="animeListTitle">
          Samson's Anime List
        </div>
        <div className="animeList">

          <div className="animeTitle">Watching</div>
          <div className="animeBox animeWatching">
            {animeList.map((anime) => (
              this.onAnime(anime, "Watching")
            ))}
            {/* End of Watching Box DIV*/}
          </div>

          <div className="animeTitle">Fantastic</div>
          <div className="animeBox animeFantastic">
            {animeList.map((anime) => (
              this.onAnime(anime, "Recommended")
            ))}
            {/* End of Fantastic Box DIV*/}
          </div>

          <div className="animeTitle">Enjoyed</div>
          <div className="animeBox animeEnjoyed">
            {animeList.map((anime) => (
              this.onAnime(anime, "Enjoyed")
            ))}
            {/* End of Enjoyed Box DIV*/}
          </div>

          <div className="animeTitle">Watched</div>
          <div className="animeBox animeWatched">
            {animeList.map((anime) => (
              this.onAnime(anime, "Watched")
            ))}
            {/* End of Watched Box DIV*/}
          </div>

          {/* End of Anime List DIV*/}
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    );
  }
}

export default animeList;
