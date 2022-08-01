import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4' //Pexels.com/videos/
import { HeroButton } from './HeroButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };



    return (
        <>
            <HeroContainer>

                
                    <HeroContent>
                        <HeroH1>Maggie Rozell</HeroH1>
                        <HeroP>Designer/Full-Stack Developer</HeroP>
                        <HeroBtnWrapper>
                            <HeroButton to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                                Get started {hover ? <ArrowForward /> : <ArrowRight />}
                            </HeroButton>
                        </HeroBtnWrapper>
                    </HeroContent>
                

                
                    <HeroBg>
                        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                    </HeroBg>
                

            </HeroContainer>
        </>
    )
}

export default HeroSection;