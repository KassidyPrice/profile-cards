import Button from './Button'
import Logo from './Logo'
import User from './User'

export default function Header() {
  return (
    <div className='header'>
      <Logo />
      <div className='btn-container'>
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <User />
    </div>
  )
}
