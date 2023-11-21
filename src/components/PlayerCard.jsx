import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlayerCard({name, age, team, image_url, nationality,  jersey_number}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> He is {age}. He plays for {team}. He is {nationality}. He wears number { jersey_number} </Card.Text>       
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;