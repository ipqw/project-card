import styled from 'styled-components';
import { Content } from '../Сontent';
import { observer } from 'mobx-react';
import { store } from '../../store';

export const Footer = observer(() => {
  return (
    <FooterWrapper
      style={{
        backgroundColor: store.Theme ? 'rgba(255, 255, 255, 0.1)' : '#f5f5f5'
      }}
    >
      <FooterContent>
        <DateParagraph>
          {store.Lang ? 'Время создания проекта: ' : 'Project creation time: '}
          {store.createTime}
        </DateParagraph>
      </FooterContent>
    </FooterWrapper>
  );
});

const DateParagraph = styled.p`
  color: gray;
  span {
    color: #000;
  }
  @media (prefers-color-scheme: dark) {
    span {
      color: #fff;
    }
  }
`;
const FooterContent = styled(Content)`
  width: 1280px;
`;
const FooterWrapper = styled.footer`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ebecf0;
  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
