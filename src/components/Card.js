export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.person.image} alt='profile' />
      <h4>{props.person.name}</h4>
      <p>{props.person.description}</p>
    </div>
  )
}
