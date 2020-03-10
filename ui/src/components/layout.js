import Header from "./header";
import Footer from "./footer";
import "../styles/index.css";
import Head from 'next/head'

function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen font-sans leading-normal tracking-normal" suppressHydrationWarning={true}>
            <Head>
                <title>Server-Monitor</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className="bg-black-alt">
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
