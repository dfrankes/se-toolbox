/* eslint-disable no-inner-declarations */
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
// import { Container } from '@mui/material';
import { styled, makeStyles } from '@mui/styles';

import { render } from '@testing-library/react';
import { Container } from '@mui/system';
import Layout from '../components/Layout';

export default function BlueprintEditor() {
	const refContainer = useRef();
	const [renderer, setRenderer] = useState(false);
	const [req, setReq] = useState();

	useEffect(() => {
		const { current: container } = refContainer;
		if (container && !renderer) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;

			const threeRender = new THREE.WebGLRenderer({ alpha: true });
			threeRender.setPixelRatio(window.devicePixelRatio);
			threeRender.setSize(scW, scH);
			threeRender.outputEncoding = THREE.sRGBEncoding;
			container.appendChild(threeRender.domElement);

			const camera = new THREE.PerspectiveCamera(70, scW / scH, 0.01, 10);
			camera.position.z = 1;
			const scene = new THREE.Scene();
			const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
			const material = new THREE.MeshNormalMaterial();
			const mesh = new THREE.Mesh(geometry, material);
			scene.add(mesh);

			const animate = (time) => {
				setReq(requestAnimationFrame(animate));

				mesh.rotation.x = time / 2000;
				mesh.rotation.y = time / 1000;

				threeRender.render(scene, camera);
			};

			// window.addEventListener(
			// 	'resize',
			// 	() => {
			// 		camera.aspect =
			// 			container.clientWidth / container.clientHeight;
			// 		camera.updateProjectionMatrix();
			// 		renderer.setSize(
			// 			container.clientWidth,
			// 			container.clientHeight
			// 		);
			// 	},
			// 	false
			// );

			animate();

			setRenderer(threeRender);
		}

		return () => {
			cancelAnimationFrame(req);
			if (renderer) {
				renderer.dispose();
			}
		};
	}, [req, renderer]);

	return (
		<Layout sx={{ maxWidth: false }}>
			<div
				style={{
					position: 'relative',
					height: '80vh',
					// width: '100vw',
				}}
				ref={refContainer}
			/>
		</Layout>
	);
}
