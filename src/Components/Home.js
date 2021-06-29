import react from 'react';

import Medicine from './Medicine';
import Doctors from './Doctors';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';


class Home extends react.Component {
    constructor(props) {
        super(props);
        this.state = {

            filter: ''
        }
    }

    componentDidMount = () => {
        const body = { email: this.props.auth0.user.email }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, body)
    }

    render() {
        return (
            <>
                <Header />
            <div style={{minHeight:'64vh'}}>






{this.state.filter === '' &&
<>

    
<div className='welcome'>
    <h2 className='wecomeh2'>Welcome To Health And Medicine Site</h2>
    <p>please choose what you are looking for, you can choose doctors for appointing a date, or you can choose medicine to order.</p>
</div>




 <div class="bottom">



 <div class="buttons" style ={{marginTop:'10rem', marginLeft:'15%'}}>
     



     <button class="btn" style={{backgroundColor: 'honeydew',height: '8vh',width: '30vh'}}  onClick={(e) => this.setState({ filter: 'Doctors' })}>Doctors</button>
     <button class="btn" style={{backgroundColor: 'honeydew',height: '8vh',width: '30vh' , marginLeft:'8%'}}  onClick={(e) => this.setState({ filter: 'Medicine' })}>Medicine</button>
 </div>
</div>
</>
}
               






{/* 
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">


                        <Container className="p-3">
                            <Form.Control as="select" defaultValue="Medicine" onChange={(e) => this.setState({ filter: e.target.value })}>

                                <option value="Medicine">Medicine</option>
                                <option value="Doctors">Doctors</option>

                            </Form.Control>
                        </Container>
                    </Form.Group>



                </Form> */}

                {this.state.filter === "Medicine" ? <Medicine /> : this.state.filter ==="Doctors" ? <Doctors /> : ''}


                </div>

                <Footer />
            </>
        )
    }
}


export default withAuth0(Home);