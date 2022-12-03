import data from './data.json'
import Card from '../components/Card'
import Button from '../components/Button'

export default function renderCards() {
  return data.people.map((person) => {
    return (
      <div className='card-btn-container'>
        <Card key={person.id} person={person} />
        <Button />
      </div>
    )
  })
}
