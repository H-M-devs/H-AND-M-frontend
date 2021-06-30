import axios from 'axios';
import react from 'react';
import { withAuth0 } from "@auth0/auth0-react";
// import Card from 'react-bootstrap/Card';
import AppointmentDeleteButton from './AppointmentDeleteButton';
import AppointmentUpdateButton from './AppointmentUpdateButton';
import Footer from './Footer';
// import  './Appointment.css';
import Header from './Header';
import './Appointment.css';


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
            <Header/>

            <div style={{minHeight:'58vh'}}>

            <div style={{display: 'flex', 'justify-content': 'center', 'flex-wrap': 'wrap' , marginTop:'3%' }}>

            {this.state.userDataStatus &&




this.state.userData.map((value,index)  => {
                return (


                    
   <div class="blog-card"  style={{width: '50%', 'margin-left': '5%', 'border-radius': '20px','box-shadow': '5px 4px 10px #0A1931'}}>
   <div class="meta">
     {/* <ul class="details-app">
       <li class="author"><a href="#">John Doe</a></li>
       <li class="date">Aug. 24, 2015</li>
       <li class="tags">
         <ul>
           <li><a href="#">Learn</a></li>
           <li><a href="#">Code</a></li>
           <li><a href="#">HTML</a></li>
           <li><a href="#">CSS</a></li>
         </ul>
       </li>
     </ul> */}
   </div>
   <div class="description">
     <div class="photo"><img  src={value.imgurl} alt='img' style={{width:'300px'}}/></div>
     <h1 style={{ 'line-height': '1','font-size': '1.7rem','margin-left':'300px'}}>Dr. {value.nameDoctor}</h1>
     <h2 style={{marginLeft:'300px' ,'font-size': '1rem','font-weight': '300','text-transform': 'uppercase',color: '#a2a2a2','margin-top': '5px'}}>date : {value.date}</h2>
     <p style={{ marginLeft:'300px' , 'word-wrap': 'break-word'}}>  description : {value.desc}</p>
     <div class="read-more">
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
     </div>
   </div>
 </div>
 
    
 ) })
         















   
  



    }
        </div>


        </div>
        <Footer/>
        </>
        )
    }
}

export default withAuth0(Appointment);