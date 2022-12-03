import data from './data.json'
import Card from '../components/Card'

export default function renderCards() {
  return data.people.map((person) => {
    return <Card key={person.id} person={person} />
  })
}
