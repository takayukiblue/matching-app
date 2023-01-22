import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Stack } from '@mui/system';
import { Box, Button, Container, Link } from '@mui/material';

// import awsExports from '../aws-exports';
// Amplify.configure(awsExports);

const inter = Inter({ subsets: ['latin'] });

// function Home({ signOut, user }) {
function Home() {
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
            sx={{ height: 50 }}
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
                height={48}
                alt="Site Logo"
              />
              <Link href="#" underline="always" color="inherit">
                上越市に移住したい
              </Link>
              <Link href="#" underline="always" color="inherit">
                上越市を紹介したい
              </Link>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              {/* {user ? (
                <Button variant="text">サインアウト</Button>
              ) : (
                <Button variant="text">サインイン</Button>
              )} */}
              <Button variant="text">サインイン</Button>
              <Button variant="contained">会員登録</Button>
            </Stack>
          </Stack>
        </header>
      </Container>
      <hr />
      <Container maxWidth="xl">
        <main>
          <div>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <h1>キャッチコピー</h1>
              {/* <Image
                src="/images/landing_image.png"
                width={1024}
                height={418}
              /> */}
              <Box
                component="img"
                sx={{
                  width: '70%',
                  backgroundColor: 'white',
                }}
                src="/images/landing_org.png"
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={5}
              sx={{ height: 80 }}
            >
              <Button
                variant="contained"
                sx={{ width: 300, height: 50, fontSize: 18 }}
              >
                今すぐ会員登録する
              </Button>
              <Button
                variant="contained"
                sx={{ width: 300, height: 50, fontSize: 18 }}
                color="success"
              >
                移住を検討したい方はこちら
              </Button>
              <Button
                variant="contained"
                sx={{ width: 300, height: 50, fontSize: 18 }}
                color="warning"
              >
                上越市を紹介したい方はこちら
              </Button>
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <h2>お住まい探しはこちら</h2>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/condo_1.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/condo_2.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/condo_3.png"
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/apartment_1.png"
                  ></Box>
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/apartment_2.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/apartment_3.png"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ marginTop: 5 }}
            >
              <h2>お仕事探しはこちら</h2>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/job_1.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/job_2.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/job_3.png"
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/job_4.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/job_5.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/job_6.png"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ marginTop: 5 }}
            >
              <h2>上越市の魅力を発見</h2>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/feature_1.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/feature_2.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/feature_3.png"
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/feature_4.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/feature_5.png"
                  />
                  <Box
                    component="img"
                    sx={{
                      width: 300,
                      height: 200,
                      backgroundColor: 'primary.dark',
                    }}
                    src="/images/feature_6.png"
                  />
                </Stack>
              </Stack>
            </Stack>
          </div>
        </main>
      </Container>
      <footer>
        <Box
          sx={{
            width: '100%',
            height: 50,
            backgroundColor: 'primary.dark',
            color: 'white',
            fontSize: 12,
            marginTop: 5,
          }}
        >
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <div>Copyright &copy; あさがおドットコム All Rights Reserved.</div>
            <div>上越 愛&nbsp;&nbsp;&nbsp;あさがおドットコム</div>
          </Stack>
        </Box>
      </footer>
    </>
  );
}

// export default withAuthenticator(Home);
export default Home;
