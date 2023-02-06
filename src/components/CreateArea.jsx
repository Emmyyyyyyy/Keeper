import React from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: ""
  });
  // const [data, setData] = React.useState([]);

  function handleChange(event) {
    const { value, name } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    // setData((prevValue)=>{
    //   return [...prevValue, data]
    // })
    props.functionAddNote(newNote);
    event.preventDefault();
    setNewNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={newNote.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
