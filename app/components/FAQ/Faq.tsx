import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import React from 'react';
import SectionHeader from '../sectionHeader/SectionHeader';

const Faq = () => {

    return (
        <div className='py-28 max-w-[1200px] mx-auto'>
            <SectionHeader title="FAQ" />

            <div className='mt-6 flex items-center justify-center gap-8'>
                <div className='flex-1'>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger
                                className='bg-[rgba(23,45,19,.5)] px-4 no-underline hover:bg-[rgba(23,45,19,.6)] transition-all duration-200 text-lg'
                            >
                                Where are most programs held?
                            </AccordionTrigger>
                            <AccordionContent className='p-4 bg-[rgba(23,45,19,.2)]'>
                            Programs are primarily conducted in rural areas and village schools, strategically chosen to foster community engagement and outreach. This approach ensures effective involvement and impact within local communities, aligning with our mission to serve diverse populations.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='bg-[rgba(23,45,19,.5)] px-4 no-underline hover:bg-[rgba(23,45,19,.6)] transition-all duration-200 text-lg'>Who runs the programs?</AccordionTrigger>
                            <AccordionContent className='p-4 bg-[rgba(23,45,19,.2)]'>
                            The programs are run by a diverse team including university students, teachers, and engineers, collaborating to deliver impactful initiatives within communities.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='bg-[rgba(23,45,19,.5)] px-4 no-underline hover:bg-[rgba(23,45,19,.6)] transition-all duration-200 text-lg'>What is the response of students to M.B.P.?</AccordionTrigger>
                            <AccordionContent className='p-4 bg-[rgba(23,45,19,.2)]'>
                            Students respond very positively to M.B.P., consistently showing enthusiasm for new programs and learning opportunities. Their eagerness underscores the effectiveness of our initiatives in fostering curiosity and engagement among the student community.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className='bg-[rgba(23,45,19,.5)] px-4 no-underline hover:bg-[rgba(23,45,19,.6)] transition-all duration-200 text-lg'>How can I connect with M.B.P.?</AccordionTrigger>
                            <AccordionContent className='p-4 bg-[rgba(23,45,19,.2)]'>
                                We are happy to welcome you. You can connect through the connect form or by registering on the website. 
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>
                <div>
                    <Image src="/assets/pngwing.com (3).png" width={360} height={450} alt="faq" />
                </div>
            </div>
        </div>
    );
};

export default Faq;