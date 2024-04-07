function HeaderButton() {
    return (
      <div className="header-button-container">
        <button className="button header-button" id="button">
            <svg
              stroke="white"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="currentColor"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"></path>
            </svg>
        </button>
      </div>
    );
}

export default function Header(props) {
    return (
        <header className="header light-elm">
            <h1 className="item-one" id="header">Where in the world?</h1>
            <HeaderButton />
        </header>
    )
}