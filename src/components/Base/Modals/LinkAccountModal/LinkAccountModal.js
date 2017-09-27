import React from 'react';
import Modal from 'components/Common/Modal';
import { Icon, Button } from 'semantic-ui-react';

const LinkAccountModal = ({onHide, visible, exisitingProvider, provider, onLinkAccount}) => {

    return (
        <Modal
            onHide={onHide}
            visible={visible}
            className="link-account-modal"
        >
            <div className="title-bar">
                <Icon name="warning circle"/>
            </div>
            <div className="message">
                <p>Same<b> {exisitingProvider}</b> E-mail already have!</p>
                <p>Do you want to connect with <b>{provider}</b> account?</p>
                <p className="warning">If you don't want to this, press <b>NO</b> button</p>
            </div>
            <div className="footer">
                <Button color="teal" onClick={onLinkAccount}>YES</Button>
                <Button color="red" onClick={onHide}>NO</Button>
            </div>
        </Modal>
    );
};

export default LinkAccountModal;