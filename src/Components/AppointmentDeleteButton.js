import react from 'react';

import Button from 'react-bootstrap/Button';


class AppointmentDeleteButton extends react.Component{

    render(){
        // console.log(this.props.value);
        return(


            <Button variant="primary"  onClick={()=>{this.props.deleteAppoitment(this.props.index)}}>delete</Button>

        )
    }
}

export default AppointmentDeleteButton;