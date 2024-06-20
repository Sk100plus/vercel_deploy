import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export class Home extends Component {


  render() {
    return (
      <div className="container  my-3">
        <h2 className="text-center" style={{margin:"60px 0px",marginTop:"100px"}}>Hey, Welcome to the  News Network</h2>
        <div className="container  oneRow my-3">
        <Card style={{ width: '18rem' }} className='mx-3 my-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.YlUbDQU-CWmkHp1UZforLAHaEl?rs=1&pid=ImgDetMain" height="180px"  />
      <Card.Body className='bodyPart'>
        <Card.Title>General News</Card.Title>
        <Card.Text>
          This is General related news that includes every feilds of News
          such as realted to Health, Business etc.
        </Card.Text>
        <Button variant="dark" href='/NEWS_APP/news'>In Details</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='mx-3 my-3'>
      <Card.Img variant="top" src=" https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/business-people-working-in-the-office-scaled.jpg" height="180px"  />
      <Card.Body className='bodyPart'>
        <Card.Title>Business News</Card.Title>
        <Card.Text>
        This is Business  news that includes News related to Business  
          such as marketing and much more.
        </Card.Text>
        <Button variant="dark" href='/NEWS_APP/business'>In Details</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='mx-3 my-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.IdVT8dPzC-nimfn3D9yJ5QHaE7?rs=1&pid=ImgDetMain" height="180px" />
      <Card.Body className='bodyPart'> 
        <Card.Title>Health News</Card.Title>
        <Card.Text>
        This is Health related  that includes information of infections, viruses and 
        medicines to protect etc.
        </Card.Text>
        <Button variant="dark" href='/NEWS_APP/health'>In Details</Button>
      </Card.Body>
    </Card>
        </div>
       

        <div className="container  oneRow my-3">
        <Card style={{ width: '18rem' }} className='mx-3 my-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.8qyYnCmiwqF-8WBS2-5z_wHaE8?w=1024&h=683&rs=1&pid=ImgDetMai" height="180px"  />
      <Card.Body className='bodyPart'>
        <Card.Title>Science News</Card.Title>
        <Card.Text>
        This is Science related  that includes information of inventions, research, SpaceWalk etc.
        </Card.Text>
        <Button variant="dark" href='/NEWS_APP/science'>In Details</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='mx-3 my-3'>
      <Card.Img variant="top" src=" https://th.bing.com/th/id/OIP.K8urvQKqHarydD5ixvdQBAHaFI?rs=1&pid=ImgDetMain" height="180px"  />
      <Card.Body className='bodyPart'>
        <Card.Title>Technology News</Card.Title>
        <Card.Text>
        This is Technology related  that includes information of new technologies in the world
        etc.

        </Card.Text>
        <Button variant="dark" href='/NEWS_APP/technology'>In Details</Button>
      </Card.Body>
    </Card>


   
        </div>
   </div>
    )
  }
}

export default Home

// In case of inline CSS we made a javascript object and 
// wirte inside double curly braces ;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f2b1cabfa548999b4e6fb901647656