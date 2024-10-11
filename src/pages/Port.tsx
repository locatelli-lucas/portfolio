import Picture from '../assets/pic.png'
import Computers from '../assets/computers.png'
import { BsLightningChargeFill } from "react-icons/bs";
import {FaBook} from "react-icons/fa";
import {HiMiniCodeBracket} from "react-icons/hi2";

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
                                           Remote and in-person customer service, including factory visits for maintenance/installation in machines;
                                       </li>
                                       <li>
                                           Electrical and mechanical maintenance on cutting machines in the footwear industry;
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className='py-14 px-11 border-r'>
                           <div className='bg-cyan-300 w-20 h-20 pt-4 rounded-full mx-auto mb-6'>
                               <FaBook className='size-12 mx-auto'/>
                           </div>
                           <div className='flex justify-center flex-col gap-y-16'>
                               <h3 className='text-2xl font-bold'>Student</h3>
                               <p className='font-semibold text-lg w-96'>
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
                       <div className='py-14 px-11 border-l'>
                           <div className='bg-cyan-300 w-20 h-20 pt-4 rounded-full mx-auto mb-6'>
                               <HiMiniCodeBracket className='size-12 mx-auto'/>
                           </div>
                           <div className='flex justify-center flex-col gap-y-16'>
                               <h3 className='text-2xl font-bold'>Development Intern</h3>
                               <p className='font-semibold text-lg w-96'>
                                   The internship program involves front-end development of a cloud-native BTP (Business Technology Platform) product using both Front and Back-end languages. Additionally, I work in an international team, practicing agile software engineering methodologies.
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
                   </div>
               </section>
               <section className='relative top-[75rem] px-96'>
                   <h1 className='font-bold text-xl text-center'>
                       My latest projects
                   </h1>

               </section>
           </main>
       </body>
    )
}