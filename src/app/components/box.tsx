import React from "react";


interface BoxProps {
    children: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {
    
    return (
        <div className="p-4 rounded-4xl w-1xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75" style= {{
            position: 'fixed',
            top: 5,
            left: -23,
            width: '13%',
            zIndex: 1000
        }}>
            {children}
        </div>
    );
};

export default Box;