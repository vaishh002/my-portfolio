import React, { useEffect, useRef } from 'react'

export default function ThreeCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - width / 2) * 0.05
      mouseY = (e.clientY - height / 2) * 0.05
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // 3D Particles / Shapes Data
    const shapes = Array.from({ length: 28 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 500 + 100,
      size: Math.random() * 24 + 10,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      vRotX: (Math.random() - 0.5) * 0.02,
      vRotY: (Math.random() - 0.5) * 0.02,
      color: i % 3 === 0 ? 'rgba(200, 90, 50, ' : i % 3 === 1 ? 'rgba(70, 79, 56, ' : 'rgba(140, 94, 74, ',
      type: i % 4,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      shapes.forEach((s) => {
        s.x += s.vx + mouseX * 0.01
        s.y += s.vy + mouseY * 0.01
        s.rotX += s.vRotX
        s.rotY += s.vRotY

        if (s.x < -50) s.x = width + 50
        if (s.x > width + 50) s.x = -50
        if (s.y < -50) s.y = height + 50
        if (s.y > height + 50) s.y = -50

        // Perspective scale factor
        const perspective = 600 / (600 + s.z)
        const renderSize = s.size * perspective
        const alpha = Math.min(0.25, (1 - s.z / 600) * 0.3)

        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate(s.rotX)

        ctx.strokeStyle = s.color + alpha + ')'
        ctx.fillStyle = s.color + alpha * 0.2 + ')'
        ctx.lineWidth = 1.5

        if (s.type === 0) {
          // Floating 3D Cube / Wireframe Box
          ctx.strokeRect(-renderSize / 2, -renderSize / 2, renderSize, renderSize)
          ctx.beginPath()
          ctx.moveTo(-renderSize / 2, -renderSize / 2)
          ctx.lineTo(-renderSize / 4, -renderSize / 4)
          ctx.stroke()
        } else if (s.type === 1) {
          // Floating 3D Ring
          ctx.beginPath()
          ctx.ellipse(0, 0, renderSize, renderSize / 2, s.rotY, 0, Math.PI * 2)
          ctx.stroke()
        } else if (s.type === 2) {
          // Floating 3D Octahedron / Diamond
          ctx.beginPath()
          ctx.moveTo(0, -renderSize)
          ctx.lineTo(renderSize / 1.5, 0)
          ctx.lineTo(0, renderSize)
          ctx.lineTo(-renderSize / 1.5, 0)
          ctx.closePath()
          ctx.stroke()
          ctx.fill()
        } else {
          // Floating 3D Circle Sphere
          ctx.beginPath()
          ctx.arc(0, 0, renderSize / 2, 0, Math.PI * 2)
          ctx.stroke()
        }

        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  )
}
