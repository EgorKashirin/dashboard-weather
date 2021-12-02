import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ isOpen: boolean }>`
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

export const PlaceholderWrapper = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #2c2c2c;
  opacity: 0.5;
`;

export const SelectedLabel = styled.div`
  color: #2c2c2c;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export const ListItems = styled.div`
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

export const ListItem = styled.div`
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

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
