import {useEffect, useState} from "react";

import Point from "@/components/Point";
import Line from "@/components/Line";
import Line2 from "@/components/Line2";

const Grid3 = (props) => {

  const size = 10;

  const initLines = () => {
    const gridLines = [];
    for (let row = 0; row < size; row++) {
      gridLines[row] = [];
      for (let col = 0; col < size; col += 2) {
        gridLines[row].push((
          <Line2
            row={row}
            col={col}
            axis={'x'}
            owner={null}
          />
        ))
      }
    }

    return gridLines;
  };

  const [lines, setLines] = useState(initLines());

  return (
    <table>
      {lines.length > 0 && lines.map((row, idx) => {
        return (
          <tr key={`row-${idx}`}>
            {row.length > 0 && row.map((line, idx) => {
              return (
                <td key={`line-${idx}`}>{line}</td>
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

export default Grid3;