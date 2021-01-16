import React from 'react';
import CountryThumb from './country-thumbnail';
import Header from './header';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: null,
            renderCountries: null,
            searchError: false
        }

        this.renderData = this.renderData.bind(this);
        this.search = this.search.bind(this);
        this.searchByCountry = this.searchByCountry.bind(this);
        this.searchByRegion = this.searchByRegion.bind(this);
    }


    search(e) {
        //gets values for country search
        let textVal = e.currentTarget.value;
        this.setState(function() {
            return {
                countrySearchText: textVal
            }
        })
    }

    searchByCountry() {
        let regionText = document.getElementById('filter-by-region').value;
        if(regionText) {
            this.searchByRegion()
            return;
        }

        let countryName = this.state.countrySearchText;
        //find country object
        let country;
        this.state.allCountries.forEach(function(item) {
            if(item.name.toLowerCase() == countryName.toLowerCase()) {
                country = item;
            }
        })
        if(!country) {
            this.setState(function() {
                return {
                    searchError: true
                }
            })
            return;
        } else {
            this.setState(function() {
                return {
                    searchError: false
                }
            })
        }
        this.renderData([country]);
    }

    searchByRegion() {
        let regionName = document.getElementById('filter-by-region').value;
        if(regionName == 'all') {
            this.renderData(this.state.allCountries)
            return;
        }
        let countrySearchText = document.getElementById('search-by-country').value;
        console.log(regionName)
        if(regionName) {
            let regionCountries = [];
            this.state.allCountries.forEach(function(item) {
                if(item.region.toLowerCase() == regionName.toLowerCase()) {
                    regionCountries.push(item)
                }
            })
            if(countrySearchText) {
                let country;
                regionCountries.forEach(function(item) {
                    if(item.name.toLowerCase() == countrySearchText.toLowerCase()) {
                        country = item;
                    }
                })
                if(country) {
                    console.log(country)
                    this.renderData([country])
                }
            } else {
                console.log(regionCountries)
                this.renderData(regionCountries)
            }
        }
    }

    async getData(url) {
        try {
            const response = await fetch(url);
            if(response.ok) {
              const jsonResponse = await response.json();
              console.log(jsonResponse)
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch(error) {
            console.log(error)
          }
    }

    renderData(dataArray) {
        let countryThumbnails = dataArray.map(function(item) {
            return (
                <CountryThumb 
                    imgSrc={item.flag}
                    countryName={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                />
            );
        })
        this.setState(function() {
            return {
                renderCountries: countryThumbnails
            }
        })
    }

    async componentDidMount() {
        let data = await this.getData('https://restcountries.eu/rest/v2/all');
        this.setState(function() {
            return {
                allCountries: data
            }
        })
        this.renderData(data)
    }
    

    render() {
        let countries;
        if(!this.state.searchError) {
            countries = this.state.renderCountries;
        } else {
            countries = <h2>cant find country: {this.state.countrySearchText}</h2>
        }
        return(
            <div>
               <Header handleChange={this.search} handleClick={this.searchByCountry}/>
               <div className="results">
                   {countries}
               </div>
            </div>
        );
    }
}