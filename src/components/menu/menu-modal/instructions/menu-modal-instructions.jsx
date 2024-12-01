const MenuModalInstructions = () => (
    <div className="mt-auto">
        <div className="mt-2 mb-1 text-black font-medium">Special instructions</div>
        <textarea
            className="block w-full rounded-sm border-2 border-black p-2 text-black placeholder-gray-500 focus:outline-none bg-white focus:ring-1 focus:ring-black focus:border-black"
            placeholder="Let us know of any special requests, we will try our best to accommodate."
            maxLength={500}
            rows={2}
        />
    </div>
);

export default MenuModalInstructions