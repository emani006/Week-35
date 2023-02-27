import './App.css';
import Chat from './Chat'
import ChatFunc from './ChatFunc';
import TextForm from './TextForm'
import TextFormBootstrap from './TextFormBoostrap';

function App() {
  return (
    <>
    {/* чат на классах */}
    <Chat/>
    <hr></hr>
    
    {/* чат на функции */}
    <ChatFunc/>

    <hr></hr>
    {/* форма для ввода логина + пароля с валидацией */}
    <TextForm/> 

    <hr></hr>
    {/* форма для ввода логина + пароля на Bootstrap компонентах*/}
    <TextFormBootstrap/>
</>
  );
}

export default App;
