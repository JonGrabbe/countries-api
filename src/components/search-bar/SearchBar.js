import searchIconImg from './search.png'

export default function SearchBar() {
    return (
        <div className="search-bar">
            <img src={searchIconImg} alt="search icon" />
            
            <input type="text" placeholder="Search for a country... changes made" />
        </div>
    )
}