import React from 'react'
import { storiesOf } from '@storybook/react'
import InputExamples from './examples/Input'
import DropdownExamples from './examples/Dropdown'

import style from './style.css'

storiesOf('Forms', module)
  .add('Inputs', () => (
    <div className={style.container}>
      <InputExamples />
    </div>
  ))
  .add('Dropdown', () => (
    <div className={style.container}>
      <DropdownExamples />
    </div>
  ))
