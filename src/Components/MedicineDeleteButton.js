import react from 'react';

import Button from 'react-bootstrap/Button';


class MedicineDeleteButton extends react.Component{

    render(){
        // console.log(this.props.value);
        return(


            <Button variant="primary"  onClick={()=>{this.props.deleteMedicine(this.props.index)}}>delete</Button>

        )
    }
}

export default MedicineDeleteButton;