import salon2 from './Img/salon2.jpg'
import {Image} from "react-bootstrap";
const Pict = () => {
  return (
    <div>
      <Image src={salon2} thumbnail style={{border:'none'}} />
    </div>
  )
}

export default Pict
