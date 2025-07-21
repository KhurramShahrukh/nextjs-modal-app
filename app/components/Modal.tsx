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
                padding: 0,
                border: 'none',
                borderRadius: '12px',
                maxWidth: '90vw',
                maxHeight: '90vh',
                backgroundColor: 'transparent',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '2rem',
                    position: 'relative',
                    maxWidth: '600px',
                    width: '100%',
                    maxHeight: '80vh',
                    overflowY: 'auto',
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
            </div>
        </dialog>
    )
}