import axios from 'axios';
import react from 'react';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from "@auth0/auth0-react";
import MedicineDeleteButton from './MedicineDeleteButton';
import MedicineUpdateButton from './MedicineUpdateButton';

class MyDrugs extends react.Component{
    constructor(props){
        super(props);
        this.state= {
            addedDrugs:[],
            status:false
        }
    }
    componentDidMount=()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/user?email=${this.props.auth0.user.email}`).then(response=>{
            this.setState({
                addedDrugs:response.data.medicine,
                status:true
            })
        }).catch(
            error=>{
                alert(error.message)
            })
    }

    deleteMedicine=(index)=>{
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/drug/${index}?email=${this.props.auth0.user.email}`).then(response=>{
            this.setState({
                addedDrugs:response.data.medicine,
            })
        }).catch(
            error=>{
                alert(error.message)
            })
    }

    updateMedicine=(event,index,value,ammount)=>{
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
        axios.put(`${process.env.REACT_APP_SERVER_URL}/drug/${index}`, reqBody).then(response=>{
            this.setState({
                addedDrugs:response.data.medicine
            })
        }).catch(
            error=>{
                alert(error.message)
            })
    }

    
    
  
    render() {
        return(

            <div style={{display: 'flex', 'justify-content': 'center', gap: '2rem', 'flex-wrap': 'wrap' }}>
           {this.state.status &&
            this.state.addedDrugs.map((value,index)  => {                
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
                    <MedicineDeleteButton
                    deleteMedicine={this.deleteMedicine}
                    index={index}
                    />
                    <MedicineUpdateButton
                    updateMedicine={this.updateMedicine}
                    index = {index}
                    value= {value}
                    />

                   
                </Card.Body>
            </Card>)
            })}
            </div>






        )
    }
}

export default withAuth0(MyDrugs);