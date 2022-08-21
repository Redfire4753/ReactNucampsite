import { Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsiteSlices';
import { selectFeaturedPromotion } from '../promotions/promotionSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(),selectFeaturedPromotion()];

    return ( 
        <Row>
            {items.map((item,idx) => <Col md className='m-1' key={idx}><DisplayCard item={item} /></Col> )}
        </Row>
     );
}
 
export default DisplayList;