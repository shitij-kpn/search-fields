import React from "react";

function InputField({inputField,setInputField}) {
  return (
      <div>
            <input 
                type="text"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
                placeholder="Search for chapter"
            />
      </div>
  );
}

export default InputField;
