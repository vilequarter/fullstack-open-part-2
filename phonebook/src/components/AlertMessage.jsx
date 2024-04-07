const AlertMessage = ({message}) => {
    if(message === null){
        return null;
    }

    const color = (message.error ? 'red' : 'green');
    const messageStyle = {
        color: color,
        backgroundColor: 'lightgray',
        fontSize: 25,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={messageStyle}>
            {message.text}
        </div>
    )
}

export default AlertMessage