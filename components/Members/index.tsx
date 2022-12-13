import styled from 'styled-components';
import { Content } from '../Сontent';
import { observer } from 'mobx-react';
import { MemberCard } from '../MemberCard';
import { store } from '../../store';
import { IMember } from '../../types';
import { members } from '../../mock/mock';
import { useState } from 'react';

export const Members = observer(() => {
  const [data, setData] = useState(Array<IMember>);

  let color;
  if (store.Theme) {
    color = 'white';
  } else {
    color = 'black';
  }

  fetch('http://fakeapi.com')
    .then(res => {
      // pass
    })
    .catch(res => {
      const mock = members;
      if (store.Lang == true) {
        setData(mock.ru);
      } else {
        setData(mock.en);
      }
    });

  return (
    <Container>
      <SectionTitle style={{ color: color }}>
        {store.Lang ? 'Наша команда' : 'Our team'}
      </SectionTitle>
      <MembersWrapper>
        {data.map((member, i) => (
          <MemberCard member={member} />
        ))}
      </MembersWrapper>
    </Container>
  );
});

const Container = styled(Content)`
  width: 100vw;
`;

const MembersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionTitle = styled.h1`
  text-align: left;
`;
