
const Line = ({p1, p2, isFilled}) => {


  return (
    <article className={`lineContainer`}>
      {p1}
      <span className={`line`} />
      {p2}
    </article>
  )

}

export default Line;