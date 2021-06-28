import react from 'react';

import Button from 'react-bootstrap/Button';


class DoctorsButton extends react.Component{

    render(){
        // console.log(this.props.value);
        return(


            <Button variant="primary"  onClick={()=>{this.props.openModal(this.props.value,this.props.index)}}>add</Button>

        )
    }
}

export default DoctorsButton;