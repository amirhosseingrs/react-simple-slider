import Slide from './Slide'
import Controls from './Controls'
import SlidesDots from './SlidesDot'
const Slider = (props) => {
  return (
    <div className='slider'>
        <Controls slides={props.slides} currentSlideIndex={props.currentSlideIndex} setCurrentSlideIndex={props.setCurrentSlideIndex} />
        <Slide slide={props.slides[props.currentSlideIndex]} />
        <SlidesDots slides={props.slides} setCurrentSlideIndex={props.setCurrentSlideIndex} />
    </div>
  )
}

export default Slider