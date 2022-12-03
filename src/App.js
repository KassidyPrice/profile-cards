import './styles.css'
import renderCards from './helpers/renderCards'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className='card-wrapper'>{renderCards()}</div>
      <Footer />
    </div>
  )
}
