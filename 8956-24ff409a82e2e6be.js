"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8956],{38825:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),i=n(31461),r=n(2784),a=n(99673),o=n(34490),s=n(86349),d=n(87043);let c=(0,a.ZP)(d.Yd)``,u=(0,a.ZP)(o.Xdw).attrs(e=>Object.assign({color:"#db44a7"},e))`
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};

  animation: ${s.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`,p=(0,a.ZP)(o.Xdw).attrs(e=>Object.assign({color:"transparent",stroke:"darkGray"},e))`
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};

  animation: ${s.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;function m(e){let{active:t,onClick:n,width:a,height:o}=e,s=(0,i.Z)(e,["active","onClick","width","height"]);return r.createElement(c,(0,l.Z)({"data-testid":"add-wishlist-button",onClick:n},s),t?r.createElement(u,{"data-testid":"filled-icon",width:a,height:o}):r.createElement(p,{"data-testid":"empty-icon",width:a,height:o}))}m.defaultProps={active:!1,width:20,height:20};var g=m},33309:function(e,t,n){n.d(t,{V:function(){return m}});var l=n(2784),i=n(66762),r=n(99673),a=n(87043);let o=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,s=(0,r.ZP)(a.xv)`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`,d=(0,r.ZP)(a.xv)`
  margin-bottom: 20px;
  font-size: 14px;
`,c=(0,r.ZP)(a.zx)`
  font-size: 12px;
  text-transform: uppercase;
`;var u=function({title:e,message:t,showDialog:n,onClickOutside:r}){return l.createElement(i.Z,{type:"alert",position:"center",showClose:!1,visible:n,onClickOutside:r,portal:!0},l.createElement(o,null,l.createElement(s,null,e),l.createElement(d,null,t),l.createElement(c,{full:!0,onClick:r},"Entendi")))};let p=()=>{let[e,t]=(0,l.useState)(""),[n,i]=(0,l.useState)(""),[r,a]=(0,l.useState)(!1),o=({title:e="Aten\xe7\xe3o",message:n})=>{t(e),i(n),a(!0)},s=()=>l.createElement(l.Fragment,null,r&&l.createElement(u,{title:e,message:n,showDialog:r,onClickOutside:()=>a(!1),width:"300px"}));return{showAlertMessage:o,Alert:s}};var m=p},52337:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(2784),i=n(34490),r=n(99673),a=n(55403),o=n(84546),s=n(63825);let d=(0,r.ZP)(o.Z)`
  width: 100%;
  background: ${e=>(0,a.UX)(`${e.intent}.base`)(e)};
`,c=(0,r.ZP)(s.Z)`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: ${e=>(0,a.R)("space.2")(e)}px;
  font-size: ${e=>(0,a.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,a.UX)(`${e.intent}.text`)(e)};
`;function u({message:e,intent:t,icon:n,styleContainer:r,styleMessage:a}){let o=e=>"string"!=typeof e?n:l.createElement(i.JO$,{color:(null==a?void 0:a.color)||`alert.${t}.text`,name:e,"data-testid":"alert-icon"}),s=e=>{let t=(null==e?void 0:e.icon)||n;return l.createElement(l.Fragment,null,t&&o(t),"string"==typeof e?e:(null==e?void 0:e.text)||e)};return l.createElement(d,{intent:t,"data-testid":"alert-container",style:r},Array.isArray(e)?e.map((e,n)=>l.createElement(c,{key:`alert-message-${n}`,intent:t,"data-testid":"alert-text",style:a},s(e))):l.createElement(c,{intent:t,"data-testid":"alert-text",style:a},s(e)))}u.defaultProps={message:"",intent:"info",icon:null,styleContainer:{},styleMessage:{}};var p=u},77954:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),i=n(2784),r=n(86349),a=n(34014),o=n(7069),s=n(52337),d=n(87043);let c=({showAlert:e,message:t,icon:n,alignment:l})=>e?i.createElement(d.kC,{width:"100%",justifyContent:l},i.createElement(s.Z,{"data-testid":"warning-text",message:t,intent:"warning",icon:n,styleContainer:{maxWidth:"max-content"}})):null;c.defaultProps={showAlert:!1,message:"",icon:"",alignment:"center"};let u=({attribute:e,variations:t,onChange:n,alignment:s,showWarningText:d,warningMessage:u,iconWarningText:p})=>{var m;return i.createElement(a.Z,(0,l.Z)({},e,{alignment:s}),null==e?void 0:null==(m=e.values)?void 0:m.map((l,a)=>{let s=(0,r.KF)(t,l);return i.createElement(o.Z,{key:`${l}-${a}`,value:l,type:null==e?void 0:e.type,checked:(null==e?void 0:e.selected)&&(null==e?void 0:e.current)===l,disabled:!(null!=s&&s.isAvailable)&&!(null!=s&&s.available),onChange:n},l)}),i.createElement(c,{showAlert:d,message:u,icon:p,alignment:s}))};u.defaultProps={attribute:{},variations:[],alignment:"",showWarningText:!1,warningMessage:"",iconWarningText:""};var p=u},34014:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(99673),s=n(55403),d=n(19527);let c={start:"left",end:"right",center:"center"},u=o.ZP.div`
  position: relative;
`,p=o.ZP.div`
  width: 100%;
  color: ${(0,s.uu)("attributeLabel")};
  text-align: ${({bordered:e,alignment:t})=>e?"left":c[t]};
  margin-top: 8px;
  margin-bottom: 8px;
  ${e=>{let{bordered:t}=e,n=(0,i.Z)(e,["bordered"]);return t&&o.iv`
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background-color: ${(0,s.dF)("white")(n)};
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      border-color: ${(0,s.kJ)("light")(n)};

      ${(0,s.aK)("large")} {
        cursor: pointer;
      }
    `}}

  ${(0,s.aK)("large")} {
    svg {
      transform: rotate(90deg);
    }
  }
`,m=(0,o.ZP)(d.Z).attrs(({alignment:e,gap:t})=>({justifyContent:e,rowGap:2,columnGap:t||2}))`
  flex-flow: row wrap;

  ${({smoothable:e})=>e&&o.iv`
      overflow: hidden;
      height: 105px;
    `};
`,g=r.forwardRef((e,t)=>{let{children:n,label:o,current:s,selected:d,bordered:c,onClick:g,onBlur:h,alignment:f,smoothable:b,showTitle:x}=e,v=(0,i.Z)(e,["children","label","current","selected","bordered","onClick","onBlur","alignment","smoothable","showTitle"]);return r.createElement(u,{ref:t,onBlur:h,tabIndex:1,"data-testid":"attribute-container"},x?r.createElement(p,{bordered:c,alignment:f,onClick:g,"data-testid":"attribute-label"},d?r.createElement("span",null,o,": ",r.createElement("strong",null,s)):`Selecionar ${o}`,c&&r.createElement(a.olP,{width:8,height:12})):null,r.createElement(m,(0,l.Z)({alignment:f,smoothable:b},v),n))});g.defaultProps={label:"",current:"",selected:!1,bordered:!1,alignment:"center",smoothable:!1,showTitle:!0},g.displayName="AttributeBase";var h=g},5086:function(e,t,n){n.d(t,{Z:function(){return v}});var l=n(31461),i=n(7896),r=n(2784),a=n(34490),o=n(86349),s=n(19527),d=n(7029),c=n(34014),u=n(7069),p=n(99673),m=n(55403);let g=(0,p.ZP)(s.Z).attrs(e=>Object.assign({},e))`
  ${({shouldHover:e})=>e&&p.iv`
      &:hover {
        border-color: ${(0,m.dF)("primary")};
      }
    `}
`,h=({onClick:e,show:t})=>t&&r.createElement(s.Z,{"data-testid":"attribute-color-more",position:"absolute",justifyContent:"center",background:"linear-gradient(0deg, #ffffff, transparent 80%)",color:"text.primary",fontWeight:"bold",cursor:"pointer",width:1,bottom:0,height:36,padding:1,onClick:e},"ver mais cores"),f=({attributesLength:e,onClick:t,show:n,style:l})=>n&&r.createElement(g,(0,i.Z)({"data-testid":"attribute-color-more",fontSize:4,borderRadius:"default",alignItems:"center",justifyContent:"center",cursor:"pointer",borderWidth:1,borderColor:"#e5e5e5",borderStyle:"solid",onClick:t},l),"+ ",e),b={smooth:h,button:f},x=e=>{let{attribute:t,variations:n,onChange:s,onVariationClick:p,title:m,alignment:g,minLength:h,variant:f,showTitle:x,style:v}=e,Z=(0,l.Z)(e,["attribute","variations","onChange","onVariationClick","title","alignment","minLength","variant","showTitle","style"]),$=["smooth","button"].includes(f)?f:"smooth",E=null==b?void 0:b[$],[y,w]=(0,r.useState)("smooth"===$),[k,P]=(0,r.useState)("button"===$),[C,z]=(0,r.useState)([]),S=(0,o.hY)(t)(n),I=(0,r.useMemo)(()=>{var e;let l=S.reduce((e,l)=>[...e,Object.assign({},(0,o.KF)(n,l),{selected:k&&(null==t?void 0:t.selected)&&(null==t?void 0:t.current)===l})],[]);return null==(e=(0,o.gf)(l))?void 0:e.map(e=>e.value)},[t,n]),R=(0,r.useMemo)(()=>I.length>h,[]);(0,r.useEffect)(()=>I.length>h&&"button"===$?z(I.slice(0,h-1)):z(S),[I]);let O=()=>y?w(!y):(P(!k),z(C));return r.createElement(c.Z,(0,i.Z)({},t,{smoothable:R&&y,alignment:g,showTitle:x},Z),null==C?void 0:C.map((e,l)=>{let{image:i,path:c}=(0,o.KF)(n,e)||{},g=(0,o.lm)(n,e);return r.createElement(u.Z,{key:`${e}-${l}`,value:e,type:t.type,path:c,checked:t.selected&&t.current===e,disabled:!g,onChange:s,onVariationClick:p,style:v},i?r.createElement(d.Z,{alt:`${m} ${e}`,title:e,src:i,width:50,height:50}):r.createElement(a.JO$,{name:"Camera",width:29,height:25,color:"lightGray"}))}),R&&r.createElement(E,{show:y||k,attributesLength:t.values.length-(h-1),style:v,onClick:x?O:s}))};x.defaultProps={attribute:{},disabled:!1,variations:[],title:"",alignment:"",minLength:5,variant:"smooth",showTitle:!0,onVariationClick:null,style:{width:"70px",height:"70px",bg:"background.base",fontWeight:"bold",color:"text.base"}};var v=x},7069:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),i=n(31461),r=n(2784),a=n(19527),o=n(99673),s=n(55403);let d=o.ZP.input`
  display: none;

  &:checked ~ label {
    background-color: ${(0,s.dF)("primary")};
    border-color: ${(0,s.dF)("primary")};
    color: ${(0,s.uu)("white")};
    cursor: default;
  }

  &:disabled ~ label {
    background-color: ${(0,s.dF)("white")};
    color: ${(0,s.uu)("light")};
    cursor: not-allowed;

    img {
      filter: grayscale(1);
      opacity: 0.2;
    }
  }

  &[name='color'] {
    & ~ label {
      background-color: ${(0,s.dF)("white")};
      height: ${({height:e})=>`${e}`};
      width: ${({width:e})=>`${e}`};

      & img {
        width: 57px;
        height: 100%;
      }

      &:hover {
        border-color: ${(0,s.dF)("primary")};
      }
    }

    &:checked ~ label {
      border-width: 2px;
    }
  }
`,c=o.ZP.div`
  position: relative;
  display: inline-flex;

  ${(0,s.aK)("large")} {
    &:first-child {
      margin-left: 0;

      label {
        ${({type:e})=>"volume"===e&&"border-top-width: 0px"};
      }
    }
  }
`,u=e=>{let{checked:t,disabled:n,type:o,value:s,children:u,onChange:p,style:m,path:g,onVariationClick:h}=e,f=(0,i.Z)(e,["checked","disabled","type","value","children","onChange","style","path","onVariationClick"]);return r.createElement(c,{type:o,onClick:e=>h?h(e,{value:s,type:o,path:g}):null},r.createElement(d,(0,l.Z)({},f,{"data-testid":"attribute-input",type:"radio",name:o,value:s,id:`${o}-${s}`,checked:t,disabled:n,onChange:e=>p(e,{value:s,type:o}),height:(null==m?void 0:m.height)||"70px",width:(null==m?void 0:m.width)||"70px"})),r.createElement(a.Z,{as:"label","data-testid":"attribute-item",borderWidth:1,borderColor:"whisper",borderStyle:"solid",borderRadius:"default",padding:2,color:"text.base",fontSize:2,fontWeight:"medium",alignItems:"center",justifyContent:"center",cursor:"pointer",htmlFor:`${o}-${s}`},u))};var p=u},2575:function(e,t,n){n.d(t,{Z:function(){return k}});var l=n(7896),i=n(2784),r=n(34014),a=n(98047),o=n(99673),s=n(55403),d=n(34490),c=n(86349),u=n(84546),p=n(19527),m=n(7069);let g=o.ZP.div`
  background-color: rgba(0, 0, 0, 0.63);
  animation: ${c.Ji} 0.3s linear;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,h=(0,o.ZP)(p.Z)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${(0,s.R)("zIndices.2")};
  justify-content: flex-end;

  ${(0,s.aK)("large")} {
    z-index: ${(0,s.R)("zIndices.0")};
    overflow: hidden;
    position: absolute;
    height: auto;
    top: 56px;
    bottom: unset;
  }
`,f=(0,o.ZP)(p.Z)`
  width: ${e=>null!=e&&e.fullWidth?"100%":"85%"};
  overflow: hidden;
  flex-direction: column;
  animation: ${c.$7} 0.3s ease-in-out;
  z-index: ${(0,s.R)("zIndices.1")};

  ${(0,s.aK)("large")} {
    width: 100%;
    position: relative;
    animation: ${c.ie} 0.3s ease-in-out;
  }
`,b=(0,o.ZP)(u.Z)`
  background-color: ${(0,s.dF)("white")};
  position: relative;
  max-height: 250px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;

  ${(0,s.aK)("large")} {
    border-radius: 6px;
    border: 1px solid;
    border-color: ${(0,s.kJ)("light")};
  }
`,x=(0,o.ZP)(p.Z)`
  justify-content: ${e=>e.hasContentLabel?"space-between":"flex-end"};
  align-items: center;
  background-color: ${(0,s.dF)("base")};
  height: 47px;
  font-size: 20px;
  font-weight: 500;
  color: #515151;
  padding: 0 12px;
  line-height: 39px;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,v=(0,o.ZP)(p.Z)`
  flex-direction: column;
  padding-bottom: 44px;
  overflow-y: auto;
  height: calc(100% - 39px);

  ${(0,s.aK)("large")} {
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
    max-height: 250px;
  }
`,Z=(0,o.ZP)(u.Z)`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 1) 45%);
  position: absolute;
  width: 100%;
  height: 46px;
  bottom: 0;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,$=(0,o.ZP)(d.x8P).attrs(e=>({color:(0,s.uu)("primary")(e)}))`
  ${(0,s.aK)("large")} {
    display: none;
  }
`,E=(0,o.ZP)(m.Z)`
  & ~ label {
    width: 100%;
    height: 46px;
    border: 0px;
    padding: 0 12px;
    border-radius: 0px;
    border-top-width: 1px;
    border-style: solid;
    border-color: ${(0,s.kJ)("light")};
    color: ${(0,s.uu)("light")};
    justify-content: space-between;
    font-weight: normal;
    line-height: 22px;
  }

  &:checked ~ label {
    background-color: transparent;
    background-color: ${(0,s.dF)("opacityBlue")};
    border-color: ${(0,s.kJ)("light")};
    font-weight: 500;
    color: ${(0,s.uu)("base")};

    &::before {
      content: '';
      width: 5px;
      height: 100%;
      background-color: ${(0,s.dF)("primary")};
      left: 0;
      position: absolute;
    }
  }

  &:disabled ~ label {
    background-color: ${(0,s.dF)("base")};
    color: ${(0,s.uu)("lighter")};
  }

  ${(0,s.aK)("large")} {
    &:not(:checked, :disabled) ~ label:hover {
      color: ${(0,s.uu)("primary")};
    }

    &:disabled ~ label {
      cursor: not-allowed;
    }
  }
`,y=({label:e,values:t,current:n,selected:l,type:r,variations:o,onChange:s,onClose:d,fullWidth:c})=>i.createElement(h,null,i.createElement(g,{onClick:d}),i.createElement(f,{fullWidth:c,"data-testid":"attribute-list-wrapper"},i.createElement(b,null,i.createElement(x,{hasContentLabel:!!e},e,i.createElement($,{onClick:d,"data-testid":"attribute-close"})),i.createElement(v,null,null==t?void 0:t.map((e,t)=>{let d=(0,a.Z)(o,e);return i.createElement(E,{key:`${e}-${t}`,value:e,type:r,checked:l&&n===e,disabled:!(null!=d&&d.isAvailable)&&!(null!=d&&d.available),onChange:s},e)})),i.createElement(Z,null)))),w=({attribute:e,variations:t,onChange:n,alignment:a,fullWidth:o})=>{let[s,d]=(0,i.useState)(!1),c=(0,i.useRef)(),u=(0,i.useCallback)((e,t)=>{n(e,t),c.current.blur()},[s]);return i.createElement(r.Z,(0,l.Z)({},e,{onClick:()=>d(!s),onBlur:()=>d(!1),alignment:a,ref:c,bordered:!0}),!!s&&i.createElement(y,(0,l.Z)({},e,{fullWidth:o,variations:t,onChange:u,onClose:()=>d(!1)})))};w.defaultProps={attribute:{},disabled:!1,variations:[],alignment:""};var k=w},78045:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(7029),s=n(99673),d=n(87043);let c=(0,s.ZP)(d.xu).attrs({borderRadius:"circle",width:"24px",height:"24px",overflow:"hidden"})``,u=e=>{let{src:t,alt:n,fill:s,dataTesteIdImage:d,dataTesteIdIcon:u,iconName:p}=e,m=(0,i.Z)(e,["src","alt","fill","dataTesteIdImage","dataTesteIdIcon","iconName"]);return r.createElement(c,(0,l.Z)({"data-testid":"avatar"},m),t?r.createElement(o.Z,{src:t,alt:n,"data-testid":d}):r.createElement(a.JO$,{fill:s,name:p,"data-testid":u}))};u.defaultProps={src:"",alt:"",fill:"#2FA0FD",iconName:"UserReviewIcon"};var p=u},96504:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784),i=n(8719),r=n(99673),a=n(34490);let o=(0,r.ZP)(a.zuq)`
  position: fixed;
  width: 63px;
  height: 63px;
  bottom: 75px;
  right: 26px;
  z-index: 99;
`;function s({onClick:e,show:t}){let[n,r]=(0,l.useState)(t),a=window&&window.innerHeight,s=()=>{(0,i.Z)(),e()},d=()=>{let e=window.pageYOffset;!n&&e>a?r(!0):n&&e<=a&&r(!1)};return(0,l.useEffect)(()=>(window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}),[n]),n?l.createElement(o,{"data-testid":"back-to-top",onClick:s}):l.createElement(l.Fragment,null)}s.defaultProps={onClick(){},show:!1},s.displayName="BackToTop";var d=s},98460:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),i=n(2784),r=n(7029),a=n(99673),o=n(55403);let s={miniature:a.iv`
    margin-top: -25px;
    width: 42px;
    height: 32px;
  `,list:a.iv`
    margin-top: -5px;
    width: 50px;
    height: 36px;
  `,gallery:a.iv`
    margin-top: -25px;
    width: 55px;
    height: 40px;
    position: absolute;
    ${(0,o.aK)("small")} {
      width: 55px;
      height: 40px;
    }
  `,productPage:a.iv`
    margin-top: 0px;
    width: 55px;
    height: 40px;
  `},d=a.ZP.div`
  position: relative;
  ${({displayMode:e})=>s[e]||"margin-top: -25px;"}
`,c=e=>{let{width:t,height:n,url:a,tooltip:o}=e,s=a&&a.replace("{w}",t).replace("{h}",n);return a?i.createElement(d,(0,l.Z)({},e,{"data-testid":"wrapper-badge"}),i.createElement(r.Z,(0,l.Z)({src:s,alt:o,"data-testid":"badge"},e))):null};c.defaultProps={tooltip:"",width:"65",height:"50"};var u=c},67619:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(2784),i=n(55403),r=n(34490),a=n(12468),o=n(99673),s=n(19527);let d=o.ZP.div`
  background-color: ${e=>e.isTransparent?"transparent":(0,i.dF)("lighter")(e)};
`,c=(0,o.ZP)(s.Z)`
  position: relative;
  flex: 0;
  flex-basis: auto;
  height: 32px;
  overflow-y: hidden;
  width: max-content;
  direction: rtl;
  background-color: ${e=>e.isTransparent?"transparent":(0,i.dF)("lighter")(e)};
`,u=(0,o.ZP)(s.Z)`
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 ${e=>(0,i.R)("space.4")(e)}px 0
    ${e=>(0,i.R)("space.2")(e)}px;
  direction: ltr;
`;var p=n(66228),m=n(87043);let g=({isTransparent:e,items:t,seller:n,onLogoClick:a,onClickItem:o,domain:s,logo:g})=>{let{url:h="/",icon:f="LogoMagalu",title:b="p\xe1gina inicial magalu",styles:x={color:i.rS.colors.blue,height:"14px",marginTop:"6px",width:"60px"}}=g||{},v={url:h,icon:l.createElement(r.JO$,{name:f,style:x}),title:b};v.handleClick=a,t.forEach(e=>Object.assign(e,{handleClick:o}));let Z=[!n&&v,...t];return l.createElement(d,{isTransparent:e},l.createElement(c,{isTransparent:e},l.createElement(u,null,n&&l.createElement(m.gN,{seller:n}),!n&&Z.map((e,n)=>{var i,r;return l.createElement(m.gN,{"data-testid":"breadcrumb-item",key:n,item:Object.assign({},e,{position:n}),active:(i=t.length,1!==n&&i===n),onClick:e.handleClick})}))),l.createElement(p.ZP,{schema:(0,p.ij)(t,s),type:"BreadcrumbList"}))};g.defaultProps={isTransparent:!1,items:[],seller:void 0,onClickItem(){},onLogoClick(){},domain:a.RW};var h=g},49542:function(e,t,n){n.d(t,{Z:function(){return O}});var l=n(7896),i=n(31461),r=n(2784),a=n(28249);let o=({direction:e,slides:t,slideIndex:n,showSlideCount:l,infinity:i})=>{let r=n+("next"===e?1:-1),a=null==t?void 0:t.length;return i&&(r=(r+a)%a),l?Math.min(Math.max(r,0),a-1):r},s=({lazy:e=!1,length:t=0,slidesPerView:n=1,active:l=0}={})=>{let i=Array.from(Array(t).keys());if(!e)return i;let r=Math.ceil(t/n),a=t%n||n,o=Math.ceil((l+1)/n),s=o+1;s>r&&(s=1);let d=o-1;d<1&&(d=r);let c=e=>{let t=e*n-n;return i.slice(t,e===r?t+a:t+n)};return[...c(d),...c(o),...c(s)].sort()};function d(e,t){switch(t.type){case"jump":return Object.assign({},e,{desired:t.desired*t.slidesPerView});case"next":var n,l,i;return Object.assign({},e,{desired:(n=t.indicators,l=e.active,(l+(i=t.slidesPerView))%(n*i))});case"prev":return Object.assign({},e,{desired:function(e,t,n){let l=e*n;return(t-n+l)%l}(t.indicators,e.active,t.slidesPerView)});case"done":return Object.assign({},e,{offset:NaN,active:e.desired,visible:t.lazy?Array.from(new Set([...e.visible,...s(Object.assign({},t,{active:e.desired}))])):e.visible});case"drag":return Object.assign({},e,{offset:t.offset});default:return e}}let c={offset:0,desired:0,active:0};function u(e,t,n,l,i){let r=function(e){let t=e.clientWidth;return t/5}(e.event.target),a=-(l*e.deltaX);t(a>=r?{type:l>0?"next":"prev",indicators:n,slidesPerView:i}:{type:"drag",offset:0})}let p=(e,t,n)=>{let l=100/t/3;return l>10&&(l=10),n&&e>1?100-l:100};var m=n(99673),g=n(68054),h=n(55403),f=n(34490),b=n(84546),x=n(63825),v=n(59120);let Z={color:"primary.base",width:40,height:40},$=(0,m.ZP)(b.Z)`
  position: relative;
  overflow: hidden;
`,E=m.ZP.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;

  ${({showControls:e})=>e&&m.iv`
      padding-bottom: ${e=>e.insideControls?"0":"25"}px;
    `};

  max-height: ${({itemHeight:e})=>e?`${e}px`:null};
`,y=(0,m.ZP)(b.Z).attrs(({gutter:e,alignContent:t})=>({pr:e?`${e}px`:null,va:t?`${t}`:null}))`
  width: ${({width:e="50%"})=>e};
  &:first-child {
    padding-left: ${({gutter:e})=>e?`${e}px`:null};
  }
  transition: box-shadow 0.4s ease 0s;
  align-content: ${({alignContent:e=null})=>e};
`,w=m.ZP.div`
  overflow: hidden;

  ${({showArrowControls:e})=>e&&m.iv`
      margin: ${e=>e.insideControls?"0px":"0px 40px"};
    `};
`,k=m.ZP.button`
  ${v.z}

  background: rgba(255, 255, 255, 0.5);
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: calc((100% - 40px) / 2);
  cursor: ${({disabled:e})=>e?"default":"pointer"};

  ${e=>e.left&&m.iv`
      left: 0;
    `}

  ${e=>e.right&&m.iv`
      right: 0;
    `}
  
  ${e=>e.insideControls&&m.iv`
      z-index: 2;
    `}

  ${g.AF}
  ${h.$_}
`,P=(0,m.ZP)(f.s$$).attrs(e=>Object.assign({},Z,e))`
  ${h.$_}
`,C=(0,m.ZP)(f._Qn).attrs(e=>Object.assign({},Z,e))`
  ${h.$_}
`,z=m.ZP.ol`
  position: absolute;
  right: 0;
  bottom: ${e=>e.insideControls?(0,h.R)("space.3")(e):0}px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  margin: auto;
`,S=m.ZP.li`
  position: relative;
  flex: 0 1 auto;
  width: 8px;
  height: 8px;
  margin: 0 0.3em;
  cursor: pointer;
  border: solid 1.2px;
  border-radius: 4px;

  ${e=>e.active?`
        background: ${(0,h.ow)("text.scratched")(e)};
        border-color: ${(0,h.ow)("text.scratched")(e)};
      `:`
        background: ${(0,h.ow)("background.lighter")(e)};
        border-color: ${(0,h.ow)("text.scratched")(e)};
      `}

  ${(0,h.aK)("small")} {
    width: 10px;
    height: 10px;
    border-radius: 8px;
  }
`,I=(0,m.ZP)(x.Z)`
  margin-top: 10px;
  color: #697277;
  display: flex;
  justify-content: center;
`,R=e=>{let{children:t,slidesPerView:n,showPartial:m,showPartialNextSlide:g,interval:h,transitionDuration:f,auto:b,showArrowControls:x,showControls:v,showSlideCount:Z,infinity:R,insideControls:O,onChange:j,gutter:F,itemHeight:M,isProductCarousel:L,lazy:A,goTo:T,verticalAlign:W}=e,D=(0,i.Z)(e,["children","slidesPerView","showPartial","showPartialNextSlide","interval","transitionDuration","auto","showArrowControls","showControls","showSlideCount","infinity","insideControls","onChange","gutter","itemHeight","isProductCarousel","lazy","goTo","verticalAlign"]),N=r.Children.toArray(t),B=null==N?void 0:N.length,_=Math.min(B,n),{handlers:H,style:V,cardWidth:J,indicators:U,setActive:K,active:G,visible:q}=function({length:e,interval:t,transitionDuration:n,auto:l,slidesPerView:i,showPartial:o,showPartialNextSlide:m,lazy:g}){let h=p(e,i,o||m),f=`${h/i}%`,b=Math.ceil(e/i),x=`transform ${n}ms ease`,[v,Z]=(0,r.useReducer)(d,Object.assign({},c,{visible:s({lazy:g,length:e,active:0,slidesPerView:i})})),$=(0,a.QS)({onSwiping(e){Z({type:"drag",offset:e.deltaX})},onSwipedLeft(e){u(e,Z,b,1,i)},onSwipedRight(e){u(e,Z,b,-1,i)},trackMouse:!1,trackTouch:!0});(0,r.useEffect)(()=>{let e=l&&setTimeout(()=>Z({type:"next",indicators:b,slidesPerView:i}),t);return()=>clearTimeout(e)},[l,v.offset,v.active]),(0,r.useEffect)(()=>{let t=setTimeout(()=>Z({type:"done",lazy:g,length:e,slidesPerView:i}),n);return()=>clearTimeout(t)},[v.desired]);let E=o?(100-h)/2:0,y=0!==v.active?E:0,w={transform:"translateX(0)",width:`${h*(e/i)}%`,left:`-${v.active*(h/i)-y}%`};if(v.desired!==v.active){let k=Math.abs(v.active-v.desired)/i,P=Math.sign(v.offset||0),C=-1*Math.sign(v.desired-v.active),z=0;0===v.active&&(z=E/e/i),0===v.desired&&(z=-(E/(e/i)*1)),w.transition=x,w.transform=`translateX(${100*(P||C)/(e/i)*k+z}%)`}else Number.isNaN(v.offset)||(w.transform=`translateX(${v.offset}px)`);return{active:v.active,setActive:e=>Z({type:"jump",desired:e,slidesPerView:i}),handlers:$,style:w,cardWidth:f,indicators:b,visible:v.visible}}({length:B,interval:h,transitionDuration:f,auto:b,slidesPerView:_,showPartial:m,showPartialNextSlide:g,lazy:A}),[X,Q]=(0,r.useState)(0);return(0,r.useEffect)(()=>{Q(T),K(T)},[T]),(0,r.useEffect)(()=>{j(G)},[G]),B>1?r.createElement($,(0,l.Z)({"data-testid":"carousel"},D),x&&r.createElement(k,{"data-testid":"arrow-previous-button","aria-label":"Ver elemento da esquerda",disabled:!R&&X-1<0,left:!0,insideControls:O,onClick(){let e=o({direction:"previous",slides:N,slideIndex:X,showSlideCount:Z,infinity:R});Q(e),K(e)}},r.createElement(P,null)),r.createElement(w,{showArrowControls:x,insideControls:O},r.createElement(E,(0,l.Z)({showControls:v,showSlideCount:Z,insideControls:O,itemHeight:M},H,{style:V}),N.map((e,t)=>r.createElement(y,{"data-testid":"carousel-item",width:J,isProductCarousel:L,gutter:m||g||n>1?F:0,alignContent:W,index:t,key:`carousel-item-${N.length}-${t+1}`},q.includes(t)&&e))),v&&N.length>_&&r.createElement(z,{insideControls:O,"data-testid":"carousel-indicators"},Array(U).fill().map((e,t)=>r.createElement(S,{"data-testid":"carousel-indicator",active:G/n===t,onClick(){K(t),Q(t)},key:`carousel-indicator-${N.length}-${t+1}`}))),Z&&r.createElement(I,{"data-testid":"slide-count"},Math.min(X+1,B)," / ",B)),x&&r.createElement(k,{"data-testid":"arrow-next-button","aria-label":"Ver elemento da direita",disabled:!R&&X+1===U,insideControls:O,onClick(){let e=o({direction:"next",slides:N,slideIndex:X,showSlideCount:Z,infinity:R});Q(e),K(e)},right:!0},r.createElement(C,null))):t};R.defaultProps={slidesPerView:1,showPartial:!1,showPartialNextSlide:!1,interval:500,transitionDuration:400,auto:!0,showArrowControls:!1,showControls:!0,showSlideCount:!1,onChange(){},gutter:4,infinity:!1,isProductCarousel:!1,insideControls:!1,lazy:!1,goTo:0,verticalAlign:""},R.CarouselItem=y;var O=R},2761:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(2784),i=n(58331),r=n(8341);let a="icons.disabled",o=(0,l.forwardRef)(({value:e,onChange:t},n)=>{let[o,s]=(0,l.useState)(a),[d,c]=(0,l.useState)(a);return(0,l.useEffect)(()=>(s("like"===e?"icons.like":a),c("dislike"===e?"icons.dislike":a),()=>{s(a),c(a)}),[e]),l.createElement(r.Z,{ref:n,gridTemplateColumns:"1fr 1fr",gap:30},l.createElement(i.Z,{type:"like",label:"Sim",color:o,onClick(){c(a),t({target:{value:"like"}})},onMouseOver:()=>s("icons.like"),onMouseLeave:()=>s(t=>"like"===e?t:a),"data-testid":"btn-like"}),l.createElement(i.Z,{type:"dislike",label:"N\xe3o",color:d,onClick(){s(a),t({target:{value:"dislike"}})},onMouseOver:()=>c("icons.dislike"),onMouseLeave:()=>c(t=>"dislike"===e?t:a),"data-testid":"btn-dislike"}))});o.displayName="Confirm";var s=o},12241:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(99673),s=n(55403),d=n(29869),c=n(60861);let u=(0,o.ZP)(d.Z)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: ${e=>(0,s.uu)("scratched")(e)};
  height: 52px;
`,p=(0,o.ZP)(c.Z)`
  align-items: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  display: flex;
  flex-direction: column;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  height: 52px;
  min-width: 64px;
  padding: ${e=>(0,s.R)("space.1")(e)}px;
`;var m=n(19527),g=n(86349);function h(e){let{value:t}=e,n=(0,i.Z)(e,["value"]),{color:o,"data-testid":s,disabled:d,uppercase:c,variation:h,delay:f}=n,b=(0,i.Z)(n,["color","data-testid","disabled","uppercase","variation","delay"]),[x,v]=(0,r.useState)(!1),[Z,$]=(0,r.useState)(d),E=e=>(v(!0),$(!0),(0,g.vQ)(e),setTimeout(()=>{v(!1),$(!1)},f));return r.createElement(m.Z,null,r.createElement(u,(0,l.Z)({"data-testid":`${s}-input`,readOnly:!0,value:t},b)),r.createElement(p,{color:o,"data-testid":`${s}-button`,disabled:Z,onClick:()=>E(t),startIcon:r.createElement(a.CKM,{width:25,height:21}),uppercase:c,variation:h},x?"Copiado":"Copiar"))}h.defaultProps={color:"primary","data-testid":"copy-to-clipboard",delay:3e3,disabled:!1,uppercase:!1,value:"",variation:"fill"},h.displayName="CopyToClipboard";var f=h},84022:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(31461),i=n(2784),r=n(99673),a=n(55403),o=n(19527);let s=(0,r.ZP)(o.Z)``,d=r.ZP.span`
  background-color: ${e=>e.color||(0,a.dF)("primary")(e)};
  border-radius: 50%;
  color: ${e=>(0,a.uu)("lightest")(e)};
  min-width: ${e=>(0,a.R)("space.3")(e)}px;
  min-height: ${e=>(0,a.R)("space.3")(e)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`,c=e=>{let{count:t}=e,n=(0,l.Z)(e,["count"]);return i.createElement(i.Fragment,null,t>=1&&i.createElement(s,n,i.createElement(d,n,t)))};c.defaultProps={count:0};var u=c},57142:function(e,t,n){n.d(t,{Z:function(){return E}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(19527),s=n(86349),d=n(99673),c=n(55403),u=n(29869),p=n(60861);let m=(0,d.ZP)(o.Z).attrs(e=>Object.assign({},e,{alignItems:"center"}))`
  background-color: ${(0,c.dF)("limeGreen")};
  border-radius: 8px;
  height: 40px;
  padding: 6px;
  width: 100%;
  margin-bottom: 12px;
`,g=(0,d.ZP)(o.Z).attrs(e=>Object.assign({alignItems:"center"},e))`
  color: ${e=>(0,c.R)("colors.black")(e)};
  flex-shrink: 0;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  padding: 0 6px;
  width: fit-content;

  > strong {
    font-weight: 600;
  }

  > svg {
    margin-right: 4px;
  }
`,h=(0,d.ZP)(o.Z)`
  width: 100%;
  position: relative;
`,f=(0,d.ZP)(u.Z)`
  border: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  color: ${e=>(0,c.R)("colors.darkGray")(e)};
  font-weight: 600;
  height: 28px;
`,b=(0,d.ZP)(p.Z).attrs(e=>Object.assign({uppercase:!1},e))`
  align-items: center;
  background-color: ${(0,c.dF)("white")};
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  color: ${e=>(0,c.R)("colors.blue")(e)};
  display: flex;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: 600;
  height: 28px;
  min-width: 74px;
  padding: ${e=>(0,c.R)("space.1")(e)}px;

  svg {
    margin-right: 4px;
    fill: ${e=>(0,c.R)("colors.blue")(e)};
  }

  &:hover {
    color: ${e=>(0,c.R)("colors.blue")(e)};
    background-color: ${(0,c.dF)("white")};
  }
`,x=d.ZP.div`
  align-items: center;
  background-color: ${e=>(0,c.R)("colors.deepGreen")(e)};
  border-radius: 4px;
  color: ${e=>(0,c.R)("colors.white")(e)};
  display: flex;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: 600;
  height: 28px;
  justify-content: center;
  opacity: ${({isActive:e})=>e?1:0};
  pointer-events: ${({isActive:e})=>e?"auto":"none"};
  position: absolute;
  transition: opacity 0.2s ease-in;
  width: 100%;
  > svg {
    fill: ${e=>(0,c.R)("colors.white")(e)};
    margin-right: 4px;
  }
`,v=d.ZP.div`
  color: ${e=>(0,c.R)("colors.greyishBrown")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.0")(e)}px;
`,Z=({type:e,value:t})=>e&&t?"percentage"===e?`${t}% OFF`:`R$ ${t} OFF`:"";function $(e){let{auxiliaryText:t,code:n,discountType:d,discountValue:c,delay:u=3e3,expirationDate:p,onCopySuccess:$}=e,E=(0,i.Z)(e,["auxiliaryText","code","discountType","discountValue","delay","expirationDate","onCopySuccess"]),y=Object.assign({},E),[w,k]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e;return w&&(e=setTimeout(()=>k(!1),u)),()=>{e&&clearTimeout(e)}},[w,u]);let P=async e=>{let t=await (0,s.vQ)(e);t&&(k(!0),$(e))},C=Z({type:d,value:c});return r.createElement(o.Z,{flexDirection:"column","data-testid":"coupon-code-copy"},r.createElement(m,null,r.createElement(g,null,r.createElement(a.XVb,{width:16,height:16})," ",r.createElement("strong",null,C)),r.createElement(h,null,r.createElement(f,(0,l.Z)({"data-testid":"coupon-code-input",readOnly:!0,value:n},y)),r.createElement(x,{"data-testid":"coupon-code-copied",isActive:w},r.createElement(a.NGQ,{width:17,height:13})," ",r.createElement("span",null,"Copiado")),r.createElement(b,{"data-testid":"coupon-code-button",startIcon:r.createElement(a.CKM,{width:12,height:14}),onClick:()=>P(n)},"Copiar"))),r.createElement(v,null,t," ",p))}$.defaultProps={auxiliaryText:"Copie o cupom e aplique na sacola. V\xe1lido at\xe9",code:"",discountType:"",discountValue:"",expirationDate:"",onCopySuccess(){}},$.displayName="CouponCodeCopy";var E=$},80001:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784),i=n(99673),r=n(87043);let a=(0,i.ZP)(r.UQ)`
  div + div:last-child {
    -webkit-line-clamp: unset;
    max-height: 100%;
    ${e=>e.open?`
            max-height: 100%;
          `:`
            max-height: 0px;
          `}
  }
`;var o=n(66228);let s=({faq:e,initialOpen:t,maxQuestions:n,showMoreQuestions:i,showLessQuestions:r,questionAs:s})=>{let[d,c]=(0,l.useState)(e.map(e=>Object.assign({},e,{isOpen:t}))),[u,p]=(0,l.useState)(n),m=e=>{c(t=>t.map((t,n)=>e===n?Object.assign({},t,{isOpen:!t.isOpen}):t))},g=()=>{p(e.length)},h=()=>{p(n)};return l.createElement(l.Fragment,null,d.map((e,t)=>l.createElement(a,{"data-testid":"item-question",display:t>=u?"none":"block",key:`faq-accordion-${t}`,title:e.question,asTitle:s,open:e.isOpen,onClick(){m(t)},openIcon:"ChevronRight",closeIcon:"ChevronUp"},e.answer)),i&&u<d.length&&l.createElement(a,{"data-testid":"show-more",title:i,open:!1,onClick:g,openIcon:"ChevronDown",closeIcon:"ChevronDown",fontWeight:"100"}),r&&u===d.length&&l.createElement(a,{"data-testid":"show-less",title:r,open:!1,onClick:h,openIcon:"ChevronUp",closeIcon:"ChevronUp",fontWeight:"100"}),l.createElement(o.ZP,{schema:(0,o.I1)(d),type:"FAQPage"}))};s.defaultProps={questionAs:"h3",faq:[],initialOpen:!1,maxQuestions:void 0,showLessQuestions:"",showMoreQuestions:""};var d=s},99554:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(31461),i=n(2784),r=n(34490),a=n(99673),o=n(55403),s=n(84546),d=n(66457);let c=(0,a.ZP)(s.Z)`
  border: solid 1px ${e=>(0,o.uu)("lighter")(e)};
  border-radius: 2px;
`;var u=n(33055);let p=e=>{let{onChange:t,onClearInput:n,label:a}=e,o=(0,l.Z)(e,["onChange","onClearInput","label"]),[s,p]=(0,i.useState)(""),m=e=>{p(e.target.value),t(e)},g=e=>{p(""),n(e)};return i.createElement(c,o,i.createElement(d.xJ,null,i.createElement(r.olm,{color:"#818181","data-testid":"icon-search"}),i.createElement("form",null,i.createElement(u.Z,{text:"pesquisar por filtro",htmlFor:"search-filter"}),i.createElement(d.II,{id:`search-filter ${a}`,value:s,onChange:m,placeholder:`Busque por ${a}`})),s&&i.createElement(r.B86,{color:"#818181",onClick:g,title:"Limpar texto"})))};p.defaultProps={onChange:()=>({}),onClearInput:()=>({}),label:""};var m=p},1729:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(2784),i=n(34490),r=n(99673),a=n(8341);let o=(0,r.ZP)(a.Z)({gridTemplateColumns:"auto 1fr",alignItems:"center",padding:"6px 12px"}),s=r.ZP.div`
  margin-right: 7px;
`,d=r.ZP.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  text-decoration: none;
`,c=r.ZP.div``;var u=n(63825);let p=({item:e,onClick:t,children:n})=>{let{label:r,selected:a}=e,[p,m]=(0,l.useState)(a);return(0,l.useEffect)(()=>(m(a),()=>{m(!1)}),[a]),l.createElement("li",null,l.createElement(d,{onClick:n=>t(n,e),"aria-label":`Filtrar por ${e.name}`,"data-testid":"filter-item"},l.createElement(o,null,l.createElement(s,{role:"checkbox","aria-checked":a,"aria-labelledby":r},p?l.createElement(i.nvx,{"aria-hidden":"true"}):l.createElement(i.XE8,{"aria-hidden":"true"})),l.createElement(c,{children:n||l.createElement(u.Z,{fontSize:1,id:r},r)}))))};p.defaultProps={item:{selected:!1},children:null,onClick:()=>({})};var m=p},33055:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(31461),i=n(2784),r=n(99673);let a=r.ZP.label`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,o=e=>{let{text:t}=e,n=(0,l.Z)(e,["text"]);return i.createElement(a,n,t)};o.defaultProps={text:""};var s=o},2490:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(2784),i=n(99673),r=n(19527),a=n(84546);let o=i.iv`
  overflow-y: hidden;

  > *:not(:first-child) {
    margin-left: 8px;
  }
`,s=i.iv`
  overflow-x: hidden;

  > *:not(:first-child) {
    margin-top: 8px;
  }
`,d=({directionType:e})=>"row"===e?o:s,c=(0,i.ZP)(r.Z).attrs(({directionType:e})=>({pb:"1em",flexDirection:e}))`
  ${({directionType:e})=>"column"===e&&`
      padding: 1em;
  `}

  ${d};
`,u=(0,i.ZP)(a.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  text-decoration: underline;
  cursor: pointer;
`;var p=n(39471);let m=({items:e,onItemClick:t,directionType:n,limitItems:i})=>{let[r,a]=(0,l.useState)(i),o=e.length,s=(0,l.useMemo)(()=>i?e.slice(0,r):e,[i,e,r]);return l.createElement(c,{"data-testid":"hot-links",directionType:n},s.map((e,i)=>l.createElement(p.Z,{key:i,item:e,onClick:t,directionType:n,borderColor:e.borderColor})),!!i&&r<o&&l.createElement(u,{onClick:()=>a(o),"data-testid":"show-more",role:"button"},"Ver mais"))};m.defaultProps={items:[],directionType:"row",limitItems:null,onItemClick(){}};var g=m},15309:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(2784),i=n(99673);let r=i.ZP.div`
  border: 0;
  background: transparent;
  display: flex;
`;var a=function({onClick:e,children:t}){return l.createElement(r,{onClick(t){var n,l;e(t)}},t)}},97769:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),i=n(31461),r=n(2784),a=n(71180),o=n(99673),s=n(55403),d=n(68054),c=n(63825);let u=(0,o.ZP)(c.Z).attrs(({isList:e})=>({fontSize:[e?0:1,1],fontWeight:"regular",lineHeight:["fontSize","display"]}))`
  ${d.cp}
  margin-bottom: ${()=>(0,s.R)("space.2")}px;
`,p=o.ZP.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,m=e=>{let{information:t,isList:n,minimumInstallment:o}=e,s=(0,i.Z)(e,["information","isList","minimumInstallment"]),{quantity:d,amount:c,paymentMethodDescription:m,totalAmount:g}=t,h=(0,a.oB)({value:c}),f=(0,a.oB)({value:g}),b=d>1&&!n,x=`${d}x de ${h} ${m}`,v=`${f} em ${d}x de ${h} ${m}`,Z=`${d} vez de ${h} ${m}`,$=`${g} em ${d} vezes de ${h} ${m}`;return 0===o?r.createElement(r.Fragment,null,r.createElement(u,(0,l.Z)({isList:n,"data-testid":"installment","aria-hidden":"true"},s),b?v:x),r.createElement(p,null,b?$:Z)):r.createElement(r.Fragment,null,r.createElement(u,(0,l.Z)({isList:n,"data-testid":"installment","aria-hidden":"true"},s),v),r.createElement(p,null,$))};m.defaultProps={information:{amount:"",isList:!1,paymentMethodDescription:"",quantity:"",totalAmount:""},minimumInstallment:1};var g=m},78012:function(e,t,n){n.d(t,{Z:function(){return D}});var l=n(7896),i=n(31461),r=n(2784);let a=(e,t,n)=>Array.isArray(e)&&"string"==typeof n&&n?null==e?void 0:e.filter(e=>{var l,i;return null==(l=e[n])?void 0:null==(i=l.toUpperCase())?void 0:i.includes(t.toUpperCase())}):e,o=(e,t)=>t instanceof Function?null==e?void 0:e.sort(t):e;var s=({searchTerm:e,dataSource:t,sortBy:n,searchProperty:l})=>o(a(t,e,l),n);let d=(0,r.createContext)(!1),c=e=>{let{children:t,value:{disableGutters:n}}=e,l=(0,i.Z)(e.value,["disableGutters"]);return r.createElement(d.Provider,{value:Object.assign({basis:n?32:40,gutters:n?0:3},l)},t)},u=()=>(0,r.useContext)(d);var p=n(99673),m=n(55403),g=n(81572),h=n(88699),f=n(87043);let b=({gutters:e,basis:t=0,inset:n=0,props:l})=>(0,m.R)(`space.${e}`)(l)+parseInt(t,10)*Number(n),x=({horizontal:e})=>e&&p.iv`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
    justify-content: space-between;
  `,v=p.iv`
  > *:not(:last-child) {
    border-bottom: ${(0,m.R)("borders.0")};
  }
`,Z=p.ZP.li({listStyle:"none",position:"relative"}),$=(0,p.ZP)(g.Z).attrs(e=>{let{inset:t,basis:n,gutters:l,content:r,horizontal:a}=e,o=(0,i.Z)(e,["inset","basis","gutters","content","horizontal"]);return Object.assign({position:"relative",gap:0,rowGap:2,px:0,py:r?2:0,pl:t?b({gutters:l,basis:n,inset:t,props:o}):b({gutters:l,props:o}),pr:b({gutters:l,props:o})},a&&{textAlign:"center",pl:0,pr:0},o)})`
  cursor: pointer;
  ${({selectable:e})=>e&&p.iv`
      &:hover {
        background: ${(0,m.dF)("darker")};
      }
    `};

  ${({horizontal:e})=>e&&p.iv`
      > span {
        position: unset;
        transform: unset;
        left: 0;
      }
    `}

  ${({divided:e,isCollapsed:t})=>e&&!t&&p.iv`
      border-top: ${(0,m.R)("borders.0")};
    `}
`,E=(0,p.ZP)(f.rj)`
  ${({divided:e})=>e&&v}
  ${x}
`,y=(0,p.ZP)(h.Z)`
  ${({divided:e})=>e&&v}
  ${x}
`,w=e=>{let{as:t,children:n,color:a,fill:o,startIcon:s,endIcon:d,onClick:c}=e,p=(0,i.Z)(e,["as","children","color","fill","startIcon","endIcon","onClick"]),{variant:m,divided:g,scale:h,gutters:f,isCollapsed:b}=u();return r.createElement($,(0,l.Z)({forwardedAs:t,variant:m,startIcon:s,endIcon:d,gutters:f,scale:h,color:a,fill:o,divided:g,isCollapsed:b,onClick:c,"data-testid":"list-action"},p),n)};w.defaultProps={as:"div",centered:!1,children:null,fontWeight:"medium",gap:1},w.displayName="ListAction";var k=n(19527),P=n(18281);let C=e=>{let t=t=>{let{as:n}=t,a=(0,i.Z)(t,["as"]),{type:o}=u();return["ul","ol"].includes(o)&&"a"===n?r.createElement(Z,null,r.createElement(e,(0,l.Z)({as:n},a))):r.createElement(e,(0,l.Z)({as:["ul","ol"].includes(o)?"li":"div"},a))};return t.defaultProps={as:""},t},z=e=>{let{as:t,checked:n,children:a,content:o,defaultChecked:s,description:d,endIcon:c,fill:p,value:m,onClick:g}=e,h=(0,i.Z)(e,["as","checked","children","content","defaultChecked","description","endIcon","fill","value","onClick"]),[f,b]=(0,r.useState)(n),{variant:x,scale:v,basis:Z,gutters:E,selectable:y}=u(),w=e=>{b(!f),g(e)};return(0,r.useEffect)(()=>{b(n)},[n]),r.createElement($,(0,l.Z)({forwardedAs:t,variant:x,startIcon:r.createElement(k.Z,{width:Z},r.createElement(P.Z,{checked:f,defaultChecked:s,value:m})),endIcon:c,description:d,content:o,selectable:y,scale:v,gutters:E,fill:p,onClick:w,"data-testid":"list-checkbox"},h),a)};z.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onClick(){}};var S=C(z);let I=e=>{let{as:t,children:n}=e,a=(0,i.Z)(e,["as","children","onClick"]),{variant:o,scale:s,gutters:d}=u();return r.createElement($,(0,l.Z)({forwardedAs:t,variant:o,scale:s,gutters:d,"data-testid":"list-header"},a),n)};I.defaultProps={children:null,fontSize:2,fontWeight:"medium"},I.displayName="ListHeader";var R=C(I),O=n(34490);let j=e=>{let{as:t,children:n,content:a,description:o,endIcon:s,fill:d,inset:c,onClick:p,startIcon:m}=e,g=(0,i.Z)(e,["as","children","content","description","endIcon","fill","inset","onClick","startIcon"]),{variant:h,basis:f,scale:b,gutters:x,selectable:v,horizontal:Z}=u();return r.createElement($,(0,l.Z)({forwardedAs:t,variant:h,startIcon:m&&!c&&r.createElement(k.Z,{width:f},"string"==typeof m?r.createElement(O.JO$,{name:m,color:d,fill:d}):m),endIcon:s&&("string"==typeof s?r.createElement(k.Z,{width:f,justifyContent:"flex-end"},r.createElement(O.JO$,{name:s,color:d,fill:d})):s),description:o,content:a,selectable:v,gutters:x,basis:f,inset:c,scale:b,fill:d,horizontal:Z,onClick:p,"data-testid":"list-item"},g),n)};j.defaultProps={children:null,endIcon:"",fill:"currentColor",inset:!1,startIcon:""},j.displayName="ListItem";var F=C(j),M=n(70715);let L=e=>{let{as:t,children:n,href:a,label:o,value:s,selected:d,description:c,endIcon:p,fill:m,onChange:g,position:h,eventLabel:f,filterLabel:b}=e,x=(0,i.Z)(e,["as","children","href","label","value","selected","description","endIcon","fill","selectedOption","onChange","position","eventLabel","filterLabel"]),{name:v,variant:Z,basis:E,scale:y,gutters:w,selectable:P}=u(),C=e=>{e.preventDefault(),g(e,{label:f,href:a,value:s,selected:d,filterLabel:b,position:h})};return r.createElement($,(0,l.Z)({forwardedAs:t,variant:Z,onClick:C,startIcon:r.createElement(k.Z,{width:E},r.createElement(M.Z,{readOnly:!0,name:v,label:o,checked:d,value:s,width:1})),endIcon:p,description:c,selectable:P,scale:y,gutters:w,fill:m,"data-testid":"list-radio-group",href:a},x),n)};L.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onChange(){}};var A=C(L);let T=({children:e,dataSource:t,renderItem:n,searchProperty:l,searchTerm:i,sortBy:a})=>{let o=(0,r.useMemo)(()=>s({dataSource:t,searchProperty:l,searchTerm:i,sortBy:a}),[t,i]);return Array.isArray(o)&&n instanceof Function?null==o?void 0:o.map((e,t)=>n(Object.assign({key:t},e))):e},W=e=>{let{as:t,children:n,dataSource:a,disableGutters:o,horizontal:s,divided:d,name:u,renderItem:p,scale:m,searchProperty:g,searchTerm:h,selectable:f,sortBy:b,variant:x,renderAction:v,trigger:Z,collapsedIn:$,collapse:w}=e,k=(0,i.Z)(e,["as","children","dataSource","disableGutters","horizontal","divided","name","renderItem","scale","searchProperty","searchTerm","selectable","sortBy","variant","renderAction","trigger","collapsedIn","collapse"]),[P,C]=(0,r.useState)(a),[z,S]=(0,r.useState)(h);return(0,r.useEffect)(()=>{S(h)},[h]),(0,r.useEffect)(()=>{C(a)},[JSON.stringify(a)]),r.createElement(c,{value:{divided:d,disableGutters:o,horizontal:s,name:u,selectable:f,scale:m,variant:x,type:t,isCollapsed:Z}},r.createElement(w?y:E,(0,l.Z)({forwardedAs:t,divided:d,trigger:Z,collapsedIn:$,horizontal:s,"data-testid":"list"},k),r.createElement(T,{searchTerm:z,dataSource:P,sortBy:b,searchProperty:g,renderItem:p,children:n})),v)};W.defaultProps={as:"ul",children:null,dataSource:[],disableGutters:!1,divided:!1,scale:"medium",searchProperty:"",searchTerm:"",selectable:!1,variant:"transparent",horizontal:!1},W.Collapse=e=>r.createElement(W,(0,l.Z)({collapse:!0},e)),W.Header=R,W.Item=F,W.Action=w,W.Checkbox=S,W.Radio=A,W.Collapse.displayName="ListCollapse";var D=W},33359:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(2784),i=n(34490),r=n(99673),a=n(19527);let o=(0,r.ZP)(a.Z)`
  cursor: pointer;
`,s=[{id:"gallery",label:"Galeria",icon:l.createElement(i.qiR,{height:"20",color:"#818181"})},{id:"list",label:"Lista",icon:l.createElement(i.OWX,{height:"18",color:"#818181"})},{id:"miniature",label:"Miniatura",icon:l.createElement(i.DxU,{height:"16",color:"#818181"})}];function d({onChange:e,defaultMode:t}){let[n,i]=(0,l.useState)(s.find(e=>e.id===t)),[r,a]=(0,l.useState)(s.findIndex(e=>e.id===t)+1);return(0,l.useEffect)(()=>{if(n.id!==t){let l=s.findIndex(e=>e.id===t);a(l+1),i(s[l]);let r=Object.assign({},s[l]);e(r)}},[t]),l.createElement(o,{onClick:function(){(function(e){if(e>=s.length-1){a(0);return}a(e+1)})(r),i(s[r]);let t=Object.assign({},s[r]);delete t.icon,e(t)},p:1,"data-testid":"display-type"},n.label," ",n.icon)}d.defaultProps={defaultMode:"gallery"};var c=d},41065:function(e,t,n){n.d(t,{Z:function(){return v}});var l=n(7896),i=n(31461),r=n(2784),a=n(71180),o=n(99673),s=n(55403),d=n(84546),c=n(7029);let u=o.ZP.li`
  display: flex;
  align-items: center;
  padding: ${e=>(0,s.R)(`space.${e.desktopMode?1:2}`)(e)}px;
  ${e=>e.desktopMode&&o.iv`
      cursor: pointer;
      ${({borderBottom:e})=>e&&o.iv`
          border-bottom: 1px solid #e5e5e5;
        `}

      :hover {
        background-color: #dcebf4;
      }
    `}
`,p=(0,o.ZP)(d.Z)`
  padding-left: ${e=>(0,s.R)("space.1")(e)}px;
  font-size: ${e=>(0,s.R)(`fontSizes.${e.desktopMode?0:2}`)(e)}px;
  color: ${e=>(0,s.uu)("scratched")(e)};
`,m=(0,o.ZP)(d.Z)`
  padding-left: ${e=>(0,s.R)("space.1")(e)}px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,s.uu)("primary")(e)};
  font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  text-align: initial;
