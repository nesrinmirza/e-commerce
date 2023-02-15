import React from 'react'
import image1 from "../../pages/Home/homeimgs/image1.png"
import image2 from "../../pages/Home/homeimgs/iphone12.png"
const delay = 2500;
const dots = [1, 2]


const Slider = () => {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === dots.length - 1 ? dots.length - 2 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >

                <div
                    className="slide"
                    key={dots[0]}
                >

                    <div className='slider-1'>
                        <div className='slider-text'>
                            <h3>Buy & Sell</h3>
                            <h3>What's Now & Next</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Felis malesuada et leo faucibus</p>
                        </div>
                        <div className='slider-img'>  <img style={{height:"400px"}} src={image1} /></div>
                    </div>

                </div>
                <div
                    className="slide"
                    key={dots[1]}
                >

                    <div className='slider-1'>
                        <div className='slider-text'>
                            <h3>Buy iphone 12</h3>
                            <h3>What's Now & Next</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Felis malesuada et leo faucibus</p>
                        </div>
                        <div className='slider-img'>  <img style={{height:"400px"}}  src={image2} /></div>
                    </div>
                </div>

            </div>

            <div className="slideshowDots">
                {dots.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider