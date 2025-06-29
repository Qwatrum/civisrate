"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();
    return (
           
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold mr-10 main-font larger-font" : "mr-10 main-font larger-font"}>Home</Link>
            <Link href="/people" className={pathname.startsWith("/people") ? "font-bold mr-10 main-font larger-font" : "main-font mr-10 larger-font"}>People</Link>
            <Link href="/about" className={pathname.startsWith("/about") ? "font-bold main-font larger-font" : "main-font larger-font"}>About</Link>
        </nav>
    )
}