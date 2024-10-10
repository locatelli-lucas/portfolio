import Picture from '../assets/pic.png'
import Computers from '../assets/computers.png'
import { BsLightningChargeFill } from "react-icons/bs";

export function Port() {
    return (
       <body className='text-customBlue font-mono'>
           <header >
               <nav className='flex justify-center gap-28 pt-10 font-semibold text-lg '>
                   <button
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>ABOUT ME
                   </button>
                   <button
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>EXPERIENCE
                   </button>
                   <button
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>PROJECTS
                   </button>
                   <button
                       className='h-9 transition duration-500 border-b-2 border-transparent hover:border-b-customBlue'>CONTACT
                   </button>
               </nav>
           </header>
           <main>
               <section className='text-center'>
                   <h1 className='mt-36 mb-10 font-bold text-5xl'>Fullstack Developer Intern, Student & Electrotechnician</h1>
                   <span className='font-mono text-2xl'>I craft and code innovative solutions, and I’m passionate about every step of the process.</span>
                   <img src={Picture} alt="Author's Picture" className='mx-auto'/>
                   <img src={Computers} alt="Computers art" className='mx-auto h-1/2 w-1/2'/>
               </section>
               <section className='bg-customBlue text-white text-center px-96 py-52'>
                   <h2 className='font-bold text-3xl mb-10'>Greetings, I'm Lucas. It's a pleasure to meet you!</h2>
                   <p className='text-lg leading-loose'>
                       I'm graduated as an Electrotechnician by Liberato Foundation since 2020, and back then, I never saw myself having such a life changing experience, just by having the idea of starting to code. Since then, I studied several coding languages and frameworks, such as Javascript, Typescript, Java, Spring Boot, etc. By doing that, I managed to do a few projects, which allowed me to learn what I had to get my first internship in the area at SAP, where I currently work.
                   </p>
                   <div className='absolute bg-white text-customBlue flex justify-center flex-row mr-56 -ml-32 mt-32 rounded-2xl border'>
                       <div className='p-14 border-r'>
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
                                   <ul className='list-disc flex flex-col justify-start gap-y-5'>
                                       <li>
                                           <span>
                                                Remote and in-person customer service;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Electrical and mechanical maintenance on machines provided by the company;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Trips for installation and/or maintenance of machines;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Installation and Configuration of Frequency Inverter and PLC;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Remote and in-person customer service, including factory visits for maintenance/installation in machines;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Electrical and mechanical maintenance on cutting machines in the footwear industry;
                                           </span>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className='p-14 border-r'>
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
                                   <ul className='list-disc flex flex-col justify-start gap-y-5'>
                                       <li>
                                           <span>
                                                Remote and in-person customer service;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Electrical and mechanical maintenance on machines provided by the company;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Trips for installation and/or maintenance of machines;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Installation and Configuration of Frequency Inverter and PLC;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Remote and in-person customer service, including factory visits for maintenance/installation in machines;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Electrical and mechanical maintenance on cutting machines in the footwear industry;
                                           </span>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className='p-14 border-r'>
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
                                   <ul className='list-disc flex flex-col justify-start gap-y-5'>
                                       <li>
                                           <span>
                                                Remote and in-person customer service;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Electrical and mechanical maintenance on machines provided by the company;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Trips for installation and/or maintenance of machines;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Installation and Configuration of Frequency Inverter and PLC;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Remote and in-person customer service, including factory visits for maintenance/installation in machines;
                                           </span>
                                       </li>
                                       <li>
                                           <span>
                                               Electrical and mechanical maintenance on cutting machines in the footwear industry;
                                           </span>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
           </main>
       </body>
    )
}