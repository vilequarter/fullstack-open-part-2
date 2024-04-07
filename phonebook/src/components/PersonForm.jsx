const PersonForm = (props) => {
    return(
        <form>
            <div>
                name: <input id='nameInput' onChange={props.handleChangeName}/><br/>
                number: <input id='numberInput' onChange={props.handleChangeNumber}/>
            </div>
            <div>
                <button type="submit" onClick={props.addName}>add</button>
            </div>
      </form>
    )
}

export default PersonForm