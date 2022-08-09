import './SearchBar.scss';

const SearchBar = ({placeholder}) => {
  return (
    <div className="searchBar">
      <input type="text" placeholder={placeholder}/>
      <button>
        <i className="bi bi-search"></i>
      </button>
    </div>
  )
}

export default SearchBar