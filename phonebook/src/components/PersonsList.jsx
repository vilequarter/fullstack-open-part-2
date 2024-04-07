import Person from "./Person"

const PersonsList = ({persons, filter, handleDelete}) => {
    return(
        <table>
            <tbody>
            {persons.filter(person => 
                person.name.toLowerCase().includes(filter.toLowerCase()))
                .map(person => 
                    <Person key={person.name} person={person} handleDelete={handleDelete}/>
                )
            }
            </tbody>
        </table>
    )

}

export default PersonsList