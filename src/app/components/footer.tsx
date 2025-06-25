import { ReactNode } from "react";


export default function Footer({ children }: { children: React.ReactNode}) {
    return <a className="p-2 hover-custom footer" href="https://github.com/qwatrum" target="_blank">{children}</a>;
}