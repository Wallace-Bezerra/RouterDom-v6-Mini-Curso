import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const [time,setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

 

  useEffect(() => {   
    timeout.current = setTimeout(()=>{
      
      setTime(currentTime => currentTime - 1)
      console.log(time);
    },1000)
  
    if(time < 0){
      navigate("/about",
      {
        state: "state do link"
      })
    }
    return () => {
      clearTimeout(timeout.current)
    }
  }, [time])
  
  return (
    <div>
      <h1>Você sera redirecionado em : {time}</h1>
    </div>
  )
}
