import ReactDom from "React-DOM";
import React from "React";

class app extends React.Component {
        constructor (props) { 
            super(props);
            this.state = {};
        }
        render(){
        return (
            <div classnames = "containe">
                <input classname "btn btn-primary" type="submit" value="alert" onclick={()=>{alert ("alert button onclick")}}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if (app){
    ReactDom.render(<app/>,app);
}