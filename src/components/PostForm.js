import React, { useEffect, useState } from "react"

function PostForm() {
    const [myData, setMyData] = useState([])

    useEffect( () => {
        fetch("https://rojia-sinatra.herokuapp.com/project_managers")
        .then(res => res.json())
        .then(data => setMyData(data))
    },[])


    const [change, setChange] = useState(
        {
            name: " ", 
            age: " ", 
            experience: " "
        }
    );

    function handleChange(e) {
        setChange({...change,[e.target.name]: e.target.value})
        console.log(change)
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("https://rojia-sinatra.herokuapp.com/project_managers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(change),
            })
            .then((r) => r.json())
            .then((data) => setMyData([...myData,data]));
            
            setChange(
            {name: " ", 
            age: " ", 
            experience: " "
    })
        }

        const displayData = myData.map((item) => {
            return (
                <div className="">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="images/pm.jpeg" alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Project Manager</div>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <h4 class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.name}</h4>
                                <h4 class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.age}</h4>
                                <h4 class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.experience}</h4>
                            </div>
                            {/* <div>
                                <div>
                                    <img class="w-full" src="images/pm.jpeg" alt="Sunset in the mountains" />
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.name}</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.age}</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.experience}</span>
                                </div>
                            </div> */}
                    </div>

                    <div>

                    </div>
                </div>

            )

        }) 


    return (
        <div>
        <div className='flex items-center justify-between w-full max-w-7xl px-4 mt-24 lg:mt-28 mx-auto'>
            <div className='w-full lg:w-3/5'>
                <h2 className='mb-2 text-xl font-light max-w-lg'>Fill in the form to hire project manager.</h2>
                <form onSubmit={handleSubmit}>
                    <div className='max-w-full lg:max-w-sm'>
                        <div className='mb-4'>
                            <label for='title' className='text-gray-500 font-light text-sm'>Fullname</label>
                            <input id='title' name="name" value={change.name} onChange={handleChange} type='text'className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'/>
                        </div>                    

                        <div className='mb-4'>
                            <label for='symptomTwo' className='text-gray-500 font-light text-sm'>Age</label>
                            <input id='symptomTwo' placeholder='' name="age" value={change.age} onChange={handleChange} type='text' className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'/>
                        </div>
                        <div className='mb-4'>
                            <label for='symptomThree' className='text-gray-500 font-light text-sm'>Experience</label>
                            <input id='symptomThree' placeholder='' name="experience" value={change.experience} onChange={handleChange} type='text' className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'/>
                        </div>
                        <div>
                        <input type="submit" value='Hire a manager' className='border-2 border-yellow-600 rounded-full cursor-pointer uppercase hover:text-white hover:bg-yellow-600 px-6 py-1.5 transition duration-150'  />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        <div className="flex flex-wrap justify-between space-x-2 mt-12 px-12">
            {displayData}
        </div>
        </div>

    )
}


export default PostForm;