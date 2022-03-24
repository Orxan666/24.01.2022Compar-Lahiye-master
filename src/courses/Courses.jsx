import React from "react";
import './courses.scss';
import kurs1 from '../image/kurs-1.webp';
import kurs2 from '../image/kurs-2.jpg';
import kurs3 from '../image/kurs-3.jpg';
import kurs4 from '../image/kurs-4.webp';

function Courses() {
  return (
    <>
      <section className="cours">
        
        <div className="container">
        <div className="cour-text">
            <h1>Məqsədləriniz üçün biz sizə kömək edərik !</h1>
              </div>
          <div className="row d-flex">
            <div className="col-lg-3 col-12">
                <div className="box">
              <img src={kurs1} alt=""  />
              <div className="over-text">
                  <h1>Front-End</h1>
              </div>
                </div>
            </div>
            <div className="col-lg-3 col-12">
                <div className="box">
              <img src={kurs2} alt="" />
              <div className="over-text">
                  <h1>Back-End C#</h1>
              </div>
                </div>
            </div>
            <div className="col-lg-3 col-12">
                <div className="box">
              <img src={kurs3} alt="" />
              <div className="over-text">
                  <h1>Design</h1>
              </div>
                </div>
            </div>
            <div className="col-lg-3 col-12">
                <div className="box">
              <img src={kurs4} alt=""/>
              <div className="over-text">
                  <h1>Back-End Python</h1>
              </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
