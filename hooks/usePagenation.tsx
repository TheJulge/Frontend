import { useCallback, useEffect, useState } from 'react';
interface usePaginationProps {
    totalPages: number;
    page : number
}
function usePagination({totalPages, page} : usePaginationProps) {
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);
    // 몇개씩 나눌껀지 정의
    const sliceNumber = 5;
    const handleSlicePage = useCallback(() => {
        const array = Array.from({ length: totalPages }, (_, i) => i + 1);
        //자른 페이지 넘버들을 넣는 변수
        const slice:number[][] = [];
        for (let i = 0; i < array.length; i += sliceNumber) {
            // 자르는 로직
            const sliceItem = array.slice(i, i + sliceNumber);
            // 자른 배열을 넣기
            slice.push(sliceItem);
        }
        for (const row of slice) {
            if (row.includes(page)) {
                setPageNumbers([...row]);
                break;
            }
        }
    }, [totalPages, page]);

    useEffect(() => {
        handleSlicePage();
    }, [page, handleSlicePage]);

    return {pageNumbers};
}

export default usePagination;