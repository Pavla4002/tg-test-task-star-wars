import styles from './index.module.scss';

interface PaginationProps {
    currentPage: number;
    itemsPerPage: number;
    charactersLength: number;
    setCurrentPage: (currentPage: number) => void;
}

const Pagination = (props : PaginationProps) => {
    const {currentPage, itemsPerPage, charactersLength, setCurrentPage} = props;

    const countPages = charactersLength%itemsPerPage!==0? Math.trunc(charactersLength/itemsPerPage)+1 : charactersLength/itemsPerPage;
    const handleNextPage = () => {
        if (currentPage * itemsPerPage < charactersLength) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={styles.paginationBox}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                <p> {'<'} Prev</p>
            </button>
            <div className="">
                <p>{currentPage} / {countPages}</p>
            </div>
            <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= charactersLength}>
               <p>Next {'>'}</p>
            </button>
        </div>
    );
}

export default Pagination;