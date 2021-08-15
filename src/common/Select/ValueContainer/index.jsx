import React from 'react'
import { components } from 'react-select'
import caret from '../../../assets/img/caret.svg'
import './index.scss'

const ValueContainer = ({ children, hasValue, getValue, ...props }) => (
  <components.ValueContainer {...props}>
    {/* {!hasValue && <img src={Search} alt="" />} */}
    <div class="label">
      {children}
      <img src={caret} />
    </div>
    <hr class="hr" />
  </components.ValueContainer>
)

export default ValueContainer
