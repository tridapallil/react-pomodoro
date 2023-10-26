import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer action="">
      <div>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          list="task-suggestions"
          id="task"
          disabled={!!activeCycle}
          placeholder="Dê um nome ao seu projeto"
          {...register('task')}
        />
        <datalist id="task-suggestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          step={5}
          min={5}
          disabled={!!activeCycle}
          max={60}
          {...(register('minutesAmount'), { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
