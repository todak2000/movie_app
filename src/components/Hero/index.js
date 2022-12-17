import { heroText } from "../../util/constants";
import './hero.css';

function Hero(){
    return (
        <div className="hero">
            <p className="hero-text">{heroText}</p>
        </div>
    );
    
}

export default Hero;