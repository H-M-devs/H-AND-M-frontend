import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import AddButton from './AddButton';
import { withAuth0 } from "@auth0/auth0-react";


class Medicine extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            medicineData: [],
            status: false,
            searchName: '',
            data: [],
            selected: {},
            userData:[],

        }
    }



    searchResault = (event) => {
        event.preventDefault();
        let current = this.state.data;
        let choosed = current.filter(value => {
            return (value.medicineName === this.state.searchName)
        })
        if (choosed.length > 0) {
            this.setState({
                medicineData: choosed,
            })
        } else {
            this.setState({
                medicineData: current,
            })
        }

    }

    addDrug=(event,value,ammount)=>{
        event.preventDefault();
        const reqBody = {
            email: this.props.auth0.user.email,
            medicine:{
                medicineName:value.medicineName,
                medicineDescription:value.medicineDescription,
                status:value.status,
                medicineImg:value.medicineImg,
                ammount:ammount,
            }}
        axios.post(`${process.env.REACT_APP_SERVER_URL}/drug`,reqBody).then(response=>{

            this.setState({
                userData: response.data
            })

        }).catch(
            error=>{
                alert(error.message)
            })
    }


    componentDidMount = async () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/drugs`).then(response => {
            let data = response.data
            this.setState({
                medicineData: data,
                data: data,
                status: true
            });

        }).catch(
            error => {
                alert(error.message);
            })
    }

   

    render() {
        return (
            <div style={{'min-height': '63vh'}}>
                <Form onSubmit={this.searchResault}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Medicine name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Medicine name" onChange={(e) => this.setState({ searchName: e.target.value })} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        search
                    </Button>
                </Form>

                <div className="flex" style={{ display: 'flex', 'justify-content': 'center', gap: '2rem', 'flex-wrap': 'wrap' }}>
                    {this.state.status &&
                        this.state.medicineData.map((value,index)  => {                            
                            return (<Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={value.medicineImg} />
                                <Card.Body>
                                    <Card.Title>{value.medicineName}</Card.Title>
                                    <Card.Text>
                                        availability : {value.status}
                                    </Card.Text>
                                    {/* <Card.Text>
                                        description : {value.medicineDescription}
                                    </Card.Text> */}
                                    <AddButton
                                    value={value}
                                    addDrug={this.addDrug}
                                    />
                                    
                                   
                                </Card.Body>
                            </Card>)
                        })
                        


                    }

              
                </div>


            </div>



        )
    }
}


export default withAuth0(Medicine);