import React, {useState} from 'react'
import Video from '../../videos/intro_vid.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, /*HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight*/ } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                {/* <HeroH1></HeroH1>
                <HeroP></HeroP>
                <HeroBtnWrapper>
                    <Button to="enroll" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Enroll {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection