import { useMemo } from "react";

export const DOTS = "...";

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  siblingCount = 1,
  currentPage,
  totalPagesCount,
  viewportWidth,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 2;
    if (totalPageNumbers >= totalPagesCount) {
      return range(1, totalPagesCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPagesCount
    );
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPagesCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPagesCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount =
        viewportWidth < 767 ? 2 + 2 * siblingCount : 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPagesCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount =
        viewportWidth < 767 ? 2 + 2 * siblingCount : 3 + 2 * siblingCount;
      const rightRange = range(
        totalPagesCount - rightItemCount + 1,
        totalPagesCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange =
        viewportWidth < 767
          ? range(leftSiblingIndex, rightSiblingIndex)
          : range(
              leftSiblingIndex - siblingCount,
              rightSiblingIndex + siblingCount
            );
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [siblingCount, totalPagesCount, currentPage, viewportWidth]);

  return paginationRange;
};
