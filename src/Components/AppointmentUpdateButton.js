import react from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



class AppointmentUpdateButton extends react.Component{
    constructor(props){
        super(props);
        this.state={
            date:'',
            desc:'',
            modalStatus:false
        }
    }

    render(){
        // console.log(this.props.value);
        return(
<>

            <Button variant="secondary"  onClick={()=>{this.setState({modalStatus:true})}}>update</Button>

            <Modal
            show={this.state.modalStatus}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onClick={()=>this.setState({modalStatus:false})}>
              <Modal.Title id="contained-modal-title-vcenter">
                Appointment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.value.imgurl} fluid />
              <h2>Dr. {this.props.value.nameDoctor}</h2>
              <h4>specialty : {this.props.value.specialty}</h4>
              <h4>location : {this.props.value.location}</h4>

              <Form onSubmit={(event)=>{this.setState({modalStatus:false});this.props.updateAppointment(event,this.props.index,this.state.date,this.state.desc,this.props.value)}}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Choose The Date</Form.Label>
    <Form.Control type="date" onChange={(e)=>this.setState({date:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Express Your Case</Form.Label>
    <Form.Control as="textarea" rows={3}  onChange={(e)=>this.setState({desc:e.target.value})}/>
  </Form.Group>
  <Button variant="primary" type="submit">Appoint</Button>
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

export default AppointmentUpdateButton;