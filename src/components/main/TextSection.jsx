import { useState } from "react";
import { useNavigate } from "react-router";

export default function TextSection() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        const newValue = e.target.value;

        // Prevent negative input
        if (newValue === '' || Number(newValue) >= 0) {
            setValue(newValue);
        }
    };


    return (
        <div className="flex-1">
            <label htmlFor="nonNegative">Enter a number:</label>
            <input
                id="nonNegative"
                type="number"
                min="0"
                step="1"
                value={value}
                onChange={handleChange}
                placeholder="0"
            />
            <button
                onClick={() => navigate(`/termsandcondtions?caseId=${123}`)}
                className="cursor-pointer bg-mint-500 hover:bg-teal-800 text-white text-sm py-2 px-4 rounded-md font-medium"
            >
                Join Hearing
            </button>

             <div className="bg-transparent border border-[#CEB7FF] shadow-md w-32 h-1 outer-glow"></div>

             <div className=""></div>


        </div>)
}
