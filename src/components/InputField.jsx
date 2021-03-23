import React from "react";

function InputField({inputField,setInputField}) {
  return (
      <div>
            <input 
                type="text"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
            />
      </div>
  );
}

export default InputField;
