import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import MyDrugs from './MyDrugs';
import AddButton from './AddButton'

class Medicine extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            medicineData: [],
            status: false,
            searchName: '',
            data: [],
            selected: {},

        }
    }



    searchResault = (event) => {
        event.preventDefault();
        let current = this.state.data;
        let choosed = current.filter(value => {
            return (value[0].medicinalproduct === this.state.searchName)
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


    componentDidMount = async () => {
        axios.get('https://api.fda.gov/drug/event.json?limit=50').then(response => {
            let data = response.data.results.map(value => {
                return value.patient.drug
            })
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
            <div>
                <Form onSubmit={this.searchResault}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Medicine name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Medicine name" onChange={(e) => this.setState({ searchName: e.target.value })} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        search
                    </Button>
                </Form>

                <div className="flex" style={{ display: 'flex', 'justify-content': 'center', gap: '2%', 'flex-wrap': 'wrap' }}>
                    {this.state.status &&
                        this.state.medicineData.map((value,index)  => {
                            // console.log(value);
                            
                            return (<Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{value[0].medicinalproduct}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <AddButton
                                    value={value[0]}
                                    index={index}
                                    selected={this.props.selected} 

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


export default Medicine;