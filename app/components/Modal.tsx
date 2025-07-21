'use client'

import { useEffect, useRef } from 'react'

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (dialog) {
            dialog.showModal()
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [onClose])

    return (
        <dialog
            ref={dialogRef}
            className="modal"
            onClose={onClose}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose()
                }
            }}
            style={{
                border: 'none',
                borderRadius: '12px',
                maxWidth: '100vw',
                maxHeight: '100vh',
                backgroundColor: 'white',
                padding: '2rem',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',

            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: '#f5f5f5',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                ✕
            </button>
            {children}
        </dialog>
    )
}