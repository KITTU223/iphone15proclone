import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import * as THREE from 'three'
import Lights from './Lights'
import Iphone from './Iphone'
import Loader from './Loader'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={` w-full h-full absolute ${index === 2 ? 'right-[-100%]': ''} `}
    >
        //ambiant light
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0,0,4]} />

        <Lights />

        <OrbitControls
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0,0,0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />
        <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0,0,0]}>
            <Suspense fallback={<Loader/>}>
                <Iphone 
                    scale={index === 1 ? [15,15,15] : [19,19,19]}
                    item={item}
                    size={size}
                />
            </Suspense>
        </group>
    </View>
  )
}

export default ModelView