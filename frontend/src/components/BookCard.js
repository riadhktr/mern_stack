import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BookCard({element}) {
    const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/Public/books/${element.bookImage}`} />
      <Card.Body>
        <Card.Title>{element.bookName}</Card.Title>
        <Card.Text>
         {element.bookDescription}
        </Card.Text>
        <Card.Text>
         {element.bookPrice} TND
        </Card.Text>
        <Card.Text>
         {element.totalrating} /10
        </Card.Text>
       
        <Button variant="primary" onClick={()=>navigate(`/book/pdf/${element._id}`)}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;