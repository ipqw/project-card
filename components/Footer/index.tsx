import styled from 'styled-components';
import { Content } from '../Сontent';
import { observer } from 'mobx-react';
import { store } from '../../store';
import { ContactForm } from '../ContactForm';
import { useState } from 'react';
import React from 'react';

export const Footer = observer(() => {
  const [formState, setFormState] = useState(false);

  return (
    <>
      <FooterWrapper
        style={{
          backgroundColor: store.theme ? 'rgba(255, 255, 255, 0.1)' : '#f5f5f5'
        }}
      >
        <FooterContent>
          <DateParagraph>
            {store.lang
              ? 'Время создания проекта: '
              : 'Project creation time: '}
            {store.createTime}
          </DateParagraph>
          <ContactUsButton
            type="button"
            onClick={() => setFormState(!formState)}
          >
            {store.lang ? 'Написать нам' : 'Contact us'}
          </ContactUsButton>
        </FooterContent>
      </FooterWrapper>
      {formState ? (
        <ContactForm
          close={() => {
            setFormState(false);
          }}
        />
      ) : (
        ''
      )}
    </>
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

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  @media (max-width: 1280px) {
    justify-content: space-between;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const FooterWrapper = styled.footer`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  background-color: #ebecf0;
  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ContactUsButton = styled.button`
  background: transparent;
  border-radius: 2px;
  padding: 5px 50px;
  border: 1px solid grey;
  color: grey;
`;
