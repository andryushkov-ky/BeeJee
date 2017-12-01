import React, { Component } from 'react';

export const renderInputField = ({
        input,
        label,
        type,
        id,
        className,
        meta: { touched, error, warning }
    }) => (
    <div className="form__row">
        <div className="form__row-inner">
            {touched &&
            ((error && <span className="form__error">{error}</span>) ||
            (warning && <span className="form__warning">{warning}</span>))}
            <label htmlFor={id} className="form__label-text">{label}</label>
            <input {...input} id={id} type={type} className={className} />
        </div>
    </div>
)