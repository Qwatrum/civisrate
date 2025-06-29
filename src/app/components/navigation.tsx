"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();
    return (
           
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold mr-10 main-font larger-font" : "mr-10 main-font larger-font"}>Home</Link>
            <Link href="/people" className={pathname.startsWith("/people") ? "font-bold main-font larger-font" : "main-font larger-font"}>People</Link>
            { /*<Link href="/login" className={pathname.startsWith("/login") ? "font-bold main-font larger-font" : "main-font larger-font"}>Login</Link>*/ }
        </nav>
    )
}