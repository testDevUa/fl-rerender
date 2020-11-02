import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper-content">
        <Route path='/Posts' render={() => <Posts key="editor1" posts={props.state.postsPage} postTextUpdate={props.postTextUpdate} postAdd={props.postAdd}/>}/>
        <Route path='/About' render={About} />
      </div>
    </div>
  );
}

export default App;
