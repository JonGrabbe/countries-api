export default function CountryItem(props) {
    return (
        <div className="country-thumbnail">
            <div className="country-thumbnail__img-container">
                <img src={props.items.flag} alt=""/>
            </div>
            <h2>{props.items.name}</h2>
            <p>Population: {props.items.population}</p>
            <p>Region: {props.items.region}</p>
            <p>Capital: {props.items.capital}</p>
        </div>
    )
}