import { useNavigate } from "react-router-dom"

const NotFound = () => {
const navigate=useNavigate()
const handlePage=()=>{
    navigate("/")
}
  return (
    <div>
        <div className="max-w-[1280px] mx-auto">
            <div className="font-bold text-4xl flex flex-col justify-center items-center py-40">
                <p className="mb-20">Not Found 404</p>
                <button onClick={handlePage} className="flex justify-center border  p-2 text-xl rounded-xl bg-blue-500 text-white cursor-pointer transition duration-300 hover:bg-blue-600">Go Home</button>
            </div>
            
        </div>
    </div>
  )
}

export default NotFound