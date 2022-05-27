import styled from 'styled-components';

export const Container = styled.section`
  width: 200px;
  height: 50px;
  display: flex;
  background-color: var(--primary-blue-color);
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease .2s;

  &:hover {
    opacity: .8;
  }
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, .2);
  padding: 0 15px;
`;

export const Icon = styled.img`
  height: 20px;
`;

export const Label = styled.div`
  height: inherit;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
