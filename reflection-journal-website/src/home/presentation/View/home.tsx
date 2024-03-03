import "./home.css";
import {FaSearch} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";
import { BiBell } from "react-icons/bi";

function Home(){
    
    return(
        <>
            <div className="taskbar">
                <div className="row">
                    <div className="col-md-3 column_1">
                        <button className="navigation_button">
                            <FiMenu />
                        </button>
                        <span id="title" >
                            Reflection time
                        </span>
                    </div>
                    <div className="col-md-6 column_2">
                        <input
                            id="search_bar" 
                            className = "search_bar" 
                            placeholder="Search">
                        </input>
                        <button type="submit" className="search-button">
                            <FaSearch id ="search-icon"/>
                        </button>
                    </div>
                    <div className="col-md-3 column_3">
                        <button className="column_3-button">
                            <CiSquarePlus id="column_3-icon" />
                        </button>
                        <button className="column_3-button">
                            <BiBell id="column_3-icon" />
                        </button>
                        <button className="column_3-button">
                            <img id="image" src="" width='60' height='60'></img>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;