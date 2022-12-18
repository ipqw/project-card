import YandexMap from 'components/YandexMap';
import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import gh from '../../assets/icons/gh.svg';
import tg from '../../assets/icons/tg.svg';
import defaultAvatar from '../../assets/images/default-avatar.jpg';
import { store } from '../../store';
import { IMember } from '../../types';

type IProps = {
  member: IMember | undefined;
};

export const MemberCardLarge = observer((props: IProps) => {
  const router = useRouter();
  const member = props.member;
  const lang = useLang();
  let color = store.isDark ? 'white' : 'black';

  if (member === undefined) {
    return <p style={{ color: color }}>{lang.notMemberError}</p>;
  }

  return (
    <MemberCardWrapper onClick={() => router.push(`/members/${member.id}`)}>
      <MemberMedia>
        <Image src={defaultAvatar} priority alt="" height={250} />
        <Title>{lang.meOnMap}</Title>
        <YandexMap location={member.location}></YandexMap>
      </MemberMedia>
      <MemberData>
        <MemberName>{member.name}</MemberName>
        <MemberDesc>{member.description}</MemberDesc>
        <MemberContacts>
          <Title>{lang.myContacts}</Title>
          <Link href={member.github}>Github: {member.github}</Link>
          <Link href={'https://t.me/' + member.telegram.slice(1)}>
            Telegram: {member.telegram}
          </Link>
        </MemberContacts>
        <MemberStackWrapper>
          <Title>{lang.myStack}</Title>
          <MemberStack>{member.stack.join(', ')}</MemberStack>
        </MemberStackWrapper>
      </MemberData>
    </MemberCardWrapper>
  );
});

const Title = styled.span`
  font-size: 2em;
  font-weight: 700;
`;

const MemberCardWrapper = styled.div`
  height: 500px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #f5f5f5;
  overflow: hidden;
  color: 'black';
`;

const MemberMedia = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MemberData = styled.div`
  width: 45%;
  height: 100%;
  padding: 1em 0;
  gap: 1em;
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.span`
  font-size: 3em;
  font-weight: 700;
`;

const MemberDesc = styled.span`
  margin-top: 0.5em;
`;

const MemberContacts = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberStackWrapper = styled.div``;

const MemberStack = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 0.5em;
  color: #888;
`;
