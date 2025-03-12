import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div>
        {/* Double curly braces ka matlab hai javascript ka object*/}
        {/* checking that if alert is null the code on the right side is not evaluated. */}
        {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        )}
    </div>
  )
}
