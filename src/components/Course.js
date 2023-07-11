import React from "react";

export const Course = ({ courseInfo }) => {
  //   sumo el numero de ej mediante array.reduce

  const totalExcercices = courseInfo.reduce((total, current) => {
    return (
      total +
      current.parts.reduce((totalParts, currentPart) => {
        return totalParts + currentPart.exercises;
      }, 0)
    );
  }, 0);

  return (
    <div>
      {courseInfo.map((info) => (
        <header key={info.id}>
          <h1 key={info.id}>{info.name}</h1>
          {info.parts.map((infoParts) => (
            <p key={infoParts.id}>
              {infoParts.name}: {infoParts.exercises}
            </p>
          ))}
        </header>
      ))}

      <h3>Número total de ejercicios: {totalExcercices}</h3>
    </div>
  );
};
