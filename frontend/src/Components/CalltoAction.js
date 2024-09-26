import React from "react";

const CallToAction = () => {
    // Function to handle the call action when button is clicked
    const handleCall = () => {
        window.location.href = "tel:+4529170335";
    };

    return (
        <section className="bg-gray-500 text-white text-center py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">
                    Still Have Some Questions Left?
                </h2>
                <p className="text-xl mb-6 font-bold">
                    Call us for a Free Consultation at <span className="text-white">📞</span> +45 2917 0335
                </p>
                <button
                    onClick={handleCall}
                    className="bg-white text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                    📞 Order a free call
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
