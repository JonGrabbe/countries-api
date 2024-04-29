import Header from "./components/header/header";
import MainWrapper from "./components/main-wrapper/MainWrapper";
import './scss/main.scss';
import SearchIcon from "./components/search-bar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <SearchIcon></SearchIcon>
      </MainWrapper>
    </div>
  );
}

export default App