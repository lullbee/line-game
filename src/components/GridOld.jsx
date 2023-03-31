import {useEffect, useState} from "react";

import Point from "@/components/Point";

const Grid2 = (props) => {

  const size = 10;

  const initPoints = () => {
    const gridPoints = [];
    for (let row = 0; row < size; row++) {
      gridPoints[row] = [];
      for (let col = 0; col < size; col++) {
        gridPoints[row][col] = (
          <Point
            row={row}
            col={col}
            connections={[]}
          />
        )
      }
    }

    return gridPoints;
  };

  const [points, setPoints] = useState(initPoints());

  return (
    <table>
      {points.length > 0 && points.map((row, idx) => {
        return (
          <tr key={`row-${idx}`}>
            {row.length > 0 && row.map((point, idx) => {
              return (
                <td key={`point-${idx}`}>{point}</td>
              )
            })}
          </tr>
        )
      })}
      <tr>
        <td></td>
      </tr>
    </table>
  )

}

export default Grid2;