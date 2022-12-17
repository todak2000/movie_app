
import './movieset.css';
import MovieCard from './Card';

function MovieCategory({movies}){
    
    return (
        <div className="grid">
            {movies.map((movie,index)=>{return <MovieCard movie={movie} key={index}/>})}
        </div>
    );
    
}

export default MovieCategory;