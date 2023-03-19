import { useLocation } from "react-router-dom"


const Success = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>
      pago realizado
    </div>
  )
}

export default Success

