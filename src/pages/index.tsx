
import { type NextPage } from "next";
//import { signIn, signOut, useSession } from "next-auth/react";
//import Head from "next/head";
import { api } from "~/utils/api";


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      {/* <Head>
        <title> Serphp </title>
        <meta name="description" content=" SI " />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

          
    <div id="home" className="header">
    <div className="overlay"></div>


        
    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">  
        <div className="container">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-title">

      
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
         
            
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
                            We Make <br/> 
                            Simple Design</h1>
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
        <div className="socials text-right">
            <div className="row justify-content-between">
                <div className="col">
                    <a className="d-block subtitle"><i className="ti-microphone pr-2"></i> (123) 456-7890</a>
                    <a className="d-block subtitle"><i className="ti-email pr-2"></i> info@website.com</a>
                </div>
                <div className="col">
                    <h6 className="subtitle font-weight-normal mb-2">Social Media</h6>

                </div>
            </div>
        </div>
    </div>
</div>


<section className="section" id="about">

    <div className="container">

        <div className="row align-items-center mr-auto">
            <div className="col-md-4">
                <h6 className="xs-font mb-0">nobis dolorem sapiente evenie.</h6>
                <h3 className="section-title">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sunt, unde aperiam aliquid quia repudiandae, ex harum quis amet delectus maxime, tempora possimus aut laboriosam magni corrupti labore. Doloremque, sit?</p>

                <a href="">Read more...</a>
            </div>
            <div className="col-sm-6 col-md-4 ml-auto">
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-calendar"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary">15+</h4>
                        <p>onsectetur perspiciatis</p>
                    </div>
                </div>
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-face-smile"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary">125+</h4>
                        <p>onsectetur perspiciatis</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-star"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary">3434+</h4>
                        <p>onsectetur perspiciatis</p>
                    </div>
                </div>
                <div className="widget">
                    <div className="icon-wrapper">
                        <i className="ti-user"></i>
                    </div>
                    <div className="infos-wrapper">
                        <h4 className="text-primary">80+</h4>
                        <p>onsectetur perspiciatis</p>
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