import { useState } from 'react'

export default function UserCard ({ name, img, userName }) {
  const [follow, setFollow] = useState(false)
  const className = follow ? 'user-follow is-following' : 'user-follow'
  const following = follow ? 'Siguiendo' : 'Seguir'

  const handleClick = () => setFollow(!follow)
  return (
    <div className='user-card'>
      <img className='user-img' src={img} alt={userName} />
      <div className='user-data'>
        <div className='user-info'>
          <span className='user-name'>{name}</span>
          <span className='user-username'>{`@${userName}`}</span>
        </div>
        <a onClick={handleClick} className={className} href='#'>
          <span className='user-follow-text'>{following}</span>
          <span className='user-stop-follow'>Dejar de seguir</span>
        </a>
      </div>
    </div>
  )
}
