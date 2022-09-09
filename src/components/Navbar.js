import { NavLink } from "react-router-dom"



function Header(){
    return (
        <div className="flex justify-between py-4 px-4 lg:px-12 text-gray-600 bg-yellow-500 fixed top-0 w-full">
            <NavLink to="/" className="text-3xl text-gray-800">Rojia Home Builders</NavLink>
            <div className="text-xl">
                <NavLink to="/" className="mr-6 hover:text-white text-bold transition duration-150">Home</NavLink>
                <NavLink to="about" className="mr-6 hover:text-white text-bold transition duration-150">About</NavLink>
                <NavLink to="projects" className="mr-6 hover:text-white text-bold transition duration-150">Projects</NavLink>
                <NavLink to="projectManagers" className="hover:text-white text-bold transition duration-150">Project manager</NavLink>
            </div>
        </div>
    )
}
export default Header