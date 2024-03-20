import React, { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import './AbstractModal.css';

declare type AbstractModalProps = {
    children: ReactNode,
    isOpen: boolean,
    closeModal: MouseEventHandler<HTMLDivElement>
}

const AbstractModal = ({children, isOpen, closeModal}: AbstractModalProps) => {
    return(
        <React.Fragment>
            {
                isOpen && (
                    <div className='modal-overlay' onClick={closeModal}>
                        <div className='modal-content' onClick={( e: MouseEvent) => e.stopPropagation()}>
                            {children}
                            <span className="modal-close-btn" onClick={closeModal}>&times;</span>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
};

export default AbstractModal;