import { nanoid } from "nanoid";
import { usePagination, DOTS } from "hooks/usePagination";
import useWindowSize from "hooks/useWindowSize";

import {
  PaginationButton,
  PaginationContainer,
  ArrowLeft,
  ArrowRight,
  PaginationList,
} from "./pagination.styled";

const Pagination = ({
  onPageChange,
  siblingCount = 1,
  currentPage,
  totalPagesCount,
}) => {
  const [viewportWidth] = useWindowSize();
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPagesCount,
    viewportWidth,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <PaginationList>
        {currentPage === 1 ? (
          ""
        ) : (
          <li key="prev">
            <PaginationButton
              key={nanoid()}
              className={currentPage === 1 && "disabled"}
              onClick={onPrevious}
              aria-label="Previous page"
            >
              <ArrowLeft key={"left"} />
            </PaginationButton>
          </li>
        )}
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return viewportWidth < 400 ? (
              ""
            ) : (
              <li key={nanoid()}>
                <PaginationButton key={nanoid()} className="dots">
                  {DOTS}
                </PaginationButton>
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <PaginationButton
                key={nanoid()}
                className={pageNumber === currentPage && "selected"}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationButton>
            </li>
          );
        })}
        {currentPage === lastPage ? (
          ""
        ) : (
          <li key="next">
            <PaginationButton
              key={nanoid()}
              className={currentPage === lastPage && "disabled"}
              onClick={onNext}
              aria-label="Next page"
            >
              <ArrowRight key={"right"} />
            </PaginationButton>
          </li>
        )}
      </PaginationList>
    </PaginationContainer>
  );
};

export default Pagination;
