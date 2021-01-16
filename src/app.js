import React from 'react';
import CountryThumb from './country-thumbnail';
import Header from './header';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
        this.search = this.search.bind(this);
        this.searchByCountry = this.searchByCountry.bind(this);

        this.state = {
            searchText: null
        }
    }

    async getData(url) {
        try {
            const response = await fetch(url);
            if(response.ok) {
              const jsonResponse = await response.json();
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch(error) {
            console.log(error)
          }
    }

    renderData(data) {
        // const data = await this.getData(url);
        // let data = this.state.countryData;
        if(!data) {
            return false;
        } 
        let coutryThumbnails = data.map(function(item) {
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
        this.setState(function(prevState) {
            return {
                coutryThumbnails: coutryThumbnails
            }
        })
    }

    search(e) {
        let val = e.currentTarget.value;
        this.setState(function() {
            return {
                searchText: val
            }
        })
    }

    searchByCountry() {
        let text = this.state.searchText;

        if(!document.getElementById('search-by-country').value) {
            let regionVal = document.getElementById('filter-by-region').value;
            //get all countries by region
            // let endpoint = `https://restcountries.eu/rest/v2/region/${regionVal}`;
            let countryObj = this.state.countryData.map(function(item) {
                if(item.region == regionVal) {
                    return item
                }
            })
            this.renderData(countryObj)
        } else {
            // let endpoint = `https://restcountries.eu/rest/v2/name/${text}?fullText=true`;
            let countryObj = this.state.countryData.map(function(item) {
                if(item.name == text) {
                    console.loog(item)
                    return item[0]
                }
            })
            this.renderData(countryObj)
        }
        
    }

    autoComplete(inputVal) {
        //create array of all country names

        //check if input value has letters starting with any of the counry strings

        //if they do render html of possible matches


    }

    async createNameList() {
        //creates a array of all country names and sets state with it
        // let data = await this.getData('https://restcountries.eu/rest/v2/all');
        let data = this.state.countryData;
        let nameList = data.map(function(item) {
            return item.name;
        })
        this.setState({
            nameList: nameList
        })
    }

    async setCountryData() {
        let countryData = await this.getData('https://restcountries.eu/rest/v2/all');
        this.setState(function() {
            return {
                countryData: countryData
            }
        })
        this.renderData(countryData)
        this.createNameList()
    }


    componentDidMount() {
        //fll the page with all countries
        // this.renderData('https://restcountries.eu/rest/v2/all');
        // this.createNameList();
        this.setCountryData()
    }

    

    render() {
        return(
            <div>
                <Header handleChange={this.search} handleClick={this.searchByCountry}/>
                <div className="results">
                    {this.state.coutryThumbnails}
                </div>
            </div>
        );
    }
}