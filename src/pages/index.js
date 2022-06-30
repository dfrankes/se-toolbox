import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Scenes/BlueprintEditor'), { ssr: false });
export default function Home() {
	return <Scene />;
}
