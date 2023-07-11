

const Home: React.FC = () => {

  return (
    <>

    <section className="tm-site-header tm-flex-center tm-mb-50 tm-bgcolor-1 tm-border-rounded">
			<i className="fas fa-heart fa-3x"></i>
			<h1> Portapapeles </h1>
	</section>

    <section className="tm-about tm-p-50 tm-bgcolor-2 tm-border-rounded">
			<div className="tm-about-header tm-flex-center">
				<i className="fas fa-users fa-2x"></i>
				<h2>Acerca de</h2>
			</div>
			<div className="tm-about-text">
				<p className="tm-mb-40"> ... </p>
			</div>
		</section>


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