interface ProjectType {
    name: string;
    html_url: string;
    page?: string;
}

export function Project({name, html_url}: ProjectType) {
    return (
        <div className="text-white">
            <div style={{
                backgroundImage: `url('https://raw.githubusercontent.com/locatelli-lucas/${name}/master/bgImage.jpg')`}}
                 className="bg-center bg-cover bg-no-repeat flex justify-center items-center w-80 h-32 text-white rounded-2xl transition-all duration-300">
            </div>
            <div className='flex flex-col gap-y-4 justify-center items-center relative opacity-0 bottom-32 backdrop-blur-md backdrop-opacity-100 w-80 h-32 rounded-2xl transition duration-300 -mb-32 hover:opacity-100 text-3xl font-extrabold'>
                <a href={html_url} className="hover:underline">{name}</a>
            </div>
        </div>

    );
}