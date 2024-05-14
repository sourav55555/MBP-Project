import React from 'react';
// import "./upcomingEvent.css";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ModalBox } from '../modal/ModalBox';
import SectionHeader from '../sectionHeader/SectionHeader';

const UpcomingEvents = () => {

    const scienceFair = {
        title: "Science Fair",
        description: "Organizing a science fair involves meticulous planning, from setting themes to coordinating judges. Assembling diverse projects, securing venues, and promoting participation are vital. Effective communication with schools and sponsors ensures success. Clear guidelines, timelines, and safety protocols guarantee smooth execution, fostering curiosity and innovation among participants."
    }

    const basicProgramming = {
        title: "Basic Programming",
        description: "A Basic Programming seminar introduces foundational concepts to novices. Covering variables, loops, and conditionals, it provides hands-on learning opportunities. Engaging presentations and interactive exercises facilitate comprehension, igniting passion for coding and laying a strong groundwork for future learning."
    }

    const ICTSeminar = {
        title: "ICT Seminar",
        description: "An ICT seminar explores cutting-edge technologies and their applications. Topics may include AI, cybersecurity, and cloud computing. Expert speakers share insights, while workshops and demos offer practical experience. Attendees gain valuable knowledge to leverage digital tools effectively, driving innovation and productivity in diverse fields."
    }

    return (
        <div className='py-32 max-w-[1200px] mx-auto'>

            <SectionHeader title="Upcoming Events" />

            <div className='flex items-center justify-center gap-10 mt-12'>
                <div className='w-1/3 border-[var(--primary3)] pb-3 rounded-3xl text-gray-300 group bg-[rgba(0,0,0,0.2)]'>
                    <div className='h-[350px] overflow-hidden rounded-3xl'>
                        <Image src="/assets/sciencefair.jpeg " className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out rounded-3xl' width={500} height={300} alt='science fair' />
                    </div>
                    <p className='px-6 mt-4 text-2xl font-semibold tracking-wider'>Science Fair</p>
                    <p className='px-6 text-lg tracking-widest mt-2'>20<sup>th</sup> May -- 25<sup>th</sup> May</p>

                    <ModalBox details={scienceFair}/>
                </div>

                <div className='w-1/3 border-[var(--primary3)] pb-3 rounded-3xl text-gray-300 group bg-[rgba(0,0,0,0.2)]'>
                    <div className='h-[350px] overflow-hidden rounded-3xl'>
                        <Image src="/assets/programming.jpeg" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out rounded-3xl' width={500} height={300} alt='science fair' />
                    </div>
                    <p className='px-6 mt-4 text-2xl font-semibold tracking-wider'>Basic Programming</p>
                    <p className='px-6 text-lg tracking-widest mt-2'>10<sup>th</sup> June -- 12<sup>th</sup> June</p>
                    <ModalBox details={basicProgramming}/>
                </div>

                <div className='w-1/3 border-[var(--primary3)] pb-3 rounded-3xl text-gray-300 group bg-[rgba(0,0,0,0.2)]'>
                    <div className='h-[350px] overflow-hidden rounded-3xl'>
                        <Image src="/assets/seminar.jpg" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out rounded-3xl' width={500} height={300} alt='science fair' />
                    </div>
                    <p className='px-6 mt-4 text-2xl font-semibold tracking-wider'>ICT Seminar</p>
                    <p className='px-6 text-lg tracking-widest mt-2'>20<sup>th</sup> May -- 25<sup>th</sup> May</p>
                    <ModalBox details={ICTSeminar}/>
                </div>

            </div>
        </div>
    );
};

export default UpcomingEvents;