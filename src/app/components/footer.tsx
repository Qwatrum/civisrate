import { ReactNode } from "react";

type FooterProps = {
    children: ReactNode;
};

export default function Footer({ children }: FooterProps) {
    return <a className="p-2 hover-custom footer" href="https://github.com/qwatrum" target="_blank">{children}</a>;
}