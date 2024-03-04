import "./home.css";
import {FaSearch} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";
import { BiBell } from "react-icons/bi";

function Home(){
    
    return(
        <div className="Homepage">
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
            <div className="Nav_list">
                <div className="row">
                    <div className="col-md-3">
                        <form className="Nav_panel">
                            <a href="http://localhost:5173/index.html">
                                <div className="Nav_buttons">Home</div>
                            </a>
                            <hr></hr>
                            <a href="http://localhost:5173/index.html">
                                <div className="Nav_buttons">Following</div>
                            </a>
                            <hr></hr>
                            <a href="http://localhost:5173/index.html">
                                <div className="Nav_buttons">My Journals</div>
                            </a>
                            <hr></hr>
                            <a href="http://localhost:5173/index.html">
                                <div className="Nav_buttons">History</div>
                            </a>
                            <hr></hr>
                        </form>
                    </div>
                    <div className="col-md-9">
                        <form className="discover_journals">
                            <ul className="grid">
                                <a href="http://localhost:5173/index.html">
                                    <li className="journal_entry">
                                        <div className="journal_preview">
                                            <h1>Title</h1>
                                            <hr className="journal_line"></hr>
                                            <p className="journal_text">Description</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="http://localhost:5173/index.html">
                                    <li className="journal_entry">
                                        <div className="journal_preview">
                                            <h1>Title</h1>
                                            <hr className="journal_line"></hr>
                                            <p className="journal_text">Description</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="http://localhost:5173/index.html">
                                    <li className="journal_entry">
                                        <div className="journal_preview">
                                            <h1>Title</h1>
                                            <hr className="journal_line"></hr>
                                            <p className="journal_text">Description</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="http://localhost:5173/index.html">
                                    <li className="journal_entry">
                                        <div className="journal_preview">
                                            <h1>Title</h1>
                                            <hr className="journal_line"></hr>
                                            <p className="journal_text">Description</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="http://localhost:5173/index.html">
                                    <li className="journal_entry">
                                        <div className="journal_preview">
                                            <h1>Title</h1>
                                            <hr className="journal_line"></hr>
                                            <p className="journal_text">Description</p>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div className="contactUs">
                <form>
                    <h2>Contact Us</h2>
                    <p>Email: Johndoe@journalshare.com</p>
                    <p>Call: +65 12345678</p>
                </form>
            </div>
        </div>
    );
}
export default Home;