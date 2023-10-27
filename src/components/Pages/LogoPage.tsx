import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useCubeTexture } from '@react-three/drei';
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
import { styled } from 'styled-components';
import { EffectComposer, Glitch, Noise } from '@react-three/postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';
const StyledLogoWrapper = styled.div`
    height: 100%;
    cursor: grab;
`;

const Mesh = () => {
    const font = new FontLoader().parse(pixelFont);

    const mesh = useRef<THREE.Mesh | null>(null);

    const textOptions = {
        font,
        size: 1,
        height: 1,
    };

    useFrame(() => {
        if (mesh.current != null) {
            mesh.current.rotation.y -= 0.0002;
            mesh.current.rotation.x += 0.0001;
            mesh.current.geometry.center;
        }
    });

    // const skyTexture = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: '/sky/' });
    const spaceTexture = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: '/space/' });
    return (
        <>
            <ambientLight />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, -3, 2]} />
            <OrbitControls />
            <EffectComposer>
                <Noise premultiply blendFunction={BlendFunction.ADD} />
                <Glitch
                    delay={[0.5, 1.5]}
                    duration={[0.6, 1.0]}
                    strength={[0.1, 0.2]}
                    mode={GlitchMode.CONSTANT_MILD}
                    active
                    ratio={0.85}
                />
            </EffectComposer>
            <fog attach='fog' args={['#000', 5, 14]} />
            <mesh ref={mesh} position={[-5.4, 0, -2]}>
                <textGeometry attach='geometry' args={['skat3_w1tches', textOptions]} />
                <meshBasicMaterial attach='material' envMap={spaceTexture} />
            </mesh>
        </>
    );
};

const LogoPage = () => {
    return (
        <StyledLogoWrapper>
            <Canvas>
                <Mesh />
            </Canvas>
        </StyledLogoWrapper>
    );
};

export default LogoPage;
