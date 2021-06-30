import react from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


class AddButton extends react.Component{
    constructor(props){
        super(props);
        this.state={
            modalStatus:false,
            ammount:'',
            status:false
        }
    }

    render(){
        return(
            <div>


            <Button variant="light" className="doctorsButton"  onClick={()=>{this.setState({modalStatus:true})}}>add</Button>


            <Modal
            show={this.state.modalStatus}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Medicine
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.value.medicineImg} fluid />
              <h2>medicine name: {this.props.value.medicineName}</h2>
              <h4>availability: {this.props.value.status}</h4>
              <h4>Description:</h4>
                <p>{this.props.value.medicineDescription}</p>

              <Form onSubmit={(event)=>{this.setState({modalStatus:false});this.props.addDrug(event,this.props.value,this.state.ammount)}}>
 
 
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <h4>how much do you need</h4>
  <RangeSlider
  min='0'
  max='10'
  size='lg'
      value={this.state.ammount}
      onChange={changeEvent => this.setState({ammount:changeEvent.target.value , status:true})}
    />
  </Form.Group>
  <Button variant="primary" type="submit">Add to my medicine</Button>
</Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>this.setState({modalStatus:false})}>Close</Button>
            </Modal.Footer>
          </Modal>
            </div>

        )
    }
}

export default AddButton;