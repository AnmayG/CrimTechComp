import { useState } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered
  // and destroyed

  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Open Modal Button */}
        <button
          style={{
            backgroundColor: '#22bb22',
            color: 'white',
            marginTop: '10px',
          }}
          className="button"
          onClick={openModal}
        >
          Open Modal
        </button>
      </div>

      {/* Modal content */}
      {isOpen &&
        createPortal(
          <div>
            <div className="modal-overlay">
              <div className="modal">
                <button className="close-button button" onClick={closeModal}>
                  Close
                </button>
                <p>Modal Content Goes Here</p>
              </div>
            </div>
          </div>,
          modalRoot as Element,
        )}
    </>
  )
}
