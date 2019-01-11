import React from 'react'
import { Helmet } from 'react-helmet'
import humanize from '../../Utils/strings'

export default ({ category }) => (
  <Helmet>
    <title>Awesome Talks - {category}</title>
    <meta name="description" content="" />
    <meta name="twitter:title" content={`Test - ${humanize(category)}`} />
  </Helmet>
)
