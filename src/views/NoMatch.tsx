import * as React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <div>
    No Match
    <Link to="/">link to home</Link>
  </div>
);

export default NoMatch
