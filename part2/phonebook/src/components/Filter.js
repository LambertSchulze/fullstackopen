const Filter = (props) => {
  return (
    <label>search
      <input type="search" value={props.searchTerm} onChange={props.onChange} />
    </label>
  )
}

export default Filter