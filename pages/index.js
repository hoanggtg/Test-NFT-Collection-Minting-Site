import Head from "next/head"
import Bottom from "../components/Bottom"
import Header from "../components/Header"
import Welcome from "../components/Welcome"
export default function Home() {
    return (
        <div>
            <Head>
                <title>Testnet Minting Site</title>
                <meta name="description" content="Ethereum testnet minting site" />
                <link rel="icon" href="/Cjdowner-Cryptocurrency-Flat-Ethereum-ETH.ico" />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                    `,
                    }}
                />
                <script
                    async
                    src={process.env.NEXT_PUBLIC_GOOGLE_ADS}
                    crossorigin="anonymous"
                ></script>
            </Head>
            <Header />
            <Welcome />
            <Bottom />
        </div>
    )
}
