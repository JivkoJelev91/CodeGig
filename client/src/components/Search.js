import React from 'react';

const Search = (props) => {
    const {submit, change} = props;
    return (
        <div>
            <section id="search" className="search-wrap">
                <h1>Find A Coding Gig</h1>
                <form 
                action="/search" 
                method="GET" 
                className="search-form" 
                onSubmit={submit}>
                    <i className="fas fa-search"></i>
                    <input 
                    type="search" 
                    name="search" 
                    placeholder="Javascript, Java, C++, Python, etc..."
                    onChange={change}
                    />
                    <input type="submit" value="Search"/>
                </form>
            </section>
        </div>
    )
}

export default Search;
