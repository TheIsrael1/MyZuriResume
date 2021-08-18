import React, {useState} from 'react';
import Img2 from '../../Image/Img2.jpg'
import { Button } from './../ButtonElements';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {

 const [hover, setHover] = useState(false)

 const onHover = ()=> {
  setHover(!hover)
 }

 return (
  <HeroContainer id="home">
   <HeroBg>
     <ImgBg src={Img2} />
   </HeroBg>
   <HeroContent>
    <HeroH1>Dero The Creator</HeroH1>
    <HeroP>
     holla me for your next project, here we're creative!
    </HeroP>
    <HeroBtnWrapper>
     <Button smooth={true} duration={500} spy={true} exact='true' offset={-80} to="contact" onMouseEnter={onHover} onMouseLeave={onHover}
     >
     Get in touch {hover ? <ArrowForward /> : <ArrowRight />}
     </Button>
    </HeroBtnWrapper>
   </HeroContent>
  </HeroContainer>
 )
}

export default HeroSection
