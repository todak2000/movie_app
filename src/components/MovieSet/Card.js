import './movieset.css';

function MovieCard({movie}){
    return (
        <div className="card" key={movie.id}>
           <p className="card-p">{movie.title}</p>
        </div>
    );
    
}

export default MovieCard;