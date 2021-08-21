import styled  from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const ResumeContainer = styled.div`
 color: #fff;
 background: #f9f9f9;

 @media screen and (max-width: 768px){
   padding: 100px 0;
 }  
`

export const ResumeWrapper = styled.div`
 display: grid;
 z-index:1;
 height: 100vh;
 width: 100%;
 max-width: 1100px;
 margin-right: 0;
 margin-left: auto;
 pading 0 24px;

 @media screen and (max-width: 768px){
    height: auto;
  } 
`

export const ResumeRow = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 justify-content: space-around;
 grid-template-areas: "col1 col2";

 @media screen and (max-width: 768px){
  grid-template-areas: "col1 col1" "col2 col2";
 }
`
export const ResumeBtn = styled.div`
margin-top: 6px;
display: flex;

`
 export const Column1 = styled.div`
  margin-bottom: 30px;
  padding: 0 15px;
  grid-area: col1;
 `
  export const Column2 = styled.div`
  margin: 42px 0;
  padding: 0 15px;  
  grid-area: col2;
 `
 export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
 `

 export const TopLine = styled.p`
  color: #722655;
  font-size: 16px;
  Line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px'
  tex-transform: uppercase;
  margin-bottom: 16px;

 `

 export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1px;
  font-weight: 600px;
  color: #280f27;

  @media screen and (max-width: 480px){
   font-size: 32px;
  }
 `
 export const Subtext = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;
  color: #010606
 `
 export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 2rem 0;
  
  @media  @media screen and (max-width: 768px){
    margin: 64px 0;
  }

 
  
  @media  @media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media  @media screen and (max-width: 480px){
    display: flex;
    margin-left: 24px;
  }
`

export const ListTitle = styled.h4`
  padding: 2px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #280f27;
  margin-bottom: 2px;

@media  @media screen and (max-width: 768px){
  font-size: 24px;
  line-height: 28px;
}

@media  @media screen and (max-width: 480px){
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 2px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color:#722655;

  @media  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 28px;
  }

  @media  @media screen and (max-width: 768px)
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  color: #280f27;
  max-width: 320px;
  display: grid;
  flex-direction: column;

@media  @media screen and (max-width: 768px){
  max-width: 203px;
}

@media  @media screen and (max-width: 480px)
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media  @media screen and (max-width: 768px){
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media  @media screen and (max-width: 480px){
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
export const BottomLine = styled.p`
  color: #280f27;
  font-size: 24px;
  Line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px'
  tex-transform: uppercase;
  margin: 16px 0;

 `
 export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
export const Logo = styled.img`
height: 24px;
width: auto;
padding: 0 16px 0 0;
`
export const LogoLink = styled.a`

`
export const Button = styled.a`
 border-radius: 50px;
 background: #722655;
 wite-space: no-wrap;
 padding: 6px 16px;
 margin: 0 8px 2px 0;
 color: #fff;
 font-size: 20px;
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 text-decoration: none;
 transition: all 0.2s ease-in-out;
 
 &:hover{
    color: #010606;
  transition: all 0.2s ease-in-out;
  background: #bf86c2;
 }
`

  



