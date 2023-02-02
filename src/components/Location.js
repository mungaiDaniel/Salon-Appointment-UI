import { Button } from 'react-bootstrap';
import './Location.scss';
import map1 from '../Img/map1.jpg'
const Location = () => {
  return (
    <div className='container-fluid text-light p-3' style={{backgroundColor: '#00c5b1'
    }}>
        <div className='text-light'>
          <h2 className="location-text-1"style={{textAlign:'center', marginTop:'20px', color:'#FFFF00', fontStyle:"italic"}}>Get In Touch</h2>
          <p
            style={{
              textAlign: "center",
              paddingLeft: "11%",
              paddingRight: "11%"
            }}
          >
            Located in the hottest area of 78744, the new Monica Hair is here to
            create an authentic and delightful experience for its Austin
            Clientele.
          </p>
          <div className="row align-items-center justify-content-between">
            <div className='col-md'> <img src={map1} alt="" className='img-fluid'/></div>
            <div className="col-md-6 col-sm-6 loc_address-section" style={{paddingLeft:'8%',paddingTop:'2%'}}>
              <h5 className="loc_address-text-2" style={{color: '#00c5b1'}}>Location</h5>
              <div className="loc_address">5710 Peppertree Pkwy #B</div>
              <div className="loc_address">Austin, Texas 78744</div>
              <div className="loc_address">512-825-2633</div>
              <div className="loc_address">
                Email: monica.arroyo1319@gmail.com
              </div>
              <button type="button" class="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Book Your Appointment Now
</button>

            </div>

            <div className="col-md-6 col-sm-6 loc_table" style={{paddingTop:'2%'}}>
              <h5 className="loc_table_heading"style={{color:'#00c5b1'}}>Hours</h5>
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <th scope="row" >Monday:</th>
                    <td >Closed</td>
                  </tr>
                  <tr>
                    <th scope="row">Tuesday:</th>
                    <td>10 am to 6 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Wedneday:</th>
                    <td>10 am to 6 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Thursday:</th>
                    <td>10 am to 6 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Friday:</th>
                    <td>9 am to 7 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Saturday:</th>
                    <td>9 am to 7 pm</td>
                  </tr>
                  <tr>
                    <th scope="row">Sunday:</th>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Location
