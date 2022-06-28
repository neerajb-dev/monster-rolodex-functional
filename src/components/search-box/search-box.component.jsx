import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
    return (
        <input
            type='search'
            placeholder={placeholder}
            className={`search-box ${className}`} // string interpolation `string ${}`
            onChange={onChangeHandler}
        />
    )
};

export default SearchBox;