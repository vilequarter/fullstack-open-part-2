const Filter = ({handleChangeFilter}) => {
    return(
        <form>
            <div>filter by name: <input id='filterInput' onChange={handleChangeFilter}/></div>
      </form>
    )
}

export default Filter