import Navbar from "@/scenes/Navbar"
import Home from "@/scenes/Home"
import Benefits from "@/scenes/Benefits"
import OurClasses from "@/scenes/OurClasses"
import ContactUs from "@/scenes/ContactUs"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [topOfPage, setTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0){
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0)  setTopOfPage(false); 
    }
    window.addEventListener('scroll', handleScroll) 
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <div className="app bg-gray-50">
     <Navbar topOfPage={topOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
     <Home setSelectedPage={setSelectedPage}/>
     <Benefits setSelectedPage={setSelectedPage}/>
     <OurClasses setSelectedPage={setSelectedPage}/>
     <ContactUs setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
