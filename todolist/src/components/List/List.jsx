/* eslint-disable react/prop-types */
const List = ({ task }) => {
    let count = 0;
    for (let i = 0; i < task.length; i++) {
        if(task.length > count) {
            count++;
        }
    }
return (
    <>
    <h1> {count} Tâche en cours</h1>
    <ul>
        {
            task.map((item,i) => (
                <>
                <li key={i}>{item}</li>
                <input type="checkbox"></input> 
                </>
            )) 
        }
    </ul>
    </>
)
}

export default List
