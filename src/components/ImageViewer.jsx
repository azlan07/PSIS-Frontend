import React, { useState, useRef } from 'react';
import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineRotateLeft, AiOutlineRotateRight } from 'react-icons/ai';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const ImageViewer = ({ imageUrl }) => {
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const imageRef = useRef();

    const handleZoomIn = () => {
        setZoom((prevZoom) => prevZoom + 0.1);
    };

    const handleZoomOut = () => {
        setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
    };

    const handleRotateLeft = () => {
        setRotation((prevRotation) => (prevRotation - 90) % 360);
    };

    const handleRotateRight = () => {
        setRotation((prevRotation) => (prevRotation + 90) % 360);
    };

    const handleMove = (x, y) => {
        const image = imageRef.current;
        if (image) {
            const newPositionX = image.offsetLeft + x;
            const newPositionY = image.offsetTop + y;
            image.style.left = `${newPositionX}px`;
            image.style.top = `${newPositionY}px`;
        }
    };

    return (
        <div className='bg-satu p-2 rounded-2xl'>
            <div className='p-2'>
                <button onClick={handleZoomIn} className='text-4xl mx-2'>
                    <AiOutlineZoomIn />
                </button>
                <button onClick={handleZoomOut} className='text-4xl mx-2'>
                    <AiOutlineZoomOut />
                </button>
                <button onClick={handleRotateLeft} className='text-4xl mx-2'>
                    <AiOutlineRotateLeft />
                </button>
                <button onClick={handleRotateRight} className='text-4xl mx-2'>
                    <AiOutlineRotateRight />
                </button>
                <button onClick={() => handleMove(-30, 0)} className='text-4xl mx-2'>
                    <AiOutlineArrowLeft />
                </button>
                <button onClick={() => handleMove(30, 0)} className='text-4xl mx-2'>
                    <AiOutlineArrowRight />
                </button>
                <button onClick={() => handleMove(0, -30)} className='text-4xl mx-2'>
                    <AiOutlineArrowUp />
                </button>
                <button onClick={() => handleMove(0, 30)} className='text-4xl mx-2'>
                    <AiOutlineArrowDown />
                </button>
            </div>
            <div
                className='mx-auto'
                style={{
                    position: 'relative', // Add position relative to enable moving
                    overflow: 'hidden',
                    width: '500px', // Adjust the width and height according to your needs
                    height: '500px',
                }}
            >
                <img
                    ref={imageRef}
                    src={imageUrl}
                    alt="Image"
                    style={{
                        position: 'absolute', // Position absolute to enable moving
                        width: `${zoom * 100}%`,
                        height: `${zoom * 100}%`,
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: 'center',
                    }}
                />
            </div>
        </div>
    );
};

export default ImageViewer;
