import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles, Stage, Stars, useCubeTexture } from '@react-three/drei';
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
    background-color: #000099;
`;

const Mesh = () => {
    const font = new FontLoader().parse(pixelFont);

    const mesh = useRef<THREE.Mesh | null>(null);

    const textOptions = {
        font,
        size: 1,
        height: 1,
    };

    const delayProp = new THREE.Vector2(3, 5);
    const durationProp = new THREE.Vector2(0.1, 1);
    const strengthProp = new THREE.Vector2(0.1, 0.3);

    // const skyTexture = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: '/sky/' });
    const spaceTexture = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: '/skate_witches/space/' });
    return (
        <>
            <ambientLight />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, -3, 2]} />
            <OrbitControls autoRotate autoRotateSpeed={0.2} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={50} scale={20} size={4} speed={1} color={'#dd8eb8'} />
            <EffectComposer>
                <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.7} />
                <Glitch delay={delayProp} duration={durationProp} strength={strengthProp} mode={GlitchMode.SPORADIC} active ratio={0.85} />
            </EffectComposer>
            <Stage
                preset='soft'
                shadows={{ type: 'contact', color: '#4f68f7', colorBlend: 2, opacity: 0.8, offset: 0.05, scale: 50 }}
                intensity={1}
                environment='night'
            >
                <mesh ref={mesh}>
                    <textGeometry attach='geometry' args={['skat3_w1tches', textOptions]} />
                    <meshBasicMaterial attach='material' envMap={spaceTexture} />
                </mesh>
            </Stage>
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
