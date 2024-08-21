import "./searchbar.scss"
import { useState } from "react";

const types=["buy", "rent"];

 function SearchBar(){
//useState hooks:
    const [query, setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })

    const switchType=(val)=>{
        setQuery((prev)=>({...prev, type:val}));
    };

    return(
        <div className="searchBar">
            <div className="type">
                {/* <button onClick={()=>switchType("buy")}>Buy</button>
                <button onClick={()=>switchType("rent")}>Rent</button> */}

                {types.map((type)=>(
                    <button key={type} onClick={()=>switchType(type)} className={query.type===type ? "active" :""}>
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type="text" name="location" placeholder="City location" />
                <input type="number" name="minPrice" min={0} max={10000000} placeholder="Min Price" />
                <input type="number" name="maxPrice" min={0} max={10000000} placeholder="Max Price" />
                <button>
                    <img src="searchLogo.jpeg" alt="Search Icon" />
                </button>
            </form>
        </div>
    )
 }
 export default SearchBar;