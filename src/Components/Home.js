import react from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Medicine from './Medicine';
import Doctors from './Doctors';

class Home extends react.Component {
    constructor(props) {
        super(props);
        this.state = {

            filter: 'Medicine'
        }
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">


                        <Container className="p-3">
                            <Form.Control as="select" defaultValue="Medicine" onChange={(e) => this.setState({ filter: e.target.value })}>

                                <option value="Medicine">Medicine</option>
                                <option value="Doctors">Doctors</option>

                            </Form.Control>
                        </Container>
                    </Form.Group>



                </Form>

                {this.state.filter === "Medicine" ? <Medicine /> : <Doctors />}





            </>
        )
    }
}


export default Home;