const SlidesDot = (props) => {
    const dotClickHandler = (id) => {
        const index = props.slides.indexOf(props.slides.find(slide => slide.id === id));
        props.setCurrentSlideIndex(index);
    };

  return (
    <div className="slidedots">
        {props.slides.map(slide => (
            <button className="slidedot" key={slide.id} onClick={() => dotClickHandler(slide.id)} >{slide.id}</button>
        ))}
    </div>
  )
}

export default SlidesDot