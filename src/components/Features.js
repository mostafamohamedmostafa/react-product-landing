import Featuresimg from '../images/Featuresimg.jpg';
import usefulfeature1 from '../images/usefulfeature1.jpg';
import connectmobile from '../images/connect-mobile.jpg';
import Featuressizeimage from '../images/Featuressize.jpg';

import {Featuresusefull} from './WebData';


function Features() {

    return (
        <section className='FEATURES' id='Features'>
            <div className="container-fluid">

                <div className="card-group">
                    <div className="card FEATURES-card" data-aos="fade-up">
                        <div className="card-body">
                            <h2 className="card-title">Not just another smart watch.</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus lorem ipsum for leo.</p>
                            <p className="card-text">Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis. Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Praesent id dolor id esteod maximus id vitae!</p>

                            <a name="" id="" class="btn btn-primary" href="#" role="button">Explore Apps</a>


                        </div>

                    </div>
                    <div className="card" data-aos="fade-up">
                        <img src={Featuresimg} className="card-img-top" alt="..." />

                    </div>

                </div>




            </div>




        </section>

    );
}



function UsefullFeatures() {

    return (
        <section className='FEATURES '>
            <div className="container-fluid">

                <div className="card-group">


                    <div className="card" data-aos="fade-up">

                        <div id="UsefullFeatures" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#UsefullFeatures" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#UsefullFeatures" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#UsefullFeatures" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#UsefullFeatures" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#UsefullFeatures" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={usefulfeature1} className="d-block w-100" alt="Usefull Features" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Product Features</h5>
                                    </div>
                                </div>



                                {Featuresusefull.map((Featuresusefull_Imported, index) => {
                                    return (
                                        <div className="carousel-item" key={index}>
                                            <img src={Featuresusefull_Imported.img} className="d-block w-100" alt={Featuresusefull_Imported.alt} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>{Featuresusefull_Imported.label} </h5>
                                            </div>
                                        </div>




                                    )
                                })}







                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#UsefullFeatures" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#UsefullFeatures" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>


                    <div className="card FEATURES-card" data-aos="fade-up">
                        <div className="card-body">
                            <h2 className="card-title">Usefull features.</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus lorem ipsum for leo.</p>
                            <p className="card-text">Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis. Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Praesent id dolor id esteod maximus id vitae!</p>

                        </div>

                    </div>


                </div>

            </div>




        </section>

    );
}

function Featuresconnect() {

    return (
        <section className='FEATURES'>
            <div className="container-fluid">

                <div className="card-group">
                    <div className="card FEATURES-card" data-aos="fade-up">
                        <div className="card-body">
                            <h2 className="card-title">Manage your watch with the help of smartphone.</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus lorem ipsum for leo.</p>
                            <p className="card-text">Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis. Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Praesent id dolor id esteod maximus id vitae!</p>



                        </div>

                    </div>
                    <div className="card" data-aos="fade-up">
                        <img src={connectmobile} className="card-img-top" alt="..." />

                    </div>

                </div>




            </div>




        </section>

    );
}

function Featuressize() {

    return (
        <section className='FEATURES'>
            <div className="container-fluid">

                <div className="card-group">

                    <div className="card" data-aos="fade-up">
                        <img src={Featuressizeimage} className="card-img-top" alt="..." />

                    </div>
                    <div className="card FEATURES-card" data-aos="fade-up">
                        <div className="card-body">
                            <h2 className="card-title">Two different sizes..</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus lorem ipsum for leo.</p>
                            <p className="card-text">Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis. Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Praesent id dolor id esteod maximus id vitae!</p>



                        </div>

                    </div>


                </div>




            </div>




        </section>

    );
}



export { Features, UsefullFeatures, Featuresconnect, Featuressize };