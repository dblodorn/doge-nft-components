import { Story, Meta } from "@storybook/react";
import { NFTFullPage } from "../nft-full/NFTFullPage";
import { MediaConfiguration } from "../context/MediaConfiguration";
import { Networks, Strategies } from "@zoralabs/nft-hooks";

export default {
  title: "Renderer/NFTFull",
  component: NFTFullPage,
} as Meta;

const strategy = new Strategies.ZDKFetchStrategy(Networks.MAINNET);

const Template: Story<typeof NFTFullPage> = (args) => {
  // const strategy = new Strategies.ZDKAlphaFetchStrategy('1', 'https://api.zora.co/graphql');
  return (
  <MediaConfiguration
    networkId={(args as any).testnet ? Networks.RINKEBY : Networks.MAINNET}
    strategy={strategy}
  >
    {/* @ts-ignore */}
    <NFTFullPage {...args}/>
  </MediaConfiguration>
  );
};

export const Image = Template.bind({});
Image.args = {
  id: "3366",
  contract: "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7",
  config: {
    showPerpetual: false,
  },
  refreshInterval: 0,
};


