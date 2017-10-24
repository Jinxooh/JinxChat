import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class InputNickName extends Component {

    render() {
        const { onClick, error, loading, value, onChange } = this.props;

        return (
            <div className="input-nickname">
                <Input
                    action={
                        {    
                            color: 'teal',
                            labelPosition: 'right',
                            content: 'Continue',
                            icon: 'chevron right',
                            onClick: ()=> { onClick(value) },
                            disabled: error || value === '',
                            loading: loading.setUsername || loading.register
                        }
                    }
                    placeholder="ID"
                    onChange={onChange}
                    value={value}
                    error={error}
                    loading={loading.checkUsername} icon='user' iconPosition='left'
                >
                </Input>
            </div>
        );
    }
};

export default InputNickName;