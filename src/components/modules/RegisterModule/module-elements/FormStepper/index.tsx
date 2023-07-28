import React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import { FaCheck } from 'react-icons/fa'
import { styled } from '@mui/styles'

interface FormStepperInterface {
  activeStep: number
}

const FormStepper = ({ activeStep }: FormStepperInterface) => {
  const QontoConnector = styled(StepConnector)(({}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#5561FF',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#5561FF',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#777B97',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }))

  const QontoStepIconRoot = styled('div')(
    ({ ownerState }: { ownerState: { active?: boolean } }) => ({
      color: '#777B97',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
        color: '#5561FF',
      }),
      '& .QontoStepIcon-completedIcon': {
        color: '#5561FF',
        zIndex: 1,
        fontSize: 18,
      },
      '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },
    })
  )

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <FaCheck className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    )
  }

  const steps = ['1', '2']

  return (
    <Stepper activeStep={activeStep} connector={<QontoConnector />}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel
            StepIconComponent={QontoStepIcon}
            sx={{
              '& .MuiStepLabel-label': {
                color: '#777B97',
              },
              '& .MuiStepLabel-label.Mui-active': {
                color: '#777B97',
                fontSize: '16px',
              },
              '& .MuiStepLabel-label.Mui-completed': {
                color: '#777B97',
              },
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default FormStepper
