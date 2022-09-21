import { useState } from "react"

export const AboutFilter = ({setSearchParams , postQuery , latest}) => {
    const [search , setSearch] = useState(postQuery)
    const [checked , setChecked] = useState(latest)
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        const isLatest = form.latest.checked;

       
        const params = {};
        if(query.length) params.post = query;
        if(isLatest) params.latest = true;
        setSearchParams(params)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type= "search" name = "search" value={search} onChange ={(e)=> {
                setSearch(e.target.value)
            }}/>
            <label style ={{padding: '10px' , fontSize: "20px"}}> 
                <input type = "checkbox" name = "latest" checked = {checked} onChange = {(e) =>{
                    setChecked(e.target.checked)
                }}
                /> New 
            </label>
            <input type= "submit" value = "search"/>
        </form>
    )
}