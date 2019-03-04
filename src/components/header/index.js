import { Link } from 'preact-router/match'

import s from '../../utils/s'

const Nav = s('nav')`db dt-l w-100 border-box pa3`
const BtnContainer = s('div')`db dtc-l v-mid w-100 w-75-l tc tr-l`
const Logo = s(Link)`db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l`
const NavBtn = e => s(e)`link dark-gray f6 f5-l dib mr3 mr4-l pa2 hover-bb-ns`
const NavBtnLast = e => s(e)`link dark-gray f6 f5-l dib pa2 hover-b`

const isExternal = url => url.match(/^(http|https):\/\//)

const getNavBtnType = (pages, p, i) => {
  if (isExternal(p.route) && i === pages.length - 1) return NavBtnLast('a')
  if (i === pages.length - 1) return NavBtnLast(Link)
  if (isExternal(p.route)) return NavBtn('a')
  return NavBtn(Link)
}

const renderNavBtns = pages => pages.map((p, i) => {
  const Btn = getNavBtnType(pages, p, i)
  return (
    <Btn activeClassName='bb-ns' href={p.route} title={p.title}
      target={isExternal(p.route) ? '_blank' : null}>{p.title}</Btn>
  )
})

const Header = () => (
  <header>
    <Nav>
      <Logo href="/" title="Home">
        <img src='assets/logo.svg' width='80'></img>
      </Logo>
      <BtnContainer>
        {renderNavBtns([
          { title: 'Home', route: '/' },
          { title: 'Resume', route: '/resume' },
          { title: 'Github', route: 'https://github.com/horodnicdragos' },
          { title: 'Contact', route: '/contact' },
        ])}
      </BtnContainer>
    </Nav>
  </header>
);

export default Header;
