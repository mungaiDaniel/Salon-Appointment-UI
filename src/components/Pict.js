import bg from './Img/bg.jpg'
import {Image} from "react-bootstrap";
const Pict = () => {
  return (
    <div>
      <Image src={bg} thumbnail style={{border:'none'}} />
    </div>
  )
}

export default Pict
