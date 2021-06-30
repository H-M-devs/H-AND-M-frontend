import axios from 'axios';
import react from 'react';
// import Card from 'react-bootstrap/Card';
import { withAuth0 } from "@auth0/auth0-react";
import MedicineDeleteButton from './MedicineDeleteButton';
import MedicineUpdateButton from './MedicineUpdateButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Header from './Header';
import Footer from './Footer';



class MyDrugs extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            addedDrugs: [],
            status: false,
            modalStatus:false
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/user?email=${this.props.auth0.user.email}`).then(response => {
            if (response.data.medicine !== []) {
                this.setState({
                    addedDrugs: response.data.medicine,
                    status: true
                })
            }
           
        }).catch(
            error => {
                alert(error.message)
            })
    }

    deleteMedicine = (index) => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/drug/${index}?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                addedDrugs: response.data.medicine,
            })
        }).catch(
            error => {
                alert(error.message)
            })
    }

    updateMedicine = (event, index, value, ammount) => {
        event.preventDefault();

        const reqBody = {
            email: this.props.auth0.user.email,
            medicine: {
                medicineName: value.medicineName,
                medicineDescription: value.medicineDescription,
                status: value.status,
                medicineImg: value.medicineImg,
                ammount: ammount,
            }
        }
        axios.put(`${process.env.REACT_APP_SERVER_URL}/drug/${index}`, reqBody).then(response => {
            this.setState({
                addedDrugs: response.data.medicine
            })
        }).catch(
            error => {
                alert(error.message)
            })
    }

    checkout=  ()=>{
          this.state.addedDrugs.forEach(value=>{
            const reqBody = {
                email: this.props.auth0.user.email,
                checkout: value
            }
             axios.post(`${process.env.REACT_APP_SERVER_URL}/drugs`, reqBody).catch(
                error => {
                    alert(error.message)
                })

        });
        this.setState({modalStatus:true})
    }

    deleteAll=()=>{
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/drugs?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                addedDrugs: response.data.medicine,
                modalStatus:false,
                status:false
            })
            console.log(this.props.auth0.user);


        }).catch(
            error => {
                alert(error.message)
            })
    }

 render() {
        return (
            <>
            <Header />

            <div style={{ display: 'flex', 'justify-content': 'center', gap: '2rem', 'flex-wrap': 'wrap' , 'min-height': '64vh'}}>
                {this.state.status &&
                    this.state.addedDrugs.map((value, index) => {
                        return (
                            <div className="card-medicine-container" >

                            <MDBCard style={{ maxWidth: '540px' }}>
                            <MDBRow className='g-0'>
                              <MDBCol md='4'>
                                <MDBCardImage src={value.medicineImg} alt='...' fluid />
                              </MDBCol>
                              <MDBCol md='8'>
                                <MDBCardBody>
                                  <MDBCardTitle>{value.medicineName}</MDBCardTitle>
                                  {/* <MDBCardText>
                                    description : {value.medicineDescription}

                                  </MDBCardText> */}
                                  <MDBCardText>
                                  availability : {value.status}
                                  </MDBCardText>
                                  <MDBCardText>
                                  ammount : {value.ammount}
                                  </MDBCardText>
                                   <MedicineDeleteButton
                                     deleteMedicine={this.deleteMedicine}
                                     index={index}
                                 />
                                 <MedicineUpdateButton
                                     updateMedicine={this.updateMedicine}
                                     index={index}
                                     value={value}
                                 />
                                </MDBCardBody>
                              </MDBCol>
                            </MDBRow>
                          </MDBCard>
                          </div>
                          
                        )

                    })}
                    {this.state.status &&
                        <Button className="checkout-btn" onClick={()=>{this.checkout()}}>Checkout</Button>
                    }
                    



                    <Modal show={this.state.modalStatus} >
        <Modal.Header>
          <Modal.Title style={{color:'green'}}>Checked out</Modal.Title>
        </Modal.Header>
        <Modal.Body>thank you {this.props.auth0.user.name} we will deliver your medicine</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.deleteAll()}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>





            </div>



            <div>
  <Footer/>
</div>

</>



        )
    }
}

export default withAuth0(MyDrugs);