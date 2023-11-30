/* eslint-disable react/prop-types */
// import './input.css'

const Input = ({ inputValue, setInputValue, setTask, task }) => {
//  console.log(inputValue);
//  console.log(setInputValue);
  const handleChange = (e) => {
  setInputValue(e.target.value) 
}
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue);
    setTask([...task, inputValue])
 }
  return (
    
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ajouter du texte" value={inputValue} onChange={handleChange} ></input>
    </form>
  )
}

export default Input
