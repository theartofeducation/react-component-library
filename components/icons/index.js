import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

/* eslint-disable max-len */
export const Icons = () => (
  <svg style={{ display: "none" }}>
    <symbol
      id="arrow-down"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="long-arrow-alt-down"
      className="svg-inline--fa fa-long-arrow-alt-down fa-w-8"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512">
      <path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
    </symbol>
  </svg>
)
/* eslint-enable max-len */

export const Icon = ({ symbolId, className }) => (
  <svg className={clsx("svg-symbol-ref", className)}>
    <use xlinkHref={`#${symbolId}`} />
  </svg>
)

Icon.propTypes = {
  symbolId: PropTypes.string,
  className: PropTypes.string
}
