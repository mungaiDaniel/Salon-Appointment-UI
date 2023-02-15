import salon2 from './Img/salon2.jpg'
import {Image} from "react-bootstrap";

const Pict = () => {
  return (
    <div>
      <Image src={salon2} thumbnail style={{border:'none'}} className="fluid" />
    </div>
  )
}

export default Pict
