import { MemberCard } from 'components/MemberCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { store } from 'store';
import { useLang } from 'store/lang';
import { Page } from '../../components/Page';

export default function MemberPage() {
  const router = useRouter();
  const { memberId } = router.query;
  const lang = useLang();
  const [member, setMember] = useState();

  useEffect(() => {
    if (!memberId) {
      return;
    }
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang,
          datatype: 'members'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setMembers(data.data);
        //@ts-ignorets
        setMember(store.getMemberById(memberId));
      })
      .catch(res => console.error(res));
  }, [store.lang, memberId]);

  return (
    <Page>
      { member === undefined ? <p style={{color: 'white'}}>There is not member with same id!</p> : <MemberCard member={member}/> }
    </Page>
  );
}