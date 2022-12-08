import { Content } from '../Сontent/Content';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <Content>
        <div>{/* logo */}</div>
        <nav>
          <a href="" className=""></a>
          <a href="" className=""></a>
          <a href="" className=""></a>
          <a href="" className=""></a>
          <a href="" className=""></a>
        </nav>
      </Content>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header``;
