
const Cell = ({top, right, bottom, left, owner}) => {

  return (
    <article className={`cell`}>
      <div className={`top lineWrapper lineX`}>{top}</div>
      <div className={`left lineWrapper lineY`}>{left}</div>
      <div className={`right lineWrapper lineY`}>{right}</div>
      <div className={`bottom lineWrapper lineX`}>{bottom}</div>
    </article>
  );
}

export default Cell;