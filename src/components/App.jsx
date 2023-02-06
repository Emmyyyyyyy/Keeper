import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [data, setData] = React.useState([]);

  function addNote(note) {
    setData((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setData((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea functionAddNote={addNote} />
      {data.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            functionDeleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
