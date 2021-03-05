import React, { Component } from "react";
import PropTypes from "prop-types";

class animeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            status: "All",
            selected: "All"
        };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        active: PropTypes.string.isRequired,
        done: PropTypes.string.isRequired,
        anime: PropTypes.object.isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    listItem = (item, filter) => {
        if (filter === "") {
            return (
                <div
                    className="animeText"
                    key={item.id}
                >
                    <div class="listItems">
                        {item.title}
                    </div>
                </div>
            )
        } else if (item.status === filter) {
            return (
                <div
                    className="animeText"
                    key={item.id}
                >
                    <div class="listItems">
                        {item.title}
                    </div>
                </div>
            )
        }
    }

    listFilter = (filter, status) => {
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
            <div className="listList">
                <div className="animeBox">
                    {animeList.map((item) => (
                        this.listItem(item, filter)
                    ))}

                    {/* End of Active Box DIV*/}
                </div>
            </div>
        )
    }

    sortList = (filter, status) => {
        this.setState(state => ({
            filter: filter,
            status: status,
            selected: status
        }))
    }

    isItSelected = (select) => {
        if (this.state.selected === select) {
            return ("selectedButton");
        }
    }

    render() {

        return (
            <div>

                    <div className="align-center linkinbio-name">Samson's {this.props.title} List</div>

                    <div className="listRow">
                        <div className="listButtons" id={this.isItSelected("All")} onClick={() => this.sortList("", "All")}>All</div>
                        <div className="listButtons" id={this.isItSelected(this.props.active)} onClick={() => this.sortList("Active", this.props.active)}>{this.props.active}</div>
                        <div className="listButtons" id={this.isItSelected("Recommended")} onClick={() => this.sortList("Recommended", "Recommended")}>Faves</div>
                        <div className="listButtons" id={this.isItSelected("Enjoyed")} onClick={() => this.sortList("Enjoyed", "Enjoyed")}>Enjoyed</div>
                        <div className="listButtons" id={this.isItSelected(this.props.done)} onClick={() => this.sortList("Done", this.props.done)}>{this.props.done}</div>
                    </div>

                    {this.listFilter(this.state.filter, this.state.status)}

                    {/* End of Anime List DIV*/}
            </div>
        );
    }
}

export default animeList;
