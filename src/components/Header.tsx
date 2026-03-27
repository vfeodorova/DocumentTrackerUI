import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
export default function Header() {
    const startContent = 
    <div>
        <p className='font-bold'>
            Document Version System
        </p>
    </div>
    const centerContent = 
        <div className='flex gap-5'>
           <Button label="My Documents" className='rounded-md shadow-md bg-sky-600 hover:bg-sky-800 p-2'/> 
           <Button label="All Documents" className= 'rounded-md shadow-md bg-sky-600 hover:bg-sky-800 p-2'/>
        </div>
    const endContent = 
    <div className="flex flex-row items-center">
        <Avatar label="V" className="mr-2 bg-sky-300" size="large" shape="circle" />
        <p>Viktoria Feodorova</p>
    </div>
    return(
        <Toolbar start={startContent} center={centerContent} end={endContent} className='bg-sky-400 p-3'/>
    )
}