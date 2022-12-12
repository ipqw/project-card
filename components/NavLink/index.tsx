import Link from 'next/link';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { store } from '../../store';
import { useRouter } from 'next/router';

const LinkStyled = styled.a<{ active?: boolean }>`
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

const NavLink = observer((props: { href: string; name: string; active?: boolean }) => {
  const router = useRouter()
  let color
  if(store.theme){
    color = 'white'
  }
  else{
    color = 'black'
  }
  const click = () => {
    router.push(props.href)
  }
  return (
    <p className='clickable' onClick={click}>
      <LinkStyled style={{color: color}} className="mx-2" active={props.active}>
        {props.name}
      </LinkStyled>
    </p>
  );
})

export default NavLink;
