import { useEffect } from 'react';

export default function useStateWithHistory(initialValue) {
    let currentValue = initialValue;
    let currentIndex = 0;
    const history = [initialValue];

    useEffect(() => {
        updateCurrentValue();
        console.log("useEffect executed");
    }, [currentIndex])

    function updateCurrentValue() {
        currentValue = history[currentIndex];
    }

    function setValue(newValue) {
        // Append new value to the end of the array
        history.push(newValue);
        // Set the index to the new value's index
        currentIndex = history.length - 1;
    }

    function goBack() {
        // Confirm that we have not reached the beginning of the array
        if(currentIndex === 0) return;
        // If not at the beginning, decrease index by one
        currentIndex--;
    }

    function goForward() {
        if(currentIndex === history.length - 1) return;
        currentIndex++;
    }

    return [currentValue, setValue, goBack, goForward, history];
}; 