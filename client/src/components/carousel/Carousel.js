import { motion } from "framer-motion";
import { useRef, useEffect, useState} from "react";
import menu from "./carouselMenu";


function Carousel() {
    
    const [width, setwidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setwidth(carousel.current.offsetWidth - carousel.current.scrollWidth);
    }, []);
    

 
    return (
        <div className="AppCarousel">
            <motion.div ref={carousel} className="carousel">
                <motion.div
                    drag="x"
                    dragConstraints={{ right:0, left:width}}
                    className="inner-carousel">
                    {menu.map(({imagen,nombre,descripcion,precio}) => {
                        return (
                            <motion.div className="item" >
                                <img src={imagen} alt="" />
                                <motion.div className="contenedor-menu">
                                    <h2 className="nombre-menu">{nombre}</h2>
                                    <p className="descripcion-menu">{descripcion}</p>
                                    <h3 className="precio-menu">{precio}</h3>
                                </motion.div>
                            </motion.div>


                        );
                    })}
                </motion.div>
            </motion.div>
        </div>

    );
}

export default Carousel
