import React, { useEffect, useState } from "react";

const Classes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="py-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:px-36">
          {data.map((classItem) => (
            <div
              key={classItem.name}
              className="mb-5 h-full cursor-pointer group transition"
            >
              <div className={`card w-full ${classItem.availableSeats === 0 ? "bg-red-500" : "glass bg-base-200"}`}>
                <figure>
                  <img
                    className="h-96 group-hover:scale-125 transition"
                    src={classItem.image}
                    alt={classItem.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{classItem.name}</h2>
                  <p>{classItem.instructor} Instructor</p>
                  <p>{classItem.availableSeats} Available Seats</p>
                  <p>{classItem.price} Price</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      disabled={classItem.availableSeats === 0}
                    >
                      Learn now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;