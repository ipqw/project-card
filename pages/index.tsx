// import styled from 'styled-components';
import { Members } from '../components/Members';
import { Locations } from 'components/Locations';
import { Page } from 'components/Page';
import Head from 'next/head';

export default function Home() {
  return (
    <Page>
      <Members />
      <Locations />
    </Page>
  );
}
