const SearchForm = ({onChange}) => {
    return(
        <form>
            <div>
                Search Countries: <input id='searchInput' onChange={onChange}/>
            </div>
        </form>
    )
}

export default SearchForm;