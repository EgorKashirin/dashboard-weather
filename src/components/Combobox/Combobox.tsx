import React, { FC, useRef, useState } from "react";
import { Wrapper, PlaceholderWrapper, SelectedLabel, ListItems, ListItem, Icon } from "./Combobox.style";
import { useOnClickOutside } from "hooks/useOnClickOutside";

interface ComboboxProps {
  selectedItem: string | string[];
  onChange: (_: string | number) => void;
  items: { value: string; label: string; country: string }[];
  placeholder: string;
}

export const Combobox: FC<ComboboxProps> = ({ selectedItem = "", onChange, items = [], placeholder = "" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const refCombobox = useRef<HTMLDivElement>(null);

  useOnClickOutside(refCombobox, () => setIsOpen(false));

  const getTitleSelected = () => {
    if (items.length > 0) {
      return items.find(({ value }) => value === selectedItem).label;
    } else {
      return "";
    }
  };

  const changeItem = (value: string | number) => {
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
