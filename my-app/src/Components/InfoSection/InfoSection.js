import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Button } from '../../GlobalStyles';
import { InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img


} from './InfoSection.elements';

const InfoSection = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine,
    img, 
    alt, 
    start


}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
        <Container>
            <infoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine  lightTopLine={lightTopLine}>{TopLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description }</Subtitle>
                        <Link to= '/sign-up'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                                </Button> 
                        </Link>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt}/>
                    </ImgWrapper>
                </InfoColumn>
            </infoRow>
        </Container>
    </InfoSec>
    </>
  );
}

export default InfoSection;