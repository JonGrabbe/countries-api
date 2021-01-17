export default function CountryThumbnail(props) {
    return (
        <div className="country-thumbnail">
            <img src={props.imgSrc} alt="" className="country-thumbnail__img"/>
            <h2>{props.countryName}</h2>
            <p>population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
        </div>
    );
}