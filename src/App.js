import logo from './logo.svg';
import './App.css';
import Head from './components/header'
import Footer from './components/footer'
import Note from './components/note'
import notes from './components/notes'

function App() {
  return (
    <div>
    <Head/>
    {notes.map(note => (
    <Note key= {note.key} title={note.title} content={note.content}/>
    ))}
    <Footer/>
    </div>
   
  );
 
}

export default App;
