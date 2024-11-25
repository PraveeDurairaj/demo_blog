import React from 'react';

const InputField = ({
  id,
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  textarea
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block  text-[18px] text-black mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {
        textarea ?
          <textarea 
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`}
          > </textarea>
          :
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black `}
          />
      }
    </div>
  );
};

export default InputField;
