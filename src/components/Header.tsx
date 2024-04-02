import { HeaderContainer } from './Header.styles'
import iconHeader from '../assets/icon-header.svg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={iconHeader} alt="" />
        <h1>
          to<span>do</span>
        </h1>
      </HeaderContainer>
    </>
  )
}
