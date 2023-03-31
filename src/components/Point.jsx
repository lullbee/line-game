const Point = ({row, col, connections}) => {

  return (
    <div
      data-row={row}
      data-col={col}
      className={`point`}
    >•</div>
  )

}

export default Point;