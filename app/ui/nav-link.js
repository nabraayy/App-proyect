'use client'
import Link from "next/link";
import {BeakerIcon, HomeIcon} from "@heroicons/react/24/solid"
import clsx from "clsx";

const { usePathname } = require("next/navigation");


export default ({ ruta, text, icon }) => {
    const path = usePathname();
    const objeto = {icon};
    return (
        <Link href={ruta} className={clsx('flex px-4 py-2 hover:bg-gray-500 rounded',
            {
                "font-bold pointer-events-none text-blue-500": path === ruta
            })}
            >
            <objeto.icon className="w-4"/>
            <span className="hidden sm:inline">{text}</span>
            </Link>
    )
}