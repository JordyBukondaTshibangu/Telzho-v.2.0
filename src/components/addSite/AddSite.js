import React, { useState } from 'react'

const AddSite = () => {

    const [url, setUrl] = useState("");
    const [text, setText] = useState("");

    const addSite = event => {

        event.preventDefault();
    }

    return (
            <form onSubmit={ addSite } className="addAppForm" >
                <div>
                    <input 
                        placeholder="Enter Text" 
                        type="text" value={text} 
                        onChange = { e => setText(e.target.value)}/>
                </div>

                <div >
                    <input 
                        placeholder="Enter Url" 
                        type="text" value={url} 
                        onChange = { e => setUrl(e.target.value)}/>
                </div>

                <div >
                    <button type='submit'></button>
                </div>
            </form>
    )
}

export default AddSite
