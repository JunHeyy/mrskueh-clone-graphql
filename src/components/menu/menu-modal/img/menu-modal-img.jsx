const MenuModalImage = ({ imageUrl, altText }) => (
    <div className="relative lg:overflow-hidden lg:w-1/2">
        <img
            src={imageUrl}
            alt={altText}
            className="object-cover h-64 lg:h-full w-full"
        />
    </div>
);
export default MenuModalImage