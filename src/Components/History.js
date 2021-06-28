import axios from 'axios';
import react from 'react';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Reorder from './Reorder';



class History extends react.Component {
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
                    addedDrugs: response.data.checkout,
                    status: true
                })
            }
           
        }).catch(
            error => {
                alert(error.message)
            })
    }

    clear=()=>{
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/history?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                addedDrugs: response.data.checkout,
                modalStatus:true,
                status:false
            })


        }).catch(
            error => {
                alert(error.message)
            })

    }


    render() {
        return (

            <div style={{ display: 'flex', 'justify-content': 'center', gap: '2rem', 'flex-wrap': 'wrap' }}>
                {this.state.status &&
                    this.state.addedDrugs.map((value, index) => {
                        return (<Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={value.medicineImg} />
                            <Card.Body>
                                <Card.Title>{value.medicineName}</Card.Title>
                                <Card.Text>
                                    availability : {value.status}
                                </Card.Text>
                                <Card.Text>
                                    description : {value.medicineDescription}
                                </Card.Text>
                                <Card.Text>
                                    ammount : {value.ammount}
                                </Card.Text>
                                <Reorder 
                                value={value}
                                />
                            </Card.Body>
                        </Card>)

                    })}
                    {this.state.status &&
                    <Button onClick={()=>{this.clear()}}>Clear History</Button>

                    }
                    



                    <Modal show={this.state.modalStatus} >
        <Modal.Header>
          <Modal.Title style={{color:'green'}}>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.auth0.user.name} your history cleared successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.setState({modalStatus:false})}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>





            </div>







        )
    }
}

export default withAuth0(History);