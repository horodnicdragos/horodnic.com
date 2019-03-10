import { Link } from 'preact-router/match'

import s from '../../utils/s'

const Nav = s('nav')`db dt-l w-100 border-box pt3`
const BtnContainer = s('div')`db dtc-l v-mid w-100 w-75-l tc tr-l`
const Logo = s(Link)`db tc tl-l h3`
const NavBtn = e => s(e)`link pointer f6 f5-m f4-l dib mr4-l mr4-m dim black-80`
const NavBtnLast = e => s(e)`link pointer f6 f5-m f4-l dib dim black-80`

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
    <Btn activeClassName='bb' href={p.route} title={p.title}
      target={isExternal(p.route) ? '_blank' : null}>
      <div class="focus__content pa2" tabIndex={-1}>{p.title}</div>
    </Btn>
  )
})

const Header = () => (
  <header>
    <Nav>
      <Logo href="/" title="Logo">
        <img src='assets/logo.svg' class="h3 o-80" alt="Logo"/>
      </Logo>
      <BtnContainer>
        {renderNavBtns([
          { title: 'About', route: '/' },
          { title: 'Resume', route: '/resume' },
          { title: 'Github', route: 'https://github.com/horodnicdragos' },
          { title: 'Contact', route: '/contact' },
        ])}
      </BtnContainer>
    </Nav>
  </header>
);

export default Header;
