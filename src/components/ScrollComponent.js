import React, { useState, useEffect } from 'react';

const Scroll = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    const checkScrollBottom = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomPosition = document.documentElement.offsetHeight;
        
        if (scrollPosition + 5 < bottomPosition) {
            setShowScrollIndicator(true);
        } else {
            setShowScrollIndicator(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollBottom);
        return () => window.removeEventListener('scroll', checkScrollBottom);
    }, []);

    return (
        <>
            {showScrollIndicator && (
                <div className="fixed bottom-10 right-2 transform -translate-x-1/2 z-50 bg-opacity-50 bg-deepBlue text-white px-4 py-2 rounded-full shadow-lg ">
                    Scroll
                </div>
            )}
        </>
    );
};

export default Scroll;
