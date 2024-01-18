import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TeamCard from './TeamCard';

import ink_svg from "../images/ink.svg"
import dapp_svg from "../images/dapp.svg"
import github_svg from "../images/github-white.svg"

import avatar_arno from "../images/avatar_arno.jpg"
import avatar_guigou from "../images/avatar_guigou.png"

export function Content() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#202020' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    padding: 20,    
    color: theme.palette.text.secondary,
    fontSize: '1.1em',
    height: '100%'
  }));

  const Github = (props)=>{
    return <>
      <Box>
        <img style={{width:"25px", height:"25px", marginRight: "5px", verticalAlign: "bottom"}} src={github_svg}/>
        <a style={{fontSize:"0.9em"}} href={props.href}>Visit GitHub</a>
      </Box>
    </>
  }

  const Dapp = (props)=>{
    return <>
      <Box>
        <img style={{width:"25px", height:"25px", marginRight: "5px", verticalAlign: "bottom"}} src={dapp_svg}/>
        <a style={{fontSize:"0.9em"}} href={props.href}>Launch the dApp</a>
      </Box>
    </>
  }
  return <>
     <Grid container spacing={4}>
        <Grid item xs={12} >
          <Item>
            <p><Box display={"inline"} sx={{display:"block", maxWidth:{xs:"100px", sm:"150px"}}}><img src={ink_svg} style={{float:"left", padding:"0px 10px 0px 0", width: "100%"}}/></Box>Decentralized Oracle is an initiative to bring decentralized and trustless oracles for ink! smart contracts.
            Now that phat contracts are live on Khala and Phala Networks, we are able to provide decentralized oracles for 
            any ink! smart contracts deployed on the Polkadot ecosystem.</p>
            <p><span>The project have received <a href="https://github.com/use-inkubator/Ecosystem-Grants/blob/ad265cbba820b57495323cac955176f8cdc1c57d/applications/decentralized_oracles.md">a grant</a> from ink!ubator: Ecosystem Grants
            </span></p>
          </Item> 
        </Grid>
        <Grid item xs={12} md={4} >
          <Item>
            <h2><a href="/vrf">VRF (Verifiable Random Number)</a></h2>
            <h3>An Oracle to calculate a random number and use it in your Smart Contract</h3>
            <p>In this dApp you can provide a min and a max number and send a transaction to store your query in our Astar Smart Contract.
Behind the scene: 
Let you guide through the execution of the overall process which will use a Phat Contract to process the query, calculate a random number, and send back the result to the Astar Smart Contract, thus triggering an event with the result of your query</p> 
            <Box><Dapp href="/vrf" /></Box>
            <Box><Github href="https://github.com/decentralized-oracles/vrf" /></Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <h2><a href="/price-feed">Price Feed</a></h2>
            <h3>An Oracle to inject token pair prices intovite  your Smart Contract</h3>
            <p>The Phat contract sends a request to the CoinGecko API, fetches all the prices for the pairs set, and sends them to the Astar Smart Contract.The dApp will then query the Astar Smart Contract until the timestamp of the prices is higher than the query timestamp, and refresh the datas.</p>
            <Box><Dapp href="/price-feed" /></Box>
            <Box><Github href="https://github.com/decentralized-oracles/price-feed" /></Box>
          </Item>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Item>
            <h2><a href="/graph-api">Graph API</a></h2>
            <h3>An Oracle to get datas from an indexer and use them in a smart contract</h3>
            <p>This dApp demonstrates the ability of an ink! smart contract on Astar Network and a Phat Contract on Phala Network to interact with each other using Phat Offchain Rollup.
In this example we display values from Astar dApp Staking, stored in a SubQuery index</p>
            <Box><Dapp href="/graph-api"/></Box>
            <Box><Github href="https://github.com/decentralized-oracles/graph-api-oracle" /></Box>
          </Item>
        </Grid>
        
        <Grid item xs={12} >
          <Item>
            <h2>The team</h2>
            <p>Also know as "Team Lucky", Guigou and Arno are both passionated by web3 and have a strong desire to explore the all the possibilities offered by decentralized applications. you can find them in a lot of different places among the paraverse...</p>
            <p>They have developed the Lucky dApp (<a href="https://lucky.substrate.fi">https://lucky.substrate.fi</a>), a no-loss lottery built on top of dApp Staking in Astar Network.</p>
            <Box>
                <TeamCard 
                  name="Guigou"
                  title="Application architect"
                  avatar={avatar_guigou}
                  description="GuiGou is application architect in Web 2 and works more and more in web3. As a technical ambassador for Astar and ambassador for Phala, he promotes the ink! smart contracts via some tutorials (https://polkaverse.com/11143) and replies about the technical questions on ink! smart contracts via Astar's discord."
                  x="GuiGou12358"
                  discord="779385192812380221"
                  github="Guigou12358"
                  telegram="guigou12358"   
                />
       
                <TeamCard 
                  name="Arno"
                  title="Software engineer"
                  avatar={avatar_arno}
                  description="Arno is a software engineer and web developer. He is ambassador for Polkadot, Phala Network and Talisman Sentinel. his desire to build decentralized applications and his thirst for knowledge about web3 led him to travel many roads on the way to Dotsama, and to upgrade his skills with web3 development"
                  x="test_ut"
                  discord="705085891709894756"
                  github="arnobase"
                  telegram="arnobaze"   
                />
              </Box>
          </Item>
        </Grid>
      </Grid>
  </>
}