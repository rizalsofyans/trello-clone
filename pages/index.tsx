import Head from "next/head";
import { Inter } from "@next/font/google";

import { AppContainer } from "../styles/style";
import { Column } from "../components/Column";
import { AddNewItem } from "../components/AddNewItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <AppContainer>
          <Column text="Todo: " />
          <AddNewItem
            toggleButtonText="+ Add another list"
            onAdd={console.log}
          />
        </AppContainer>
      </main>
    </>
  );
}
