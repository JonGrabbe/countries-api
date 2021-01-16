export default function CountryItem(props) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let population;
    if(props.items.population) {
        population = numberWithCommas(props.items.population)
    }
    return (
        <div className="country-thumbnail">
            <div className="country-thumbnail__img-container">
                <img src={props.items.flag} alt=""/>
            </div>
            <h2>{props.items.name}</h2>
            <p>Population: {population}</p>
            <p>Region: {props.items.region}</p>
            <p>Capital: {props.items.capital}</p>
        </div>
    )
}