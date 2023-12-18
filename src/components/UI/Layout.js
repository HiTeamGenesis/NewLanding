import Nav from './Nav';
import Head from 'next/head';

const Layout = ({ title, children }) => {
  return (
    <div>
    <Head>
      <title>{`Génesis team | ${title}`}</title>
      <meta
      description="Genesis es un equipo multidisciplinario de estudiantes locos que participará en URC2023"
    />
    <meta property="og:title" content="Genesis Team - @hiteamgenesis" />
    <meta
      property="og:description"
      content="Genesis es un equipo multidisciplinario de estudiantes locos que participará en URC2023"
    />
    <meta property="og:url" content="http://www.hiteamgenesis.com" />
    <link rel="icon" href="/images/genesisWhite.jpg"/>
      <meta name="keywords" content="Genesis Team, Genesis, space, robs, UNAM, IPN, UAM" />
    </Head>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
