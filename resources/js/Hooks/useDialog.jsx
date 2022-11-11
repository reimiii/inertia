import React, { useRef } from 'react';
import { Modal } from 'bootstrap';

const UseDialog = () => {
    const modal = useRef(null);

    return [
        open = () => new Modal(modal.current).show(),
        close = () => Modal.getInstance(modal.current).hide(),
        modal
    ];

};

export default UseDialog;