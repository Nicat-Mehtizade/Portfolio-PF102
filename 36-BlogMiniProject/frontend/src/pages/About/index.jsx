import { NavLink } from "react-router-dom"

const About = () => {
  return (
    <div className="bg-[#242424]">
        <div className="max-w-[1480px]">
            <div>
                <div className="py-4 px-4">
                    <NavLink className="text-white text-3xl font-semibold" to={"/"}>Medium</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About