`,g=(0,o.ZP)(c.Z)``,h=o.ZP.div`
  width: 59px;
  height: 44px;
`,f=(e,t,n)=>{var l;let i=null==e?void 0:null==(l=e.toLowerCase())?void 0:l.trim(),a=t.toLowerCase().indexOf(i);return 0===a?r.createElement("span",{key:n},i,r.createElement("strong",null,t.substring(a+i.length,t.length))):r.createElement("span",{key:n},r.createElement("strong",null,t.substring(0,a)),i,r.createElement("strong",null,t.substring(a+i.length,t.length)))},b=({query:e,suggestionItem:t})=>{if(e===t.term)return e;let n=e.split(" "),l=t.term.split(" ");return l.filter(e=>Boolean(e)).map((e,t)=>{let l=n.find(t=>e.toLowerCase().includes(t.toLowerCase()));return l?l===e?e:f(l,e,t):r.createElement("strong",{key:t.toString()},e)}).reduce((e,t)=>[e," ",t])},x=e=>{let{item:t,term:n,desktopMode:o,onSearchSubmit:s}=e,d=(0,i.Z)(e,["item","term","desktopMode","onSearchSubmit"]),[c,f]=(0,r.useState)(n);return(0,r.useEffect)(()=>{f(n)},[n]),r.createElement(u,(0,l.Z)({"data-testid":"suggestion-item",key:t.count||t.id,onClick:s,desktopMode:o},d),t.img&&r.createElement(h,null,r.createElement(g,{src:t.img})),d.prefix&&!t.img?d.prefix:r.createElement(r.Fragment,null),r.createElement("div",null,r.createElement(p,(0,l.Z)({"data-testid":"suggestion-text",desktopMode:o},d),b({query:c,suggestionItem:t}),o&&t.count?` (${t.count})`:""),t.price&&r.createElement(m,{"data-testid":"suggestion-price"},(0,a.oB)({value:t.price}))))};var v=x;x.defaultProps={item:{},desktopMode:!1,borderBottom:!1,onSearchSubmit:null}},97949:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(99673),s=n(10200);let d=(0,o.ZP)(s.Z).attrs(e=>Object.assign({},e))`
  width: ${e=>e.width||"90px"};
  height: ${e=>e.height||"90px"};
  background: url(${e=>e.mediaUrl}) no-repeat center lightgray;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`,c=e=>{let{children:t,media:n,onClick:o,width:s,height:c}=e,u=(0,i.Z)(e,["children","media","onClick","width","height"]),{mediaType:p,mediaUrl:m}=n;return r.createElement(d,(0,l.Z)({"data-testid":`media-card-${m}`,mediaUrl:m,onClick:o,width:s,height:c},u),"video"===p&&r.createElement(a.JO$,{name:"VideoCircle",width:"40px",height:"40px"}),t)};var u=c},48919:function(e,t,n){n.d(t,{Z:function(){return C}});var l=n(7896),i=n(31461),r=n(2784),a=n(99673),o=n(68054),s=n(55403),d=n(10200),c=n(19527);let u=a.ZP.nav`
  background-color: ${e=>(0,s.dF)("white")(e)};
  width: fit-content;
  padding: 20px;
`,p=a.ZP.ul`
  list-style: none;
  display: flex;
`,m=a.ZP.li.attrs(()=>({mr:3}))`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: max-content;

  ${o.Dh}
`,g=(0,a.ZP)(d.Z)``,h=(0,a.ZP)(c.Z).attrs(e=>Object.assign({color:"text.primary",m:0},e))``,f=({data:e,onMenuFooterClick:t})=>{let{linksList:n}=e;return r.createElement(u,{"data-testid":"header-menu-footer-elem"},n?r.createElement(p,null,n.map((e,n)=>r.createElement(m,{key:`footer-item-${n}`},e.img&&e.img.component&&r.createElement(h,{"data-testid":"image-elem",width:e.img.width},e.img.component),r.createElement(g,{onClick:n=>t(n,e),href:e.url,px:2},e.label)))):r.createElement(r.Fragment,null))};f.defaultProps={data:{},onMenuFooterClick:()=>({})};let b=a.ZP.div.attrs(e=>Object.assign({bg:"background.white"},e))`
  border-bottom: ${e=>e.borderColor?`5px solid ${e.borderColor}`:""};
  max-height: fit-content;
  width: fit-content;
  ${s.$_}
`,x=a.ZP.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
`,v=a.ZP.div.attrs(e=>Object.assign({p:3},e))`
  display: flex;
  flex-direction: column;
  ${o.Dh}
`,Z=a.ZP.div.attrs(e=>Object.assign({m:3},e))`
  /* let external project to define banner's width */
  ${o.bK}
  ${o.Dh}
`,$=a.ZP.ul`
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(${e=>e.lines}, auto);
`,E=a.ZP.li.attrs(e=>Object.assign({mr:5},e))`
  list-style: none;
  line-height: 24px;
  ${o.Dh}
`,y=(0,a.ZP)(d.Z)``,w=a.ZP.li.attrs(e=>Object.assign({color:"primary.base",fontSize:1,fontWeight:"bold",px:2},e))`
  list-style: none;
  line-height: 24px;
  ${s.$_}
  ${o.cp}
  ${o.Dh}
`;var k=n(87043);let P=e=>{let{data:t}=e,n=(0,i.Z)(e,["data"]),{subcategoriesList:a,url:o,label:s,borderColor:d,banner:c,footerData:u,linePerCol:p=16,subsections:m}=t,{onMenuItemClick:g}=n;return r.createElement(b,{"data-testid":"menu-box-elem",borderColor:d},r.createElement(x,null,a?r.createElement(v,null,r.createElement($,{lines:p},a.map((e,t)=>r.createElement(E,{key:`link-item-${t}`},r.createElement(y,(0,l.Z)({},e.highlight?{color:d}:{},{href:e.url,onClick:t=>g(t,e,"departamento")}),e.label))),m?m.map((e,t)=>r.createElement(r.Fragment,{key:`subsection-${t}`},r.createElement("div",null),r.createElement(w,{key:`subsection-title-${t}`},e.label),e.linksList.map((e,n)=>r.createElement(E,{key:`subsection-link-item-${t}-${n}`},r.createElement(y,{onClick:t=>g(t,e,"subsection"),href:e.url},e.label))))):r.createElement(r.Fragment,null)),o&&"#"!==o&&s?r.createElement(y,{color:d,href:o},"+ ",s):r.createElement(r.Fragment,null)):r.createElement(r.Fragment,null),c&&c.component&&r.createElement(Z,{"data-testid":"banner-elem",width:c.width},c.component)),u?r.createElement(r.Fragment,null,r.createElement(k.bo,null),r.createElement(f,{data:u,onMenuFooterClick:(e,t)=>g(e,t,"footer")})):r.createElement(r.Fragment,null))};P.defaultProps={onMenuItemClick:()=>({}),data:{}};var C=P},28982:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784),i=n(99673),r=n(55403),a=n(19527);let o=(0,i.ZP)(a.Z).attrs(()=>({flexDirection:["column","row","row"],justifyContent:"space-evenly",left:0,lineHeight:"big",padding:3,position:"fixed",top:["0","inherit","inherit"],width:"100%",zIndex:3}))`
  background-color: ${e=>(0,r.R)("baseColors.overlay.dark")(e)};
  ${(0,r.aK)("small")} {
    bottom: 0;
    max-height: 100px;
  }
`,s=({children:e})=>l.createElement(o,null,e);s.defaultProps={children:void 0};var d=s},3310:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(87043),s=n(86349),d=n(12468),c=n(99673),u=n(55403);let p=(0,c.ZP)(o.kC)`
  background-color: ${e=>(0,u.dF)(e.bg)(e)};
  max-width: 208px;
`,m=e=>{let{restrictions:t={},height:n,fontSize:c,displayMode:u,text:m,bg:g}=e,h=(0,i.Z)(e,["restrictions","height","fontSize","displayMode","text","bg"]),[f,b]=(0,r.useState)(""),[x,v]=(0,r.useState)(!1),Z=u===d.IY;return((0,r.useEffect)(()=>{let e=()=>{let e=(0,s.bd)(),{show:n,timeRemainingFormatted:l}=(0,s.lb)(t,e);v(n),n&&b(l)},n=setInterval(e,1e3);return e(),()=>clearInterval(n)},[t]),x)?r.createElement(p,(0,l.Z)({"data-testid":"offer-timer",borderRadius:2,justifyContent:"center",alignItems:"center",bg:g,height:n,mt:[Z&&1,2],mr:Z?"10px":0},h),r.createElement(a.JO$,{color:"#FFF5F0",height:["12px","14px"],width:["12px","14px"],name:"Timer",mr:1}),r.createElement(o.xv,{fontSize:c},r.createElement(o.xv,{color:"white",as:"span"},m)," ",r.createElement(o.xv,{color:"white",as:"time",fontWeight:"bold",dateTime:(0,s.J5)(f)},f))):null};m.defaultProps={height:"20px",fontSize:"10px",displayMode:d.IY,bg:"#9110C2",text:"Oferta termina em"};var g=m},19620:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),i=n(2784);let r=(e,t)=>Array.from({length:t-e+1},(t,n)=>e+n),a=(e,t)=>{let n=`page=${t}`;if(e.includes("page=")){let[l]=e.split("page=");return 1===t?l.substring(0,l.length-1):`${l}${n}`}return 1===t?e:e.includes("?")?`${e}&${n}`:`${e}?${n}`};var o=n(99673);let s=o.ZP.nav``,d=o.ZP.ul`
  list-style: none;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  & > li {
    margin-right: 8px;
  }
`;o.ZP.li`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 26px;
  min-width: 26px;
  height: 30px;
  border-radius: 2px;
  border: 0;
  font-weight: normal;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
`;var c=n(81484);function u(e){let{items:t}=function(e={}){let{boundaryCount:t=1,count:n=1,disabled:l,path:i="",page:o=1,onChange:s,siblingCount:d=1}=e,c=(e,t)=>{s(e,t)},u=t-1,p=r(1,Math.min(u+1,n)),m=r(Math.max(n-u,u+2),n),g=Math.max(Math.min(o-d,n-u-2*d-2),u+3),h=Math.min(Math.max(o+d,u+2*d+3),m[0]-2),f=["previous",...p,...g>u+3?["ellipsis"]:2+u<n-u-1?[2+u]:[],...r(g,h),...h<n-u-2?["ellipsis"]:n-u-1>u+1?[n-u-1]:[],...m,"next"],b={first:1,previous:o-1,next:o+1,last:n},x=f.map(e=>"number"==typeof e?{onClick(t){c(t,e)},type:"page",page:e,selected:e===o,disabled:l,href:a(i,e),"aria-current":e===o?"true":void 0}:{onClick(t){c(t,b[e])},type:e,page:b[e]||null,disabled:"next"===e?o>=n:o<=1});return{items:x}}(e);return i.createElement(s,(0,l.Z)({},e,{"aria-label":"pagination navigation"}),i.createElement(d,null,null==t?void 0:t.map((e,t)=>{var n,r,a;let o=Object.assign({},e,{"aria-label":(n=e.type,r=e.page,a=e.selected,"page"===n?`${a?"":"Go to "}page ${r}`:`Go to ${n} page`)});return i.createElement("li",{key:t},i.createElement(c.Z,(0,l.Z)({},o,{"data-testid":"pagination-item"})))})))}u.defaultProps={boundaryCount:1,count:1,disabled:!1,page:1,siblingCount:1,onChange(){}}},81484:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),i=n(2784),r=n(99673),a=n(34490),o=n(55403);let s=r.ZP.div``,d=r.ZP.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  background-color: ${e=>e.selected&&(0,o.ow)("base")};
  color: ${e=>(0,o.ow)(e.selected?"text":"text.dark")(e)};
  padding: 5px;
  min-height: 26px;
  height: 30px;
  min-width: 26px;
  border: 0;
  border-radius: 2px;
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  font-family: ${e=>(0,o.R)("fontFamily")(e)};
  text-decoration: none;
`,c=r.ZP.button`
  visibility: ${e=>e.disabled?"hidden":"visible"};
  border: 0;
  background: none;
  display: flex;
`,u=e=>({width:30,height:30,color:e.disabled?"#ccc":"#333",cursor:e.disabled?"not-allowed":"pointer"}),p=(0,r.ZP)(a.s$$).attrs(u)``,m=(0,r.ZP)(a._Qn).attrs(u)``;function g(e){let{onClick:t,type:n,page:r,disabled:a,href:o}=e,u=["previous","next"].includes(n);return"ellipsis"===n?i.createElement(s,null,"..."):"page"===n?i.createElement(d,(0,l.Z)({href:o,role:"button",title:`p\xe1gina ${r}`,onClick:!e.selected&&t},e),r):i.createElement(c,(0,l.Z)({onClick:t},e),u&&("previous"===n?i.createElement(p,{disabled:a}):i.createElement(m,{disabled:a})))}g.defaultProps={disabled:!1,href:null,onClick(){},page:null,selected:!1}},563:function(e,t,n){n.d(t,{Z:function(){return U}});var l=n(7896),i=n(2784),r=n(34490),a=n(71180),o=n(86349),s=n(55403),d=n(99673),c=n(84546),u=n(19527),p=n(63825),m=n(60861),g=n(87043);(0,d.ZP)(c.Z)``;let h=(0,d.ZP)(u.Z)`
  padding: 2px;
  border: solid 2px
    ${({selected:e})=>e?(0,s.dF)("primary"):(0,s.dF)("darker")};
  border-radius: 2px;
  width: 50px;
  justify-content: center;
  margin: 0 2px;
`,f=(0,d.ZP)(g.td)`
  display: flex;
  margin: 0 10px;
`,b=d.ZP.table`
  width: 100%;
  border-spacing: unset;

  & tr:nth-child(n + 13) {
    display: ${({allVisible:e})=>e?"table-row":"none"};
  }
`,x=d.ZP.thead`
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: ${e=>(0,s.R)("colors.darkSilver")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,v=d.ZP.span`
  font-weight: ${e=>(0,s.R)("fontWeights.light")(e)};
  font-style: italic;
`,Z=d.ZP.th`
  text-align: left;
  padding: 0 10px;
`,$=d.ZP.td`
  padding: 8px 10px;
  text-align: left;
  color: ${e=>(0,s.uu)("base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,E=d.ZP.span`
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
`,y=d.ZP.th`
  text-align: right;
  padding: 0 10px;
`,w=d.ZP.td`
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: ${e=>(0,s.uu)("base")(e)};
  padding: 0px 10px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  text-align: right;
`,k=d.ZP.tr`
  background-color: ${e=>e.index%2==0?(0,s.dF)("darker")(e):null};
`,P=d.ZP.p`
  margin-top: 4px;
  margin-bottom: 8px;
`,C=d.ZP.span`
  display: flex;
  align-items: center;
  color: ${e=>(0,s.ow)("primary.base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  margin: 10px;
  font-weight: ${e=>(0,s.R)("fontWeight.normal")(e)};
`,z=d.ZP.span`
  color: ${e=>(0,s.uu)("base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
`,S=(0,d.ZP)(p.Z)`
  color: #429502;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  margin-left: 4px;
`,I=(0,d.ZP)(p.Z)``,R=(0,d.ZP)(p.Z)`
  color: ${e=>e.luizaCard?"#429502":(0,s.ow)("darkSilver")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,O=d.ZP.div`
  margin: 10px;
`,j=(0,d.ZP)(m.Z)`
  width: 100%;
`,F=(0,d.ZP)(p.Z)`
  padding: 8px 4px 8px 10px;
  font-size: 12px;
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: #8c8c8c;
  font-style: italic;
`,M=({onChange:e,payments:t})=>i.createElement(f,{"data-testid":"payments-list",onChange:e},["luizaCard","creditCard","pix","bankSlip"].map(e=>{var n;return!!(null!=t&&null!=(n=t[e])&&n.installmentPlans)&&i.createElement(g.OK,{value:t[e].id,key:`${e}-tab`,"data-testid":`${e}-tab`},i.createElement(h,null,i.createElement(r.JO$,{name:(0,o.kC)(e)})))}));M.defaultProps={payments:{}};let L=`Cart\xe3o Luiza`,A=`Cart\xe3o de cr\xe9dito`,T=`Boleto banc\xe1rio`,W="% de desconto",D=`No boleto banc\xe1rio, que ser\xe1 gerado na finaliza\xe7\xe3o da sua compra.`,N=`No PIX, com o c\xf3digo que ser\xe1 gerado na finaliza\xe7\xe3o da sua compra.`,B=e=>parseInt(e,10)>=10?`${e}x de`:`0${e}x de`;var _=n(31461);let H=e=>{let{installments:t,showAll:n,showMoreLabel:r,luizaCard:o}=e,s=(0,_.Z)(e,["installments","showAll","showMoreLabel","luizaCard"]),[d,c]=(0,i.useState)(n),u=e=>Boolean(Number((null==e?void 0:e.interestAmount)||0)),p=t.some(e=>!!Number(e.interestAmount)),m=e=>{let t=u(e);return(!t||o)&&(t||null===o)?null:i.createElement(R,{luizaCard:!t&&o},t?"com juros":"sem juros")};return i.createElement(i.Fragment,null,i.createElement(b,(0,l.Z)({allVisible:d},s),i.createElement(x,null,i.createElement("tr",null,i.createElement(Z,null,i.createElement(v,null,"(Produto + Frete)"),i.createElement(P,null,"Numero de parcelas")),i.createElement(y,null,"Total"))),i.createElement("tbody",null,t.map((e,t)=>{let n=u(e);return i.createElement(k,{index:t,key:null==e?void 0:e.installment},i.createElement($,null,i.createElement("span",null,Number(null==e?void 0:e.installment)>1&&B(null==e?void 0:e.installment)," ",i.createElement(E,null,(0,a.oB)({value:null==e?void 0:e.installmentAmount}),n&&o&&"*")),1===Number(null==e?void 0:e.installment)&&i.createElement(i.Fragment,null,!!Number((null==e?void 0:e.discount)||0)&&i.createElement(i.Fragment,null,i.createElement(S,{as:"span"},Number(null==e?void 0:e.discount),W))),m(e)),i.createElement(w,null,Number(null==e?void 0:e.installment)>1&&(0,a.oB)({value:null==e?void 0:e.totalAmount})))}))),p&&o&&i.createElement(F,{"data-testid":"legal-text"},"*Juros: Todos os encargos da opera\xe7\xe3o, como juros, custo de parcelamento e outras tarifas est\xe3o inclu\xeddas neste valor."),(t||[]).length>12&&!d&&i.createElement(j,{"data-testid":"show-more",size:"small",onClick:()=>c(!0)},r))};H.defaultProps={installments:[],showAll:!0,luizaCard:!1,showMoreLabel:"veja mais"};let V=e=>Object.values(e).reduce((e,t)=>Object.assign({},e,{[t.id]:t}),{}),J=({asTab:e,showMoreLabel:t,onChange:n,payments:o})=>{var s,d,c,p,m,h,f,b,x,v,Z,$;let{luizaCard:E,creditCard:y,bankSlip:w,pix:k}=o,[P,R]=(0,i.useState)((null==E?void 0:E.id)||(null==y?void 0:y.id)||(null==k?void 0:k.id)||(null==w?void 0:w.id)||""),j=V(o),F=(e,t)=>{R(t),n(j[t])},B=e?g.x4:u.Z,_=e?{width:"100%"}:{display:"block",flex:"1 1"};return i.createElement(g.q5,{value:P},e&&i.createElement(M,{onChange:F,payments:o}),i.createElement(u.Z,{justifyContent:"space-between",gap:2,flexWrap:"wrap"},(null==E?void 0:E.installmentPlans)&&i.createElement(B,(0,l.Z)({},_,{"data-testid":"luizaCard-panel",value:null==E?void 0:E.id}),i.createElement(C,null,!e&&i.createElement(r.OTZ,{mr:2})," ",L),i.createElement(H,{luizaCard:null==E?void 0:E.installmentPlans,showAll:e,"data-testid":"luizaCard-table",showMoreLabel:t,installments:E.installmentPlans})),(null==y?void 0:y.installmentPlans)&&i.createElement(B,(0,l.Z)({},_,{"data-testid":"creditCard-panel",value:null==y?void 0:y.id}),i.createElement(C,null,!e&&i.createElement(r.aBT,{mr:2})," ",A),i.createElement(i.Fragment,null,i.createElement(H,{showAll:e,"data-testid":"creditCard-table",showMoreLabel:t,installments:y.installmentPlans}))),k&&i.createElement(B,(0,l.Z)({},_,{"data-testid":"pix-panel",value:null==k?void 0:k.id}),i.createElement(C,null,!e&&i.createElement(r.wrL,{mr:2})," ","Pix"),i.createElement(O,null,i.createElement(z,null,(0,a.oB)({value:null==k?void 0:null==(s=k.installmentPlans)?void 0:null==(d=s[0])?void 0:d.installmentAmount})),!!Number(null==k?void 0:null==(c=k.installmentPlans)?void 0:null==(p=c[0])?void 0:p.discount)&&i.createElement(S,{as:"span"},Number(null==k?void 0:null==(m=k.installmentPlans)?void 0:null==(h=m[0])?void 0:h.discount),W),i.createElement(I,{fontSize:0},N))),w&&i.createElement(B,(0,l.Z)({},_,{"data-testid":"bankSlip-panel",value:null==w?void 0:w.id}),i.createElement(C,null,!e&&i.createElement(r.c4o,{mr:2})," ",T),i.createElement(O,null,i.createElement(z,null,(0,a.oB)({value:null==w?void 0:null==(f=w.installmentPlans)?void 0:null==(b=f[0])?void 0:b.installmentAmount})),!!Number(null==w?void 0:null==(x=w.installmentPlans)?void 0:null==(v=x[0])?void 0:v.discount)&&i.createElement(S,{as:"span"},Number(null==w?void 0:null==(Z=w.installmentPlans)?void 0:null==($=Z[0])?void 0:$.discount),W),i.createElement(I,{fontSize:0},D)))))};J.defaultProps={asTab:!0,showMoreLabel:"veja mais",onChange:()=>({}),payments:{}};var U=J},23458:function(e,t,n){n.d(t,{Z:function(){return M}});var l=n(2784),i=n(71180),r=n(99673),a=n(68054),o=n(55403),s=n(84546),d=n(31461),c=n(12468),u=n(63825);let p=r.ZP.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,m={[c.Co]:r.iv`
    padding: 4px 4px;
  `,[c.IY]:r.iv`
    padding: 12px 35px;
  `,DEFAULT:r.iv`
    padding: 12px 12px;
  `},g=r.ZP.span`
  font-size: ${e=>(0,o.R)("fontSizes.1")(e)}px;
  border-radius: 4px;
  color: ${e=>(0,o.uu)("light")(e)};
  display: inline-block;
  background-color: ${e=>(0,o.ow)("background.secondary")(e)};
  ${e=>m[e.display]||m.DEFAULT}
`,h=e=>e?3:5,f=(0,r.ZP)(s.Z).attrs(e=>({fontSize:[h(e.isList),5],lineHeight:"fontSize"}))`
  color: ${e=>(0,o.uu)("base")(e)};
  font-weight: ${e=>(0,o.R)("fontWeights.medium")(e)};
  align-self: end;
  position: relative;
  span {
    font-size: ${e=>{let{isList:t}=e,n=(0,d.Z)(e,["isList"]);return t?(0,o.R)("fontSizes.0")(n):(0,o.R)("fontSizes.1")(n)}}px;
    font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
    line-height: ${e=>(0,o.R)("lineHeights.thin")(e)}px;
  }
  ${a.Dh}
  ${a.cp}
`,b=(0,r.ZP)(s.Z).attrs(e=>Object.assign({mt:"8px"},Object.assign({},e)))`
  line-height: ${e=>(0,o.R)("lineHeights.big")(e)};
  ${a.cp}
`,x=(0,r.ZP)(u.Z)`
  color: ${e=>(0,o.ow)("secondary.base")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
`,v=(0,r.ZP)(u.Z).attrs(({isList:e})=>({fontSize:[e?0:1,1],lineHeight:"fontSize",fontWeight:e?null:"regular",color:e?"text.scratched":"text.light"}))`
  margin: 0;
  text-align: left;
  text-decoration: line-through;
  ${a.cp}
  ${o.$_}
`,Z=r.ZP.span`
  margin-left: 0.3rem;
`,$=(0,r.ZP)(u.Z)``,E=r.ZP.p`
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,o.R)("lineHeights.standard")(e)}px;
`,y=(0,r.ZP)(f)`
  text-align: center;
  line-height: ${e=>(0,o.R)("lineHeights.small")(e)};
  letter-spacing: normal;
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  p {
    padding: 3px 0px 0px;
  }
`,w=(0,r.ZP)(s.Z).attrs(e=>Object.assign({mt:"8px"},Object.assign({},e)))`
  line-height: 6px;
  ${a.Dh}
`,k=r.ZP.div``,P="no Pix",C=({price:e,paymentMethodDescription:t,showInCashInfo:n,style:r})=>e?l.createElement(w,r,l.createElement(y,{"data-testid":"price-miniature"},(0,i.oB)({value:e})," ",n&&l.createElement(E,null,t||P))):l.createElement(k,{"data-testid":"empty-price-miniature"});C.defaultProps={price:"",paymentMethodDescription:"",showInCashInfo:!1,style:{}};var z=n(19527),S=n(97769);let I=({installment:e,minimumInstallment:t})=>{let n=null==e?void 0:e.totalAmount,l=!!(null!=e&&e.amount&&(null==e?void 0:e.quantity)>t&&null!=e&&e.totalAmount),i=(null==e?void 0:e.paymentMethodDescription)!=="com juros";return{hasInstallment:l,installmentPrice:n,isInstallmentWithoutInterest:i}},R=({finalPrice:e,hideOriginalPrice:t,installmentPrice:n,isInstallmentWithoutInterest:l,price:i})=>{let r=parseFloat(i)!==parseFloat(n)&&parseFloat(i)!==parseFloat(e);return{showOriginalPrice:r&&l&&!t}},O=({finalPrice:e,installmentPrice:t,showDiscount:n,showDiscountOnlyCashInfo:l,showInCashInfo:i})=>{let r=parseFloat(e)<parseFloat(t);return{showDiscountValue:i&&n&&(!l||!t||r)}},j=({discount:e,finalPrice:t,hideOriginalPrice:n,installment:r,isList:a,minimumInstallment:o,paymentMethodDescription:s,price:d,showDiscount:c,showDiscountOnlyCashInfo:u,showInCashInfo:p,style:m})=>{let{hasInstallment:g,installmentPrice:h,isInstallmentWithoutInterest:E}=I({installment:r,minimumInstallment:o}),{showOriginalPrice:y}=R({finalPrice:t,hideOriginalPrice:n,installmentPrice:h,isInstallmentWithoutInterest:E,price:d}),{showDiscountValue:w}=O({finalPrice:t,installmentPrice:h,showDiscount:c,showDiscountOnlyCashInfo:u,showInCashInfo:p});return l.createElement(b,m,l.createElement(f,{"data-testid":"price-default",isList:a},l.createElement(l.Fragment,null,y&&l.createElement(v,{"data-testid":"price-original",isList:a},(0,i.oB)({value:d})),g&&l.createElement(S.Z,{mt:2,information:r,minimumInstallment:o,isList:a}),l.createElement(z.Z,{alignItems:"center"},l.createElement($,{"data-testid":"price-value"},g&&l.createElement("span",null,"ou "),(0,i.oB)({value:t})),s?l.createElement(Z,{"data-testid":"in-cash"},s," "):l.createElement(l.Fragment,null,(!h||parseFloat(t)<parseFloat(h))&&l.createElement(Z,{"data-testid":"in-cash"},P))),w&&l.createElement(x,{as:"span"},"(",`${Number(e)}% de desconto no pix`,")"))))};j.defaultProps={hideOriginalPrice:!1};let F=({display:e,price:t,paymentMethodDescription:n,bestPrice:i,fullPrice:r,discount:a,installment:o,showInCashInfo:s,showDiscount:d,showDiscountOnlyCashInfo:u,isList:m,minimumInstallment:h,style:f,hideOriginalPrice:b})=>{let x=i||r||t,v=Boolean(s&&t!==x&&Number(a));return x?e===c.Co?l.createElement(C,{style:f,price:x,showInCashInfo:v,paymentMethodDescription:n}):l.createElement(j,{style:f,price:t,finalPrice:x,discount:a,installment:o,showInCashInfo:v,showDiscount:d,showDiscountOnlyCashInfo:u,paymentMethodDescription:n,isList:m,minimumInstallment:h,hideOriginalPrice:b}):l.createElement(p,{"data-testid":"price-unavailable"},l.createElement(g,{display:e},"Xiii, j\xe1 foi tudo :("))};F.defaultProps={display:c.yg,isList:!0,price:"",bestPrice:"",discount:"",hideOriginalPrice:!1,installment:{amount:"",paymentMethodDescription:"",quantity:"",totalAmount:""},minimumInstallment:1,showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1};var M=F},58125:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(2784),i=n(71180),r=n(87043),a=n(63113),o=n(99673),s=n(55403);let d=(0,o.ZP)(r.rj).attrs(e=>Object.assign({my:3,mx:2,rowGap:3},e))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'input-values input-values'
    'slider-input slider-input'
    'apply-button apply-button';
`,c=(0,o.ZP)(r.rj).attrs(e=>Object.assign({gap:2},e))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-area: input-values;
`,u=o.ZP.div`
  z-index: 0;
  grid-area: slider-input;
  position: relative;
`,p=(0,o.ZP)(r.xv)`
  color: ${e=>(0,s.uu)("scratched")(e)};
`,m=(0,o.ZP)(r.zx)`
  grid-area: apply-button;
`;var g=n(86349);let h=({item:e,onApply:t,min:n,max:o,initialMin:s,initialMax:h})=>{let[f,b]=(0,l.useState)(),[x,v]=(0,l.useState)(),[Z,$]=(0,l.useState)(),[E,y]=(0,l.useState)();(0,l.useEffect)(()=>{b(100*s),$((0,a.Z)(100*s).currency)},[s]),(0,l.useEffect)(()=>{v(100*h),y((0,a.Z)(100*h).currency)},[h]);let w=f/100,k=x/100,P=w===s&&k===h||!(0,g.Z4)(w,k,n,o)||!(0,g.rx)(k,w,n,o),C=(e,t=!0)=>{let{amount:n,currency:l}=(0,a.Z)(t?100*e:e);v(n),y(l)},z=(e,t=!0)=>{let{amount:n,currency:l}=(0,a.Z)(t?100*e:e);b(n),$(l)},S=({currentMax:e,currentMin:t})=>{C(e),z(t)};return l.createElement(d,{"data-testid":"price"},l.createElement(c,null,l.createElement(r.kC,{flexDirection:"column",gap:1},l.createElement(p,{"data-testid":"price-range-min-label",fontSize:0},l.createElement(r.xv,{color:"inherit"},"M\xednimo:"),l.createElement(r.xv,{color:"inherit"},(0,i.oB)({value:100*n,rightFilling:!0}))),l.createElement(r.II,{"data-testid":"price-range-min-input",value:Z,placeholder:"Ex: R$ 250,00",maxLength:15,onChange:e=>z(e.target.value,!1)})),l.createElement(r.kC,{flexDirection:"column",gap:1},l.createElement(p,{"data-testid":"price-range-max-label",fontSize:0},l.createElement(r.xv,{color:"inherit"},"M\xe1ximo:"),l.createElement(r.xv,{color:"inherit"},(0,i.oB)({value:100*o,rightFilling:!0}))),l.createElement(r.II,{"data-testid":"price-range-max-input",value:E,placeholder:"Ex: R$ 500,00",maxLength:15,onChange:e=>C(e.target.value,!1)}))),l.createElement(u,null,l.createElement(r.U2,{maxAllowed:parseFloat(o),minAllowed:parseFloat(n),currentMax:parseFloat(k),currentMin:parseFloat(w),onChange:S})),l.createElement(m,{"data-testid":"price-range-apply-btn",full:!0,onClick:n=>t(n,{min:parseFloat(f/100),max:parseFloat(x/100)},e),disabled:P},"Aplicar filtro"))};h.defaultProps={item:{},onApply(){}};var f=h},65055:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),i=n(31461),r=n(2784),a=n(70715),o=n(99673),s=n(55403),d=n(87043);let c=(0,o.ZP)(d.xu)`
  > *:not(:last-child) {
    border-bottom: ${(0,s.R)("borders.0")};
  }
`,u=e=>{let{options:t,selectedOption:n,onChange:o}=e,s=(0,i.Z)(e,["options","selectedOption","onChange"]);return r.createElement(c,null,null==t?void 0:t.map(e=>{let{value:t,label:i,selected:d}=e;return r.createElement(a.Z,(0,l.Z)({key:t||i,value:t||i,label:i,checked:d||void 0!==t&&t===n||void 0===t&&i===n,onChange:t=>o(t,e)},s))}))};u.defaultProps={options:[],selectedOption:"",onChange(){}};var p=u},11151:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(2784),i=n(87043),r=n(99673),a=n(34490),o=n(55403),s=n(63825);let d=r.ZP.li`
  display: flex;
  align-items: center;
  column-gap: ${({columnGap:e})=>e||"8"}px;
`,c=(0,r.ZP)(s.Z)``,u=(0,r.ZP)(s.Z)`
  color: ${({color:e})=>(0,o.uu)(e||"light")};
`,p=(0,r.ZP)(a.Uxw)`
  margin-bottom: 1px;
`;function m({id:e,score:t,count:n,max:r,starColor:a,lineColor:o,fontweightScore:s,countColor:m,widthProgress:g,heightProgress:h,starSize:f,scoreFontSize:b,columnGap:x,as:v}){return l.createElement(d,{columnGap:x,as:v},l.createElement(i.kC,{alignItems:"center"},l.createElement(c,{fontSize:b,fontWeight:s},e),l.createElement(p,{width:f,height:f,color:a})),l.createElement(i.uk,{height:h,width:g,value:t,max:r,color:o}),l.createElement(u,{"data-testid":"rating-value",fontSize:b,color:m},n))}m.defaultProps={id:0,score:0,count:"0",widthProgress:"90px",heightProgress:"6px",as:"li",starSize:15,scoreFontSize:0,columnGap:8};var g=m},73172:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(99673),s=n(68054),d=n(55403),c=n(63825);let u=o.ZP.div`
  display: flex;
  align-items: center;
`,p=(0,o.ZP)(c.Z).attrs(e=>({fontSize:[e.fontSize||0,1,1],fontWeight:"regular",as:"span",color:"text.scratched"}))`
  display: inline-block;
  margin-left: 5px;
  ${e=>"label"===e.format&&o.iv`
      margin-bottom: 2px;
    `}
  ${s.cp}
  ${d.$_}
`,m=e=>{let{min:t,max:n,count:o,emptyOutline:s,minCount:d,score:c=0,format:m,label:g,fontSize:h,onClick:f}=e,b=(0,i.Z)(e,["min","max","count","emptyOutline","minCount","score","format","label","fontSize","onClick"]),x=Array.from(Array(n-t).keys()),v=Number.isInteger(c),Z={count:o,label:g,"score-count":`${c.toFixed(1)||0} (${o})`},$=(e,t)=>v||t!==Math.floor(c)?!e&&s?"StarOutline":e?"StarOutline":"Star":"StarHalf",E=()=>0!==c||s?"stars.base":"stars.disabled",y=`${c.toFixed(1)||0} de ${n} estrelas, ${o} classifica\xe7\xf5es`;return r.createElement(u,{onClick:f,"data-testid":"review","aria-label":y},x.map(e=>{let t=c&&c<=e;return r.createElement(a.JO$,(0,l.Z)({name:$(t,e),key:`star-id-${e}`,"data-testid":`star-${t?"placeholder":"item"}`,color:E()},b))}),("label"===m||o>=d)&&r.createElement(p,{format:m,fontSize:h},Z[m]))};m.defaultProps={count:0,minCount:.1,min:0,max:5,score:0,format:"count",emptyOutline:!1};var g=m},27408:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(7896),i=n(31461),r=n(2784),a=n(19527),o=n(76328),s=n(63825),d=n(29869),c=n(2761);let u={rating:o.Z,text:d.Z,recommendation:c.Z},p=(0,r.forwardRef)((e,t)=>{let{label:n,type:o,error:c,flexDirection:p,fontSize:m,fontWeight:g,alignItems:h,textAlign:f,gap:b}=e,x=(0,i.Z)(e,["label","type","error","flexDirection","fontSize","fontWeight","alignItems","textAlign","gap"]),v=u[o]||d.Z;return r.createElement(a.Z,{"data-testid":"review-input-wrapper",flexDirection:p,gap:b,width:1},r.createElement(s.Z,{"data-testid":"review-input-label",flex:"0.75",textAlign:f,fontSize:m,fontWeight:g,lineHeight:"input",paddingY:"2"},n),r.createElement(a.Z,{gap:"2",flex:"1",alignItems:h,flexDirection:["column",["recommendation","rating"].includes(o)?"row":"column"],"data-testid":"review-input-container"},r.createElement(v,(0,l.Z)({ref:t},!["rating","recommendation"].includes(o)&&{hasError:!!c},"textarea"===o&&{multiline:!0},x)),c&&r.createElement(s.Z,{color:"error.base"},c)))});p.defaultProps={error:null,flexDirection:null,fontSize:2,fontWeight:"regular",gap:30,label:null,textAlign:"right",alignItems:"start"},p.displayName="ReviewInput";var m=p},66457:function(e,t,n){n.d(t,{II:function(){return u},W1:function(){return d},xJ:function(){return c}});var l=n(31461),i=n(99673),r=n(55403),a=n(68054),o=n(34490),s=n(19527);let d=(0,i.ZP)(o.olm)`
  fill: ${(0,r.R)("palette.primary.base")};
  ${({desktopMode:e})=>e?i.iv`
          width: 22px;
          height: 22px;
          min-width: unset;
        `:i.iv`
          width: 30px;
        `}
`,c=(0,i.ZP)(s.Z)`
  align-items: center;
  width: 100%;
  border: 0;
  padding: ${(0,r.R)("space.1")}px ${(0,r.R)("space.2")}px;

  svg {
    cursor: pointer;
    min-width: 18px;
  }
  ${({desktopMode:e})=>!e&&i.iv`
      background-color: ${e=>(0,r.dF)("white")(e)};
      border-radius: ${(0,r.R)("radii.default")};
    `}
  ${({inputChange:e})=>e&&i.iv`
      ${({desktopMode:e})=>e?i.iv`
              border-bottom: 1px solid ${(0,r.kJ)("whisper")};
            `:i.iv`
              box-shadow: ${(0,r.R)("boxShadows.4")};
              z-index: ${(0,r.R)("zIndices.3")};
              border-radius: unset;
            `};
    `}
  form {
    width: 100%;
    ${({desktopMode:e})=>!e&&i.iv`
        padding-left: ${(0,r.R)("space.1")}px;
      `};
  }
`,u=i.ZP.input.attrs(e=>Object.assign({fontSize:1},e))`
  color: ${e=>{let{isChanging:t,desktopMode:n}=e,i=(0,l.Z)(e,["isChanging","desktopMode"]);return(0,r.uu)(t&&!n?"primary":"light")(i)}};
  caret-color: ${(0,r.uu)("light")};
  width: 100%;
  border: 0px;
  -webkit-appearance: textfield;

  ::placeholder {
    color: ${(0,r.uu)("light")};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  ${a.cp}
`},37222:function(e,t,n){n.d(t,{Z:function(){return j}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(99673),s=n(55403),d=n(68054),c=n(87043);let u=(0,o.ZP)(c.kC).attrs(e=>Object.assign({bg:"background.lighter"},e))`
  position: relative;
  border-radius: ${({desktopMode:e})=>e?2:6}px;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({inputChange:e})=>e&&o.iv`
      align-items: baseline;
      left: 0;
      z-index: ${(0,s.R)("zIndices.3")};

      ${({desktopMode:e})=>e?o.iv`
              top: 0;
              border: 1px solid ${(0,s.kJ)("whisper")};
            `:o.iv`
              top: 3px;
              margin-left: -9px;
              width: calc(100% + 18px);
              border-radius: 0;
              padding: ${(0,s.R)("space.1")}px 0;
            `};
    `}

  ${s.$_}
`,p=o.ZP.div.attrs(e=>Object.assign({bg:"background.overlay",zIndex:1,top:40,left:0},e))`
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 'block';
  display: 'block';
  ${s.$_}
  ${d.FK}
`,m=(0,o.ZP)(c.xu).attrs(e=>Object.assign({fontSize:1,color:"text.scratched"},e))`
  ${d.cp}
  ${s.$_}
`;var g=n(41065),h=n(84546);let f=o.ZP.div.attrs(e=>Object.assign({bg:"background.lighter",p:3},e))`
  background-color: ${e=>(0,s.dF)("white")(e)};
  z-index: ${(0,s.R)("zIndices.2")};
  width: 100%;
  ${e=>e.desktopMode&&!e.isEmpty&&o.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${s.$_}
      ${d.Dh}
    `}
`,b=o.ZP.div.attrs(e=>Object.assign({mb:e.isEmpty?0:3,zIndex:2},e))`
  ${d.Dh};
`,x=(0,o.ZP)(h.Z).attrs(e=>Object.assign({fontSize:2,fontWeight:"bold",color:"text.primary",pb:2,mb:1},e))`
  width: fit-content;
  border-bottom: 1px solid ${(0,s.kJ)("whisper")};

  ${s.$_}
  ${d.cp}
`,v=({desktopMode:e,handleClickProduct:t,handleClickSuggest:n,products:l,productsSuggestions:i,suggestions:a,suggestionsPrefix:o,term:s})=>r.createElement(f,{desktopMode:e,isEmpty:0===Object.values(a).length&&0===Object.values(l).length},r.createElement(b,{isEmpty:0===Object.values(a).length&&0===Object.values(l).length},e&&Object.values(a).length>0&&r.createElement(x,{"data-testid":"suggestion-title"},"sugest\xf5es de resultados"),r.createElement("ul",null,Object.values(a).map(t=>r.createElement(g.Z,{desktopMode:e,prefix:o,term:s,key:t.count,item:t,onSearchSubmit:e=>n(e,null==t?void 0:t.term,"clickSuggestion")})))),e&&i&&Object.values(i).length>0&&r.createElement(r.Fragment,null,r.createElement(x,{"data-testid":"suggestion-title"},"sugest\xf5es de produtos"),r.createElement("ul",null,Object.values(i).map(n=>r.createElement(g.Z,{desktopMode:e,term:s,key:n.id,item:n,borderBottom:!0,onSearchSubmit:e=>t(e,n)})))));v.defaultProps={autocompleteRef:{},desktopMode:!1,products:[],suggestions:[],suggestionsPrefix:"",term:""};var Z=n(90749);let $=(0,o.ZP)(c.xu).attrs(e=>Object.assign({bg:"background.lighter",p:2,zIndex:2},e))`
  background-color: ${e=>(0,s.dF)("white")(e)};
  z-index: ${(0,s.R)("zIndices.2")};
  width: 100%;
  ${e=>e.desktopMode&&!e.isEmpty&&o.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${s.$_}
      ${d.Dh}
    `}
`,E=o.ZP.div.attrs(e=>Object.assign({mb:e.isEmpty?0:3},e))`
  ${d.Dh};
`,y=e=>r.createElement(c.xu,{bg:"background.primary",p:2,borderRadius:2},e),w=({desktopMode:e,list:t,label:n,handleClickTopTerm:l})=>r.createElement($,{"data-testid":"top-terms-container",desktopMode:e,isEmpty:0===t.length},r.createElement(E,{isEmpty:0===t.length},t.length>0&&r.createElement(Z.aV,{divided:!0},r.createElement(Z.aV.Header,{"data-testid":"top-terms-header",fontSize:1,fontWeight:"bold",color:"text.scratched",pb:2,mb:1},n),t.map((e,t)=>r.createElement(Z.aV.Item,{"data-testid":"top-terms-item",key:`top-term-${t}`,startIcon:y(t+1),fill:"red",onClick:t=>l(t,e),fontSize:2},e.term)))));w.defaultProps={desktopMode:!1};var k=n(33055),P=n(66457);let C=e=>{let{desktopMode:t,handleClear:n,handleClose:o,handleOpen:s,handleSubmit:d,handleType:c,inputChange:u,handleClickEvent:p,keypressHandler:m,term:g,disableClear:h}=e,f=(0,i.Z)(e,["desktopMode","handleClear","handleClose","handleOpen","handleSubmit","handleType","inputChange","handleClickEvent","keypressHandler","term","disableClear"]);return r.createElement(P.xJ,{"data-testid":"input-container",inputChange:u,desktopMode:t},!t&&u&&r.createElement(a.xhZ,{color:"#818181","data-testid":"arrow-back",onClick:o}),r.createElement("form",{"data-testid":"form-search",onSubmit:e=>d(e,"submit"),autoComplete:"off"},r.createElement(k.Z,{text:"Procure no magalu",htmlFor:"input-search"}),r.createElement(P.II,(0,l.Z)({},f,{onChange:e=>c(e),onClick:s,value:g,id:"input-search",type:"search",isChanging:u,desktopMode:t,onKeyDown:m,"data-testid":"input-search",accessKey:"s"}))),(!h||!t&&u&&""!==g)&&r.createElement(a.B86,{"data-testid":"close-circle",color:"#818181",onClick:n,width:17,height:17,margin:h?"unset":"0 16px",marginRight:2,marginBottom:"1px"}),r.createElement(P.W1,{"aria-label":"Buscar produto","data-testid":"search-submit",desktopMode:t,onClick(e){d(e,"icon"),p()},role:"button",tabIndex:"0"}))};C.defaultProps={desktopMode:!1,inputChange:!1,disableClear:!0,term:""};var z=n(86349);let S=(e,t)=>e&&""===t,I=e=>e?r.createElement(m,null,"+"):r.createElement(a.olm,{color:"#818181"}),R=(e,t)=>{27===e.keyCode&&t()},O=e=>{let{onSearch:t,onTypeChange:n,onInputClear:a,onInputClose:o,onInputOpen:s,onSuggestItemClick:d,onProductItemClick:c,onTopTermItemClick:m,initialValue:g,onClickSearchEvent:h,list:f,products:b,desktopMode:x,topTerms:Z}=e,$=(0,i.Z)(e,["onSearch","onTypeChange","onInputClear","onInputClose","onInputOpen","onSuggestItemClick","onProductItemClick","onTopTermItemClick","initialValue","onClickSearchEvent","list","products","desktopMode","topTerms"]),[E,y]=(0,r.useState)(g),[k,P]=(0,r.useState)(!1),[O,j]=(0,r.useState)(f),[F,M]=(0,r.useState)(b),L=I(x),{shouldDisplay:A,list:T}=Z;(0,r.useEffect)(()=>{j(f||[])},[f]),(0,r.useEffect)(()=>{M(b)},[b]),(0,r.useEffect)(()=>{y(g)},[g]);let W=(e,n)=>{if(!E.trim()){e.preventDefault();return}P(!1),t(e,E,n)},D=e=>{let t=e.target.value;P(!S(x,t)),y(t),n(t)},N=(e,n,l)=>{d(n,l),P(!1),y(n),t(e,n,l)},B=(e,n)=>{let{term:l}=n;m(n),P(!1),y(l),t(e,l)},_=(e,t)=>{P(!1),y(""),c(e,t)},H=()=>{a(),y("")},V=()=>{o(),P(!1)},J=()=>{s(),P(!0)},U=(0,r.useRef)();return(0,z.t$)(U,()=>{(k||A)&&V()}),r.createElement(r.Fragment,null,r.createElement(u,{inputChange:k,desktopMode:x,ref:U,id:"search-container","data-testid":"search-input-container"},r.createElement(C,(0,l.Z)({desktopMode:x,handleClear:H,handleClose:V,handleClickEvent:h,handleOpen:J,handleSubmit:W,handleType:D,inputChange:k,keypressHandler:e=>R(e,V),term:E},$)),A?T?r.createElement(w,(0,l.Z)({},Z,{desktopMode:x,handleClickTopTerm:B})):r.createElement(r.Fragment,null):k&&f?r.createElement(v,{desktopMode:x,handleClickProduct:_,handleClickSuggest:N,handleClose:V,products:b,productsSuggestions:F,suggestions:O,suggestionsPrefix:L,term:E}):r.createElement(r.Fragment,null),!x&&k&&r.createElement(p,{"data-testid":"input-overlay",onTouchMove:V,onClick:V})))};O.defaultProps={list:[],products:[],initialValue:"",onInputClear(){},onSuggestItemClick(){},onProductItemClick(){},onTopTermItemClick(){},onInputClose(){},onInputOpen(){},desktopMode:!1,topTerms:{shouldDisplay:!1,label:"Mais Buscados",list:[]}};var j=O},57991:function(e,t,n){n.d(t,{Z:function(){return Z}});var l=n(7896),i=n(31461),r=n(2784),a=n(99673),o=n(68054),s=n(34490),d=n(55403),c=n(19527),u=n(63825);let p=(0,a.ZP)(c.Z).attrs(e=>Object.assign({bg:"background.base",borderRadius:"medium"},e))`
  position: relative;
  padding: 16px 12px;
  align-items: center;
  cursor: pointer;

  ${o.Cg}
  ${d.$_}
`,m=(0,a.ZP)(c.Z).attrs(e=>Object.assign({bg:"background.base",borderRadius:"medium",zIndex:4},e))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;

  ${o.Cg}
  ${d.$_}
`,g=(0,a.ZP)(s.hq5).attrs({width:24,height:24})``,h=(0,a.ZP)(s.lO8)`
  margin-right: 12px;
  flex-grow: 0;
  width: 18px;
  height: 18px;
  ${d.$_}
`,f=(0,a.ZP)(u.Z)`
  flex-grow: 1;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
`,b=(0,a.ZP)(u.Z)`
  flex-grow: 0;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,d.ow)("primary.base")(e)};
`;var x=n(86349);let v=e=>{let{placeholder:t,changeLabel:n,actionLabel:a,disabled:o,done:s,loading:d,onClick:c,location:u,maxCityLength:v}=e,Z=(0,i.Z)(e,["placeholder","changeLabel","actionLabel","disabled","done","loading","onClick","location","maxCityLength"]),$=u&&Object.keys(u).length?(0,x.RZ)(Object.assign({},u,{maxCityLength:v,includeAddress:!1})):"";return r.createElement(p,(0,l.Z)({},Z,{onClick:d||o?()=>{}:c,"data-testid":"shipping-button"}),(d||o)&&r.createElement(m,{"data-testid":"shipping-disabled"},d&&r.createElement(g,null)),r.createElement(h,{fill:"primary.base"}),r.createElement(f,{as:"span"},$||t),!!$&&r.createElement(b,{as:"span"},s?n:a))};v.defaultProps={placeholder:"Calcular frete e prazo",changeLabel:"alterar",actionLabel:"calcular",disabled:!1,loading:!1,done:!1,onClick(){},location:{},maxCityLength:24};var Z=v},15185:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784),i=n(34490),r=n(87043),a=n(99673);let o=a.ZP.div`
  & > svg {
    transform: scale(2.5);
  }
`,s=({amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:a,fontColor:s="#fff",counterColor:d="#58c22e",iconColor:c="#fff",onClick:u})=>l.createElement(r.fG,{amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:a,counterColor:d,fontColor:s,onClick:u},l.createElement(o,null,l.createElement(i.JO$,{name:"ShoppingBag",color:c})));s.defaultProps={amount:0,onClick(){},nullable:!0};var d=s},51382:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(7896),i=n(31461),r=n(2784),a=n(34490),o=n(99673),s=n(55403);let d=o.ZP.a`
  position: relative;
  cursor: pointer;
`,c=o.ZP.div`
  background-color: ${e=>(0,s.dF)("lighter")(e)};
  border-radius: 6px;
  padding: 10px;
  width: 190px;
  display: ${e=>e.open?"flex":"none"};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: 110%;
  right: 0px;
  position: absolute;
  z-index: ${e=>(0,s.R)("zIndices.0")(e)};
  box-shadow: ${e=>(0,s.R)("elevations.4")(e)};
`,u=o.ZP.a`
  background-color: ${e=>(0,s.dF)("primary")(e)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 16px;
  }
`;function p(e){let{socialItems:t,onItemClick:n}=e,o=(0,i.Z)(e,["socialItems","onItemClick"]),[s,p]=(0,r.useState)(!1),m=()=>{p(!s)},g=e=>{("Enter"===e.key||13===e.keyCode)&&m()};return r.createElement(d,(0,l.Z)({},o,{"aria-label":"Compartilhar",role:"button","aria-haspopup":"true","aria-expanded":s,onClick:m,onKeyDown:g,tabIndex:"0"}),r.createElement(a.mBz,{height:"24",color:"#818181","data-testid":"social-share","aria-hidden":"true"}),r.createElement(c,{open:s,"data-testid":"social-content"},t.map(({title:e,url:t,Icon:l})=>r.createElement(u,{key:e,href:t,target:"_blank",onClick:t=>n(t,e),"aria-label":e},l))))}p.defaultProps={socialItems:[],onItemClick(){}};var m=p},50919:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(31461),i=n(2784),r=n(99673),a=n(55403),o=n(87043);let s=(0,r.ZP)(o.xu).attrs(e=>Object.assign({forwardedAs:"table"},e))`
  list-style: none;

  tbody > tr > td {
    padding: 5px;
  }
`,d=r.ZP.td`
  font-weight: bold;
  color: ${e=>(0,a.R)("colors.darkSilver")(e)};
  background: ${e=>(0,a.dF)("base")(e)};
  display: ${({layout:e})=>"horizontal"===e?"table-cell":"list-item"};
  width: ${({layout:e})=>"horizontal"===e?"20%":"100%"};
`,c=r.ZP.td`
  display: list-item;
  width: 100%;
  padding: 5px;
`,u=r.ZP.td`
  width: 40%;
`,p=r.ZP.table`
  width: 100%;
  td:first-child {
    display: table-cell;
  }
  tr {
    display: table-row;
    vertical-align: middle;
  }
`,m=(0,r.ZP)(o.rU)`
  text-decoration: underline;
  font-size: inherit;

  &:hover {
    color: ${e=>(0,a.uu)("primary")(e)};
  }
`;function g(e){var t;let{data:n,layout:r}=e,a=(0,l.Z)(e,["data","layout"]),o=e=>e.isLink?i.createElement(m,{href:e.path},null==e?void 0:e.value):null==e?void 0:e.value;return i.createElement(s,a,i.createElement("tbody",null,null==n?void 0:null==(t=n.elements)?void 0:t.map(e=>{var t;return i.createElement("tr",{key:e.slug},i.createElement(d,{layout:r},e.keyName),i.createElement(c,null,i.createElement(p,null,i.createElement("tbody",null,null==e?void 0:null==(t=e.elements)?void 0:t.map((e,t)=>i.createElement("tr",{key:t},e.keyName&&i.createElement(u,null,e.keyName),i.createElement("td",null,o(e))))))))})))}g.defaultProps={color:"text.base",fontSize:0,layout:"vertical"};var h=g},62458:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),i=n(31461),r=n(2784),a=n(87043),o=n(86349),s=n(99673),d=n(55403),c=n(34490);let u=(0,s.ZP)(a.kC).attrs(()=>({fontSize:0,borderRadius:4,fontWeight:"600",padding:"2px 4px"}))`
  width: fit-content;
  align-items: center;
  background-color: ${(0,d.dF)("limeGreen")};
`,p=(0,s.ZP)(c.JO$).attrs(()=>({}))`
  color: ${(0,d.uu)("dark")};
`;function m(e){let{tags:t,showIcon:n}=e,s=(0,i.Z)(e,["tags","showIcon"]),d=(0,o.Qd)(t);return d&&r.createElement(u,(0,l.Z)({},s,{"data-testid":"productCard-coupon","aria-label":`Cupom de ${d.toLowerCase()}`}),n&&r.createElement(p,{"data-testid":"coupon-icon",color:"dark",name:"LocalActivity",mr:1,height:12,width:12}),r.createElement(a.xv,{color:"dark"},"Cupom ",d))}m.defaultProps={tags:{},showIcon:!0};var g=m},93168:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(7896),i=n(31461),r=n(2784),a=n(99673),o=n(55403),s=n(87043);let d=(0,a.ZP)(s.kC).attrs({position:"relative",justifyContent:"space-between",alignItems:"stretch",width:"100%",px:2})(({count:e})=>3===e&&{"& > *:nth-child(2)":{position:"absolute",left:"50%",top:"50%",height:"100%",transform:"translate(-50%,-50%)"}},o.bU,o.bA);var c=n(34490),u=n(10200);let p=e=>{let{children:t,endIcon:n,startIcon:a}=e,o=(0,i.Z)(e,["children","endIcon","startIcon"]),s=e=>e&&"string"==typeof e?r.createElement(c.JO$,{name:e}):e;return r.createElement(u.Z,(0,l.Z)({"data-testid":"toolbar-item"},o),s(a),t,s(n))};p.defaultProps={children:null,color:"inherit",underlineOnHover:!1,fontSize:1,fontWeight:"medium",gap:1};let m=e=>{let{onChange:t}=e,n=(0,i.Z)(e,["onChange"]),l=r.Children.toArray(null==n?void 0:n.children),[a,o]=(0,r.useState)(0),s=()=>{if(a>=l.length-1){o(0);return}o(a+1)};(0,r.useEffect)(()=>{let{props:{value:e,children:n}}=l[a];t({id:e,label:n})},[a]);let d=l.map(e=>r.cloneElement(e,{onClick:s}));return d[a]},g=e=>{let{children:t}=e,n=(0,i.Z)(e,["children"]);return r.createElement(d,(0,l.Z)({count:r.Children.count(t),"data-testid":"toolbar"},n),t)};g.defaultProps={children:null,variant:"transparent",scale:"medium"},g.Item=p,g.Toggle=m;var h=g},41237:function(e,t,n){n.d(t,{Z:function(){return $}});var l=n(2784),i=n(19527),r=n(31461),a=n(99673),o=n(55403),s=n(34490),d=n(60861),c=n(29869),u=n(63825);let p=a.ZP.form`
  position: relative;
`,m=a.ZP.label`
  font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  color: ${e=>{let{hasError:t}=e,n=(0,r.Z)(e,["hasError"]);return(0,o.ow)(t?"error.base":"base")(n)}};
`,g=(0,a.ZP)(c.Z)`
  border: 0;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid;
  border-color: ${e=>{let{hasError:t}=e,n=(0,r.Z)(e,["hasError"]);return(0,o.ow)(t?"error.base":"base")(n)}};
  padding: 0 0 ${e=>(0,o.R)("space.2")(e)}px;
  line-height: ${e=>(0,o.R)("lineHeights.input")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  background-color: transparent;
  margin-top: 4px;
  &::placeholder {
    color: ${e=>(0,o.uu)("greyish")(e)};
  }
`,h=a.ZP.div`
  width: 100%;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  background-color: ${e=>(0,o.dF)("base")(e)};
  z-index: ${e=>(0,o.R)("zIndices.0")(e)};
`,f=(0,a.ZP)(s.gXO).attrs(e=>({color:(0,o.ow)("primary")(e)}))`
  height: 40px;
`,b=(0,a.ZP)(d.Z).attrs(()=>({m:"14px 0"}))`
  width: 70%;
`,x=(0,a.ZP)(u.Z).attrs(()=>({forwardedAs:"span",color:"text.primary",fontSize:1,fontWeight:"medium",textAlign:"center",textTransform:"uppercase"}))`
  cursor: pointer;
  margin: 14px;
  text-transform: uppercase;
  width: 70%;
`;var v=n(7874);function Z({errorText:e,hasError:t,initialValue:n,labelText:r,loading:a,locationButtonText:o,onChange:s,placeholder:d,showButton:c,inputButtonText:u,onClickLocationButton:Z}){let[$,E]=(0,l.useState)((0,v.Z)(n)),y=e=>{e.preventDefault();let{value:t}=e.target;E((0,v.Z)(t)),s(e,e.target.value)},w=e=>{e.preventDefault(),E((0,v.Z)($)),s(e,$)};return l.createElement(p,{onSubmit:w},l.createElement(m,{"data-testid":"zipcode-label",hasError:t,htmlFor:"zipcode"},t?e:r),a&&l.createElement(h,{"data-testid":"zipcode-loading"},l.createElement(f,null)),l.createElement(g,{"data-testid":"zipcode-input",hasError:t,autoFocus:!0,id:"zipcode",name:"zipcode",type:"text",inputMode:"numeric",maxLength:9,placeholder:d,onChange:y,value:$,onInput:y,disabled:a}),c&&l.createElement(i.Z,{flexDirection:"column",alignItems:"center",my:2},u&&l.createElement(b,{disabled:9!==$.length,"data-testid":"zipcode-button"},u),o&&l.createElement(x,{"data-testid":"location-button",variation:"outline",boxShadow:"none",onClick:Z},o)))}Z.defaultProps={hasError:!1,initialValue:"",loading:!1,locationButtonText:void 0,onChange:void 0,showButton:!1,inputButtonText:void 0,onClickLocationButton(){}};var $=Z},1587:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(2784),i=n(99673),r=n(55403),a=n(34490),o=n(19527);let s=(0,i.ZP)(o.Z)`
  align-items: center;
  max-height: 44px;
  cursor: pointer;
`,d=(0,i.ZP)(o.Z).attrs(()=>({alignItems:["center","flex-start","flex-start"],color:"text.lightest",flexDirection:["row","column","column"],fontSize:0,fontWeight:"normal"}))``,c=(0,i.ZP)(d).attrs(()=>({ml:[1,0,0],fontWeight:"bold"}))``,u=(0,i.ZP)(o.Z)`
  ${(0,r.aK)("small")} {
    max-height: 44px;
    max-width: 44px;
    width: 100%;
  }
`,p=(0,i.ZP)(a.lO8).attrs(e=>({color:(0,r.uu)("lightest")(e)}))``;var m=n(86349);let g=({city:e,defaultText:t,formatter:n,iconHeight:i,iconWidth:r,state:a,text:o,zipcode:g})=>{let h=(0,m.RZ)({formatter:n,zipCode:g,zipCodeCity:e,zipCodeState:a,includeAddress:!1});return l.createElement(s,null,l.createElement(u,null,l.createElement(p,{width:r,height:i})),l.createElement(d,{"data-testid":"text-line"},g&&a&&e?l.createElement(l.Fragment,null,o," ",n?l.createElement(c,null,h):h):t))};g.defaultProps={city:void 0,formatter:void 0,iconHeight:void 0,iconWidth:void 0,state:void 0,zipcode:void 0};var h=g},90749:function(e,t,n){n.d(t,{iG:function(){return eI.Z},QP:function(){return l.Z},Ct:function(){return r.Z},lr:function(){return a.Z},F7:function(){return o.Z},g0:function(){return Z},HS:function(){return $.Z},L2:function(){return E.Z},pl:function(){return ek},hU:function(){return w.Z},aV:function(){return P.Z},RG:function(){return eg},mY:function(){return O},dV:function(){return i.Z},tA:function(){return j.Z},MS:function(){return F.Z},lF:function(){return eL},Ee:function(){return eP.Z},me:function(){return M.Z},Cq:function(){return L.Z},qr:function(){return eO.Z},Mj:function(){return A.Z},KI:function(){return Y},kV:function(){return ee.Z},ok:function(){return eS},rE:function(){return eA.Z},Rs:function(){return eb},YQ:function(){return eR.Z}}),n(33309);var l=n(52337),i=n(3310);n(78045),n(96504);var r=n(98460);n(67619);var a=n(49542);n(2761),n(84022),n(12241);var o=n(57142),s=n(2784),d=n(34490),c=n(99673),u=n(55403),p=n(63825),m=n(19527);(0,c.ZP)(m.Z)`
  display: flex;
  justify-content: ${e=>e.carousel?"start":"center"};
  align-content: center;
  padding: 12px;
  overflow-x: scroll;
`,(0,c.ZP)(p.Z)`
  color: ${e=>(0,u.uu)("scratched")(e)};
  display: block;
  margin-bottom: 8px;
  font-size: ${e=>(0,u.R)("fontSizes.0")(e)}px;
`,(0,c.ZP)(m.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
`;let g=(0,c.ZP)(m.Z)`
  scroll-snap-align: center;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  line-height: 1.17;
  color: ${e=>e.selected?(0,u.uu)("base")(e):(0,u.uu)("lightest")(e)};
  margin-right: 8px;
  background-color: ${e=>e.selected?(0,u.dF)("primary")(e):(0,u.dF)("lighter")(e)};
  border-radius: 20px;
  height: 38px;

  > svg {
    margin-right: 4px;
    fill: ${e=>e.selected?(0,u.uu)("lightest")(e):(0,u.uu)("base")(e)};
  }
  max-width: 144px;
`,h=(0,c.ZP)(p.Z)`
  width: 81px;
  font-size: ${e=>(0,u.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,u.R)("fontWeights.regular")(e)};
  font-stretch: normal;
  font-style: normal;
  line-height: ${e=>(0,u.R)("lineHeights.standard")(e)}px;
  letter-spacing: normal;
  height: auto;
  color: ${e=>e.selected?(0,u.uu)("lightest")(e):(0,u.uu)("base")(e)};
`;var f=n(7896),b=n(87043);let x=(0,c.ZP)(b.rU).attrs(()=>({fontSize:2,fontWeight:"900",underlineOnHover:!0,hover:!0,padding:0,color:"primary.base"}))``,v=({data:e,handleClickLink:t})=>s.createElement(s.Fragment,null,null==e?void 0:e.map((e,n)=>"string"==typeof e?e:null!=e&&e.href?s.createElement(x,(0,f.Z)({key:n,"data-testid":"dynamic-text-link",href:null==e?void 0:e.href,onClick:n=>t(n,e)},e),null==e?void 0:e.value):s.createElement(b.xv,(0,f.Z)({key:n},e,{as:"span"}),null==e?void 0:e.value)));v.defaultProps={data:[],handleClickLink(){}};var Z=v,$=n(99554),E=n(1729),y=n(33055);n(2490);var w=n(15309);n(97769),c.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;let k={normal:c.iv`
    font-size: ${e=>(0,u.R)("fontSizes.2")(e)}px;
  `,big:c.iv`
    font-size: ${e=>(0,u.R)("fontSizes.4")(e)}px;
    font-weight: ${e=>(0,u.R)("fontWeights.bold")(e)};
  `};(0,c.ZP)(p.Z)`
  color: ${e=>(0,u.uu)("base")(e)};
  margin-bottom: 5px;

  ${e=>k[e.type]}
`;var P=n(78012);n(33359),n(41065);var C=n(71180);let z=c.ZP.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.color||"#fff"};
  border-radius: 6px;
  padding: 3px 5px;
  cursor: default;
`,S=c.ZP.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0px;
`,I=c.ZP.p`
  font-size: ${e=>(0,u.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,u.R)("fontWeights.bold")(e)};
  color: ${e=>e.color||"#fff"};
  margin: 0 5px;
`,R=({value:e,color:t,icon:n,textColor:l,onClick:i,hasInfo:r})=>s.createElement(z,{color:t,"data-testid":"loyalty",onClick(e){e.preventDefault(),e.stopPropagation()}},n&&s.createElement(d.JO$,{"data-testid":`${n}Icon`,name:n,width:"12px",height:"12px",color:"#fff"}),s.createElement(I,{color:l,"data-testid":"loyalty-value"},(0,C.oB)({value:parseFloat(e)})),r&&s.createElement(S,{"data-testid":"loyalty-info-button",onClick:i},s.createElement(d.JO$,{name:"HelpOutline",color:"none",width:"12px",height:"12px"})));R.defaultProps={hasInfo:!1,color:void 0};var O=R;n(28982),n(19620),n(81484),n(563);var j=n(23458),F=n(58125),M=n(11151),L=n(73172),A=n(37222);n(57991);var T=n(31461),W=n(97728);let D=c.iv`
  margin-right: 12px;
  flex-grow: 0;
  width: 30px;
  height: 30px;
`,N=(0,c.ZP)(b.kC)`
  padding: 16px 12px;
  align-items: center;
`,B=(0,c.ZP)(d._Ps)`
  ${D}
  ${u.$_}
`,_=(0,c.ZP)(d.XqY)`
  ${D}
  ${u.$_}
`,H=(0,c.ZP)(d.Gb7)`
  ${D}
  ${u.$_}
`,V=(0,c.ZP)(d.f9j)`
  ${D}
  ${u.$_}
`,J=(0,c.ZP)(d.Ju)`
  ${D}
  ${u.$_}
`,U=(0,c.ZP)(d.oFb)`
  ${D}
  ${u.$_}
  min-width: 30px;
`,K=(0,c.ZP)(d.gbh)`
  ${D}
  ${u.$_}
  min-width: 30px;
`,G=(0,c.ZP)(p.Z)`
  flex: 4;
  font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,u.R)("fontWeights.medium")(e)};
  line-height: ${e=>(0,u.R)("lineHeights.big")(e)};
`,q=(0,c.ZP)(p.Z)`
  display: block;
  font-size: ${e=>(0,u.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,u.R)("fontWeights.regular")(e)};
  padding-right: 15px;
`,X=(0,c.ZP)(p.Z)`
  flex: 1;
  font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
  text-align: center;
  color: ${e=>{let{free:t}=e,n=(0,T.Z)(e,["free"]);return t?(0,u.ow)("secondary.base")(n):(0,u.ow)("text.base")(n)}};
  display: contents;
`,Q=e=>{let{complement:t,description:n,price:l,currency:i,time:r,type:a,unit:o,freeShippingLabel:d}=e,c=(0,T.Z)(e,["complement","description","price","currency","time","type","unit","freeShippingLabel"]);return s.createElement(N,(0,f.Z)({"data-testid":"shipping-item"},c),["store_pickup","pickup_point"].includes(a)&&s.createElement(_,{fill:"background.dark"})||(e=>{let t=(0,W.Z)({currency:i});return t?s.createElement(K,{fill:e}):"hours"===o&&r<=2?s.createElement(U,{fill:e}):"days"===o&&0===r?s.createElement(H,{fill:e}):"days"===o&&1===r?s.createElement(V,{fill:e}):"working_days"===o&&1===r?s.createElement(J,{fill:e}):!t&&s.createElement(B,{fill:e})})("background.dark"),s.createElement(G,null,n,s.createElement(q,{as:"span"},t)),!!Number(l)&&s.createElement(X,null,(0,C.oB)({value:l}))||s.createElement(X,{free:!0},d))};Q.defaultProps={freeShippingLabel:"Frete Gr\xe1tis",unit:""};var Y=Q,ee=n(15185);n(50919);var et=n(84546);let en=c.ZP.div`
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
`,el=(0,c.ZP)(p.Z).attrs({fontWeight:"bold",fontSize:3,color:"primary",mb:2})``,ei=({recommends:e,title:t})=>s.createElement(et.Z,null,s.createElement(p.Z,{fontSize:4,mb:4},t),s.createElement(en,null,e.map((e,t)=>s.createElement(et.Z,{key:t},s.createElement(el,null,e.name),s.createElement(p.Z,null,e.city),s.createElement(L.Z,{score:e.score}),s.createElement(p.Z,{lineHeight:1},e.text)))));ei.defaultProps={recommends:[],title:""};var er=n(68054);let ea=c.ZP.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  ${er.$_}
  ${er.GQ}
`;var eo=n(13980);let es=(0,c.ZP)(et.Z)``,ed=(0,c.ZP)(et.Z).attrs(e=>Object.assign({color:"text.white",fontWeight:"bold",fontSize:0},e))`
  ${u.$_}
`,ec=(0,c.ZP)(b.rU).attrs(e=>Object.assign({color:"text.white",fontSize:0,p:0},e))``,eu=e=>{let{message:{text:t=""}={},loginLink:{text:n="Entre ou cadastre-se",url:l="#"}={},handleUnsignedClick:i}=e,r=(0,T.Z)(e.message,["text"]),a=(0,T.Z)(e.loginLink,["text","url"]);return s.createElement(es,{"data-testid":"stereo-login_menu-unsigned_user_state-container"},t&&s.createElement(ed,r,t),s.createElement(ec,(0,f.Z)({onClick(){i()},href:l},a),n))};eu.defaultProps={message:{},loginLink:{},handleEventClick:eo.func.isRequired};let ep=({username:e,welcomeMessage:t,logoutMessage:n,signOutUrl:l,menuLinks:i=[],onLogout:r,handleSignedHover:a,handleSignedMenuClick:o})=>s.createElement(b.Lt,{mouseenter:!0,pointing:!0},s.createElement(b.Lt.Title,{color:"text.white",fill:"background.lighter",onMouseEnter:a},t||s.createElement("span",null,"Ol\xe1, ",s.createElement("b",null,e))),s.createElement(b.Lt.Menu,{pointing:!0,fontSize:0,p:2},i.map(({icon:e,label:t,url:n},l)=>s.createElement(b.Lt.Item,{key:l,startIcon:e,p:1,my:2},s.createElement(b.rU,{onClick:()=>o(t),href:n,fontSize:0,"data-testid":`link-${l}`},t))),s.createElement(b.Lt.Divider,null),s.createElement(b.Lt.Item,{p:1,my:2,disableHover:!0},n||`N\xe3o \xe9 ${e}? `,s.createElement(b.rU,{underline:!0,px:0,fontSize:0,href:l,onClick(){r(),o("sair")},"data-testid":"link-logout"},"Sair"))));ep.defaultProps={welcomeMessage:"",logoutMessage:"",signOutUrl:"",handleSignedHover(){},handleSignedMenuClick(){}};let em=({isSignedIn:e,unsignedConfig:t,signedConfig:n,signOutUrl:l,onLogout:i,onUnsignedClick:r,onSignedHover:a,onSignedMenuClick:o})=>s.createElement(ea,null,e?s.createElement(ep,(0,f.Z)({},n,{signOutUrl:l,onLogout:i,handleSignedHover:a,handleSignedMenuClick:o})):s.createElement(eu,(0,f.Z)({},t,{handleUnsignedClick:r})));em.defaultProps={isSignedIn:!1,unsignedConfig:{},signedConfig:{},onLogout(){},onUnsignedClick(){},onSignedHover(){},onSignedMenuClick(){},signOutUrl:""};var eg=em;let eh=c.ZP.div`
  & > svg {
    transform: scale(1.2);
  }
`,ef=({amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:l,counterColor:i="#db44a7",fontColor:r="#fff",iconColor:a="#fff",onClick:o})=>s.createElement(b.fG,{amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:l,counterColor:i,fontColor:r,onClick:o},s.createElement(eh,null,s.createElement(d.Xdw,{color:a})));ef.defaultProps={amount:0,onClick(){},nullable:!0};var eb=ef,ex=n(10200);let ev=c.ZP.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: ${(0,u.R)("space.3")}px;
  margin-right: 8px;
`,eZ=c.ZP.li`
  list-style: none;
`,e$={color:"text.greyishBlue",fontSize:[0,0,0,1],fontWeight:["bold","bold","bold","regular"]},eE=(0,c.ZP)(ex.Z).attrs(e=>Object.assign({p:0},e$,e))`
  ${u.$_}
  ${er.cp}
`,ey=c.ZP.span.attrs(e=>Object.assign({},e$,e))`
  ${u.$_}
  ${er.cp}
`,ew=({data:e,handleHorizontalLinksClick:t})=>{let{linksList:n=[]}=e;return s.createElement(ev,{"data-testid":"horizontal-links-elem"},n.map((e,n)=>s.createElement(eZ,{key:`link-item-${n}`},e.url?s.createElement("div",{onClick:()=>t(e.label)},s.createElement(eE,{href:e.url},e.label)):s.createElement(ey,null,e.label))))};ew.defaultProps={data:{linksList:[]},handleHorizontalLinksClick(){}};var ek=ew,eP=n(65055);n(51382);let eC=c.ZP.form``;eC.Link=(0,c.ZP)(b.rU).attrs(e=>Object.assign({color:"text.lightest"},e))`
  ${u.$_}
`,eC.Header=c.ZP.div.attrs(e=>Object.assign({color:"text.lightest",fontSize:0},e))`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${(0,u.R)("space.1")}px;
  }

  ${eC.Link} {
    color: ${(0,u.R)("colors.lightBlue")};
    ${er.cp}
  }

  ${u.$_};
`,eC.Title=c.ZP.h2.attrs(e=>Object.assign({fontSize:2,fontWeight:"medium",color:"text.lightest"},e))`
  ${u.$_}
  ${er.cp}
`,eC.InputWrapper=c.ZP.div.attrs(e=>Object.assign({p:"1"},e))`
  display: flex;
  align-items: center;
  ${er.Dh}
`,eC.Input=(0,c.ZP)(b.II).attrs(e=>Object.assign({mr:"2"},e))`
  ${er.Dh}
`,eC.SubmitBtn=(0,c.ZP)(b.zx).attrs(e=>Object.assign({color:"secondary",size:"small",m:"10px 0"},e))``;let ez=({title:e,policy:t,onSubmitForm:n})=>{let[l,i]=(0,s.useState)(""),[r,a]=(0,s.useState)(""),o=(e,t)=>{t(e,{name:l,email:r})};return s.createElement(eC,{"data-testid":"subscription-form-elem",onSubmit:e=>o(e,n)},s.createElement(eC.Header,null,s.createElement(d.TbV,{"data-testid":"link-icon",color:"currentColor",width:25}),s.createElement(eC.Title,null,e),s.createElement(eC.Link,{"data-testid":"link-policy",underline:!0,href:null==t?void 0:t.url},null==t?void 0:t.label)),s.createElement(eC.InputWrapper,null,s.createElement(y.Z,{text:"digite o seu nome",htmlFor:"input-name"}),s.createElement(eC.Input,{id:"input-name","data-testid":"input-name",placeholder:"digite o seu nome",value:l,onChange:e=>i(e.target.value)}),s.createElement(y.Z,{text:"digite o seu email",htmlFor:"input-email"}),s.createElement(eC.Input,{id:"input-email","data-testid":"input-email",placeholder:"digite o seu email",type:"email",value:r,onChange:e=>a(e.target.value)}),s.createElement(eC.SubmitBtn,{"data-testid":"submit-btn",disabled:!r||!l,type:"submit",onClick:e=>o(e,n)},"Enviar")))};var eS=ez,eI=n(38825);n(41237);var eR=n(1587),eO=n(27408);let ej=(0,c.ZP)(b.xv)`
  font-size: ${e=>(0,u.R)("fontSizes.0")(e)}px;
  color: ${(0,u.uu)("scratched")};
  text-align: ${({textAlign:e})=>e};

  span {
    color: ${(0,u.R)("palette.secondary.dark")};
    font-weight: ${(0,u.R)("fontWeights.bold")};
  }
`;var eF=n(12468);let eM=()=>s.createElement("span",null,"Frete gr\xe1tis");var eL=function({cost:e,displayMode:t,costDescription:n}){return s.createElement(s.Fragment,null,e?s.createElement(ej,{"data-testid":"shipping-cost",textAlign:t===eF.Co?"center":null},0===Number(e)?s.createElement(eM,null):n):null)};n(97949);var eA=n(62458)}}]);
//# sourceMappingURL=8956-24ff409a82e2e6be.js.map