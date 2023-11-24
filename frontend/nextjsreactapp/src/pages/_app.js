import '../style/global.css'
import 'bootstrap/dist/css/bootstrap.css'

import Layout from "components/Layout/Layout";
import SSRProvider from 'react-bootstrap/SSRProvider';

const App = ({Component, pageProps}) => {
    return ( 
      <SSRProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </SSRProvider>
    );
  }
  
  export default App;
  