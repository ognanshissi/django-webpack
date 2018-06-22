import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{

    componentDidMount(){
        console.log("Component did mount!!")
    }

    render(){
        return(
            <div>
                <h2>Hello, This is Homepage</h2>
            </div>
        )
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);