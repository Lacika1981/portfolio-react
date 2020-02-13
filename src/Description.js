import React, { Fragment } from 'react';

export default function Description() {
  return (
    <Fragment>
      <section className="section">
        <h1 className="title">Who is?</h1>
        <div className="description flex two-elems">
          <div className="flex-elem description--text">
            <p>My name is Laszlo Varga.</p>
            <p>I am Front End Developer</p>
          </div>
          <div className="flex-elem description--image">
            <img
              src={process.env.PUBLIC_URL + '/images/laszlo_varga.jpg'}
              alt="me"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
