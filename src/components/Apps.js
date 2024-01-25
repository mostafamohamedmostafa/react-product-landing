import Appsos from '../images/app_os.png';
import App1 from '../images/app1.jpg';
import App2 from '../images/app2.jpg';
import App3 from '../images/app3.jpg';




function Apps() {

    return (
        <section id='Apps'>
            <div className="container ">
                <h2>Compatible with your favourite mobile apps.</h2>
                <h5>Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis. Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus!</h5>

                <img src={Appsos} className="card-img-top container- " alt="..." />

                <div className="card-group">
                    <div className="card  " data-aos="fade-up">
                        <img src={App1} className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h2 className="card-title">Smart Watch App</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus lorem ipsum for leo.</p>



                        </div>

                    </div>

                    <div className="card " data-aos="fade-up">
                        <img src={App2} className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h2 className="card-title">Smart Watch App</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus lorem ipsum for leo.</p>



                        </div>

                    </div>


                    <div className="card " data-aos="fade-up">
                        <img src={App1} className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h2 className="card-title">Smart Watch App</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus lorem ipsum for leo.</p>



                        </div>

                    </div>
                </div>





            </div>




        </section>

    );
}

export default Apps;