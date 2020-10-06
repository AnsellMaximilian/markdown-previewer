import React from 'react';
import marked from 'marked';

import '../css/preview.css';

marked.setOptions({breaks: true})

class Preview extends React.Component {
    render(){
        return(
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.markdown)}}>
                
            </div>
        )
    }
}

export default Preview;