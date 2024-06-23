import React from 'react'

export default function Alert(props) {
  return (
    props.alertt &&
    <div>
<div className={`alert alert-${props.alertt.type} alert-dismissible fade show`} role="alert">
<strong>{props.alertt.type}</strong>:{ props.alertt.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
