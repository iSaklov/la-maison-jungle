import React from 'react'
import ReactDOM from 'react-dom'
import Button from './UI/Button'
import '../styles/Modal.css'

function Modal({ isShowing, hide, children }) {
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <Button
                  variant="secondary"
                  onClickHandler={hide}
                  ariaLabel="Fermer"
                >
                  <span aria-hidden="true">&times;</span>
                </Button>
              </div>
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null
}

export default Modal
