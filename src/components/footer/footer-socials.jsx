
const FooterSocials = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-red-500 text-2xl font-bold mb-4">SOCIAL</div>
            <a href="https://instagram.com/mrskueh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity" >
                <img
                    src="https://storage.googleapis.com/atlas-core-active-storage/uploads/icon_instagram.png"
                    alt="Instagram"
                    className="w-6 h-6"
                />
            </a>
        </div>
    );
};

export default FooterSocials