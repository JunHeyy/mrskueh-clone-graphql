import './App.css';
import { useEffect } from 'react';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_MENU } from './apollo/graphql/queries/get-menu';
import { GET_OPENING_HOURS } from './apollo/graphql/queries/get-openinghours';
import { GET_CONFIG } from './apollo/graphql/queries/get-config';
import Introduction from './components/introduction/introduction'
import { GET_BANNER } from './apollo/graphql/queries/get-banner';
import Navbar from './components/navbar/navbar'
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

import Menu from './components/menu/menu'
import Footer from './components/footer/footer'


function App() {
  const client = useApolloClient();
  const { data: menuData, loading: menuLoading } = useQuery(GET_MENU);
  const { data: openingHoursData, loading: openingHoursLoading } = useQuery(GET_OPENING_HOURS);
  const { data: configData, loading: configLoading } = useQuery(GET_CONFIG);
  const { data: bannerData, loading: bannerLoading } = useQuery(GET_BANNER);

  useEffect(() => {
    client.cache.reset().then(() => {
      client.query({ query: GET_CONFIG });
    });
  }, [client]);

  if (menuLoading) return <div>Loading menu...</div>;

  return (
    <div className="App bg-white min-h-screen">
      <Navbar />
      <Introduction />
      <Menu menuData={menuData} />
      <Footer />
    </div>
  );
}
export default App;