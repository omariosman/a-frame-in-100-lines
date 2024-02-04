import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (message?.button === 1) {
    return NextResponse.redirect(
      'https://fuzex.io',
      { status: 302 },
    );
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `🌲 Buy fuzex ticket now!`,
        },
      ],
      image: `https://purple-regulatory-iguana-790.mypinata.cloud/ipfs/QmToYdfQP5a9iE8RvTQdKAp2SnhqqTJL71nubYYeGBJTeZ`,
      post_url: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
