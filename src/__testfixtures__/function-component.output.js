import PropTypes from "prop-types"
import React from "react"

export function MyComponent() {
  return <span />
}

MyComponent.propTypes = {
  bar: PropTypes.string.isRequired,
  foo: PropTypes.number,
}