import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import DoctorModal from './DoctorModal';
import DoctorsButton from './DoctorsButton';

class Doctors extends react.Component{
  constructor(props){
    super(props);
    this.state = {
      doctors:[],
      tempData:[],
      userSearch: '',
      modalStatus: false
    }
  }

  modalClose=()=>{
    this.setState({modalStatus:false})
  }


  componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_SERVER_URL}/doctors`).then(response=>{
      this.setState({
        doctors: response.data,
        tempData:response.data
      })
    }).catch(
      error => {
          alert(error.message);
      })
  }


  searchResault = (event) => {
    event.preventDefault();
    let current = this.state.doctors;
    let choosed = current.filter(value => {
        return (value.nameDoctor === this.state.userSearch)
    })
    if (choosed.length > 0) {
        this.setState({
          tempData: choosed,
        })
    } else {
        this.setState({
          tempData: current,
        })
    }

}

openModal=(value, index)=>{
  this.setState({
    modalData:value,
    modalStatus:true,
  })
}


    render(){
        return(

              <div style={{'min-height': '64vh'}}>   
          {/* <Form onSubmit={this.searchResault}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Doctor name</Form.Label>
              <Form.Control type="text" placeholder="Enter Doctor name" onChange={(e)=>this.setState({userSearch:e.target.value})} />
            </Form.Group>
        
            <Button variant="primary" type="submit">
              search
            </Button>
          </Form> */}


          

  <Form onSubmit={this.searchResault}>
<div class="flexbox">
                        <div class="search">
                            <h1>Search this site</h1>
                            <h3>Click on search icon, then type your keyword.</h3>
                            <div>
                                <input type="text" placeholder="Search . . ."  onChange={(e)=>this.setState({userSearch:e.target.value})}/>
                            </div>
                        </div>
                    </div>

                    </Form>

          <div className='doctors' style={{display: 'flex', 'justify-content': 'center', gap: '2rem', 'flex-wrap': 'wrap' }}>


          {this.state.tempData.map((value,index)  => {
  return (<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={value.imgurl} height='350em'/>
      <Card.Body>
          <Card.Title>Dr. Name : {value.nameDoctor}</Card.Title>
          <Card.Text>
          specialty : {value.specialty}
          </Card.Text>
          <Card.Text>
          location : {value.location}
          </Card.Text>

       <DoctorsButton
       openModal={this.openModal}
       value = {value}
       index = {index}
       />

          
      </Card.Body>
  </Card>
  )
})}


</div>

{this.state.modalStatus && 
  <DoctorModal
  value = {this.state.modalData}
  modalClose={this.modalClose}
  modalStatus={this.state.modalStatus}
  />

}
  
  





</div>
        )
    }
}


export default Doctors;