import type { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key="favicon-ico"
      rel="icon"
      href="/gatsby-starter-emilia/favicon.ico"
      type="image/x-icon"
    />,
  ])
}
