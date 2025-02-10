import { ArrowRightStartOnRectangleIcon, UserIcon } from "@heroicons/react/24/outline";
import NavLink from "./nav-link"
import { HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, UserCircleIcon } from "@heroicons/react/20/solid";

export default () =>{
    return(
        <nav className="flex flex-col border-e h-dvh gap-2 p-4">
            <p className="hidden sm:block">Social App</p>
            <NavLink href="/" text="Home" icon={HomeIcon}></NavLink>
            <NavLink href="/search" text="Search" icon={MagnifyingGlassIcon}></NavLink>
            <NavLink href="/create" text="Create" icon={PlusCircleIcon}></NavLink>
            <NavLink href="/profile" text="Profile" icon={UserIcon}></NavLink>

            <a href="/auth/logout" className='flex gap-2 mt-8'><ArrowRightStartOnRectangleIcon className='w-4'/>Sign out</a>
        </nav>
    ); 
}