import "../styles/pagination.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useTheme } from "../contexts/theme";


function Pagination({pages, setPages, tabData}) {

    const { theme } = useTheme();

  const handleNext = () => {
    setPages(pages + 1);
  };
  const handlePrevious = () => {
    setPages(pages - 1);
  };

  return (
    <div>
      {pages > 1 && <button className={`btn-pagination ${theme}`}>
        <FaArrowAltCircleLeft className="btn-arrow" onClick={handlePrevious} />
      </button>}
      {pages < tabData.length -1 && <button className={`btn-pagination ${theme}`}>
        <FaArrowAltCircleRight className="btn-arrow" onClick={handleNext} />
      </button>}
    </div>
  );
}

export default Pagination;
