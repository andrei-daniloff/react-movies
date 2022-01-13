import React from "react";
import {Link} from "react-router-dom";
import Loader from "../loader/Loader";

class Genres extends React.Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8c7720742602f6274d23061fa907cb34&language=en-US")
            .then(response => response.json())
            .then(body => this.setState({
                genres: body.genres,
                isLoading: false
            }))
    }

    render() {
        return (
            <div className="nav-links">
                {
                    this.state.isLoading ?
                        <Loader/> :
                        this.state.genres?.map((genre) => (
                            <Link
                                to={`/films/${genre.id}?queryParam=pampam`}
                                key={genre.id}>
                                {genre.name}
                            </Link>
                        ))
                }
            </div>
        )
    }
}

export default Genres