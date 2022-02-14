const NewContactForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label>name
          <input type="text" value={props.nameValue} onChange={props.nameChange} required placeholder="Mike Wazowski"/>
        </label>
      </div>
      <div>
        <label>number
          <input type="tel" value={props.numberValue} onChange={props.numberChange} required placeholder="+49-30-12345678" />
        </label>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default NewContactForm