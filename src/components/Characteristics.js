
import { Characteristicsdata } from './WebData';
import color1 from '../images/color1.jpg'
import color2 from '../images/color2.jpg'
import color3 from '../images/color3.jpg'
import color4 from '../images/color4.jpg'



function Characteristics() {

    return (
        <section id='Characteristics'>
            <div className="container-fluid">

                <div className="card-group">

                    <div className="card h-100  " data-aos="fade-up">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={color1} className=" " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={color2} className=" " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={color3} className="" alt="..." />


                                </div>
                                <div className="carousel-item">
                                    <img src={color4} className="" alt="..." />


                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="card h-100">
                        <h3 className="card-title" data-aos="fade-up">Technical characteristics.</h3>


                        {Characteristicsdata.map((Characteristicsdata_Imported, index) => {
                            return (



                                <div className="card " key={index}  data-aos="fade-up">
                                    <div className="row g-0">
                                        <div className="col-md-3 text-center">
                                            <img src={Characteristicsdata_Imported.img} className="img-fluid rounded-start" alt={Characteristicsdata_Imported.alt} />
                                        </div>
                                        <div className="col-md-9">
                                            <div className="card-body">
                                                <h5 className="card-title">{Characteristicsdata_Imported.label}</h5>
                                                <p className="card-text">{Characteristicsdata_Imported.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}






                    </div>

                </div>

            </div>








        </section >

    );
}

export default Characteristics;