import React from 'react';

import { InputWrapper, Input } from './styles';

function NewMessage() {
    return(
        <InputWrapper>
            <Input type="text" placeholder="Message channel" />
        </InputWrapper>
    );
}

export default NewMessage;