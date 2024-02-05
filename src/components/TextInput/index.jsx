import './style.css';

export const TextInput = ({ searchValue, actionFN}) => {
  return (
    <input
      className='text-input'
      onChange={actionFN}
      value={searchValue}
      type='search' 
      placeholder='Type your search'
    />
  )
}