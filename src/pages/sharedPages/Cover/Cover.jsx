import React from 'react';

const Cover = ({ img, title, details }) => {
  return (
    <div
      className="hero  bg-fixed w-full h-[600px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-content text-center w-full text-neutral-content">
        <div className=" px-20 py-20 bg-black/50 w-10/12 mx-auto  ">
          <h1 className="mb-5 uppercase text-5xl  font-[Cinzen] font-bold">
            {title}
          </h1>
          <p className="mb-5 text-xl font-[Inter]">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
