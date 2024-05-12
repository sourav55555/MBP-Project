import React from 'react';
import "./upcomingEvent.css";
import Image from 'next/image';

const UpcomingEvents = () => {
    return (
        <div className='py-32 max-w-[1200px] mx-auto'>
            <div className="svg-wrapper ">
                <svg height="60" width="360" xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height="60" width="350" />
                </svg>
                <div className="text roboto-condensed">Upcoming Events</div>
            </div>
            <div className='flex items-center justify-center gap-6 mt-8'>
                <div className='w-1/3 border border-[var(--primary3)] pt-6 pb-3 rounded-3xl'>
                    <div>
                        <Image src="/assets/sciencefair.jpeg" className='' width={100} height={100} alt='science fair' />
                    </div>
                    <p>Science Fair</p>
                    <p>20th May - 25th May</p>
                </div>
                <div>
                    <div></div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <div></div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;