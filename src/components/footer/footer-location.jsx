const FooterLocation = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-red-500 text-2xl font-bold mb-4">Find us</div>
            <div className="text-gray-600 text-center">
                <p>YWCA Fort Canning #01-02,</p>
                <p>6 Fort Canning Rd,</p>
                <p>Singapore 179494</p>
                <p className="mt-2">
                    <a href="tel:+6569096393" className="hover:text-red-500 transition-colors">
                        +65 6909 6393
                    </a>
                </p>
            </div>
        </div>
    );
};

export default FooterLocation