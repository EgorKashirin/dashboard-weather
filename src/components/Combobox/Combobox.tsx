import React, { FC, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useOnClickOutside } from "hooks/useOnClickOutside";

interface ComboboxProps {
  selectedItem: string | number;
  onChange: () => void;
  items: [{ value: string | number; label: number }];
  placeholder: string;
}

export const Combobox: FC<ComboboxProps> = ({ selectedItem = 2, onChange, items = [], placeholder = "" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const refCombobox = useRef<HTMLDivElement>();

  useOnClickOutside(refCombobox, () => setIsOpen(false));

  const getTitleSelected = () => {
    return items.find(({ value }) => value === selectedItem).label;
  };

  const changeItem = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Wrapper ref={refCombobox} onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen}>
      {placeholder.length > 0 && <PlaceholderWrapper>{placeholder}</PlaceholderWrapper>}
      <SelectedLabel>{getTitleSelected()}</SelectedLabel>
      <Icon>{isOpen ? "↑" : "↓"}</Icon>
      {isOpen && (
        <ListItems>
          {items.map(({ value, label }) => {
            return (
              <ListItem onClick={() => changeItem(value)} key={`ListItem=${value}`}>
                {label}
              </ListItem>
            );
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
  min-height: 40px;
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
  padding: 6px;
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

const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
