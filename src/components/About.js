function About(){
    return (
        <div>
            <div className="flex items-center mt-24 lg:mt-0 lg:h-screen px-4 lg:px-12">
            <div className="w-full flex items-center justify-between">
                <div className='w-full lg:w-1/2 space-y-4'>
                    <h2 className='text-2xl lg:text-5xl text-gray-500 font-light'>About Rojia Homes</h2>
                    <div className='text-stone-700 text-sm'>
                        <p>
                        There are many variations of a company profile. Every company must have their own company profile that provides a professional summary of the business and the many activities that they do. 
                        A company profile has several uses, like informing people and stakeholders about the existence and purpose of the company, to raise capital and to win investors. 
                        The length of one’s company profile varies depending on the preferences of the company and how they want to have their profiles written.</p>
                    </div>
                </div>
                <div className='hidden lg:block w-1/2'>
                    <img src="images/about2.gif" alt="about us" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;