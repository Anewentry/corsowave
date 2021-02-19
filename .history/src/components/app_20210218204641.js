import ReactDom from "React-DOM";
import React from "React";

class app extends React.Component {
        constructor (props) { 
            super(props);
            this.state = {};
        }
        render(){
        return (
            <div classnames = "container">
                <input classnames="btn btn-primary" type="submit" value="Aindex.html run
                lert" onclick={() => {alert("Alert button onclick");}}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if (app){
    ReactDom.render(<app/>,app);
}