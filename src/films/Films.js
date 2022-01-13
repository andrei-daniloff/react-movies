import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import Loader from "../loader/Loader";

function Films() {
    const [films, setFilms] = useState([])
    const [isLoading, setLoading] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()

    // Get query params
    // const loc = useLocation()
    // const queryParams = new URLSearchParams(loc.search)

    const goBack = () => navigate("/")

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8c7720742602f6274d23061fa907cb34&language=en-US&sort_by=popularity.desc&with_genres=${id}&include_video=false&page=1`)
            .then(response => response.json())
            .then(body => {
                setFilms(body.results)
                setLoading(false)
            })
    }, [])

    return (
        <div className="films">
            {
                isLoading ?
                    <Loader/> :
                    <>
                        <button onClick={goBack}>Go to main page</button>
                        {films.map((film) => (
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w342/${film.backdrop_path}`} alt=""/>
                                <p>{film.title}</p>
                            </div>)
                        )}
                    </>
            }
        </div>
    )
}

export default Films