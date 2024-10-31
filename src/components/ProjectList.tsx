import {getProjects, ProjectType} from "../service/repo.service.ts";
import {useEffect, useState} from "react";
import {Project} from "./Project.tsx";

export function ProjectList() {
    const [projects, setProjects] = useState<ProjectType[] | void >([]);

    const getProjectsList = async (): Promise<void | ProjectType[]> => {
        try {
            return await getProjects()
                .then(response => setProjects(response))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProjectsList().then(r => console.log(r));
    }, [])

    return (
        <div className="relative mx-auto w-[55vw]">
            <div className='flex flex-wrap gap-5 relative justify-evenly'>
                {
                    projects?.map((project) => (
                        <Project name={project.name} html_url={project.html_url} page={project.page} key={project.id}/>
                    ))
                }
            </div>
        </div>

    )
}