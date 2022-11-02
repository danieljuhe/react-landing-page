import React from "react";


const Card = () =>{
    return(
<div className="row row-cols-1 row-cols-md-4 g-4"  style={{marginTop:"50px"}}>
  <div className="col">
    <div className="card">
      <img src="https://www.freecodecamp.org/news/content/images/2020/09/road-690087_1920.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.nordicvisitor.com/images/iceland/summer/hofn_road_drive_fall.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.westend61.de/images/0001178279pw/sultanate-of-oman-ras-al-hadd-desert-road-in-a-sand-storm-WVF01126.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://i.pinimg.com/736x/94/c3/a3/94c3a3af3a4acb21034ac1aff7949ba5.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    );
};

export default Card;