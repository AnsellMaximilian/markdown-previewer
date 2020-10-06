import React from 'react';

import Editor from './components/Editor';
import Preview from './components/Preview';

import defaultMarkdown from './data/defaultMarkdown';

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: defaultMarkdown,
    }
  }

  updateMarkdown = (markdown) => {
    this.setState({
      markdown: markdown
    })
  }

  render(){
    
    return (
      <div className="App" >
        <h1>Markdown Previewer</h1>
        <Editor updateMarkdown={this.updateMarkdown}/>
        <Preview markdown={this.state.markdown}/>
        
      </div>
    );
  }
}

export default App;
