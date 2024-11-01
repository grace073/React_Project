import SearchBar from "../../components/searchBar/SearchBar";
import "./homepage.scss"
//import "../../components/searchBar/SearchBar"

function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Real Estate Website</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>             
            </div>
            <div className="imgContainer">
                <img src="background.jpeg" alt="bg" />
            </div>
        </div>
    )
}

export default HomePage;