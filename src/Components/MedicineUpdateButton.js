import react from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
import RangeSlider from 'react-bootstrap-range-slider';




class MedicineUpdateButton extends react.Component{
    constructor(props){
        super(props);
        this.state={
            modalStatus:false,
            ammount:''
        }
    }

    render(){
        return(
<>

            <Button variant="primary"  onClick={()=>{this.setState({modalStatus:true})}}>update ammount</Button>

            <Modal
            show={this.state.modalStatus}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onClick={()=>this.setState({modalStatus:false})}>
              <Modal.Title id="contained-modal-title-vcenter">
                update the ammount
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(event)=>{this.setState({modalStatus:false});this.props.updateMedicine(event,this.props.index,this.props.value,this.state.ammount)}}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <RangeSlider
  min='0'
  max='10'
  size='lg'
      value={this.state.ammount}
      onChange={changeEvent => this.setState({ammount:changeEvent.target.value , status:true})}
    />
  </Form.Group>
 
  <Button variant="primary" type="submit">Done</Button>
</Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>this.setState({modalStatus:false})}>Close</Button>
            </Modal.Footer>
          </Modal>
</>
        )
    }
}

export default MedicineUpdateButton;