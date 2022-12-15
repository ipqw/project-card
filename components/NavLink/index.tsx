import Link from 'next/link';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { store } from '../../store';
import { useRouter } from 'next/router';

const LinkStyled = styled.a<{ active?: boolean }>`
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

const NavLink = observer((props: { href: string; name: string }) => {
  const router = useRouter();
  let color = store.theme ? 'white' : 'black';

  return (
    <Link href={props.href} passHref legacyBehavior>
      <LinkStyled
        style={{ color: color }}
        className="mx-2"
        active={router.asPath === props.href}
      >
        {props.name}
      </LinkStyled>
    </Link>
  );
});

export default NavLink;
