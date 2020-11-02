import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Navigation from "../nav";

class gamesList extends Component {
    static propTypes = {
        games: PropTypes.object.isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    onAnime = (anime, status) => {
        if (anime.status === status) {
            return (
                <div
                    className="animeText"
                    key={anime.id}
                >
                    <div>
                        {anime.title}
                    </div>
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

        const gamesListArray = this.props.games

        const gamesList = gamesListArray.sort(sortTitles);

        return (
            <div className="App">
                {/* Navigation Component */}
                <div>
                    <Navigation />
                </div>

                <div className="animeListTitle">
                    Samson's Games Lists
        </div>
                <div className="animeList">

                    <div className="animeTitle">Playing</div>
                    <div className="animeBox animeWatching">
                        {gamesList.map((games) => (
                            this.onAnime(games, "Playing")
                        ))}
                        {/* End of Watching Box DIV*/}
                    </div>

                    <div className="animeTitle">Fantastic</div>
                    <div className="animeBox animeFantastic">
                        {gamesList.map((games) => (
                            this.onAnime(games, "Recommended")
                        ))}
                        {/* End of Fantastic Box DIV*/}
                    </div>

                    <div className="animeTitle">Enjoyed</div>
                    <div className="animeBox animeEnjoyed">
                        {gamesList.map((games) => (
                            this.onAnime(games, "Enjoyed")
                        ))}
                        {/* End of Enjoyed Box DIV*/}
                    </div>

                    <div className="animeTitle">Played</div>
                    <div className="animeBox animeWatched">
                        {gamesList.map((games) => (
                            this.onAnime(games, "Played")
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

export default gamesList;
