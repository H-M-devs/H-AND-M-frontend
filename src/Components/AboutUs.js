import react from 'react';
// import './App.css';
// import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'

class AboutUs extends react.Component{
    
    render(){
        return( 
            <div style={{display: 'flex', gap: '2rem', 'flex-wrap': 'wrap' }}>
                <Card style={{ width: '18rem' }} className="box-shadow">
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/66292996?v=4" />
                    <Card.Body>
                        <Card.Title>Shatha Smadi</Card.Title>
                        <Card.Text>
                            Software Engineering
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box-shadow">
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/63788477?v=4" />
                    <Card.Body>
                        <Card.Title>Humam Makhzoumi</Card.Title>
                        <Card.Text>
                            Civil Engineering
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box-shadow">
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81151287?v=4" />
                    <Card.Body>
                        <Card.Title>Maram Ankir</Card.Title>
                        <Card.Text>
                            Computer Engineering
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box-shadow">
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/80677034?v=4" />
                    <Card.Body>
                        <Card.Title>Khaled Shishani</Card.Title>
                        <Card.Text>
                         BIT
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box-shadow">
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81149143?v=4" />
                    <Card.Body>
                        <Card.Title>Osama AL-Shararbeh</Card.Title>
                        <Card.Text>
                            Accounting
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box-shadow">
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81553931?v=4" />
                    <Card.Body>
                        <Card.Title>Laith Hussein </Card.Title>
                        <Card.Text>
                            developer
                        </Card.Text>
                    </Card.Body>
                </Card>

                
            </div>


        )
    }
}

export default AboutUs;