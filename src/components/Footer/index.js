import React, {useState} from 'react'
import {FooterContainer, FooterWrap, LinkColumn, LinkItem, LinkList, LinkTitle,
         FormHeader, Form, Field} from './FooterElements';
import {Button} from '../ButtonElements'

const Footer = () => {

    const [hover, setHover] = useState(false)

    const onHover = ()=> {
     setHover(!hover)
    }


    return (
        <>
            <FooterContainer id="contact">
                <FooterWrap>
                    <LinkList>
                        <LinkColumn>
                        <LinkTitle>Call</LinkTitle>
                        <LinkItem href="tel:09028232075">09028232075</LinkItem>
                        </LinkColumn>
                        <LinkColumn>
                        <LinkTitle>Email</LinkTitle>
                        <LinkItem href="mailto:ehindero2016@gmail.com">ehindero2016@gmail.com</LinkItem>
                        </LinkColumn>
                    </LinkList>
                    <LinkList>
                        <LinkColumn>
                        <LinkTitle>facebook</LinkTitle>
                        <LinkItem href="tel:09028232075">Ehindero Israel</LinkItem>
                        </LinkColumn>
                        <LinkColumn>
                        <LinkTitle>Twitter</LinkTitle>
                        <LinkItem href="https://twitter.com/devLikeIsrael">@devLikeIsrael</LinkItem>
                        </LinkColumn>
                    </LinkList>
                    <LinkList>
                    <FormHeader> Drop a Message</FormHeader>                        
                    <Form>
                    <LinkColumn>
                    <LinkTitle>Your Email</LinkTitle> 
                    <Field />
                    </LinkColumn>
                    <LinkColumn>
                    <LinkTitle>Your Message</LinkTitle>
                    <Field />
                     </LinkColumn>
                     <LinkColumn>
                     <Button smooth={true} duration={500} spy={true} exact='true' offset={-80} to="/" onMouseEnter={onHover} onMouseLeave={onHover}
                        >Go</Button>
                     </LinkColumn>
                    </Form>
                    </LinkList>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer;
