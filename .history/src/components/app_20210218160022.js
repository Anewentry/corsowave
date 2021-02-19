import ReactDom from "React-DOM";
import React from "React";

class app extends react.component {
    constructor (props) , { 
        super(props);
        this.state = {};
    }
        render(){
        return(
            <div classname="container">
                <input classname "btn btn-primary" type="submit" value="alert" oneclick={()=>{alert ("alert button onclick")}}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if (app){
    ReactDom.render(<app/>,app);
}