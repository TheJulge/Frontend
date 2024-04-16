const range = (size: number, start: number) => {
  return Array(size)
    .fill(start)
    .map((x, y) => x + y);
};

// 모든 페이지를 5개(limitCount)씩 그룹지은 배열 생성하기 위한 함수
const createPagesGroupList = (
  totalPageCount: number,
  limitPageCount: number,
) => {
  const totalPagesGroupList = range(totalPageCount, 1);
  const pagesGroupList = [];
  for (let i = 0; i < totalPagesGroupList.length; i += limitPageCount) {
    pagesGroupList.push(totalPagesGroupList.slice(i, i + limitPageCount));
  }
  return pagesGroupList;
};

// 현재 페이지가 속한 그룹의 index를 구하기 위한 함수
const getCurrentGroupIndex = (currentPage: number, limitPageCount: number) => {
  return Math.ceil(currentPage / limitPageCount) - 1;
};

const usePagination = ({
  totalPageCount,
  limitPageCount,
  currentPage,
  onChange,
}: UsePaginationArgs) => {
  const pagesGroupList = useRef<number[][]>(
    createPagesGroupList(totalPageCount, limitPageCount),
  );
  const currentGroupIndex = useRef<number>(
    getCurrentGroupIndex(currentPage, limitPageCount),
  );
  const [pages, setPages] = useState<number[]>(
    pagesGroupList.current[currentGroupIndex.current],
  );

  const isFirstGroup = currentGroupIndex.current === 0;
  const isLastGroup =
    currentGroupIndex.current === pagesGroupList.current.length - 1;
};
