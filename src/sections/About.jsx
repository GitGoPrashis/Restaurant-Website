import React from 'react'
import Animated from '../components/Animated'

const About = () => {
    return (

        <section id='about' className=' px-auto mt-44'>
            <div className=' flex flex-col md:flex-row gap-14 md:gap-10 max-w-7xl mx-auto'>
                {/* for left side */}
                <Animated scale={0.8} y={0}>
                    <img src="/assets/about3.png" alt="Dish" className=' max-w-137 w-full h-full object-cover rounded-3xl' />
                </Animated>

                {/* for right side */}
                <div>
                     <Animated scale={0.8} y={0} className=" flex items-center gap-2">
                        <img src="/assets/iconL.png" alt="lefticon"  />
                        <span className=' font-medium uppercase'>
                           About Bhojan Bhomi
                        </span>
                          <img src="/assets/iconR.png" alt="righticon"  />
                   
                </Animated>

                 <Animated scale={0.8} y={0} className=" flex items-center gap-2">
                    <h2 className='mt-5 text-4xl md:text-5xl text-balance'>
                        Where Tradition Meets Taste

                    </h2>
                       
                      
                        
                   
                </Animated>
                <Animated delay={0.2}>
                    <p className=' mt-4.5 text-zinc-600 max-w-sm '>
                        At Bhojan Bhomi, we believe that food is more than just a meal. It is a way to connect people, celebrate traditions, and create memorable moments. From flavorful momos and traditional Thakali sets to delicious snacks and refreshing drinks, every dish is prepared to bring the true taste of Nepal to your table.
                    </p>

                </Animated>
                <Animated className=" mt-9 bg-orange-400 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit">
                      <img src="/assets/about3.png" alt="Location" className=' size-15 rounded-lg object-cover shrink-0' />
                      <div className=' flex flex-col gap-2'>
                        <p className=' font-medium'>Kathmandu, Nepal</p>
                        <a href="">view on map</a>
                      </div>
                </Animated>

                </div>




            </div>
        </section>
    )
}

export default About
