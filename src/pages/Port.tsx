import Picture from '../assets/pic.png'
import Computers from '../assets/computers.png'
import { BsLightningChargeFill } from "react-icons/bs";
import {FaBook, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import {HiMiniCodeBracket} from "react-icons/hi2";
import {ProjectList} from "../components/ProjectList.tsx";
import {MdEmail} from "react-icons/md";
import {animateScroll} from "react-scroll";
import {motion, useAnimation } from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

export function Port() {
    const options = {
        visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
        hidden: {opacity: 0, x: -200},
    }
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if(inView) {
            control.start("visible")
        }
    }, [control, inView]);

    return (
       <body className='text-customBlue font-mono'>
           <header >
               <nav className='flex justify-center gap-28 pt-10 font-semibold text-lg '>
                   <button
                       onClick={() => animateScroll.scrollTo(200, options)}
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>ABOUT ME
                   </button>
                   <button
                       onClick={() => animateScroll.scrollTo(1800, options)}
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>EXPERIENCE
                   </button>
                   <button
                       onClick={() => animateScroll.scrollTo(3070, options)}
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>PROJECTS
                   </button>
                   <button
                       onClick={() => animateScroll.scrollToBottom(options)}
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>CONTACT
                   </button>
               </nav>
           </header>
           <main>
               <section className='text-center'>
                   <h1 className='mt-36 mb-10 font-bold text-5xl'>Fullstack Developer, Student & Electrotechnician</h1>
                   <span className='font-mono text-2xl'>I craft and code innovative solutions, and I’m passionate about every step of the process.</span>
                   <img src={Picture} alt="Author's Picture" className='mx-auto'/>
                   <img src={Computers} alt="Computers art" className='mx-auto h-1/2 w-1/2'/>
               </section>
               <section className='text-white text-center'>
                    <div className='bg-customBlue flex flex-col items-center'>
                        <h2 className='font-bold text-3xl mt-16 mb-10 w-1/2'>Greetings, I'm Lucas. It's a pleasure to meet you!</h2>
                        <p className='text-lg leading-loose w-4/5 px-auto mb-60'>
                            I'm graduated as an Electrotechnician by Liberato Foundation since 2020, and back then, I never saw myself having such a life
                            changing experience, just by having the idea of starting to code. Since then, I studied several coding languages and
                            frameworks, such as Javascript, Typescript, Java, Spring Boot, etc. By doing that, I managed to do a few projects, which
                            allowed me to learn what I needed to get my first internship in the area at SAP, where I currently work.
                        </p>
                    </div>
               </section>
               <section className='text-white text-center px-[10vw]'>
                   <motion.div
                       ref={ref}
                       variants={options}
                       initial="hidden"
                       animate={control}
                       className='relative bg-white text-customBlue flex justify-center flex-row mx-auto -mt-24 rounded-2xl border'>
                       <div className='flex flex-col items-center p-4 border-r w-1/3 pt-14'>
                           <div className='bg-cyan-300 w-20 h-20 pt-4 rounded-full mx-auto mb-6'>
                               <BsLightningChargeFill className='size-12 mx-auto'/>
                           </div>
                           <div className='flex justify-center flex-col gap-y-16'>
                               <h3 className='text-2xl font-bold'>Electrotechnician</h3>
                               <p className='font-semibold text-lg'>
                                   I worked for 3 years as a formed Technician, traveling, visiting clients, fixing machines at industrial
                                   environments and learning about the job market
                               </p>
                               <div>
                                   <span className='font-semibold text-lg mb-4'>Companies I've worked at:</span>
                                   <ul className=''>
                                       <li className='hover:underline'>
                                           <a href="https://www.coester.com.br">Coester Automação</a>
                                       </li>
                                       <li className='hover:underline'>
                                           <a href="https://atom.it">ATOM Brasil</a>
                                       </li>
                                   </ul>
                               </div>
                               <div>
                                   <span className='font-semibold text-lg mb-4'>What I did:</span>
                                   <ul className='flex flex-col justify-start gap-y-5'>
                                       <li>
                                           Remote and in-person customer service;
                                       </li>
                                       <li>
                                           Electrical and mechanical maintenance on machines provided by the company;
                                       </li>
                                       <li>
                                           Trips for installation and/or maintenance of machines;
                                       </li>
                                       <li>
                                           Installation and Configuration of Frequency Inverter and PLC;
                                       </li>
                                       <li>
                                           Remote and in-person customer service, including factory visits for maintenance/installation in
                                           machines;
                                       </li>
                                       <li>
                                           Electrical and mechanical maintenance on cutting machines in the footwear industry;
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className='flex flex-col items-center p-4 border-r w-1/3 pt-14'>
                           <div className='bg-cyan-300 w-20 h-20 pt-4 rounded-full mx-auto mb-6'>
                               <FaBook className='size-12 mx-auto'/>
                           </div>
                           <div className='flex justify-center flex-col gap-y-16'>
                               <h3 className='text-2xl font-bold'>Student</h3>
                               <p className='font-semibold text-lg'>
                                   Since I started doing Computer Science, I've studied a few languages, focusing on logical problems and small
                                   programs, and database, solving consultation issues.
                               </p>
                               <div>
                                   <span className='font-semibold text-lg mb-4'>Languages I speak:</span>
                                   <ul className='flex flex-col gap-y-1'>
                                       <li>
                                           Javascript
                                       </li>
                                       <li>
                                           Java
                                       </li>
                                       <li>
                                           Python
                                       </li>
                                       <li>
                                           HTML
                                       </li>
                                       <li>
                                           CSS
                                       </li>
                                       <li>
                                           SQL
                                       </li>
                                   </ul>
                               </div>
                               <div>
                                   <span className='font-semibold text-lg mb-4'>Dev tools:</span>
                                   <ul className='flex flex-col gap-y-1'>
                                       <li>
                                           VSCode
                                       </li>
                                       <li>
                                           Intellij
                                       </li>
                                       <li>
                                           React
                                       </li>
                                       <li>
                                           Typescript
                                       </li>
                                       <li>
                                           UI5
                                       </li>
                                       <li>
                                           CAP
                                       </li>
                                       <li>
                                           Spring Boot
                                       </li>
                                       <li>
                                           Github
                                       </li>
                                       <li>
                                           Tailwind CSS
                                       </li>
                                       <li>
                                           Netlify
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className='flex flex-col items-center p-4 border-l w-1/3 pt-14'>
                           <div className='bg-cyan-300 w-20 h-20 pt-4 rounded-full mx-auto mb-6'>
                               <HiMiniCodeBracket className='size-12 mx-auto'/>
                           </div>
                           <div className='flex justify-center flex-col gap-y-16'>
                               <h3 className='text-2xl font-bold'>Software Development Intern</h3>
                               <p className='font-semibold text-lg'>
                                   The internship program involves front-end development of a cloud-native BTP (Business Technology Platform)
                                   product
                                   using both Front and Back-end languages. Additionally, I work in an international team, practicing agile
                                   software
                                   engineering methodologies.
                               </p>
                               <div>
                                   <span className='font-semibold text-lg mb-4'>Languages I use:</span>
                                   <ul className='flex flex-col gap-y-1'>
                                       <li>
                                           Javascript
                                       </li>
                                       <li>
                                           Java
                                       </li>
                                       <li>
                                           SQL
                                       </li>
                                   </ul>
                               </div>
                               <div>
                                   <span className='font-semibold text-lg mb-4'>Dev tools:</span>
                                   <ul className='flex flex-col gap-y-1'>
                                       <li>
                                           UI5
                                       </li>
                                       <li>
                                           CAP
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                    </motion.div >
               </section>
               <section className='relative top-14 px-96 flex flex-col items-center'>
                    <h1 className='font-bold text-black text-2xl text-center'>
                        My latest projects
                    </h1>
                    <div className="relative top-12">
                        <ProjectList/>
                    </div>
                </section>
           </main>
           <footer className="flex flex-col items-center relative h-72 top-36">
               <h1 className="font-bold text-3xl">Contact-me</h1>
               <div className="flex justify-center items-center my-auto gap-12">
                   <a href="https://www.linkedin.com/in/lucasrafaellocatelli"><FaLinkedin className="size-20 hover:scale-125 hover:mx-4 transition-all duration-500"/></a>
                   <a href="https://github.com/locatelli-lucas?tab=repositories"><FaGithub className="size-20 hover:scale-125 hover:mx-4 transition-all duration-500"/></a>
                   <a href="https://wa.me/5551986260618"><FaWhatsapp className="size-20 hover:scale-125 hover:mx-4 transition-all duration-500"/></a>
                   <a href="https://mailto:lucas_locatelli2002@hotmail.com"><MdEmail className="size-20 hover:scale-125 hover:mx-4 transition-all duration-500"/></a>
               </div>
           </footer>
       </body>
    )
}
