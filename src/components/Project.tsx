interface ProjectType {
    name: string;
    url: string;
    page?: string;
}

export function Project({name}: ProjectType) {

    return (
        <div>
            <div className="bg-[url('src/assets/bgImg.png')] flex justify-center items-center w-80 h-32 text-white rounded-2xl transition-all duration-300">
                <span className="text-2xl">{name}</span>
            </div>
            <div className='relative opacity-0 bottom-32 backdrop-blur-md backdrop-opacity-80 w-80 h-32 rounded-2xl transition duration-300 -mb-32 hover:opacity-100'>
                <h1>Hello</h1>
            </div>
        </div>

    );
}