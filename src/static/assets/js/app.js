import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    componentDidMount() {
        console.log("Component did mount!!")
    }

    render() {
        return (
            <div>
                <h2>Hello, This is Homepage</h2>
            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// Using VanillaJS 

document.addEventListener('DOMContentLoaded', function () {

    // class Demo {
    //     constructor(element) {
    //         this.element = element

    //         // this.element.innerText = "Hello, VanillaJS"

    //         this.createElement(this.element, 'h1', "Hello, VanillaJS")
    //     }

    //     /**
    //      * 
    //      * @param {*HtmlElement} p parent element to append the tag newly created
    //      * @param {*} tag 
    //      * @param {*} c 
    //      * @param {*} co 
    //      */
    //     createElement(p, tag, co) {
    //         let t = document.createElement(tag);
    //         t.innerText = co
    //         p.appendChild(t)
    //         return p
    //     }
    // }

    // let el = document.querySelector('#root');

    // let d = new Demo(el)

    console.log('Content Loaded')
})