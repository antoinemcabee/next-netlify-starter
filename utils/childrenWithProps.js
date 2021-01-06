import {cloneElement, Children} from 'react'

export default function childrenWithProps(children, props) {
  return Children.toArray(children).map(child => {
    return cloneElement(child, props)
  })
}