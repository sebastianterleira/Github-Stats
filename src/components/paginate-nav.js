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
  let number = profile.followers / 7;
  const arr = Array.from({ length: number }, (_, i) => i + 1);

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
