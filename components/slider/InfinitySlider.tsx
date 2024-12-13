
'use client';
import React, { useRef, useEffect } from 'react';

const InfinitySlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let isMouseDown = false;
        let startX: number;
        let scrollLeft: number;

        const startDragging = (e: MouseEvent) => {
            isMouseDown = true;
            slider.classList.add('cursor-grabbing');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const stopDragging = () => {
            isMouseDown = false;
            slider.classList.remove('cursor-grabbing');
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousedown', startDragging);
        slider.addEventListener('mouseleave', stopDragging);
        slider.addEventListener('mouseup', stopDragging);
        slider.addEventListener('mousemove', handleMouseMove);

        // Cleanup listeners on unmount
        return () => {
            slider.removeEventListener('mousedown', startDragging);
            slider.removeEventListener('mouseleave', stopDragging);
            slider.removeEventListener('mouseup', stopDragging);
            slider.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="flex items-center space-x-4 overflow-x-scroll scrollbar-none snap-x snap-mandatory"
            >
                {/* Slider Items */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[400px] h-[200px] md:h-[300px] bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg snap-center"
                    >
                        <h2 className="text-xl font-bold">Slide {index + 1}</h2>
                    </div>
                ))}
            </div>

            {/* Navigation (Optional) */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                <button className="hidden md:block bg-white text-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition pointer-events-auto">
                    &larr;
                </button>
                <button className="hidden md:block bg-white text-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition pointer-events-auto">
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default InfinitySlider;
