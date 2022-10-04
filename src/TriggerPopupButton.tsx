import { styled } from '@linaria/react'
import React from 'react'
import Modal from 'react-modal'

import { pushGA4Event } from './utils'

const PopupCloseButton = styled.button`
  position: absolute;
  right: 16px;
`

const FormElementWrapper = styled.div`
  padding: 4px 0;
`

type StepType = 'initial' | 'email' | 'forgetPassword'

const TriggerPopupButton = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [stepType, setStepType] = React.useState<StepType>('initial')

  const handleClick = () => {
    setIsModalOpen(true)
    pushGA4Event({
      event: 'login',
      sub_category: 'popup',
      user_action: 'impression',
      trigger_point: 'pop up open button',
    })
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    pushGA4Event({
      event: 'login',
      sub_category: 'popup_close',
      user_action: 'click',
    })
  }

  const handleGoToEmailStep = () => {
    setStepType('email')
    pushGA4Event({
      event: 'login',
      sub_category: 'popup',
      user_action: 'click',
      method: 'email',
    })
  }

  const handleEmailStepForgetPasswordButtonClick = () => {
    setStepType('forgetPassword')
    pushGA4Event({
      event: 'login',
      sub_category: 'email_forget_password',
      user_action: 'click',
    })
  }

  const handleEmailStepBackButtonClick = () => {
    setStepType('initial')
    pushGA4Event({
      event: 'login',
      sub_category: 'email_back',
      user_action: 'click',
    })
  }

  const handleForgetPasswordStepOKButtonClick = () => {
    pushGA4Event({
      event: 'login',
      sub_category: 'forget_password_ok',
      user_action: 'click',
    })
  }

  const handleForgetPasswordStepBackButtonClick = () => {
    setStepType('email')
    pushGA4Event({
      event: 'login',
      sub_category: 'forget_password_back',
      user_action: 'click',
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Click here to open pop-up with custom events</button>
      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose}>
        <PopupCloseButton onClick={handleModalClose}>x</PopupCloseButton>
        {stepType === 'initial' && (
          <>
            <h1>Initial</h1>
            <FormElementWrapper>
              <button onClick={handleGoToEmailStep}>Sign in with Email</button>
            </FormElementWrapper>
          </>
        )}
        {stepType === 'email' && (
          <>
            <h1>Email</h1>
            <FormElementWrapper>
              <input placeholder="email" />
            </FormElementWrapper>
            <FormElementWrapper>
              <button onClick={handleEmailStepForgetPasswordButtonClick}>Forget Password</button>
            </FormElementWrapper>
            <FormElementWrapper>
              <button onClick={handleEmailStepBackButtonClick}>Back</button>
            </FormElementWrapper>
          </>
        )}
        {stepType === 'forgetPassword' && (
          <>
            <h1>Forget Password</h1>
            <FormElementWrapper>
              <button onClick={handleForgetPasswordStepOKButtonClick}>OK</button>
            </FormElementWrapper>
            <FormElementWrapper>
              <button onClick={handleForgetPasswordStepBackButtonClick}>Back</button>
            </FormElementWrapper>
          </>
        )}
      </Modal>
    </div>
  )
}

export default TriggerPopupButton
