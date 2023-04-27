import './App.css'
import UserCard from './components/UserCard'

export default function App () {
  return (
    <>
      <div className='follow-card'>
        <h2>Te puede interesar</h2>
        <UserCard
          name='M 4 K U'
          userName='SirM4ku'
          img='https://pbs.twimg.com/profile_images/1635380853940314112/rqu3OaAR_400x400.jpg'
        />
        <UserCard
          name='猫又おかゆ🍙'
          userName='nekomataokayu'
          img='https://pbs.twimg.com/profile_images/1628383781492260866/u3yPJleX_400x400.jpg'
        />
        <div className='follow-more'>
          <a href='#'>Ver mas</a>
        </div>
      </div>
    </>
  )
}
