import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { store } from '../../store';
import { ProjectCard } from '../ProjectCard';

export const Projects = observer(() => {
  useEffect(() => {
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
      })
      .catch(res => console.error(res));
  });

  useEffect(() => {
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang,
          datatype: 'projects'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setProjects(data.data);
      })
      .catch(res => console.error(res));
  });

  return (
    <ProjectsWrapper>
      {store.projects.map((project, i) => {
        return <ProjectCard project={project} key={i} />;
      })}
    </ProjectsWrapper>
  );
});

const ProjectsWrapper = styled(Content)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
  grid-auto-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  --spacing: 20px;
  margin-top: calc(100px + var(--spacing));
  @media (max-width: 580px) {
    margin-top: calc(120px + var(--spacing));
  }

  @media (max-width: 375px) {
    margin-top: calc(150px + var(--spacing));
  }
`;
