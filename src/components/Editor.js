import React from 'react';

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
    }
    handleChange = (e) => {
        const input = e.target.value;
        this.setState({
            input: input
        })
        this.props.updateMarkdown(input)
    }

    clearInput = () => {
        this.setState({
            input: ""
        })
        this.props.updateMarkdown("")
      }

    copyToClipboard = () => {
    const input = document.querySelector("#editor");
    input.select();
    document.execCommand("copy");
    }

    render(){
        return(
            <div id="editor-container">
                {/* <h2>Write your markdown here: </h2> */}
                <textarea id="editor" type="textarea" value={this.state.input} onChange={this.handleChange} placeholder="Write your markdown here">test</textarea>
                <i className="fas fa-trash top-button" id="delete-button" title="Clear" onClick={this.clearInput}></i>
                <i className="fas fa-copy top-button" id="copy-button" title="Copy markdown to clipboard" onClick={this.copyToClipboard}></i>
            </div>
        )
    }
}

export default Editor;