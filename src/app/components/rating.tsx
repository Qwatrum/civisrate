import { ReactNode } from "react";

type RatingProps = {
    children: ReactNode;
};

export default function Rating({ children }: RatingProps) {
    return <p>Rating: {children} / 5</p>;
}