import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useOnClickOutside } from "hooks/useOnClickOutside";

export const Combobox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const items = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ];

  const refCombobox = useRef();

  useOnClickOutside(refCombobox, () => setIsOpen(false));

  return (
    <Wrapper ref={refCombobox} onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen}>
      <PlaceholderWrapper>Выберите город</PlaceholderWrapper>
      <SelectedLabel>Moscow</SelectedLabel>
      {isOpen && (
        <ListItems>
          {items.map(({ value, label }) => {
            return <ListItem key={`ListItem=${value}`}>{label}</ListItem>;
          })}
        </ListItems>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  min-width: 235px;
  width: 235px;
  height: 40px;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  padding: 0 10px;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  position: relative;

  &:hover {
    border: 1px solid gray;
  }

  ${(p) =>
    p.isOpen &&
    css`
      border: 1px solid #644ded;
      &:hover {
        border: 1px solid #644ded;
      }
    `}
`;

const PlaceholderWrapper = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #2c2c2c;
  opacity: 0.5;
`;

const SelectedLabel = styled.div`
  color: #2c2c2c;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

const ListItems = styled.div`
  width: 235px;
  min-height: 60px;
  max-height: 215px;
  border: solid 1px #e0e0e0;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #ffffff;
  z-index: 2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 6px;
`;

const ListItem = styled.div`
  width: 100%;
  height: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding: 0 8px;

  &:hover {
    background: rgba(93, 66, 255, 0.08);
    border-radius: 6px;
    color: #644ded;
  }
`;
