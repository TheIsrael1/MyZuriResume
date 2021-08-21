import styled from 'styled-components';

export const FooterContainer = styled.footer`
background: #000;
`

export const FooterWrap = styled.div`
height: 90vh;
padding: 40px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0;
`
export const LinkItem = styled.a`
    text-decoration: none;
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media screen and (max-width: 768px) {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

`
export const LinkList = styled.ul`
	// border-top: 1px solid rgba(255, 255, 255, 0.1);
  	display: grid;
	grid-template-columns: repeat(2, minmax(85px, 220px));
	gap: 5px;
  padding: 40px 0 28px;

	@media screen and (max-width: 768px) {
		width: 80%;
		padding: 32px 12px 16px;
		gap: 16px;
	}
`

export const LinkColumn = styled.div`
	display: grid;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media screen and (max-width: 768px){
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}

`
export const SocialLogo = styled.a`
color: #fff;
justify-self: start;
cursor: ponter;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`

export const WebsiteRights =styled.small`
color: #fff;
margin-bottom: 16px
`
export const SocialIcons = styled.div`
border-top: 1px solid rgba(255, 255, 255, 0.1);
display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
padding: 40px 0 28px;

  @media screen and (max-width: 768px) {
      width: 100%;
      padding: 32px 4px 16px;
      gap: 5px;
`

export const SocialIconLink = styled.a`
display: flex;
flex-direction: column;
max-width: 220px;
width: 100%;
` 

export const FormHeader = styled.h1`
color: rgba(255, 255, 255, 0.4);
margin-bottom: 12px;
font-size: 24px;
font-weight: 400px;
`
export const Form = styled.form`
 
`
export  const Field = styled.input`
color: rgba(255, 255, 255, 0.4);
background: transparent;
padding: 5px;
margin-bottom: 48px;
outline: none;
border: none;
border-bottom: 1px solid #fff;
`
