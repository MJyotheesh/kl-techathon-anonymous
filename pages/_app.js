import '../styles/globals.css'
require("./index.scss");
require("../styles/explore.css");
require("../styles/toolbar.css")
import 'antd/dist/antd.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import AppRoute from './app_route';

function MyApp({ Component, pageProps }) {
  return <AppRoute Component={Component} pageProps={pageProps} />
}

export default MyApp
