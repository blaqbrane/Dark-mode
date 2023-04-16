import React, { useEffect } from 'react'
import { useState } from 'react' 
import About from './About'
import Data from './data'
import ReactSwitch from 'react-switch'
// const GenerateTheme =()=>{
//     let theme = 'light-theme';
//     if(localStorage.getItem('theme')){
//         theme = localStorage.getItem('theme')
//     }
//     return theme;
// }
const Home = () => {
    const[theme,setTheme] = useState(localStorage.getItem('theme') || theme)

    const toggleTheme = () => {
        if (theme === "light-theme"){
            setTheme("dark-theme")
        }
        else{
            setTheme("light-theme")
        }
    }
    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem("theme",theme)
    }, [theme])
  return (
    <div>
        <div className='flex justify-between h-[40px] bg-[orange] items-center px-2 py-6'>
            <h1>Home</h1>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light-theme"}/>
        </div>
       
       {Data.map((item) => (
        <About key={item.id} {...item}/>
       ))}
    </div>
    
  )
}

export default Home