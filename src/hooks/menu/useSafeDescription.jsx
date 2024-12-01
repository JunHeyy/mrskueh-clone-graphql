import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const useSafeDescription = ({ htmlContent }) => {
    const sanitizedContent = DOMPurify.sanitize(htmlContent);
    return <div className="text-sm text-gray-600 mb-4 flex-grow">{parse(sanitizedContent)}</div>;
};

export default useSafeDescription