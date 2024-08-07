import React from 'react';

export default function Card ({ icon, title, description }:{icon:string, title:string, description:string}) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md h-56">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className='pt-2'>{description}</p>
        </div>
    );
};

