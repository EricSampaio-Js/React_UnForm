import React,{Fragment,useEffect,useRef} from 'react';
import {useField} from '@unform/core';

const Input = ({name,...rest}) => {
    const inputRef = useRef(null);
    const {
        fieldName,
        registerField,
        defaultValue,
        error
    } = useField(name);

    useEffect(()=>{
        registerField({
            name:fieldName,
            ref:inputRef.current,
            path:'value'
        })
    });

    return ( 
        <Fragment>
            {error && <span>{error}</span>}
            <br/>
            <input ref={inputRef} {...rest} />
        </Fragment>
     );
}
 
export default Input;