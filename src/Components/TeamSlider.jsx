import React, { useState, useEffect } from "react";


function TeamSlider({team,size}) {

    const [currentImage, setCurrentImage] = useState(0);
    const handleScroll = (event) => {
        setCurrentImage(event.target.scrollLeft);
    };

    return (
        <div className="overflow-x-auto whitespace-nowrap scroll-wheel">
            <div className="flex gap-[1rem]" style={{ width: team.length * size }}>
                {team.map((image, index) => (
                    <div key={index} className="relative w-[18.75rem] h-fit m-1">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className=" mr-3 object-contain"
                        />
                        <p className="font-roboto text-base font-medium mt-[1rem] text-center">
                            {image.name}
                        </p>
                        <p className="font-sans text-sm font-normal text-center">
                            {image.role || ''}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default TeamSlider;