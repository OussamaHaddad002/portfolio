'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.SphereGeometry(1.5, 16, 16),
      new THREE.ConeGeometry(1, 2, 8),
      new THREE.TetrahedronGeometry(1.5),
      new THREE.OctahedronGeometry(1.2),
    ]

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.3 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.25 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.2 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xf59e0b, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.15 
      }),
    ]

    const meshes: THREE.Mesh[] = []

    // Create multiple floating objects
    for (let i = 0; i < 25; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = materials[Math.floor(Math.random() * materials.length)]
      const mesh = new THREE.Mesh(geometry, material)

      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 80
      mesh.position.y = (Math.random() - 0.5) * 80
      mesh.position.z = (Math.random() - 0.5) * 50

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      mesh.rotation.z = Math.random() * Math.PI

      // Random scale
      const scale = Math.random() * 0.5 + 0.5
      mesh.scale.set(scale, scale, scale)

      // Store initial position for animation
      mesh.userData = {
        originalPosition: mesh.position.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatRange: Math.random() * 2 + 1,
      }

      meshes.push(mesh)
      scene.add(mesh)
    }

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 150
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x64748b,
      size: 0.8,
      transparent: true,
      opacity: 0.6,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    let mouseX = 0
    let mouseY = 0
    let time = 0

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      time += 0.01

      // Animate meshes
      meshes.forEach((mesh, index) => {
        // Rotation
        mesh.rotation.x += mesh.userData.rotationSpeed.x
        mesh.rotation.y += mesh.userData.rotationSpeed.y
        mesh.rotation.z += mesh.userData.rotationSpeed.z

        // Floating motion
        mesh.position.y = 
          mesh.userData.originalPosition.y + 
          Math.sin(time * mesh.userData.floatSpeed + index) * mesh.userData.floatRange

        // Mouse interaction
        mesh.position.x += mouseX * (index % 3 + 1)
        mesh.position.y += mouseY * (index % 3 + 1)
      })

      // Animate particles
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005

      // Camera movement
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.05
      camera.position.y += (-mouseY * 10 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return
      
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose of geometries, materials, and renderer
      meshes.forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose()
        if (mesh.material && 'dispose' in mesh.material) {
          mesh.material.dispose()
        }
      })
      
      geometries.forEach(geometry => geometry.dispose())
      materials.forEach(material => material.dispose())
      
      if (particleGeometry) particleGeometry.dispose()
      if (particleMaterial) particleMaterial.dispose()
      
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)'
      }}
    />
  )
}

export default ThreeBackground
