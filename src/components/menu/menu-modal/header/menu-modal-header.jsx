import useSafeDescription from "../../../../hooks/menu/useSafeDescription";


const MenuModalHeader = ({ label, description }) => {
    const SafeDescription = useSafeDescription;
    return (
        <div className="space-y-3">
            <div className="text-2xl font-display text-black">{label}</div>
            <SafeDescription htmlContent={description} />
        </div>
    );
};
export default MenuModalHeader