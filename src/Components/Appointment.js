import axios from 'axios';
import react from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import AppointmentDeleteButton from './AppointmentDeleteButton';
import AppointmentUpdateButton from './AppointmentUpdateButton';
// import Footer from './Footer';
// import  './Appointment.css';
import Header from './Header';





class Appointment extends react.Component{
    constructor(props){
        super(props);
        this.state={
            userData:[],
            userDataStatus:false
        }
    }

    deleteAppoitment=(index)=>{
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/doctor/${index}?email=${this.props.auth0.user.email}`).then(response=>{
            this.setState({
                userData:response.data.doctor
            })
        })

    }

    updateAppointment=(event,index,date,desc,value)=>{
        event.preventDefault();
        const reqBody = {
            email: this.props.auth0.user.email,
            doctor:{
                nameDoctor:value.nameDoctor,
                age:value.age,
                specialty:value.specialty,
                location:value.location,
                imgurl:value.imgurl,
                date:date,
                desc:desc
            }}
        axios.put(`${process.env.REACT_APP_SERVER_URL}/doctor/${index}`, reqBody).then(response=>{
            this.setState({
                userData:response.data.doctor
            })
        }).catch(
            error=>{
                alert(error.message)
            })
    }

    componentDidMount=()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/user?email=${this.props.auth0.user.email}`).then(response=>{
            
            this.setState({
                userData:response.data.doctor,
                userDataStatus:true
            })
        }).catch(
            error => {
                alert(error.message);
            })
    }

    render(){
        console.log(this.state.userData);
        return(
            <>

            <Header />

            <div style={{display: 'flex', 'justify-content': 'center', gap: '2rem', 'flex-wrap': 'wrap' , 'min-height': '64vh'}}>

            {this.state.userDataStatus &&
            this.state.userData.map((value,index)  => {
                return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={value.imgurl} height='350em'/>
                <Card.Body>
                    <Card.Title>Dr. Name : {value.nameDoctor}</Card.Title>
                    <Card.Text>
                    specialty : {value.specialty}
                    </Card.Text>
                    <Card.Text>
                    location : {value.location}
                    </Card.Text>   
                    <Card.Text>
                    date : {value.date}
                    </Card.Text>   
                    <Card.Text>
                    case description : {value.desc}
                    </Card.Text> 
                    <AppointmentDeleteButton
       openModal={this.openModal}
       deleteAppoitment = {this.deleteAppoitment}
       index = {index}
       />
       <AppointmentUpdateButton
       updateAppointment={this.updateAppointment}
       index = {index}
       value= {value}
       />
                </Card.Body>
            </Card>)
            })}
         
        </div>
        </>
        )
    }
}

export default withAuth0(Appointment);