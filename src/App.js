import renderCards from './helpers/renderCards'
import './styles.css'

export default function App() {
  return (
    <div className='app'>
      <div className='card-wrapper'>{renderCards()}</div>
    </div>
  )
}
