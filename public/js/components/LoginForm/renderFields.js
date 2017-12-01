import React, { Component } from 'react';

export const renderInputField = ({
        input,
        label,
        type,
        id,
        className,
        meta: { touched, error, warning }
    }) => (
    <div className="form__row login__row">
        <div className="form__row-inner login__row-inner">
            {touched &&
            ((error && <span className="form__error login__error">{error}</span>) ||
            (warning && <span className="form__warning login__warning">{warning}</span>))}
            <label htmlFor={id} className="form__label-text login__label-text">{label}</label>
            <input {...input} id={id} type={type} className={className} />
        </div>
    </div>
)