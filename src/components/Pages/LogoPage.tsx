import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend, Object3DNode } from '@react-three/fiber';
extend({ TextGeometry });
declare module '@react-three/fiber' {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
}
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import * as pixelFont from '../../assets/fonts/pixels.json';
import { useRef } from 'react';

const LogoPage = () => {
    const font = new FontLoader().parse(pixelFont);

    const mesh = useRef<THREE.Mesh | null>(null);

    const textOptions = {
        font,
        size: 1,
        height: 0.7,
    };

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, -3, 2]} />
            <OrbitControls />
            <fog attach='fog' args={['#000', 2, 10]} />
            <mesh ref={mesh} position={[-5.4, 0, -3]}>
                <textGeometry attach='geometry' args={['skat3_w1tches', textOptions]} />
                <meshPhysicalMaterial attach='material' />
            </mesh>
        </Canvas>
    );
};

export default LogoPage;
