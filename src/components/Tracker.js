import Trackimg from '../images/Trackimg.jpg';
import Trackerpossibilitiesimg from '../images/Trackerpossibilities.jpg';
import interfaceimg from '../images/interface.jpg';







function Tracker() {

    return (
        <section className='FEATURES ' id='Tracker'>
            <div className="container-fluid">

                <div className="card-group">

                    <div className="card" data-aos="fade-up">
                        <img src={Trackimg} className="card-img-top" alt="..." />

                    </div>
                    <div className="card FEATURES-card" data-aos="fade-up">
                        <div className="card-body">
                            <h2 className="card-title">Track your activity in a different way!</h2>
                            <p className="card-text">Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis.</p>
                            <p className="card-text">Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Praesent id dolor id esteod maximus id vitae eros. Nullam vehicula mattis sapien.</p>



                        </div>

                    </div>


                </div>




            </div>




        </section>


    );
}


function Trackerpossibilities() {

    return (
        <section className='FEATURES'>
            <div className="container-fluid  ">



                <div className="card-group ">


                    <div className="card    FEATURES-card  " data-aos="fade-up">
                        <div className="card-body">
                            <h2 className="card-title">Unlimited possibilities.</h2>
                            <p className="card-text">Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis.</p>
                            <p className="card-text">Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Praesent id dolor id esteod maximus id vitae eros. Nullam vehicula mattis sapien.</p>



                        </div>

                    </div>
                    <div className="card" data-aos="fade-up">
                        <img src={Trackerpossibilitiesimg} className="card-img-top" alt="..." />

                    </div>

                </div>








            </div>




        </section>

    );
}


function Trackerinterface() {

    return (
        <section className='FEATURES '>
            <div className="container-fluid">

                <div className="card-group">

                    <div className="card" data-aos="fade-up">
                        <img src={interfaceimg} className="card-img-top" alt="..." />

                    </div>
                    <div className="card FEATURES-card" data-aos="fade-up">
                        <div className="card-body">
                            <h2 className="card-title">Intuitive interface.</h2>
                            <p className="card-text">Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis.</p>
                            <p className="card-text">Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Praesent id dolor id esteod maximus id vitae eros. Nullam vehicula mattis sapien.</p>



                        </div>

                    </div>


                </div>




            </div>




        </section>

    );
}

export { Tracker, Trackerpossibilities, Trackerinterface };