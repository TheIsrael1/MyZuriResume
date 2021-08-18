import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Nav = styled.nav`
 background: ${({scrollNav}) => (scrollNav ? '#280f27' : 'transparent')};
 height: 80px;
 margin-top: -80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;

 @media screen and(max-width: 960px){
  transition: 0.8s all ease;
 }
`;

export const NavContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
 max-width: 1100px;
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
 display: block;
 position: absolute;
 top: 0;
 right: 0;
 transform: translate(-100%, 60%);
 font-size: 1.8rem;
 cursor: pointer;
 color: #fff;
}
`
export const NavMenu = styled.ul`
display:flex;
align-item: center;
list-style: center;
margin-right: -22px;

@media screen and (max-width: 768px){
 display: none;
}
`
export const NavItem =styled.li`
 height: 80px;
 list-style: none;
`
export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover{
    color: #bf86c2;
 }

&.active {
 border-bottom: 3px solid #bf86c2;
}
`
