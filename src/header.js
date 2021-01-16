import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <h1>Where in the world?</h1>
                <button className="dark-mode-toggle justify-grid-right">dark mode</button>

                <input type="text" id="search-by-country" onChange={this.props.handleChange} className="justify-grid-left"/>

                <select name="" id="filter-by-region" className="justify-grid-right">
                    <option value="">Choose a region</option>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>

                <button id="search-button" onClick={this.props.handleClick} className="justify-grid-left">Search</button>
            </header>
        );
    }
}