import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(props.url).then(response => {
            setMovies(response.data.results)
        }).catch(err => {
            console.error('Network Error:', err)
        })
    }, [])

    const handleMovie = (movie) => {
        axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                if (response.data.results.length !== 0) {
                    const trailer = response.data.results[0]
                    navigate('/player', {
                        state: {
                            videoKey: trailer.key,
                            title: movie.title || movie.name,
                            date: movie.release_date || movie.first_air_date,
                            type: props.title
                        }
                    })
                } else {
                    console.log('No trailer available')
                }
            })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map(movie =>
                    <img
                        key={movie.id}
                        onClick={() => handleMovie(movie)}
                        className={props.isSmall ? 'smallPoster' : 'poster'}
                        src={`${imageUrl + movie.backdrop_path}`}
                        alt="poster"
                    />
                )}
            </div>
        </div>
    )
}

export default RowPost
