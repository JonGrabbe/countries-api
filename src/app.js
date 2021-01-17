import React from 'react';
import Header from './header';
import Results from './results';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          darkMode: true,
          countries: undefined,
          searchText: undefined,
          continentFilterText: undefined,
          moonImgSrc: 'icons/moon-solid.svg'
        };

        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.renderData = this.renderData.bind(this);
        this.searchCountry = this.searchCountry.bind(this);
        this.filterContinent = this.filterContinent.bind(this);
        this.renderFilterContinentData = this.renderFilterContinentData.bind(this);
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

    async renderData(url) {
      let dataArray = await this.getData(url);
      if(dataArray) {
        // console.log(dataArray)
        this.setState(function() {
          return {
            countries: dataArray
          }
        })
      } 
    }

    renderRawData(arr) {
      this.setState(function() {
        return {
          countries: arr
        }
      })
    }

    async renderFilterContinentData(url, region) {
      let countryArr = await this.getData(url);
      if(countryArr) {
        let regionCountries = [];
        countryArr.forEach(function(item) {
          if(item.region.toLowerCase() === region.toLowerCase()) {
            regionCountries.push(item)
          }
        })
        if(regionCountries) {
          this.renderRawData(regionCountries)
        }
      }
    }

    searchCountry(e) {
      let text = e.currentTarget.value;
      if(this.state.continentFilterText) {
        let region = this.state.continentFilterText;
        this.renderFilterContinentData(`https://restcountries.eu/rest/v2/name/${text}`, region);
        return
      }

      this.setState(function() {
        return {
          searchText: text
        }
      })
      setTimeout(function() {
        this.renderData(`https://restcountries.eu/rest/v2/name/${this.state.searchText}`)
      }.bind(this), 1200)
    }

    filterContinent(e) {
      let region = e.currentTarget.value;
      let text = this.state.searchText;
      console.log(text)
      this.setState(function() {
        return {
          continentFilterText: region
        }
      })
      if(region) {
        this.renderFilterContinentData(`https://restcountries.eu/rest/v2/name/${text}`, region);
      } else {
        this.renderData(`https://restcountries.eu/rest/v2/name/${text}`)
      }
    }

    componentDidMount() {
      // this.renderData('https://restcountries.eu/rest/v2/all')
    }

    toggleDarkMode() {
      // document.getElementsByTagName('body')[0].classList.add('light-mode')
      let cl = document.getElementsByTagName('body')[0].classList;
      // console.log(cl)
      if(cl.value === 'light-mode') {
        cl.remove('light-mode')
        this.setState({
          moonImgSrc: 'icons/moon-solid.svg'
        })
      } else {
        cl.add('light-mode')
        this.setState(function() {
          return {
            moonImgSrc: 'icons/dark-theme-moon-black.svg'
          }
        })
      }
    }


    render() {
      let darkMode;
      if(this.state.darkMode) {
        darkMode = '';
      } else {
        darkMode = ' light-mode';
      }
      // let countries;
      // if(this.state.countries) {
      //   countries = this.state.countries;
      // } else {
      //   countries = null;
      // }
      return (
        <div className={'container'+darkMode}>
          <Header darkModeClick={this.toggleDarkMode} handleChange={this.searchCountry} handleContinentChange={this.filterContinent} moonImg={this.state.moonImgSrc}/>
          <Results items={this.state.countries}/>
        </div>
      );
    }
    
}