import React, { useRef, useEffect } from 'react'
function Particle(x = 10, y = 10) {
    return {
        x, y
    }
};
const Canvas = props => {
  const particles = [];
  const canvasRef = useRef(null);
  let n_particles = 50;
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    var r = canvas.getBoundingClientRect();
    canvas.width = r.width;
    canvas.height = r.height;
    let frameCount = 0
    let animationFrameId
    
    for(let i=0; i < n_particles;i++){
        let a = Math.random() * canvas.width;
        // particles[]
    }
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas