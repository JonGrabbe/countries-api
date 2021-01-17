export default function Header(props) {
    return (
        <header>
            <div className="header__upper-container container-padding-5">
                <h1>Where in the world?</h1>
                <div className="dark-mode-container">
                    <img src={props.moonImg} id="dark-mode-moon-icon" width='15px' alt=""/>
                    <button className="default-button dark-mode-button" onClick={props.darkModeClick}>Dark Mode</button>
                </div>
            </div>
            <div className="header__lower-container container-padding-5">
                <div className="header__search-input-container form-field">
                    <img src="icons/search-black.svg" width="25px" alt=""/>
                    <input type="text" className="header__search-text-field form-field-reset" placeholder="Search for a country..." onChange={props.handleChange}/>
                </div>
                <select className="select form-field-reset form-field" id="" onChange={props.handleContinentChange}>
                    <option value="" className="form-field-reset">filter by region</option>
                    <option value="africa" className="form-field-reset">Africa</option>
                    <option value="asia" className="form-field-reset">Asia</option>
                    <option value="americas" className="form-field-reset">Americas</option>
                    <option value="europe" className="form-field-reset">Europe</option>
                    <option value="oceania" className="form-field-reset">Oceania</option>
                </select>
            </div>
            
        </header>
    );
}