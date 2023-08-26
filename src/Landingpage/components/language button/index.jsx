import React, { useState } from "react";
import "./style.css"; // Import your CSS file

const Language = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className={`language-container ${isDropdownOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown}>
                {selectedLanguage}
            </button>
            {isDropdownOpen && (
                <div className={`dropdown ${isDropdownOpen ? 'visible' : ''}`}>
                    <button onClick={() => selectLanguage("English")}>English</button>
                    <button onClick={() => selectLanguage("Arabic")}>Arabic</button>
                </div>
            )}
        </div>
    );
}

export default Language;
