import { LocationCard } from './LocationCard';
import { Content } from '../Content';
import styled from 'styled-components';
import { store } from 'store';
import { observer } from 'mobx-react';

export const Locations = observer(() => {
  const members = store.members;
  let color = store.theme ? 'white' : 'black';

  return (
    <LocationsContent>
      <h1 style={{ color: color }}>{store.lang ? 'Адреса' : 'Addresses'}</h1>
      <Container>
        {members.map(({ location, name }, i) => (
          <LocationCard key={i} location={location} name={name} />
        ))}
      </Container>
    </LocationsContent>
  );
});
const LocationsContent = styled(Content)`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
