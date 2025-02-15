import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles, Stage, Stars, useCubeTexture } from '@react-three/drei';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { extend, Object3DNode } from '@react-three/fiber';
import textures from '@/assets/space';
extend({ TextGeometry });
declare module '@react-three/fiber' {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
}
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import * as pixelFont from '@/assets/fonts/pixels.json';
import { useRef } from 'react';
import { styled } from 'styled-components';
import { Bloom, EffectComposer, Noise, Pixelation } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

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

    // const delayProp = new THREE.Vector2(3, 5);
    // const durationProp = new THREE.Vector2(0.1, 1);
    // const strengthProp = new THREE.Vector2(0.1, 0.3);

    const spaceTexture = useCubeTexture(
        [textures.px.src, textures.nx.src, textures.py.src, textures.ny.src, textures.pz.src, textures.nz.src],
        {
            path: '',
        }
    );
    return (
        <>
            <ambientLight />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, -3, 2]} />
            <OrbitControls
                autoRotate
                autoRotateSpeed={0.2}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
                maxDistance={530}
                minDistance={7}
            />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Sparkles count={50} scale={20} size={4} speed={1} color={'#dd8eb8'} />
            <EffectComposer>
                <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.7} />
                <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.2} />
                <Pixelation granularity={0.3} />
            </EffectComposer>
            <Stage
                preset='soft'
                shadows={{ type: 'contact', color: '#4f68f7', colorBlend: 2, opacity: 0.8, offset: 0.05, scale: 50 }}
                intensity={1}
                environment={'night'}
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
