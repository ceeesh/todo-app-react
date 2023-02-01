import { useContext } from 'react'
import morning from '../assets/city-morning.jpg'
import night from '../assets/city-night.jpg'
import { TasksContext } from '../context/tasksContext'

const Header = () => {

  const { theme } = useContext(TasksContext)

    const myStyle = {
        backgroundImage: 
        `${theme === 'light' ? `url(${morning})` : `url(${night})`}`,
    };

    const imageStyle = {
        background: "linear-gradient(90deg, rgba(186,84,182,1) 0%, rgba(9,163,175,1) 35%, rgba(195,171,171,1) 58%, rgba(110,230,255,1) 100%)",
    }

  return (
    <div className={`w-full overflow-hidden h-[450px] absolute top-[-15px] bg-cover bg-no-repeat bg-center z-[-5] `} style={myStyle}>
        <div className='h-full w-full opacity-60' style={imageStyle}></div>
    </div>
  )
}

export default Header

