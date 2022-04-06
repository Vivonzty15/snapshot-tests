import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function GitHubCard () {
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Vivonzty15</Card.Title>
                    <Card.Img src= 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'/>
                    <Card.Text> I love coding and working out at the gym!</Card.Text>
                </Card>
            </Row>
        </Container>
    )
}