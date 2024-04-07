const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises);
    const initialValue = 0;
    const total = exercises.reduce((a, c) => a + c, initialValue)

    return(
        <p><strong>total of {total} exercises</strong></p>
    )
}

export default Total