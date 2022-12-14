import styled from 'styled-components';
import { Content } from '../Сontent';
import { observer } from 'mobx-react';
import { MemberCard } from '../MemberCard';
import { store } from '../../store';
import { IMember } from '../../types';
import { useEffect, useState } from 'react';

export const Members = observer(() => {
  const [data, setData] = useState(Array<IMember>);

  useEffect(() => {
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.Lang ? 'ru' : 'en',
          datatype: 'members'
        })
    )
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch(res => console.error(res));
  }, [store.Lang]);

  let color = store.Theme ? 'white' : 'black';

  return (
    <Container>
      <SectionTitle style={{ color: color }}>
        {store.Lang ? 'Наша команда' : 'Our team'}
      </SectionTitle>
      <MembersWrapper>
        {
          data.map((member, i) => (<MemberCard member={member} key={i}/>))
        }
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
