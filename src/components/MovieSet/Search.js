import { searchTitle } from "../../util/constants";
import './movieset.css';

function SearchComponent({handleSearch, searchQuery}){
    return (
        <div className="search">
           <p className="search-p">{searchTitle}</p>
           <input type="text" className="input" value={searchQuery}  onChange={handleSearch}/>
        </div>
    );
    
}

export default SearchComponent;