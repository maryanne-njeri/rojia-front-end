import { useNavigate } from 'react-router-dom';

function Home(){

    const navigate = useNavigate();


    return (
        <div className='text-white font-bold font-poppins'>
            <nav className="lg:flex justify-between items-center w-full mt-0 lg:mt-28 px-4 lg:px-12 py-12 lg:py-12 lg:space-x-6">
                <div className="flex justify-center mb-8 lg:mb-0 lg:block w-full lg:w-1/2">
                    <img src="images/herogif.gif" alt="Hero"/>
                </div>
                <div className="w-full lg:w-1/2 text-gray-700">
                    <h2 className="text-2xl lg:text-4xl">Rojia Home Builders</h2>
                    <p className="lg:text-base leading-relaxed mt-3 lg:mt-6 font-extralight text-2xl font-poppins">
                        According to the 2021 World Malaria Report: Nearly half the world's population lives in areas 
                        at risk of malaria transmission in 87 countries and territories. In 2020, 
                        malaria caused an estimated 241 million clinical episodes, and 627,000 deaths. 
                        An estimated 95% of deaths in 2020 were in the WHO African Region.
                    </p>
                    <div className="mt-6 text-gray-700">
                    <button className='border-2 border-yellow-600 rounded-full hover:text-white hover:bg-yellow-600 px-6 py-1.5 transition duration-150' onClick={() => navigate(`./projectsManagers`)}>Hire managers</button>
                    </div>
                </div>
            </nav>
            <footer className="px-4 lg:px-0 text-center lg:flex justify-center mt-20">
                <p className='text-gray-800'>Made with <span className="text-red-500">&hearts;</span> by Rosemary Njeri, Moringa school student, 2022.</p>
            </footer>
        </div>
    )
}

export default Home;