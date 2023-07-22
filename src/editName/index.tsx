import { ChangeEvent, FC } from 'react'

interface IEditNameProps {
  warriorName: string
  setWarriorName: (value: string) => void
}

const EditName: FC<IEditNameProps> = ({
  warriorName,
  setWarriorName,
}): JSX.Element => {
  const handlerChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setWarriorName(e.target.value)
  }

  return (
    <div>
      <input type="text" value={warriorName} onChange={handlerChange} />
    </div>
  )
}

export default EditName
