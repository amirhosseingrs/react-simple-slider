import {GrPrevious, GrNext} from 'react-icons/gr'
const Controls = (props) => {
    const nextHandler = () => {
        props.setCurrentSlideIndex(props.currentSlideIndex + 1 > props.slides.length - 1 ? 0 : props.currentSlideIndex + 1);
    };
    const prevHandler = () => {
        props.setCurrentSlideIndex(props.currentSlideIndex - 1 < 0 ? props.slides.length - 1 : props.currentSlideIndex - 1);
    };
  return (
    <div>
        <button className='controler' onClick={prevHandler} ><GrPrevious /></button>
        <button className='controler' onClick={nextHandler} ><GrNext /></button>
    </div>
  )
}

export default Controls