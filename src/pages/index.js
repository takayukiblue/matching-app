import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import { Stack } from '@mui/system';
import { Button, Container, Link } from '@mui/material';
Amplify.configure(awsExports);

const inter = Inter({ subsets: ['latin'] });

function Home({ signOut, user }) {
  return (
    <>
      <Head>
        <title>マッチングアプリ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Image
                src="/images/site_logo.png"
                width={271}
                height={64}
                alt="Site Logo"
              />
              <Link href="#" underline="hover">
                ○○市に移住したい
              </Link>
              <Link href="#" underline="hover">
                ○○市を紹介したい
              </Link>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Link href="#" underline="none">
                ログイン
              </Link>
              <Button variant="contained">会員登録</Button>
            </Stack>
          </Stack>
        </header>
      </Container>
      <hr />
      <Container>
        <main>
          <div>
            {user ? (
              <>
                <h3>私は権限を持っています: {user.username}</h3>
                <button onClick={signOut}>Sign Out</button>
              </>
            ) : (
              <h3>権限が有りません</h3>
            )}
          </div>
        </main>
      </Container>
    </>
  );
}

export default withAuthenticator(Home);
