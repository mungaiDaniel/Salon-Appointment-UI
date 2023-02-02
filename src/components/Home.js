import girl from '../Img/girl.jpg'

const Home = () => {
  return (
    <div className="container my-4">
        <div className='d-sm-flex align-items-center justify-content-between'>
        <img src={girl} alt="" className='img-fluid w-50 d-sm-block p-2'/>
        <h1 >SALON GERENTE <span class="text-warning"> WHERE BEAUTY MEETS DESIGN </span></h1>
        </div>

    </div>
  )
}

export default Home