import './styles.css'
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import img from './pic.jpg'

function AboutMe(props) {
    return (
        <div>
            <Card>
                <CardImg top center width="100%" src={img} alt="Profile pic"
                         style={{
                             "width": "400px", "height": "400px", "border-radius": "50%", "display": "block",
                             "margin-left": "auto", "margin-right": "auto"
                         }} className="p-5"/>
                <CardBody>
                    <CardTitle tag="h3">Sandesh Dinkar</CardTitle>
                    <CardSubtitle tag="h5" className="mb-2">An IT Undergraduate</CardSubtitle>
                    <br/>
                    <CardText>
                        <h6>College: GEC, Aurangabad.</h6>
                        <h6>Current Year: Third.</h6>
                        <h6>Branch: Information Technology.</h6>
                        <h6>Hometown: Shahapur.</h6>
                        <h6>Current city: Aurangabad.</h6>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default AboutMe;
