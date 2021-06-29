import react from 'react';

import Button from 'react-bootstrap/Button';


class DoctorsButton extends react.Component{

    render(){
        // console.log(this.props.value);
        return(


            <Button variant="primary" className="doctorsButton"  onClick={()=>{this.props.openModal(this.props.value,this.props.index)}}>Appoint</Button>

        )
    }
}

export default DoctorsButton;