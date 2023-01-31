import { useContext } from 'react'
import morning from '../assets/city-morning.jpg'
import night from '../assets/city-night.jpg'
import { TasksContext } from '../context/tasksContext'

const Header = () => {

  const { theme } = useContext(TasksContext)

    const myStyle = {
        backgroundImage: 
        `${theme === 'light' ? `url(${morning})` : `url(${night})`}`,
        height:'450px',
        position: 'absolute',
        top: '-15px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: '-5',
    };

    const imageStyle = {
        background: "linear-gradient(90deg, rgba(186,84,182,1) 0%, rgba(9,163,175,1) 35%, rgba(195,171,171,1) 58%, rgba(110,230,255,1) 100%)",
        opacity: '0.6',
    }

  return (
    <div className='w-screen overflow-hidden' style={myStyle}>
        <div className='h-full w-full' style={imageStyle}></div>
    </div>
  )
}

export default Header

