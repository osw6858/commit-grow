import React from 'react';
import ExampleComponent from "@app/_components/ExampleComponent";

const Home: React.FC = () => {
    return <>
        <header className='w-full sticky top-0'>header</header>
        <main className='container mx-auto h-[calc(100vh-30px)]'>main</main>
        <ExampleComponent/>
        <footer>footer</footer>
    </>

};

export default Home;