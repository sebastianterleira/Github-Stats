import styled from "@emotion/styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Text = styled("p")`
  cursor: pointer;
`;

function PaginateNav({ profile, onPage, page }) {
  const number = Math.ceil(profile.followers / 6);
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const arr =
    page > number-4 ? range(number-4, number, 1) : range(page, page+4, 1);

  function chevronleft() {
    onPage(page - 1);
  }

  function chevronright() {
    onPage(page + 1);
  }

  return (
    <Wrapper>
      <FaChevronLeft onClick={chevronleft} />
      {arr.map((el, index) => (
        <Text
          key={`el${index}`}
          onClick={(event) => onPage(Number(event.target.textContent))}
        >
          {el}
        </Text>
      ))}
      <FaChevronRight onClick={chevronright} />
    </Wrapper>
  );
}

export default PaginateNav;
