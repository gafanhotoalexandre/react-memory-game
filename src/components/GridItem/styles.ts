import styled from 'styled-components';

interface ContainerProps {
  showBackground: boolean;
}

export const Container = styled.section<ContainerProps>`
  background-color: ${props => props.showBackground ? 'var(--primary-blue-color)' : 'var(--primary-color-gray)'};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer
`;

interface IconProps {
  opacity?: number;
}

export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ?? 1};
`;
