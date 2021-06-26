import react from 'react';
import Card from 'react-bootstrap/Card';
class MyDrugs extends react.Component{
    constructor(props){
        super(props);
        this.state= {
            selectedDrug : []
        }
    }
    componentDidMount=()=>{
    //     let temp = this.props.selectedDrugs
    //     let st = this.state.selectedDrug
   
        this.setState({
            selectedDrug: this.props.selectedDrugs
        })

    //     if (this.state.selectedDrug.length > 0) {
    //     this.setState({
                
    //         selectedDrug: this.state.selectedDrug.push(temp)
    //     })
    // }else{
    //     this.setState({
                
    //         selectedDrug: [temp]
    //     })
    // }
  
    }
    
  
    render(){
        console.log(this.state.selectedDrug);
        // console.log(this.props.selectedDrugs);
        return(
           
            this.state.selectedDrug.map((value,index)  => {
                // console.log(value);
                
                return (<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{value.medicinalproduct}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        
                       
                    </Card.Body>
                </Card>)
            })






        )
    }
}

export default MyDrugs;