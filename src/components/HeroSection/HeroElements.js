
import styled from 'styled-components';
import  {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
/* flex-direction: column; */
justify-content: center;
/* align-items: center; */
padding: 0 30px;
width: 100vw;
height: 100vh;
position: relative;
z-index: 1;

/*
to make the video darker if needed
:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
    
} */
`


export const HeroBg = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
margin-top: 200px;
/* top: 0;
right: 0;
bottom: 0;
left: 0; */
/* width: 100%;
height: 100%; */
width: 300px;
height: 300px;



/* &:before {
    box-shadow: 0 0 0 1000px #fff;
  transform: rotate(-45deg);
  border-radius: 40px;
  position: absolute;
  content: '';
  bottom: 10px;
  right: 10px;
  left: 10px;
  top: 10px;
} */
`

export const VideoBg = styled.video`
width: 260px;
height: 320px;

background: #a84909;
border-radius: 50%;
  
/* width: 120%;
height: 120%; */

-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HeroContent = styled.div`
/* z-index: 3; */
max-width: 1200px;
position: absolute;
/* padding: 8px 24px; */
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`

export const HeroH1 = styled.h1`
color: #fff;
font-size: 2.5rem;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
margin-top: 5px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
margin-top: 5px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`