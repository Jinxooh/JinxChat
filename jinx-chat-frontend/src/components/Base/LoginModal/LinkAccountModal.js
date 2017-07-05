import React from 'react';
import Modal from 'components/Common/Modal';
const LinkAccountModal = ({onHide, visible}) => {
    return (
        <Modal
            onHide={onHide}
            visible={visible}
        >
            THIS IS test!!! 
        </Modal>
    );
};

export default LinkAccountModal;