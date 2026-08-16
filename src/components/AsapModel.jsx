import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

/**
 * AsapModel
 * Reads { posX, posY, posZ, rotX, rotY, rotZ, scale } from scrollState.current
 * every frame — zero React re-renders during scroll.
 */
export default function AsapModel({ scrollState }) {
  const groupRef = useRef()
  const { scene } = useGLTF('src/assets/glb/iphone17.glb')

  const model = useMemo(() => {
    const clone = scene.clone()
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material = child.material.clone()
          child.material.needsUpdate = true
        }
      }
    })

    const box = new THREE.Box3().setFromObject(clone)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1

    clone.position.sub(center)
    clone.scale.setScalar(3 / maxDim)

    return clone
  }, [scene])

  useFrame(() => {
    const g = groupRef.current
    if (!g) return

    if (scrollState?.current) {
      const s = scrollState.current
      g.position.x = s.posX ?? 0
      g.position.y = s.posY ?? 0
      g.position.z = s.posZ ?? 0
      g.rotation.x = s.rotX ?? 0
      g.rotation.y = s.rotY ?? 0
      g.rotation.z = s.rotZ ?? 0
      const sc = s.scale ?? 1
      g.scale.setScalar(sc)
    }
  })

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={model} />
    </group>
  )
}

useGLTF.preload('src/assets/glb/iphone17.glb')
