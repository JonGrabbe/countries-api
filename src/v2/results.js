import CountryItem from './country-item';

export default function Results(props) {
    let countries;
    if(props.items) {
        countries = props.items.map((item) => <CountryItem items={item}/>)
    } else {
        // countries = 'cant find country'
    }
    return (
        <main className="results-container">
            {countries}
        </main>
    );
}