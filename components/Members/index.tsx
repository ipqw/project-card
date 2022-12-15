import styled from 'styled-components';
import { Content } from '../Content';
import { observer } from 'mobx-react';
import { MemberCard } from '../MemberCard';
import { store } from '../../store';
import { useEffect } from 'react';

export const Members = observer(() => {
  useEffect(() => {
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang ? 'ru' : 'en',
          datatype: 'members'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setMembers(data.data);
      })
      .catch(res => console.error(res));
  }, [store.lang]);

  const color = store.theme ? 'white' : 'black';
  return (
    <Content>
      <SectionTitle style={{ color: color }}>
        {store.lang ? 'Наша команда' : 'Our team'}
      </SectionTitle>
      <MembersWrapper>
        {store.members.map((member, i) => (
          <MemberCard member={member} key={i} />
        ))}
      </MembersWrapper>
    </Content>
  );
});

const MembersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  overflow-x: scroll;
  gap: 30px;

  &::-webkit-scrollbar {
    height: 5px;
    background-color: #eee;
    border-radius: 1px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #777;
  }

  @media screen and (min-width: 1300px) {
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

const SectionTitle = styled.h1`
  text-align: left;
  margin-top: 120px;
`;
