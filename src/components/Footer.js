import Copyright from './Copyright'
import Button from './Button'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-btn-container'>
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <Copyright />
    </div>
  )
}
