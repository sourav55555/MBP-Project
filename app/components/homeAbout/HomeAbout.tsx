import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import React from 'react';

const HomeAbout = () => {
    return (
        <div className='py-32 max-w-[1300px] mx-auto'>
            <div className="flex items-start justify-between gap-16 ">
                <div className=' w-[44%]'>
                    <Image src="/assets/physicsItem.jpeg" className='w-full h-[600px] origin-center object-cover' width={500} height={700} alt="phy items" />
                </div>
                <div className='w-[56%] '>
                    <h2 className='text-5xl font-light py-14 roboto-condensed text-white'>
                    Empowering Rural Minds <br /> Through Science And Passion
                    </h2>
                    <div className='ms-16 '>
                        <Tabs defaultValue="ideology" className="flex justify-center items-start gap-14 mb-20">
                            <TabsList className="grid grid-cols-1 gap-2">
                                <TabsTrigger value="ideology">Our Ideology</TabsTrigger>
                                <TabsTrigger value="innovation">Innovation</TabsTrigger>
                                <TabsTrigger value="experience">Experience</TabsTrigger>
                            </TabsList>
                            <TabsContent value="ideology">
                                <p>Empower rural students with equitable access to quality science education, fostering curiosity, and innovation for sustainable community development.</p>
                                <p className="mt-5">More than a team or community for a greater purpose.</p>
                            </TabsContent>
                            <TabsContent value="innovation">
                                <p>Our team embraces innovation, fostering creativity and adaptability to empower rural students and drive sustainable community development.</p>
                                <p className="mt-5">More than a team or community for a greater purpose.</p>
                            </TabsContent>
                            <TabsContent value="experience">
                                <p>We're a joyful family, united for over a decade. With dedicated members, our growth is constant and promising.</p>
                                <p className="mt-5">More than a team or community for a greater purpose.</p>
                            </TabsContent>
                        </Tabs>
                        <Image src="/assets/young-boy-learning.jpg" className="w-full h-[380px] object-cover object-bottom" width={450} height={400}  alt="che items" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeAbout;