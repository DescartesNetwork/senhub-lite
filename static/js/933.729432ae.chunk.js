(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([[933,456],{55852:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var n=s(15190);const r={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},a={devnet:{...r,node:"https://api.devnet.solana.com",chainId:103,sntrAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",sntrPoolAddress:"3EUPL7YQLbU6DNU5LZeQeHPXTf1MigJ2yASXA9rH5Ku4",swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"},testnet:{...r,node:"https://api.testnet.solana.com",chainId:102,sntrAddress:"",sntrPoolAddress:"",swapAddress:"",taxmanAddress:""},mainnet:{...r,node:"https://solana-api.projectserum.com",chainId:101,sntrAddress:"SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M",sntrPoolAddress:"Aa3WZX7Xunfebp2MuAcz9CNw8TYTDL7mVrmb11rjyVm6",swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"}};const o="senhub",i={[o]:{url:"https://descartesnetwork.github.io/senhub/index.js",appId:o,name:"SenHub",author:{name:"Sentre",email:"hi@sentre.io"},supportedViews:"page,widget".split(",").map((e=>e.trim())).filter((e=>["page","widget"].includes(e))),tags:"solana,dapps".split(",").map((e=>e.trim())),description:"A sample project for Sentre developers",verified:!1}},d={development:{defaultAppId:o,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},staging:{defaultAppId:o,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},production:{defaultAppId:o,extra:{},senreg:"https://descartesnetwork.github.io/senreg/register.json"}},l={sol:a[n.ef],register:d[n.OB]}},18456:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AccountProvider:()=>k,MintProvider:()=>F,PoolProvider:()=>p,UIProvider:()=>d,WalletProvider:()=>y,useAccount:()=>I,useMint:()=>Q,usePool:()=>m,useUI:()=>u,useWallet:()=>v,withAccount:()=>j,withMint:()=>J,withPool:()=>w,withUI:()=>c,withWallet:()=>x});var n=s(92950),r=s(99019),a=s(87358),o=s(45263);const i=(0,n.createContext)({}),d=e=>{let{children:t,appId:s,style:d={},antd:l=!1}=e;const{ui:c}=(0,a.Qy)((e=>e)),u=(0,n.useMemo)((()=>({ui:c})),[c]),h=l?{getPopupContainer:()=>document.getElementById(s),..."object"===typeof l?l:{}}:void 0;return(0,o.jsx)(i.Provider,{value:u,children:(0,o.jsx)("section",{id:s,style:{height:"100%",backgroundColor:"transparent",...d},children:h?(0,o.jsx)(r.ConfigProvider,{...h,children:t}):t})})},l=e=>{let{children:t}=e;return(0,o.jsx)(i.Consumer,{children:e=>n.Children.map(t,(t=>(0,n.cloneElement)(t,{...e})))})},c=e=>{class t extends n.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,o.jsx)(l,{children:(0,o.jsx)(e,{ref:t,...s})})}}return(0,n.forwardRef)(((e,s)=>(0,o.jsx)(t,{...e,ref:s})))},u=()=>(0,n.useContext)(i),h=(0,n.createContext)({}),p=e=>{let{children:t}=e;const{pools:s}=(0,a.Qy)((e=>e)),r=(0,n.useMemo)((()=>({pools:s})),[s]);return(0,o.jsx)(h.Provider,{value:r,children:t})},f=e=>{let{children:t}=e;return(0,o.jsx)(h.Consumer,{children:e=>n.Children.map(t,(t=>(0,n.cloneElement)(t,{...e})))})},w=e=>{class t extends n.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,o.jsx)(f,{children:(0,o.jsx)(e,{ref:t,...s})})}}return(0,n.forwardRef)(((e,s)=>(0,o.jsx)(t,{...e,ref:s})))},m=()=>(0,n.useContext)(h),g=(0,n.createContext)({}),y=e=>{let{children:t}=e;const{wallet:s}=(0,a.Qy)((e=>e)),r=(0,n.useMemo)((()=>({wallet:s})),[s]);return(0,o.jsx)(g.Provider,{value:r,children:t})},b=e=>{let{children:t}=e;return(0,o.jsx)(g.Consumer,{children:e=>n.Children.map(t,(t=>(0,n.cloneElement)(t,{...e})))})},x=e=>{class t extends n.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,o.jsx)(b,{children:(0,o.jsx)(e,{ref:t,...s})})}}return(0,n.forwardRef)(((e,s)=>(0,o.jsx)(t,{...e,ref:s})))},v=()=>(0,n.useContext)(g),A=(0,n.createContext)({}),k=e=>{let{children:t}=e;const{accounts:s}=(0,a.Qy)((e=>e)),r=(0,n.useMemo)((()=>({accounts:s})),[s]);return(0,o.jsx)(A.Provider,{value:r,children:t})},C=e=>{let{children:t}=e;return(0,o.jsx)(A.Consumer,{children:e=>n.Children.map(t,(t=>(0,n.cloneElement)(t,{...e})))})},j=e=>{class t extends n.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,o.jsx)(C,{children:(0,o.jsx)(e,{ref:t,...s})})}}return(0,n.forwardRef)(((e,s)=>(0,o.jsx)(t,{...e,ref:s})))},I=()=>(0,n.useContext)(A);var P=s(33015),S=s(11796),E=s(67845),T=s(15190),M=s(55852);const R=e=>({symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:e,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}),Z=e=>({symbol:"SNTR",name:"Sentre",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:e,extensions:{coingeckoId:"sentre"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}),B=[R(103),Z(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}],{sol:{chainId:D}}=M.Z,O=/[\W_]+/g,L={tokenize:"full",context:!0,minlength:3},U={document:{id:"address",index:[{field:"symbol",...L},{field:"name",...L}]}};const W=class{constructor(){this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this.loading=void 0,this.queue=void 0,this._init=async()=>this.tokenMap.size?[this.tokenMap,this.engine]:new Promise((async e=>{if(this.loading)return this.queue.push(e);this.loading=!0;let t=await(await(new E.DK).resolve()).filterByChainId(this.chainId).getList();for("devnet"===this.cluster&&(t=t.concat(B)),t="testnet"===this.cluster?t.concat([Z(102),R(102)]):t.concat([R(101)]),t.forEach((e=>this.tokenMap.set(e.address,e))),this.engine=new S.Document(U),this.tokenMap.forEach((e=>{let{address:t,...s}=e;return this.engine.add(t,s)})),e([this.tokenMap,this.engine]);this.queue.length;)this.queue.shift()([this.tokenMap,this.engine]);this.loading=!1})),this.all=async()=>{const[e]=await this._init();return Array.from(e.values())},this.findByAddress=async e=>{const[t]=await this._init();return t.get(e)},this.find=async(e,t)=>{const[s,n]=await this._init();let r=[];return e.split(O).forEach((e=>n.search(e,t).forEach((e=>{let{result:t}=e;return t.forEach((e=>{if(r.findIndex((t=>{let{address:s}=t;return s===e}))<0){const t=s.get(e);t&&r.push(t)}}))})))),r},this.tokenMap=new Map,this.engine=void 0,this.chainId=D,this.cluster=T.ef,this.loading=!1,this.queue=[],this._init()}};var q=s(95418);const N=new W,V=(0,n.createContext)({}),F=e=>{let{children:t}=e;const s=(0,a.u5)(),{mints:r,pools:i}=(0,a.Qy)((e=>e)),d=(0,n.useCallback)((async function(){return await s((0,P.ih)(...arguments)).unwrap()}),[s]),l=(0,n.useCallback)((async e=>{var t;if(!q.account.isAddress(e))throw new Error("Invalid mint address");const s=await N.findByAddress(e);if(null!==s&&void 0!==s&&s.decimals)return s.decimals;if(Object.values(i).findIndex((t=>{let{mint_lpt:s}=t;return s===e}))>=0)return 9;const n=await d({address:e});if(null!==(t=n[e])&&void 0!==t&&t.decimals)return n[e].decimals;throw new Error("Cannot find mint decimals")}),[d,i]),c=(0,n.useMemo)((()=>({mints:r,getMint:d,getDecimals:l,tokenProvider:N})),[r,d,l]);return(0,o.jsx)(V.Provider,{value:c,children:t})},G=e=>{let{children:t}=e;return(0,o.jsx)(V.Consumer,{children:e=>n.Children.map(t,(t=>(0,n.cloneElement)(t,{...e})))})},J=e=>{class t extends n.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,o.jsx)(G,{children:(0,o.jsx)(e,{ref:t,...s})})}}return(0,n.forwardRef)(((e,s)=>(0,o.jsx)(t,{...e,ref:s})))},Q=()=>(0,n.useContext)(V)},65090:(e,t,s)=>{"use strict";s.d(t,{T8:()=>o,E5:()=>d,ZP:()=>c});var n=s(19289),r=s(95418);const a="accounts",o=(0,n.createAsyncThunk)(`${a}/getAccounts`,(async e=>{let{owner:t}=e;if(!r.account.isAddress(t))throw new Error("Invalid owner/wallet address");const{splt:s}=window.sentre,n=r.account.fromAddress(t),{value:a}=await s.connection.getTokenAccountsByOwner(n,{programId:s.spltProgramId});let o={};return a.forEach((e=>{let{pubkey:t,account:{data:n}}=e;const r=t.toBase58(),a=s.parseAccountData(n);return o[r]=a})),o})),i=(0,n.createAsyncThunk)(`${a}/getAccount`,(async(e,t)=>{let{address:s}=e,{getState:n}=t;if(!r.account.isAddress(s))throw new Error("Invalid account address");const{accounts:{[s]:a}}=n();if(a)return{[s]:a};const{splt:o}=window.sentre;return{[s]:await o.getAccountData(s)}})),d=(0,n.createAsyncThunk)(`${a}/upsetAccount`,(async e=>{let{address:t,data:s}=e;if(!r.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),l=(0,n.createAsyncThunk)(`${a}/deleteAccount`,(async e=>{let{address:t}=e;if(!r.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),c=(0,n.createSlice)({name:a,initialState:{},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},87358:(e,t,s)=>{"use strict";s.d(t,{u5:()=>p,Qy:()=>f,ZP:()=>w});var n=s(55754),r=s(19289),a=s(73938),o=s(85912),i=s(87482),d=s(58851),l=s(21028),c=s(65090),u=s(33015),h=s(92871);(0,n.createStoreHook)(a.RootContext);const p=(0,n.createDispatchHook)(a.RootContext),f=(0,n.createSelectorHook)(a.RootContext),w=(0,r.configureStore)({middleware:e=>e(o.h),devTools:(0,o.$)("sentre"),reducer:{ui:i.ZP,page:d.Z,wallet:l.ZP,accounts:c.ZP,mints:u.ZP,pools:h.ZP}})},33015:(e,t,s)=>{"use strict";s.d(t,{ih:()=>o,ZP:()=>l});var n=s(19289),r=s(95418);const a="mints",o=(0,n.createAsyncThunk)("mints/getMint",(async(e,t)=>{let{address:s,force:n=!1}=e,{getState:a}=t;if(!r.account.isAddress(s))throw new Error("Invalid mint address");if(!n){const{accounts:{[s]:e}}=a();if(e)return{[s]:e}}const{splt:o}=window.sentre;return{[s]:await o.getMintData(s)}})),i=(0,n.createAsyncThunk)("mints/upsetMint",(async e=>{let{address:t,data:s}=e;if(!r.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),d=(0,n.createAsyncThunk)("mints/deleteMint",(async e=>{let{address:t}=e;if(!r.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),l=(0,n.createSlice)({name:a,initialState:{},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},58851:(e,t,s)=>{"use strict";s.d(t,{X:()=>d,Z:()=>l});var n=s(19289),r=s(55852);const{register:{senreg:a,extra:o}}=r.Z,i="page",d=(0,n.createAsyncThunk)("page/loadRegister",(async()=>({register:{...await(async()=>{try{const e=await fetch(a);return await e.json()}catch(e){return{}}})(),...o}}))),l=(0,n.createSlice)({name:i,initialState:{register:{},appIds:["sen_swap","sen_lp","sen_farming"]},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},92871:(e,t,s)=>{"use strict";s.d(t,{d2:()=>d,E6:()=>c,ZP:()=>u});var n=s(19289),r=s(95418),a=s(55852);const{sol:{taxmanAddress:o}}=a.Z,i="pools",d=(0,n.createAsyncThunk)("pools/getPools",(async()=>{const{swap:e}=window.sentre,t=await e.connection.getProgramAccounts(e.swapProgramId,{filters:[{dataSize:257},{memcmp:{bytes:o,offset:65}}]});let s={};return t.forEach((t=>{let{pubkey:n,account:{data:r}}=t;const a=n.toBase58(),o=e.parsePoolData(r);s[a]=o})),s})),l=(0,n.createAsyncThunk)("pools/getPool",(async(e,t)=>{let{address:s}=e,{getState:n}=t;if(!r.account.isAddress(s))throw new Error("Invalid pool address");const{pools:{[s]:a}}=n();if(a)return{[s]:a};const{swap:o}=window.sentre;return{[s]:await o.getPoolData(s)}})),c=(0,n.createAsyncThunk)("pools/upsetPool",(async e=>{let{address:t,data:s}=e;if(!r.account.isAddress(t))throw new Error("Invalid pool address");if(!s)throw new Error("Data is empty");return{[t]:s}})),u=(0,n.createSlice)({name:i,initialState:{},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87482:(e,t,s)=>{"use strict";s.d(t,{Dc:()=>i,SI:()=>d,ZP:()=>u});var n=s(19289);const r=()=>{const e=window.innerWidth;return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"lg":e<1400?"xl":"xxl"},a="ui",o={theme:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",width:window.innerWidth,infix:r(),touchable:"ontouchstart"in window||navigator.maxTouchPoints>0,visibleActionCenter:!1,visibleInstaller:!1},i=(0,n.createAsyncThunk)("ui/setTheme",(async e=>({theme:e}))),d=(0,n.createAsyncThunk)("ui/resize",(async()=>({width:window.innerWidth,infix:r()}))),l=(0,n.createAsyncThunk)("ui/setVisibleActionCenter",(async e=>({visibleActionCenter:e}))),c=(0,n.createAsyncThunk)("ui/setVisibleInstaller",(async e=>({visibleInstaller:e}))),u=(0,n.createSlice)({name:a,initialState:o,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},21028:(e,t,s)=>{"use strict";s.d(t,{Wh:()=>l,Dx:()=>c,UP:()=>u,K8:()=>h,co:()=>p,ZP:()=>f});var n=s(19289),r=s(95418),a=s(55852);const o=async e=>{const{sol:{node:t,spltAddress:s,splataAddress:n,swapAddress:o}}=a.Z;window.sentre={wallet:e,lamports:new r.Lamports(t),splt:new r.SPLT(s,n,t),swap:new r.Swap(o,s,n,t)}},i="wallet",d={visible:!1,address:"",lamports:BigInt(0)},l=(0,n.createAsyncThunk)("wallet/openWallet",(async()=>({visible:!0}))),c=(0,n.createAsyncThunk)("wallet/closeWallet",(async()=>({visible:!1}))),u=(0,n.createAsyncThunk)("wallet/connectWallet",(async e=>{if(!e)throw new Error("Invalid wallet instance");await o(e);const t=await e.getAddress(),s=await window.sentre.lamports.getLamports(t);return{address:t,lamports:BigInt(s),visible:!1}})),h=(0,n.createAsyncThunk)("wallet/updateWallet",(async e=>{let{lamports:t}=e;return{lamports:t}})),p=(0,n.createAsyncThunk)("wallet/disconnectWallet",(async()=>{await(async()=>{var e;null!==(e=window.sentre)&&void 0!==e&&e.wallet&&window.sentre.wallet.disconnect(),await o(void 0)})(),window.location.reload()})),f=(0,n.createSlice)({name:i,initialState:d,reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(h.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(p.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},85912:(e,t,s)=>{"use strict";s.d(t,{$:()=>n,h:()=>r});const n=e=>!1;BigInt.prototype.toJSON=function(){return this.toString()};const r={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e}}},15190:(e,t,s)=>{"use strict";s.d(t,{OB:()=>d,ef:()=>l,Eu:()=>c});const n="sentre",r=window.localStorage,a=e=>{try{return e?JSON.parse(e):null}catch(t){return null}},o={set:(e,t)=>{let s=a(r.getItem(n));s&&"object"===typeof s||(s={}),s[e]=t,r.setItem(n,JSON.stringify(s))},get:e=>{let t=a(r.getItem(n));return t&&"object"===typeof t?t[e]:null},clear:e=>{o.set(e,null)}},i=o,d="production",l=(()=>{switch(i.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}})(),c=e=>(i.set("network",e),window.location.reload())},46601:()=>{},89214:()=>{},85568:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);
//# sourceMappingURL=933.729432ae.chunk.js.map