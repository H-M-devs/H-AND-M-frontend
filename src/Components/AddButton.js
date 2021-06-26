import react from 'react';

import Button from 'react-bootstrap/Button';


class AddButton extends react.Component{

    render(){
        // console.log(this.props.value);
        return(


            <Button variant="primary"  onClick={()=>{this.props.selected(this.props.value)}}>add</Button>

        )
    }
}

export default AddButton;