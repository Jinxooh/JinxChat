import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class InputNickName extends Component {
    state = {
        value: ''
    }
    
    handleChange = (e) => {
        const { onValidate } = this.props;

        this.setState({
            value: e.target.value
        });

        onValidate(e.target.value);
    }

    render() {
        const { onClick, error, loading } = this.props;
        const { handleChange } = this;
        const { value } = this.state;

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
                        }
                    }
                    placeholder="ID"
                    onChange={handleChange}
                    value={value}
                    error={error}
                    loading={loading} icon='user' iconPosition='left'
                >
                </Input>
            </div>
        );
    }
};

export default InputNickName;