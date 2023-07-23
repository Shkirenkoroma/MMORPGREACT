import { FC, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import EditName from './editName/index'
import plus from './assets/plus.png'
import minus from './assets/minus.png'
import powerskills from './assets/power.png'
import charismaskills from './assets/charisma.png'
import dexterityskills from './assets/dexterity.png'
import intelligenceskills from './assets/intelligence.png'
import './App.css'
import soundSkill from './assets/addskillll.mp3'
import useSound from 'use-sound'

function Model(props: any) {
  const { scene } = useGLTF('./warrior.glb')
  return <primitive object={scene} {...props} />
}

const App: FC = (): JSX.Element => {
  const [warriorName, setWarriorName] = useState<string>('Мирный воин')
  const [edit, setEdit] = useState<boolean>(false)
  const [addSkillPower, setAddSkillPower] = useState<boolean>(false)

  const handleEditNameWarrior = (): void => {
    setEdit(!edit)
  }
  const [play] = useSound(soundSkill)


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
        <h2>Название персонажа</h2>
        <div className="skills__edit__name">
          {edit ? (
            <EditName
              warriorName={warriorName}
              setWarriorName={setWarriorName}
            />
          ) : (
            <span>{warriorName}</span>
          )}
          <button onClick={handleEditNameWarrior}>
            {edit ? 'Сохранить' : 'Редактировать'}
          </button>
        </div>
        <h3>Личные навыки</h3>
        <div className="skills__items">
          <ul className="skills__list__item">
            <li className="skills__item">
              Сила
              <img
                src={powerskills}
                alt="skill power"
                style={{ width: '100px' }}
              />
              {addSkillPower ? (
                <img
                  className="skills__image__add"
                  src={plus}
                  alt="icon add a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              ) : (
                <img
                  className="skills__image__delete"
                  src={minus}
                  alt="icon delete a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              )}
            </li>
            <li className="skills__item">
              Ловкость
              <img src={dexterityskills} alt=""  style={{ width: '100px' }}/>
              {addSkillPower ? (
                <img
                  className="skills__image__add"
                  src={plus}
                  alt="icon add a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              ) : (
                <img
                  className="skills__image__delete"
                  src={minus}
                  alt="icon delete a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              )}
            </li>
            <li className="skills__item">
              Интеллект
              <img src={intelligenceskills} alt=""  style={{ width: '100px' }} />
              {addSkillPower ? (
                <img
                  className="skills__image__add"
                  src={plus}
                  alt="icon add a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              ) : (
                <img
                  className="skills__image__delete"
                  src={minus}
                  alt="icon delete a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              )}
            </li>
            <li className="skills__item">
              Харизма
              <img src={charismaskills} alt=""  style={{ width: '100px' }}/>
              {addSkillPower ? (
                <img
                  className="skills__image__add"
                  src={plus}
                  alt="icon add a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              ) : (
                <img
                  className="skills__image__delete"
                  src={minus}
                  alt="icon delete a new skills - power"
                  onClick={()=>(play(), setAddSkillPower(!addSkillPower))}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
