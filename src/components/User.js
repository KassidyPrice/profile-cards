import user from '../helpers/user.json'

export default function User() {
  return <h3 className='user'>{user.user.name}</h3>
}
