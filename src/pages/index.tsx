

const Home: React.FC = () => {

  return (
    <>

    <div id="home" className="header">
    <div className="overlay"></div>

    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">  
        <div className="container">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-title">
                          Probando
                        </h1>
                        <button className="btnpage">Learn More</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-title">
                            We Make <br/> 
                            Responsive Design</h1>
                        <button className="btnpage">Learn More</button>
                      </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-title">

                            </h1>
                        <button className="btnpage">Learn More</button>
                      </div>
                </div>
            </div>
        </div>        
    </div>

    <div className="infos container mb-4 mb-md-2">
        <div className="title">
            <h6 className="subtitle font-weight-normal">Are locking for</h6>
            <h5>Lorem inpsum</h5>
            <p className="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

    </div>
</div>
    
<section className="section" id="about">


    <div className="container">

        <div className="row align-items-center mr-auto">
            <div className="col-sm-6 col-md-4 ml-auto">
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-calendar"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary"> ... </h4>
                        <p>Usuarios Registrados</p>
                    </div>
                </div>
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-face-smile"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary"> ... </h4>
                        <p>Post publicados</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-star"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary"> ... </h4>
                        <p> Notas creadas </p>
                    </div>
                </div>
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-user"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary"> ... </h4>
                        <p> Letras </p>
                    </div>
                </div>
            </div>
         </div>
    </div>

    
</section>
    </>
  );
};

export default Home;