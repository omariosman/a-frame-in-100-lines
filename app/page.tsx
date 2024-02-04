import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Visit FuzeX',
      action: 'post_redirect',
    },
  ],
  image: `https://purple-regulatory-iguana-790.mypinata.cloud/ipfs/QmToYdfQP5a9iE8RvTQdKAp2SnhqqTJL71nubYYeGBJTeZ`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'fuzex.io',
  description: 'Activity platform that enables ticketing and membership',
  openGraph: {
    title: 'fuzex.io',
    description: 'Activity platform that enables ticketing and membership',
    images: [`https://purple-regulatory-iguana-790.mypinata.cloud/ipfs/QmToYdfQP5a9iE8RvTQdKAp2SnhqqTJL71nubYYeGBJTeZ`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>fuzex.io</h1>
    </>
  );
}
