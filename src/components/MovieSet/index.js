import './movieset.css';
import SearchComponent from "./Search";
import MovieCategory from './Category';
import {useState, useEffect} from 'react';
import { movieData } from '../../util/api';

function MovieSet(){
    const [data, setData] = useState([])
    const [categories, setCategories] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        updateDOM(movieData)
    }, [])
    useEffect(() => {
        if (searchQuery !=="") {
            const filteredMovie = movieData.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            console.log(filteredMovie)
            updateDOM(filteredMovie)
        }
        else{
            updateDOM(movieData) 
        }
    }, [searchQuery])

    const updateDOM = (data)=>{
        setData(data)
        const categories = [...new Set(data.map(item => item.category))];
        setCategories(categories)
        console.log(categories)
    }

    const movieSet = []
    categories.forEach((category, index)=>{
        const moviesByCategories = data.filter(movie=> movie.category === category).map(filteredMovie => filteredMovie)
        movieSet.push(
            <>
                <p className="search-p">{category}</p>
                <MovieCategory movies={moviesByCategories} key={index}/>
            </>
        )
    })

    const handleSearch = (e)=>{
        setSearchQuery(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className="movie">
           <SearchComponent handleSearch={handleSearch} searchQuery={searchQuery}/>
           {movieSet}
        </div>
    );
    
}

export default MovieSet;