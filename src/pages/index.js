import Head from 'next/head';
import Image from 'next/image';
import { createRoot } from 'react-dom/client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
function Box(props) {
	const mesh = useRef();

	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={event => setActive(!active)}
			onPointerOver={event => setHover(true)}
			onPointerOut={event => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}

export default function Home() {
	return (
		<div style={{ height: 'calc(100vh - 40px)', marginTop: 40 }}>
			<Canvas resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }} gl={{ alpha: false, alpha: false }}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
		</div>
	);
}
