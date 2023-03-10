/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../styles";

const StyledInput = styled("input")`
  background: ${colors.white};
  border-radius: 4px;
  padding: 4px 8px;
  ::placeholder {
    color: ${colors.gray.light};
  }
  box-shadow: 2px 2px rgb(0 0 0 / 25%);
  border-radius: 4px;
  fill: #FFFFFF;
  outline: none;
  border-style: none;
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div>
      {label && <label htmlFor={id || name}>{label}</label>}
      <StyledInput css={css`
          display: flex;
          `}
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
