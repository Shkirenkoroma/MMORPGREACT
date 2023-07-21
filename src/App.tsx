import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import './App.css'

function Model(props: any) {
  const { scene } = useGLTF('./warrior.glb')
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    <div className="container">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ height: '100vh', maxWidth: '1000px', width: '100%' }}
      >
        <color attach="background" args={['#101010']} />
        <PresentationControls speed={1.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={'sunset'}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
      <div className="skills">
        <h2>Личные навыки</h2>
        <div className="skills__items">
          <ul className="skills__list__item">
            <li className="skills__item">Сила<img src="" alt=""/><img src="" alt=""/></li>
            <li className="skills__item">Ловкость<img src="" alt=""/><img src="" alt=""/></li>
            <li className="skills__item">Интеллект<img src="" alt=""/><img src="" alt=""/></li>
            <li className="skills__item">Харизма<img src="" alt=""/><img src="" alt=""/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
