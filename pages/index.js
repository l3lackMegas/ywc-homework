import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Header from '../components/Header'
import Banner from '../components/Banner'
import ContainerRegister from '../components/ContainerRegister'
import ContainerDetail from '../components/ContainerDetail'
import BoxTAT from '../components/BoxTAT'
import BoxKTC from '../components/BoxKTC'
import Footer from '../components/Footer'
const Index = props => (
    <div>
        <Head>
            <title>ลงทะเบียนเข้าร่วมมาตรการ ชิมช้อปใช้</title>
            <link href="/static/css/styles.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Header data={props.navItem}/>
        <Banner />
        <ContainerRegister data={props.jsonData}/>
        <ContainerDetail data={props.jsonData}/>
        <BoxTAT />
        <BoxKTC />
        <Footer data={props.navItem}/>
    </div>
  )

Index.getInitialProps = async function() {
    const res = await fetch('https://panjs.com/ywc.json');
    const data = await res.json();
  
    return {
        navItem: data.navbarItems,
        jsonData: data,
        test: "asd"
    };
};
  
export default Index