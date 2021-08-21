import React, { useState } from 'react'
import { DiReact, DiZend } from 'react-icons/di';
import Zuri from '../../Image/ZuriLogo.svg'
import Hng from '../../Image/HngLogo.png'
import I4G from '../../Image/I4GLogo.png'
import { 
    ArrowForward,
    ArrowRight,
    ResumeContainer, 
    ResumeWrapper, 
    ResumeRow, 
    ResumeBtn,
    Column1, 
    Column2,
    TopLine, 
    Heading, 
    Subtext,
     List, 
     ListContainer, 
     ListItem, 
     ListParagraph, 
     ListTitle,
     BottomLine,
     Logo,
     LogoLink,
     Button
    
 } from './ResumeElements';


const ResumeSection = () =>{

    const [hover, setHover] = useState(false)

    const onHover = ()=> {
     setHover(!hover)
    }
    const [hover2, setHover2] = useState(false)

    const onHover2 = ()=> {
     setHover2(!hover2)
    }
        return(
            <>
            <ResumeContainer id="resume">
                <ResumeWrapper>
                    <ResumeRow>
                        <Column1>
                        <Heading>Ehindero Israel</Heading>
                         <TopLine>Front-end Dev/ 21/ Awesome</TopLine>
                         <Subtext > My friends call me Dero, I am the developer you want on your project. I also collaborate with teams to build awesome products.
                         </Subtext>
                                <ResumeBtn><Button href="https://drive.google.com/file/d/1i5yXbG5jtLZQbwX1Y8AsD19uSuFI_dcH/view" onMouseEnter={onHover} onMouseLeave={onHover}
                                >
                                    My CV {hover ? <ArrowForward /> : <ArrowRight />}
                                </Button>
                                <Button href="https://github.com/TheIsrael1" onMouseEnter={onHover2} onMouseLeave={onHover2}
                                >
                                    My Projects {hover2 ? <ArrowForward /> : <ArrowRight />}
                                </Button>
                                </ResumeBtn>
                        </Column1>
                        <Column2>
                        <Heading>Stack</Heading>
                        <List>
                            <ListItem>
                            <DiReact size="3rem"/>
                            <ListContainer>
                                <ListTitle>Frontend</ListTitle>
                                <ListParagraph>
                                Experience with <br />
                                React.js
                                </ListParagraph>
                            </ListContainer>
                            </ListItem>
                            <ListItem>
                            <DiZend size="3rem"/>
                            <ListContainer>
                                <ListTitle>UI/UX</ListTitle>
                                <ListParagraph>
                                Experience with <br />
                                Figma
                                </ListParagraph>
                            </ListContainer>
                            </ListItem>
                        </List>  
                        <BottomLine>Here we're creative</BottomLine>
                        <TopLine>
                        <LogoLink href="https://internship.zuri.team/"><Logo src={Zuri}/></LogoLink>
                        </TopLine>
                        </Column2>
                    </ResumeRow>
                </ResumeWrapper>
            </ResumeContainer>
            
            </>
        )
}

export default ResumeSection;
