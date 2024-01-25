

import color1 from '../images/color1.jpg'
import color2 from '../images/color2.jpg'
import color3 from '../images/color3.jpg'
import color4 from '../images/color4.jpg'




function Design() {

    return (
        <section className='DESIGN' id='Design'>
            <div className="container-fluid">
                <div className='text-center'>
                    <h3>What color will you choose?</h3>
                    <p>Lorem ipsum amet dolor! Class aptent tasociosqu ad litora torquent peer inpet mauris in erat justo. Nullam ac urna eu felis. Cras eleifend aliquam turpis, vitae aliquam eros blandit vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus!</p>

                </div>

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={color1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={color2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={color3} className="d-block w-100" alt="..." />


                        </div>
                        <div className="carousel-item">
                            <img src={color4} className="d-block w-100" alt="..." />


                        </div>
                    </div>

                </div>




            </div>




        </section>

    );
}

export default Design;