import { Card, Carousel} from 'react-bootstrap'
import { Helmet } from "react-helmet-async";
const HomeScreen=()=>{
    return(
         <div >
          <Helmet>
            <title>3jeje</title>
          </Helmet>

<h2 style={{textAlign: 'center'}}>welcome to 3jeje cmandi lyoum tousel 4doi  </h2>
          <div style={{
             display: 'flex',
             alignItems: 'center',
        justifyContent: 'center' ,marginTop:90} }>

          <Carousel style={{width:'500%'} } >
      <Carousel.Item>
        <img 
                  className="d-block w-100"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/insp-SOL-66595-PcGamingBuyingGuide-sv_DER-175658.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color:'gry'}}>Pc de Bureau</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuD5U0uatXezcJOukRUinQ5IHhku2jLAc2vQ&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color:'gry'}}>Pc portable</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://phonesized.com/Content/images/smartphones-side-by-side.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ color:'grey'}}>smartphone</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://maxesport.gg/medias/2022/02/GUIDE-CASQUE-GAMER-PHOTO-1.webp  "
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ color:'gry'}}>casque</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    
          </div>  

          <h2 style={{textAlign: 'center',marginTop:90}}> our promotions </h2>


<div style={{display: 'flex', justifyContent: 'space-between' ,flexWrap:'wrap',marginTop:90}}>

<Card style={{ width: '30rem' }}>
      <Card.Img style={{'width':300}} src="https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2020/05/12/Pictures/_118da294-941d-11ea-84fe-62f09e00e282.jpg" />
  
        <Card.Title>Huwaui y9s</Card.Title>
        <Card.Text>
          prix: 550$<br/>
          -40%
        </Card.Text>
  
    </Card>


    <Card style={{ width: '30rem' }}>
      <Card.Img style={{'width':300}}  src="https://storage-asset.msi.com/global/picture/image/feature/nb/GF/Katana-GF66/images/GF-msi-app-player.png" />
      <Card.Body>
        <Card.Title>
MSI Katana GF66 </Card.Title>
        <Card.Text>
       prix: 30000$<br/>
        -20%
        </Card.Text>
      </Card.Body>
    </Card>







    <Card style={{ width: '30rem' }}>
      <Card.Img style={{'width':300}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8c998EpkAJDOAzLGLM3me_Jf8qE8A2c1SQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>ROG - ASUS</Card.Title>
        <Card.Text>
         prix: 30000$<br/>
          -10%
                 </Card.Text>
      </Card.Body>
    </Card>




    <Card style={{ width: '30rem' }}>
      <Card.Img style={{'width':260}}  src="https://www.scoopgaming.com.tn/img/cms/accesoire/casque/Asus/DELTA%20(1).jpg"/>
      <Card.Body>
        <Card.Title>Logitech G933</Card.Title>
        <Card.Text>
         prix:180$<br/>
         -10%
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
         </div>
    )
}
export default HomeScreen