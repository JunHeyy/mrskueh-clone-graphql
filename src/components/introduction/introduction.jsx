import React from 'react';
import IntroductionContent from './introduction-content'

const Introduction = () => {
    return (
        <div className="relative w-full min-h-[600px] bg-white flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://storage.googleapis.com/atlas-core-active-storage/l044m8w1hhqfxxh0bebqnnurqoko"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>


            <IntroductionContent />
        </div>
    );
};

export default Introduction;