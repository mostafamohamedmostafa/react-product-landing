

import Heroimg from '../images/Heroimg.jpg'


function Hero() {

    return (
        <section>
            <div className="Hero  container-">
                <img src={Heroimg} alt="Hero Image" className="d-block w-100  " ></img>

                <div class="centered">
                            <h1 className="HeroTitle">Product </h1>
                            <h2 className="HeroSlogan">Landing Page for Product or Service</h2>
                        </div>

         

            </div>
        </section>

    );
}

export default Hero;