import React from 'react';
import ExampleComponent from "@app/(main-layout)/_components/ExampleComponent";
import Link from "next/link";

const Home: React.FC = () => {
    return <>
        <main className='container mx-auto h-main'><Link href={"/hydration"}>test</Link></main>
        <ExampleComponent/>
    </>

};

export default Home;