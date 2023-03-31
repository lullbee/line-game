import {useEffect, useState} from "react";
import Line from "@/components/Line";
import Cell from "@/components/Cell";
import Point from "@/components/Point";

const Grid = (props) => {

  const size = 10;

  const [hasInit, setHasInit] = useState(false);
  const [points, setPoints] = useState([]);
  const [linesX, setLinesX] = useState([]);
  const [linesY, setLinesY] = useState([]);
  const [cells, setCells] = useState([]);


  useEffect(() => {
    if (!hasInit) {
      // init points
      (() => {
        const gridPoints = [];
        for (let row = 0; row < size; row++) {
          gridPoints[row] = [];
          for (let col = 0; col < size; col++) {
            gridPoints[row][col] = (<Point />)
          }
        }

        setPoints(gridPoints);
      })();
      setHasInit(true);
    }
  }, [
    hasInit,
  ]);


  useEffect(() => {
    if (points.length > 0) {
      (() => {
        const gridXLines = [];
        for (let row = 0; row < size; row++) {
          gridXLines[row] = [];
          for (let col = 0; col < size; col += 2) {
            const p1 = points[row][col];
            const p2 = points[row][col+1];
            gridXLines[row][col] = (
              <Line
                p1={p1}
                p2={p2}
                isFilled={false} // TBD if this is a state
              />
            )
          }
        }

        setLinesX(gridXLines);

        const gridYLines = [];
        for (let row = 0; row < (size -1); row++) {
          gridYLines[row] = [];
          for (let col = 0; col < size; col++) {
            const p1 = points[row][col];
            const p2 = points[row+1][col];
            gridYLines[row][col] = (
              <Line
                p1={p1}
                p2={p2}
                isFilled={false} // TBD if this is a state
              />
            )
          }
        }
        setLinesY(gridYLines);
      })();
    }

  }, [
    points,
  ]);

  useEffect(() => {
    if (linesX.length > 0 && linesY.length > 0) {
      console.log("linesX", linesX);
      console.log("linesY", linesY);
      (() => {
        const gridCells = [];
        for (let row = 0; row < (size - 1); row++) {
          gridCells[row] = [];
          for (let col = 0; col < size; col +=2) {
            const cell = (
              <Cell
                top={linesX[row][col]}
                bottom={linesX[row+1][col]}
                left={linesY[row][col]}
                right={linesY[row][col+2]}
              />
            );
            gridCells[row].push(cell)
          }
        }

        setCells(gridCells);
      })();
    }
  }, [
    linesX,
    linesY,
  ]);

  return (
    <table>
      <tbody>
        {cells.length > 0 && cells.map((row, idx) => {
          if (idx > 0) return null;
          return (
            <tr key={`row-${idx}`}>
              {row.length > 0 && row.map((cell, colIdx) => {
                return (
                  <td key={`col-${colIdx}`}>{cell}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Grid;