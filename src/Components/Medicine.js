import react from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
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
            userData: [],

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

    addDrug = (event, value, ammount) => {
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
        axios.post(`${process.env.REACT_APP_SERVER_URL}/drug`, reqBody).then(response => {

            this.setState({
                userData: response.data
            })

        }).catch(
            error => {
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
            <div style={{ 'min-height': '63vh' }}>


                <Form onSubmit={this.searchResault}>
                    <div class="flexbox">
                        <div class="search">
                            <h1>Search this site</h1>
                            <h3>Click on search icon, then type your keyword.</h3>
                            <div>
                                <input type="text" placeholder="Search . . ." onChange={(e) => this.setState({ searchName: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </Form>

                <div className="flex" style={{ display: 'flex', 'justify-content': 'center', gap: '2rem', 'flex-wrap': 'wrap', width: '120vh' }}>
                    {this.state.status &&
                        this.state.medicineData.map((value, index) => {
                            return (


                                <div id="card">
                                    <h1 id="doctorsCard">{value.medicineName}</h1>
                                    <div class="image-crop">
                                        <img id="avatar" src={value.medicineImg} alt='img' />
                                    </div>
                                    <div id="bio">
                                        <p>availability : {value.status}</p>
                                    </div>
                                    <div id="stats">
                                    </div>
                                    <div id="buttons">
                                        <AddButton
                                            value={value}
                                            addDrug={this.addDrug}
                                        />
                                    </div>
                                </div>

                            )
                        })



                    }


                </div>


            </div>



        )
    }
}


export default withAuth0(Medicine);