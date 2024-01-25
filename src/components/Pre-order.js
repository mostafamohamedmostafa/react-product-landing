import interfaceimg from '../images/interface.jpg';








function Preorder() {

    return (
        <section id='Pre-Order'>
            <div className="container-fluid">

                <div className="card-group">

                    <div className="card   ">
                        <h3>Pre-order now!</h3>

                        <form>
                            <label for=" " className="form-label">Select Model</label>

                            <select className="form-select" aria-label="Default select example">
                                <option selected value="1">Model One</option>
                                <option value="2">Model Two</option>
                                <option value="3">Model Three</option>
                            </select>


                            <label for=" " className="form-label">Select Color</label>

                            <select className="form-select" aria-label="Default select example">
                                <option selected value="1">Green</option>
                                <option value="2">White</option>
                                <option value="3">Black</option>
                            </select>


                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>



                    <div className="card ">
                    <img src={interfaceimg} className="card-img-top" alt="..." />








                    </div>

                </div>




            </div>




        </section>

    );
}

export default Preorder;