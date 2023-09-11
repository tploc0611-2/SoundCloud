'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './styles.css';

export default function SimpleSlider() {

    const NextArrow = (props: any) => {
        return (
            <Button variant="outlined" onClick={props.onClick}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronRightIcon />
            </Button>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button variant="outlined" onClick={props.onClick}
                sx={{
                    position: "absolute",
                    top: "50%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronLeftIcon />
            </Button>
        )
    }

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };
    return (
        <div style={{ margin: "0 50px" }}>
            <h2> Multiple items </h2>
            <Slider {...settings}>
                <div className="abc">
                    <h3>1</h3>
                </div>
                <div className="abc">
                    <h3>2</h3>
                </div>
                <div className="abc">
                    <h3>3</h3>
                </div>
                <div className="abc">
                    <h3>4</h3>
                </div>
                <div className="abc">
                    <h3>5</h3>
                </div>
                <div className="abc">
                    <h3>6</h3>
                </div>
                <div className="abc">
                    <h3>7</h3>
                </div>
                <div className="abc">
                    <h3>8</h3>
                </div>
                <div className="abc">
                    <h3>9</h3>
                </div>
            </Slider>
        </div>

    );
}