"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8350],{5530:function(e,t,i){i.d(t,{Z:function(){return f}});var l=i(7896),n=i(31461),a=i(2784),r=i(99673),o=i(87043);let s=(0,r.ZP)(o.rj).attrs(e=>Object.assign({pt:2,pb:3,px:3,backgroundColor:"background.lighter",borderRadius:"medium"},e))`
  grid-template-columns: minmax(auto, 64px) auto;
  grid-template-areas: ${({hasFigure:e})=>e?`'f c'
        'b b'`:`'c c'
        'b b'`};
`,d=(0,r.ZP)(o.kC).attrs(e=>Object.assign({my:3,mx:2},e))`
  flex-direction: column;
  justify-content: space-around;
  grid-area: c;
`,c=(0,r.ZP)(o.xu).attrs(e=>Object.assign({my:3,mx:2,minWidth:"64px"},e))`
  grid-area: f;
`,u=(0,r.ZP)(o.Ee)``,m=(0,r.ZP)(o.xu).attrs(e=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"medium",fontSize:2},e))``,p=(0,r.ZP)(o.xu).attrs(e=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"regular",fontSize:1,lineHeight:"big"},e))``,h=(0,r.ZP)(o.zx)`
  width: 100%;
  text-transform: uppercase;
  grid-area: b;
`,g=e=>{let{data:t,as:i,href:r,image:o,alt:g,onButtonClick:f,buttonProps:x}=e,v=(0,n.Z)(e,["data","as","href","image","alt","onButtonClick","buttonProps"]);return a.createElement(s,(0,l.Z)({"data-testid":"card",hasFigure:Boolean(o)},v),Boolean(o)&&a.createElement(c,{"data-testid":"card-figure"},a.createElement(u,{src:o,alt:g,width:64,height:64,lazy:!0})),(Boolean(t.title)||Boolean(t.text))&&a.createElement(d,{"data-testid":"card-content"},Boolean(t.title)&&a.createElement(m,{"data-testid":"card-title"},t.title),Boolean(t.text)&&a.createElement(p,{"data-testid":"card-text"},t.text)),a.createElement(h,(0,l.Z)({"data-testid":"card-button",forwardedAs:r?"a":i,href:r,onClick:f,children:t.action},x)))};g.defaultProps={as:"button",data:{title:"",text:"",action:""},image:"",href:void 0,alt:"",onButtonClick(){}};var f=g},92877:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(2784),n=i(34490),a=i(70615),r=i(50616),o=i(99673),s=i(55403),d=i(63825);let c=o.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px;
  border-bottom: 3px solid #eee;
`,u=o.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=(0,o.ZP)(d.Z)`
  text-align: center;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.2")(e)}px;
`;function p({label:e,content:t,detailTitle:i,fullScreen:o,children:s,open:d,onCloseSidebar:p,onChangeOpen:h}){let[g,f]=(0,l.useState)(d);function x(){f(!1),h(!1),p()}return(0,l.useEffect)(()=>{f(d),h(d)},[d]),l.createElement(l.Fragment,null,l.createElement(r.Z,{title:e,open:!!t,onClick(){f(!g),h(!g)}},t),l.createElement(a.Z,{direction:"right",visible:g,onClickOutside:x,fullScreen:o},l.createElement(c,null,l.createElement(n.xhZ,{color:"text.light","data-testid":"arrow-back",role:"button",title:"Fechar detalhes",onClick:x}),l.createElement(u,null,l.createElement(m,{"data-testid":"detail-title"},i))),s))}p.defaultProps={content:null,open:!1,onCloseSidebar(){},onChangeOpen(){}};var h=p},36103:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(7896),n=i(31461),a=i(2784),r=i(19527),o=i(77954),s=i(5086),d=i(2575);let c={color:s.Z,size:o.Z,voltage:o.Z,volume:d.Z},u=e=>null==e?void 0:e.reduce((e,t)=>{var i;return e[t.type]=Object.assign({},e[t.type],{[t.value]:[...(null==(i=(null==e?void 0:e[t.type])||{})?void 0:i[t.value])||[],t]}),e},{}),m=(e,t)=>e.map((i,l)=>{var n,a,r,o;let s=u(t);return Object.assign({},i,{variations:null==(n=(null==s?void 0:null==(a=s[null==(r=e[l-1])?void 0:r.type])?void 0:a[null==(o=e[l-1])?void 0:o.current])||t)?void 0:n.reduce((e,t)=>Array(...new Set([...e,t.id])),[])})}),p=e=>{let{onAttributeChange:t,attributes:i,variations:s,title:d,alignment:u,colorMinLength:p,colorVariant:h,fullWidth:g,showTitle:f,style:x,onVariationClick:v,showWarningText:b,warningMessage:w,iconWarningText:E}=e,y=(0,n.Z)(e,["onAttributeChange","attributes","variations","title","alignment","colorMinLength","colorVariant","fullWidth","showTitle","style","onVariationClick","showWarningText","warningMessage","iconWarningText"]),Z={color:p},C={color:h},P=m(i,s);return a.createElement(r.Z,{flexDirection:"column",width:1,rowGap:3},P.map((e,i)=>{let n=c[null==e?void 0:e.type]||o.Z,r=s.filter(t=>e.variations.includes(t.id)&&t.type===e.type);return a.createElement(n,(0,l.Z)({fullWidth:g,key:`${null==e?void 0:e.type}-${i}`,attribute:e,variations:r,onChange:t,onVariationClick:v,title:d,alignment:u,minLength:Z[null==e?void 0:e.type],variant:C[null==e?void 0:e.type],showTitle:f,style:x,showWarningText:b,warningMessage:w,iconWarningText:E},y))}))};p.defaultProps={attributes:[],alignment:"center",colorVariant:"smooth",fullWidth:!1,variations:[],showTitle:!0,style:{},onVariationClick:null,showWarningText:!1,warningMessage:"",iconWarningText:""};var h=p},704:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(7896),n=i(31461),a=i(2784),r=i(55403),o=i(99673);let s=o.ZP.div`
  background: ${e=>(0,r.dF)("white")(e)};
  border-radius: ${e=>(0,r.R)("space.2")(e)}px;
  padding: 20px 28px;
  text-align: left;
  max-width: 421px;
  width: 100%;
  height: 137px;
  position: relative;
  border: 1px solid #e0e0e0;
  padding-bottom: 30px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 20px;
    background: #f5f5f5;
    border-radius: 0 15px 15px 0;
    border: 1px solid #e0e0e0;
  }

  &::before {
    top: 30px;
    left: -1px;
    border-left-color: #f5f5f5;
  }

  &::after {
    bottom: 30px;
    left: -1px;
    border-left-color: #f5f5f5;
  }
`,d=o.ZP.div`
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 20px;
    background: #f5f5f5;
    border-radius: 15px 0 0 15px;
    border: 1px solid #e0e0e0;
  }

  &::before {
    top: 30px;
    right: -1px;
    border-right-color: #f5f5f5;
  }

  &::after {
    bottom: 30px;
    right: -1px;
    border-right-color: #f5f5f5;
  }
`,c=o.ZP.div`
  position: absolute;
  top: 40px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  border-top: 1px dashed #e0e0e0;
`,u=o.ZP.div`
  font-weight: bold;
  font-size: ${e=>(0,r.R)("fontSizes.2")(e)}px;
  margin-bottom: 12px;
  color: ${e=>(0,r.R)("colors.black")(e)};
  text-align: left;
`,m=o.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 0;
  gap: ${e=>(0,r.R)("space.2")(e)}px;
`,p=e=>{let{headerText:t,children:i}=e,r=(0,n.Z)(e,["headerText","children"]);return a.createElement(s,(0,l.Z)({"data-testid":"coupon-card"},r),a.createElement(d,null),t&&a.createElement(u,{"data-testid":"coupon-header"},t),a.createElement(c,{"data-testid":"coupon-dashed-line"}),a.createElement(m,{"data-testid":"coupon-content"},i))};p.defaultProps={headerText:""};var h=p},28426:function(e,t,i){i.d(t,{Z:function(){return b}});var l=i(7896),n=i(31461),a=i(2784),r=i(12468),o=i(87043),s=i(70615),d=i(99673),c=i(55403),u=i(63825);let m=(0,d.ZP)(u.Z)`
  color: ${e=>(0,c.uu)("scratched")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.regular")(e)};
`,p=(0,d.ZP)(u.Z)`
  margin-top: 16px;
  line-height: 1.25;
`,h=(0,d.ZP)(u.Z)`
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  color: ${e=>(0,c.ow)("text.primary")(e)};
  line-height: 1.25;
`,g=e=>{let{isMagaluCompany:t,onLinkClick:i}=e,l=(0,n.Z)(e,["isMagaluCompany","onLinkClick"]),r=()=>null==i?void 0:i();return t?a.createElement(o.xu,l,a.createElement(m,{"data-testid":"guaranteelabel"},"Empresa do"," ",a.createElement(o.rU,{underline:!0,display:"inline",color:"text.scratched",onClick:r},"Grupo Magalu")," ","que garante sua compra do pedido \xe0 entrega.")):a.createElement(o.xu,l,a.createElement(m,{"data-testid":"guaranteelabel"},"O Magalu garante a sua compra, do pedido \xe0 entrega."," ",a.createElement(o.rU,{underline:!0,display:"inline",color:"text.scratched","data-testid":"learn-more",onClick:r},"Saiba mais")))};g.defaultProps={id:"magazineluiza",delivery:"magazineluiza",isMagaluCompany:!1};var f=i(34490);let x=({text:e,title:t})=>a.createElement(o.xu,{p:16},a.createElement(o.kC,null,a.createElement(f.hzV,{mr:16,width:45,height:35}),a.createElement(h,{"data-testid":"details-title"},t)),a.createElement(o.xu,{p:1},null==e?void 0:e.map((e,t)=>a.createElement(p,{key:t},e))));x.defaultProps={title:"",text:[]};let v=e=>{let{seller:t,showDialog:i,detailsText:d,detailsTitle:c,isMagaluCompany:u,onDetailsOpen:m,onDetailsClose:p}=e,h=(0,n.Z)(e,["seller","showDialog","detailsText","detailsTitle","isMagaluCompany","onDetailsOpen","onDetailsClose"]),{id:f}=t,[v,b]=(0,a.useState)(!1),w=e=>{m(e),b(!0)},E=e=>{p(e),b(!1)};return f===r.ig?null:a.createElement(a.Fragment,null,a.createElement(g,(0,l.Z)({isMagaluCompany:u,onLinkClick:w},h)),!i&&a.createElement(s.Z,{direction:"right",visible:v,onClickOutside:E,fullScreen:!1},a.createElement(s.$,{label:u?"Empresa do Grupo Magalu":"Entrega e compra garantida",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:E}}),a.createElement(x,{text:d,title:c})),i&&a.createElement(o.Vq,{visible:v,onClickOutside:E,type:"responsive",position:"center",width:"350px",titleStyle:{textAlign:"center"},showClose:!0},a.createElement(x,{text:d,title:c})))};v.defaultProps={seller:{id:"magazineluiza"},detailsText:[],detailsTitle:"",showDialog:!1,isMagaluCompany:!1,onDetailsOpen(){},onDetailsClose(){}};var b=v},90713:function(e,t,i){i.d(t,{Z:function(){return x}});var l=i(2784),n=i(33279),a=i(99673),r=i(55403),o=i(19527),s=i(87043);let d=a.ZP.div`
  width: 100%;
  padding: ${e=>(0,r.R)("space.2")(e)}px;
  ${({desktopMode:e})=>!e&&a.iv`
      display: flex;
      justify-content: start;
      overflow-x: scroll;
      scrollbar-width: none;
    `};
`,c=(0,a.ZP)(s.xv)`
  font-size: ${e=>(0,r.R)(e.desktopMode?"fontSizes.2":"fontSizes.0")(e)}px;
  white-space: nowrap;
  color: #8f8f8f;
`,u=(0,a.ZP)(o.Z)`
  padding: ${e=>(0,r.R)("space.2")(e)}px;
`,m=(0,a.ZP)(o.Z)`
  justify-content: ${e=>e.desktopMode?"flex-start":"center"};
  align-items: center;
`,p=a.ZP.a`
  text-decoration: none;
  cursor: default;
  justify-content: center;
  display: flex;
`,h=a.ZP.label`
  ${(0,r.aK)("small")} {
    min-width: 134px;
  }
  min-width: 90px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  border: ${(0,r.R)("borders.0")};
  border-radius: ${(0,r.R)("radii.large")};
  align-items: center;
  background: ${e=>(0,r.dF)("white")(e)};
  height: ${({height:e})=>`${e}px`};
  width: fit-content;
  & > img {
    padding: ${(0,r.R)("space.2")}px
      ${e=>(0,r.R)(e.desktopMode?"space.3":"space.2")}px;
    aspect-ratio: 1/1;
    max-width: 100%;
    max-height: 100%;
  }
`;var g=i(90749);function f({filters:e={},onItemClick:t,onView:i,desktopMode:a,itemHeight:r,slidesPerView:o}){let{attributeFilters:f}=e,[x,v]=(0,n.YD)({triggerOnce:!0,threshold:0,delay:1e3});(0,l.useEffect)(()=>{v&&i({filters:e})},[v]);let b=({children:e,filter:t})=>a&&t.values.length>o?l.createElement(g.lr,{auto:!1,showControls:!1,showArrowControls:!0,showPartial:!1,showPartialNextSlide:!1,gutter:0,slidesPerView:o,"data-testid":"carousel"},e):l.createElement(m,{"data-testid":"m-carousel",desktopMode:a,gap:a?12:2},e);return l.createElement(l.Fragment,null,f.map((e,i)=>l.createElement(l.Fragment,null,l.createElement(u,null,l.createElement(s.X6,{"data-testid":"header-label",as:"h2",fontSize:a?18:14,color:"text.attributeLabel"},e.label)),l.createElement(d,{ref:x,"data-testid":"filter-item-container",key:i,desktopMode:a},l.createElement(b,{filter:e},null==e?void 0:e.values.map(e=>l.createElement(p,{key:e.id,role:"button",onClick:i=>t(i,e),href:e.url||e.href,"data-testid":"filter-item-link"},l.createElement(h,{"data-testid":"filter-item-label",height:r,desktopMode:a},"icon"===e.filterType?l.createElement(s.Ee,{alt:e.label,title:e.label,"data-testid":"filter-item-image",src:e.icon}):l.createElement(c,{px:2,desktopMode:a,"data-testid":"filter-item-text"},e.label)))))))))}f.defaultProps={filters:{},onItemClick(){},onView(){},slidesPerView:5};var x=f},63486:function(e,t,i){i.d(t,{Z:function(){return u}});var l=i(2784),n=i(34490),a=i(99673),r=i(19527);let o=(0,a.ZP)(r.Z)`
  display: flex;
  align-content: center;
  justify-content: ${({carousel:e})=>e?"start":"center"};
  padding: 12px;
  overflow-x: ${({scrollOff:e})=>e?"hidden":"scroll"};
`,s=(0,a.ZP)(r.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;var d=i(17781);let c=({filters:e,onChange:t,hasBorder:i,scrollOff:a})=>{let r=e=>l.createElement(n.JO$,{name:{"24c":"DeliveryRTomorrow",delivery_plus_1:"FastDelivery",store_pickup:"PickupStore",delivery_1h:"Delivery1h",delivery_24h:"Delivery24h","magalu-entregas":"DeliveryM","magalu-partner":"Pin",free_shipping:"DeliveryFree",today:"ExpressDelivery",magalu_indica:"FastDelivery",promocao_sazonal_1:"Christmas",promocao_sazonal_2:"CupomPromotion",promocao_sazonal_3:"Offers",promocao_sazonal_4:"Offers"}[e]||"FastDelivery"});return l.createElement(o,{"data-testid":"delivery-filter-container",carousel:(null==e?void 0:e.length)>2,scrollOff:a},l.createElement(s,null,null==e?void 0:e.map(({label:e,slug:n,selected:a,href:o})=>l.createElement(d.Z,{as:"a",type:"checkbox",name:"DeliveryFilter",startIcon:r(n),onChange:i=>t(Object.assign({},i,{href:o,label:e,slug:n})),checked:a,href:o,value:n,key:n,id:n,hasBorder:i,textMaxWidth:"100%",minWidth:"135px",maxWidth:"150px",padding:"4px",gridGap:"6px"},e))))};c.defaultProps={filters:[],onChange(){},scrollOff:!1,hasBorder:!1};var u=c},66608:function(e,t,i){i.d(t,{Z:function(){return k}});var l=i(7896),n=i(31461),a=i(2784),r=i(86349),o=i(70615),s=i(37215),d=i(71180),c=i(87043),u=i(99673),m=i(55403),p=i(37270);let h=(0,u.ZP)(c.xv)`
  color: ${e=>(0,m.uu)("scratched")(e)};
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,m.R)("fontWeights.bold")(e)};
  margin-bottom: 5px;
`,g=(0,u.ZP)(c.xv)`
  color: ${e=>(0,m.uu)("scratched")(e)};
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
`,f=(0,u.ZP)(c.xv).attrs({fontSize:3})`
  line-height: normal;
  font-weight: normal;
  color: ${e=>(0,m.R)("colors.greyishBrown")(e)};
`,x=u.ZP.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: normal;
  font-size: ${e=>(0,m.R)("fontSizes.3")(e)}px;

  color: ${e=>(0,m.R)("colors.greyishBrown")(e)};
  line-height: 18.7px;

  b {
    font-weight: 500;
  }
`,v=(0,u.ZP)(c.zx)`
  border-radius: 12px;
  padding: 11px 100px;
`;(0,u.ZP)(c.xv)`
  font-weight: ${e=>(0,m.R)("fontWeights.bold")(e)};
  color: ${e=>(0,m.ow)("text.scratched")(e)};
  line-height: 1.25;
`;let b=u.ZP.br``,w=(0,u.ZP)(c.Vq).attrs({titleStyle:{fontSize:"22px",color:"#424A52",fontWeight:700}})`
  max-width: 724px;
  overflow-x: hidden;
`,E=(0,u.ZP)(p.bo)`
  height: 1px;
  max-width: 724px;
  transform: translateX(-16px);
  margin: 24px 0 18px;
`,y=e=>{let{onLinkClick:t,isIncludeTaxes:i,totalValueImportTax:r,totalValueICMS:o}=e,s=(0,n.Z)(e,["onLinkClick","isIncludeTaxes","totalValueImportTax","totalValueICMS"]),u=()=>null==t?void 0:t();return a.createElement(c.xu,(0,l.Z)({"data-testid":"content-box"},s),i&&a.createElement(a.Fragment,null,a.createElement(h,{"data-testid":"titletaxeslabel"},"+ Imposto de importa\xe7\xe3o ",(0,d.oB)({value:r})," e ICMS ",(0,d.oB)({value:o}),"."),a.createElement(g,{"data-testid":"texttaxeslabel"},"Os impostos s\xe3o calculados de acordo com o ",a.createElement(b,null),"Remessa Conforme."," ",a.createElement(c.rU,{display:"inline",color:"text.primary","data-testid":"learn-more",onClick:u},"Saiba mais"))),!i&&a.createElement(g,{"data-testid":"texttaxeslabel"},"Impostos de importa\xe7\xe3o ser\xe3o adicionados ao seguir ",a.createElement(b,null),"com a compra."," ",a.createElement(c.rU,{display:"inline",color:"text.primary","data-testid":"learn-more",onClick:u},"Saiba mais")))};y.defaultProps={onLinkClick:void 0,isIncludeTaxes:!1};var Z=i(34490);let C=({closeDetails:e,isMobile:t})=>a.createElement(c.kC,{flexDirection:"column","data-testid":"detail-text"},a.createElement(c.xu,{p:16},a.createElement(c.kC,{flexDirection:t?"column":"row"},a.createElement(c.kC,null,a.createElement(Z.qGg,{mr:16,width:66,height:67})),a.createElement(c.kC,null,a.createElement(f,null,"[PRODUTO INTERNACIONAL/COMPRA INTERNACIONAL] Toda mercadoria proveniente do exterior (importada) deve ser objeto de declara\xe7\xe3o de importa\xe7\xe3o e est\xe1 sujeita a tributos federal e estadual."))),a.createElement(c.kC,null,a.createElement(x,null,a.createElement("span",null,"Com o Remessa Conforme, o programa do governo brasileiro que simplifica o processo de importa\xe7\xe3o, voc\xea sabe de forma clara o que pagar:"),a.createElement("span",null,"• Para compras ",a.createElement("b",null,"at\xe9 50 d\xf3lares"),", voc\xea paga 20% de taxa de importa\xe7\xe3o e o ICMS*, sem taxas extras na alf\xe2ndega."),a.createElement("span",null,"• Para compras ",a.createElement("b",null,"acima de 50,01 d\xf3lares"),", a taxa de importa\xe7\xe3o \xe9 de 60%, com um desconto de 20 d\xf3lares, al\xe9m do ICMS*. E n\xe3o h\xe1 taxas extras na alf\xe2ndega."),a.createElement("span",null,a.createElement("b",null,"*ICMS:")," Imposto estadual sobre a circula\xe7\xe3o de produtos e servi\xe7os no Brasil. Al\xedquota de 17% ou 20% calculada automaticamente de acordo com o estado de destino da mercadoria. Em caso de d\xfavidas sobre a al\xedquota consulte a Secretaria da Fazenda do seu estado.")))),a.createElement(c.kC,{justifyContent:"center",flexDirection:"column"},a.createElement(E,{ruleSize:1,bg:"border.light"}),a.createElement(c.kC,{justifyContent:"center"},a.createElement(v,{onClick:e},"Entendi"))));C.defaultProps={closeDetails(){},isMobile:!1};let P=e=>{let{product:t,onDetailsOpen:i,onDetailsClose:d,isIncludeTaxes:c,isMobile:u}=e,m=(0,n.Z)(e,["product","onDetailsOpen","onDetailsClose","isIncludeTaxes","isMobile"]),[p,h]=(0,a.useState)(!1),g=(0,r.xx)(null==t?void 0:t.price),f=e=>{i(e),h(!0)},x=e=>{d(e),h(!1)};return g?a.createElement(a.Fragment,null,a.createElement(s.Z,{variant:"small"}),a.createElement(y,(0,l.Z)({onLinkClick:f,isIncludeTaxes:c},m)),u&&a.createElement(o.Z,{direction:"right",visible:p,onClickOutside:x,fullScreen:!1},a.createElement(o.$,{label:"Compra Internacional",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a p\xe1gina do produto",onClick:x}}),a.createElement(C,{isMobile:!0,closeDetails:x})),!u&&a.createElement(w,{visible:p,onClickOutside:x,position:"center",showHorizontalRule:!0,title:"Compra Internacional",showClose:!0},a.createElement(C,{closeDetails:x}))):null};P.defaultProps={product:{},isMobile:!1,isIncludeTaxes:!1,onDetailsOpen(){},onDetailsClose(){}};var k=P},75057:function(e,t,i){i.d(t,{Z:function(){return E}});var l=i(31461),n=i(2784),a=i(15312),r=i(13111),o=i(84546),s=i(60861),d=i(18281),c=i(19527),u=i(10200),m=i(63825),p=i(29869),h=i(99673),g=i(25610);let f=(0,h.ZP)(g.Z).attrs({fontSize:5,fontWeight:"light"})``,x=(0,h.ZP)(o.Z).attrs({fontSize:[0,1,2,2],display:"contents",color:"text.light",mY:3})``,v=(0,h.ZP)(m.Z).attrs({mt:3,mb:1})``,b=(0,h.ZP)(m.Z).attrs({color:"error",mt:1})``;function w({errorEmail:e,errorName:t,labelEmail:i,labelName:h,labelNewsletter:g,noticeMeLabel:w,noticeMeLink:E,onSubmit:y,placeholderEmail:Z,placeholderName:C,subtitle:P,textSubmitButton:k,title:$}){let[S,z]=(0,n.useState)(!0),[I,R]=(0,n.useState)(""),[O,D]=(0,n.useState)(""),[M,A]=(0,n.useState)({}),T=n.useCallback(()=>{let e=(0,a.Z)(I)?void 0:{fullName:t};return A(t=>Object.assign({},(0,l.Z)(t,["fullName"]),e)),e},[I]),L=n.useCallback(t=>{let i=(0,r.Z)(t)?void 0:{email:e};return A(e=>Object.assign({},(0,l.Z)(e,["email"]),i)),i},[O]),j=(0,n.useCallback)(()=>{R(""),D(""),z(!0)},[I,O]),W=e=>{let t=Object.assign({},T(I),L(O));Object.entries(t).length||y({fullName:I,email:O,newsletter:S},j),e.preventDefault()};return n.createElement(n.Fragment,null,n.createElement(c.Z,{alignItems:"baseline",gap:"2",mb:"3"},n.createElement(f,{"data-testid":"let-me-know-title"},$),n.createElement(u.Z,{href:E,target:"_blank",underline:!0,color:"text.light",fontSize:[0,1,2,2]},w)),n.createElement(x,{"data-testid":"let-me-know-description"},P),n.createElement("form",null,n.createElement(v,{"data-testid":"let-me-know-input-label-name"},h),n.createElement(p.Z,{"data-testid":"let-me-know-input-name",placeholder:C,hasError:!!M.fullName,value:I,onChange:e=>R(e.target.value),onFocus:()=>A(e=>(0,l.Z)(e,["fullName"])),onBlur:e=>T(e.target.value)}),n.createElement(b,{"data-testid":"let-me-know-error-name"},M.fullName),n.createElement(v,{"data-testid":"let-me-know-input-label-email"},i),n.createElement(p.Z,{"data-testid":"let-me-know-input-email",placeholder:Z,type:"email",hasError:!!M.email,value:O,onChange:e=>D(e.target.value),onFocus:()=>A(e=>(0,l.Z)(e,["email"])),onBlur:e=>L(e.target.value)}),n.createElement(b,{"data-testid":"let-me-know-error-email"},M.email)),n.createElement(o.Z,{mt:15},n.createElement(d.Z,{as:m.Z,fontSize:[1,2],checked:S,onChange:e=>z(e.target.checked)},g)),n.createElement(o.Z,{mt:15},n.createElement(s.Z,{"data-testid":"let-me-know-submit",full:!0,onClick:W},k)))}w.defaultProps={errorEmail:"Insira o e-mail corretamente.",errorName:"Insira o nome completo corretamente.",labelEmail:"E-mail",labelName:"Nome",labelNewsletter:"Quero receber ofertas e conte\xfados por e-mail",noticeMeLabel:"Ver produtos similares",onSubmit:void 0,placeholderEmail:"Digite seu e-mail",placeholderName:"Digite seu nome",subtitle:"Avise-me quando estiver dispon\xedvel",textSubmitButton:"Avise-me",title:"N\xe3o dispon\xedvel"};var E=w},99075:function(e,t,i){i.d(t,{Z:function(){return p}});var l=i(2784),n=i(34490),a=i(86349),r=i(87043),o=i(90749),s=i(99673),d=i(55403);let c=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  text-align: center;
`,u=s.ZP.h2`
  font-size: ${e=>(0,d.R)("fontSizes.4")(e)}px;
  line-height: ${e=>(0,d.R)("lineHeights.fontSize")(e)};
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  color: ${e=>e.color};
  margin: 10px;
`,m=s.ZP.p`
  font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
  line-height: ${e=>(0,d.R)("lineHeights.display")(e)};
  color: ${e=>(0,d.uu)("base")(e)};
  margin: 15px 0;
  width: 80%;
`;function p({label:e,description:t,value:i,productUrl:s,attributes:{color:d,icon:p,textColor:h}}){let g={coin:"Coin",lightning:"Lightning"}[p]||"Coin",[f,x]=(0,l.useState)(!1),[v,b]=(0,l.useState)(!1),w=e=>{e.stopPropagation(),e.preventDefault(),b(!v)},E=e=>!f&&(x(!0),(0,a.vQ)(e),setTimeout(()=>x(!1),3e3));return l.createElement(l.Fragment,null,l.createElement(o.mY,{hasInfo:!0,onClick:w,color:d,icon:g,textColor:h,value:i}),l.createElement(r.Vq,{visible:v,onClickOutside:w,position:"center",showClose:!0,type:"alert"},l.createElement(c,{onClick(e){e.stopPropagation(),e.preventDefault()}},l.createElement(r.kC,{alignItems:"center",flexDirection:"column"},l.createElement(n.JO$,{name:g,"data-testid":"loyalty-commission-icon",width:"25px",height:"25px",color:d}),l.createElement(u,{id:"loyaltyDialogTitle",color:d},e)),l.createElement(o.mY,{value:i,color:d,Icon:n.JO$,textColor:h}),l.createElement(m,{id:"loyaltyDialogDesc"},t),l.createElement(r.zx,{rounded:!0,variation:f?null:"outline",full:!0,onClick:()=>E(s),"data-testid":"loyalty-commission-button"},f?"Copiado":"Copiar Link"))))}},60857:function(e,t,i){i.d(t,{Z:function(){return f}});var l=i(7896),n=i(31461),a=i(2784),r=i(34490),o=i(19527),s=i(7029),d=i(99673);let c=(0,d.ZP)(o.Z).attrs(e=>({borderWidth:e.selected?2:1,borderColor:e.selected?"blue":"whisper",borderStyle:"solid",borderRadius:"default",padding:2,width:e.smallThumbnails?"84px":"110px",height:e.smallThumbnails?"66px":"110px",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"}))`
  & img {
    height: ${e=>e.smallThumbnails?"70px":"90px"};
  }
`,u=e=>{let{alt:t,title:i,audio:d,images:u,video:m,imgWidth:p,imgHeight:h,imgMaxHeight:g,onImageClick:f,onAudioClick:x,onVideoClick:v,showMedia:b,showMoreTooltip:w,smallThumbnails:E,preload:y}=e,Z=(0,n.Z)(e,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","onImageClick","onImageChange","onAudioClick","onVideoClick","showMedia","showMoreTooltip","smallThumbnails","preload"]),[C,P]=(0,a.useState)({image:u[0],index:0}),k=e=>{f(e)};return(0,a.useEffect)(()=>{P({image:u[0],index:0})},[u]),a.createElement(o.Z,(0,l.Z)({columnGap:4,maxHeight:614,"data-testid":"media-gallery"},Z),a.createElement(o.Z,{rowGap:3,flexDirection:"column",width:"fit-content"},u.slice(0,u.length>5?4:u.length).map((e,l)=>a.createElement(c,{key:`gallery-img-${l}`,selected:l===C.index,smallThumbnails:E},a.createElement(s.Z,{alt:t,title:i,"data-testid":"media-gallery-image",src:e,width:90,height:90,onClick:()=>P({image:e,index:l}),onMouseOver:()=>P({image:e,index:l})}))),u.length>5&&a.createElement(o.Z,{"data-testid":"media-gallery-image-more",fontSize:5,fontWeight:"bold",borderRadius:"default",width:E?"84px":"110px",height:E?"66px":"110px",title:w,alignItems:"center",justifyContent:"center",bg:"background.base",color:"text.base",cursor:"pointer",onClick:()=>f(4)},"+ ",u.length-4)),a.createElement(o.Z,{flex:1,maxHeight:614,position:"relative"},a.createElement(s.Z,{"data-testid":"image-selected-thumbnail",src:C.image,maxHeight:g,width:p,height:h,alt:t,title:i,lazy:!y||0!==C.index,onClick:()=>k(C.index),cursor:"pointer"}),b&&a.createElement(o.Z,{gap:2,position:"absolute",bottom:0,left:0,"data-testid":"media-gallery-icons"},!!m&&a.createElement(r.JO$,{name:"VideoCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-video-icon",onClick:v}),!!d&&a.createElement(r.JO$,{name:"PodcastCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-audio-icon",onClick:x}))))};u.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:600,imgHeight:600,imgMaxHeight:"40vh",alt:"",title:"",showMoreTooltip:"",smallThumbnails:!1,preload:!1};var m=i(87043),p=i(90749);let h=e=>{let{alt:t,title:i,audio:o,images:s,video:d,imgWidth:c,imgHeight:u,imgMaxHeight:h,counterSeparator:g,showCounter:f,onImageChange:x,onImageClick:v,onAudioClick:b,onVideoClick:w,showMedia:E,lazy:y,preload:Z}=e,C=(0,n.Z)(e,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showMedia","lazy","preload"]),[P,k]=(0,a.useState)(1),[$,S]=(0,a.useState)(),z={audio:b,video:w},I={video:a.createElement(m.cx,{"data-testid":"media-embed",src:d}),audio:a.createElement("audio",{"data-testid":"media-audio",controls:!0,src:o})},R=e=>{let t="string"==typeof e&&["video","audio"].includes(e)?e:null;S(t)},O=e=>{let t=z[e];t(),R(e)},D=e=>{k(e+1),x(s[e])};return a.createElement(a.Fragment,null,a.createElement(m.xu,(0,l.Z)({"data-testid":"media-gallery",fontSize:0,position:"relative"},C),a.createElement(p.lr,{lazy:y,onChange:D,showControls:!1,auto:!1},s.map((e,l)=>a.createElement(m.xu,{height:h,key:`gallery-img-${l}`},a.createElement(m.Ee,{alt:t,title:i,"data-testid":"media-gallery-image",key:`gallery-img-${l}`,src:e,m:"auto",width:c,height:u,maxHeight:h,lazy:!Z||0!==l,onClick:()=>v(l)})))),E&&a.createElement(m.kC,{"data-testid":"media-gallery-icons",position:"absolute",bottom:"16px",left:"16px",columnGap:2},!!d&&a.createElement(r.JO$,{name:"VideoCircle",width:"40px",height:"40px",onClick:()=>O("video"),"data-testid":"media-gallery-video-icon"}),!!o&&a.createElement(r.JO$,{name:"PodcastCircle",width:"40px",height:"40px",onClick:()=>O("audio"),"data-testid":"media-gallery-audio-icon"})),f&&!!s.length&&a.createElement(m.xu,{"data-testid":"media-gallery-counter",bg:"background.dark",color:"text.lightest",position:"absolute",bottom:"16px",right:"16px",paddingX:2,paddingY:1,borderRadius:"default",opacity:"85%"},P,g,s.length)),$&&a.createElement(m.Vq,{title:null,position:"center",showClose:!0,onClickOutside:R,visible:!0},I[$]))};h.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",lazy:!1,preload:!1};let g=e=>{let{alt:t,title:i,audios:r,images:o,podcasts:s,videos:d,imgWidth:c,imgHeight:m,imgMaxHeight:p,onImageChange:g,onImageClick:f,onAudioClick:x,onVideoClick:v,showThumbnail:b,showMoreTooltip:w,smallThumbnails:E,preload:y}=e,Z=(0,n.Z)(e,["alt","title","audios","images","podcasts","videos","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showThumbnail","showMoreTooltip","smallThumbnails","lazy","preload"]),C=b?u:h,[P]=d,[k]=[...s,...r];return a.createElement(C,(0,l.Z)({alt:t,title:i,audio:k,video:P,images:o,imgWidth:c,imgHeight:m,imgMaxHeight:p,onImageClick:f,onAudioClick:x,onVideoClick:v,onImageChange:g,showMedia:!!P||!!k,showMoreTooltip:w,smallThumbnails:E,preload:y},Z))};g.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",onImageChange(){},onImageClick(){},onVideoClick(){},onAudioClick(){},showThumbnail:!1,showMoreTooltip:"",smallThumbnails:!1,lazy:!1,preload:!1};var f=g},56337:function(e,t,i){i.d(t,{Z:function(){return Z}});var l=i(2784),n=i(71180),a=i(84546),r=i(78045),o=i(97949),s=i(73172),d=i(25164);let c=(e=[],t)=>e.map(e=>({mediaUrl:e,mediaType:t,original:e.includes("original"),processed:e.includes("processed"),thumbnails:e.includes("thumbnails")}));var u=i(99673),m=i(55403),p=i(87043);let h=(0,u.ZP)(p.kC)`
  align-items: center;
  padding: 0 0 ${e=>(0,m.R)("space.2")(e)}px;

  ${(0,m.aK)("large")} {
    padding: 0 0 ${e=>(0,m.R)("space.3")(e)}px;
  }
`,g=u.ZP.span`
  width: 80px;
`,f=(0,u.ZP)(p.xv).attrs(()=>({fontSize:2}))`
  color: ${e=>(0,m.R)("colors.darkSilver")(e)};
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  padding: ${e=>(0,m.R)("space.2")(e)}px;
  line-height: ${e=>(0,m.R)("lineHeights.plus")(e)}px;
`,x=(0,u.ZP)(p.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,m.R)("lineHeights.plus")(e)}px;
`,v=(0,u.ZP)(p.xu).attrs(()=>({fontSize:3}))`
  color: ${e=>(0,m.R)("colors.darkSilver")(e)};
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  line-height: 24px;
  padding: ${e=>(0,m.R)("space.3")(e)}px 0
    ${e=>(0,m.R)("space.3")(e)}px;
  word-break: break-word;
`,b=(0,u.ZP)(p.xu).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,w=(0,u.ZP)(p.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,m.R)("lineHeights.tall")(e)}px;
`,E=(e,t)=>e.map(e=>l.createElement(o.Z,{key:`gallery-media-${e.mediaUrl}`,media:e,onClick:()=>t(e.mediaUrl.split("/").reverse()[0]),width:"124px",height:"124px"})),y=({review:e,charLimit:t})=>{let[i,o]=(0,l.useState)(!1),{rating:u,description:m,submissionDate:p,attributes:y,userData:Z,product:C}=e,P=(null==m?void 0:m.length)<=t,[k,$]=(0,l.useState)(!1),[S,z]=(0,l.useState)(0),I=/^\d+$/.test(p),R=p&&!I&&(0,n.jL)(new Date(p),new Date),O=(null==y?void 0:y.map((e,t)=>0===t?`${e.label}: ${e.value}`:` | ${e.label}: ${e.value}`))||[],D=c(null==C?void 0:C.images,"image"),M=c(null==C?void 0:C.videos,"video"),A=D.filter(e=>e.processed).concat(M.filter(e=>e.processed)),T=D.filter(e=>e.thumbnails).concat(M.filter(e=>e.thumbnails)),L=e=>{let t=A.findIndex(t=>t.mediaUrl.includes(e.split(".")[0]));z(t>0?t:0),$(!0)};return l.createElement(a.Z,null,l.createElement(h,null,l.createElement(r.Z,null),l.createElement(f,null,null==Z?void 0:Z.name),l.createElement(g,null,l.createElement(s.Z,{score:u}))),O.length>0&&l.createElement(x,{"data-testid":"review-sub-title"},O),m&&l.createElement(v,{"data-testid":"review-description"},i||P?m:`${m.substring(0,t)}...`,"\xa0",!P&&l.createElement(b,{onClick:()=>o(!i),"data-testid":"see-more-btn",role:"button"},i?"ver menos":"ver mais")),R&&l.createElement(w,{"data-testid":"review-date"},`h\xe1 ${R}`),T.length>0&&l.createElement(d.zT,null,E(T,L)),k&&l.createElement(d.Qp,{review:e,charLimit:t,mediaProps:D.concat(M),selectedMedia:S,closePopup:()=>$(!1)}))};y.defaultProps={charLimit:110,mediaReview:null};var Z=y},1939:function(e,t,i){i.d(t,{Z:function(){return g}});var l=i(2784),n=i(84546),a=i(71180),r=i(99673),o=i(55403),s=i(87043);let d=(0,r.ZP)(s.xv).attrs(()=>({fontSize:0,fontWeight:"regular",marginTop:1}))`
  color: ${(0,o.uu)("scratched")};
`,c=r.ZP.div``;var u=i(57862),m=i(37215),p=i(86349);let h=({showShippingTags:e,shippingTag:t,price:i})=>{let{time:r,cost:o,complement:s}=t,h=(0,p.xx)(i),g=0===o?"Frete gr\xe1tis":`Frete: ${(0,a.oB)({value:o})}`,f=()=>0===o?l.createElement(u.dO,null,g):l.createElement(d,null,g);return l.createElement(n.Z,{marginTop:1},h&&l.createElement(m.Z,null),e&&l.createElement(c,{"data-testid":"productCard-shipping-tag"},null!=o&&l.createElement(f,null),r&&l.createElement(u.dO,null,r),s&&l.createElement(u.dO,null,s)))};h.defaultProps={showShippingTags:!1,shippingTag:{},price:{}};var g=h},43125:function(e,t,i){i.d(t,{Z:function(){return M}});var l=i(7896),n=i(31461),a=i(2784),r=i(33279),o=i(34490),s=i(57862),d=i(90749),c=i(25164),u=i(7029),m=i(12468),p=i(99673),h=i(55403),g=i(87043);let f=(0,p.ZP)(g.rj)`
  grid-template-columns: 1fr ${({displayMode:e,sponsored:t,isMagaluIndica:i})=>e!==m.IY&&i||e===m.Co&&t?"20px":""};
  margin-bottom: ${(0,h.R)("space.1")}px;
  ${e=>e.displayMode===m.IY&&`
    grid-column-start: 3;
    grid-row-start: 1;
    align-self: start;
  `}
`,x=(0,p.ZP)(g.Af).attrs(e=>Object.assign({},e))`
  justify-self: start;
`,v=(0,p.ZP)(d.iG).attrs(e=>Object.assign({width:20,height:20},e))`
  justify-self: end;
  max-width: 20px;
`,b=({displayMode:e,sponsored:t,showWishBtn:i,isLiked:l,handleAddToWishlist:n,isMagaluIndica:r})=>a.createElement(f,{isMagaluIndica:r,displayMode:e,sponsored:t},t&&e===m.Co&&a.createElement(s.lK,{place:"header"},"Patrocinado"),r&&e===m.yg&&a.createElement(x,{autoSize:!0,padding:"2px 8px",bg:"primary",fontSize:1,startIcon:a.createElement(o.JO$,{name:"FastDelivery",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"bold",gridGap:1,minWidth:"unset",borderRadius:6},"Full"),i&&a.createElement(v,{active:l,onClick:n}));var w=i(19527),E=i(63825);let y=({geoLocTags:e,displayMode:t})=>null!=e&&e.title?a.createElement(w.Z,{alignItems:"center",justifyContent:t===m.Co?"center":null,gap:1},a.createElement("div",null,a.createElement(o.JO$,{name:e.icon||"FastDelivery",color:"text.primary",width:30,height:30})),a.createElement("div",null,a.createElement(E.Z,{color:"text.primary",fontSize:[1,1,2,2],fontWeight:"medium"},e.title))):null,Z={miniature:p.iv`
    justify-self: center;
    align-self: center;
  `,list:p.iv`
    justify-self: left;
  `},C=p.ZP.div`
  ${({displayMode:e})=>e&&Z[e]};
  max-height: 20px;
`,P=({displayMode:e,count:t,score:i,allowEmptyRating:l,showRating:n,format:r})=>(l||i)&&n?a.createElement(C,{displayMode:e},a.createElement(d.Cq,{format:r,score:i,count:t,width:"12px",height:"12px"})):null,k=({allGeoLocTags:e,displayMode:t})=>e.length>0&&a.createElement(w.Z,{display:"none","data-testid":"allGeoLocTags",flexDirection:"column"},e.map((e,i)=>e.title&&a.createElement(w.Z,{key:i,alignItems:"center",display:t===m.Co?"none":null,color:"text.primary",fontSize:"0",fontWeight:"medium"},e.title)));k.defaultProps={allGeoLocTags:[]};var $=i(1939),S=i(99075);let z={sales_commission:S.Z,sales_dynamic_commission:S.Z},I=({displayMode:e,loyalty:t,productUrl:i})=>{let n=z[null==t?void 0:t.type];return t?a.createElement(s.RJ,{displayMode:e},n&&a.createElement(n,(0,l.Z)({},t,{productUrl:i}))):null};I.defaultProps={displayMode:m.IY,loyalty:{},productUrl:""};var R=i(12795);let O=({domain:e,url:t,adsSellerId:i})=>{let l=/^https?:\/\//.test(t),n=new URL(l?t:e+t);i&&n.searchParams.append("seller_id",i);let a=n.toString(),r=l?a:a.replace(n.origin,"");return{absoluteUrl:a,href:r}},D=e=>{let{hideLinkBorder:t,onClick:i,onView:p,domain:h,imgLazyLoading:g,index:f,lazyLoadingOffset:x,showInCashInfo:v,enableShadow:w,enableHover:E,geoLocTags:Z,allGeoLocTags:C,hidePriceMode:S,hidePrice:z,hidePriceButtonAction:D,showPreview:M,previewAction:A,showWishBtn:T,onClickWishBtn:L,fullHeight:j,showRating:W,showDiscount:B,showDiscountOnlyCashInfo:F,allowEmptyRating:H,containerWidth:V,onThumbnailClick:_,colorMinLength:N,attributeStyle:K,offerTimerProps:G}=e,U=(0,n.Z)(e,["adId","hideLinkBorder","onClick","onView","domain","imgLazyLoading","index","lazyLoadingOffset","showInCashInfo","enableShadow","enableHover","geoLocTags","allGeoLocTags","hidePriceMode","hidePrice","hidePriceButtonAction","showPreview","previewAction","showWishBtn","onClickWishBtn","fullHeight","showRating","percentBadge","showDiscount","showDiscountOnlyCashInfo","allowEmptyRating","containerWidth","onThumbnailClick","colorMinLength","attributeStyle","offerTimerProps"]),{displayMode:Y,title:q,price:J,image:X,installment:Q,badges:ee,rating:et,variationId:ei,url:el,titleAs:en,loyalty:ea,imageAltPrefix:er,isOnWishlist:eo,imageWidth:es,imageHeight:ed,shippingCost:ec,shippingTag:eu,brand:em,offerTags:ep,ads:eh,adsSellerId:eg,thumbnails:ef,restrictions:ex,parsedAttributes:ev,reward:eb,tagCoupon:ew}=U,{absoluteUrl:eE,href:ey}=O({domain:h,url:el,adsSellerId:eg}),{count:eZ,score:eC}=et,eP=null==ep?void 0:ep.includes("magalu_indica"),ek=null==ee?void 0:ee.slice(-1)[0],e$=e=>{e.stopPropagation(),e.preventDefault(),L(e)},[eS,ez]=(0,r.YD)({triggerOnce:!0,threshold:.5,delay:1e3});(0,a.useEffect)(()=>{ez&&p(Object.assign({index:f,geoLocTags:Z},U))},[ez]);let eI=er?`${er}${U.title}`:U.title,eR=(null==eh?void 0:eh.id)||void 0;return a.createElement(s.W2,{ref:eS,href:ey,onClick:e=>i(e,Object.assign({},U,{index:f})),displayMode:Y,"data-testid":"product-card-container","ads-click-event":eR,"ads-view-event":eR,"ads-impression-event":eR,redirect:ey,hideLinkBorder:t,enableShadow:w,enableHover:E,fullHeight:j,containerWidth:V,index:f,"data-brand":null==em?void 0:em.slug},a.createElement(b,{displayMode:Y,sponsored:null==eh?void 0:eh.sponsored,showWishBtn:T,isLiked:eo,handleAddToWishlist:e$,isMagaluIndica:eP}),a.createElement(s.mo,{displayMode:Y},eP&&Y===m.IY&&a.createElement(s.Tl,{autoSize:!0,padding:"2px 8px",bg:"primary",fontSize:1,startIcon:a.createElement(o.JO$,{name:"FastDelivery",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"medium",gridGap:1,borderRadius:6,mb:1,minWidth:"unset"},"Full"),a.createElement(u.Z,{src:X,alt:eI,width:es,height:ed,title:q,lazy:g,offset:x,mb:1}),a.createElement(I,{displayMode:Y,loyalty:ea,productUrl:eE}),!!ek&&a.createElement(d.Ct,{key:`${ei}-badge-${ek.id}`,url:ek.imageUrl,tooltip:ek.tooltip,displayMode:Y,borderRadius:"medium"}),Y===m.IY&&ev&&a.createElement(c.dO,{attributes:ev,variations:ef,colorVariant:"button",showTitle:!1,colorMinLength:N,gap:1,style:K,onVariationClick:_})),M&&a.createElement(s.Mn,{"data-testid":"button-preview-container"},a.createElement(s.AH,{size:"small",m:"10px 0","data-testid":"button-preview",onClick(e){e.preventDefault(),A(U)}},"Conferir")),a.createElement(s.VY,{displayMode:Y,"data-testid":"product-card-content"},Y!==m.IY&&ev&&a.createElement(c.dO,{attributes:ev,variations:ef,onVariationClick:_,colorVariant:"button",showTitle:!1,gap:1,colorMinLength:N,style:K}),Y!==m.Co&&a.createElement(d.dV,(0,l.Z)({height:20,fontSize:["10px",1],restrictions:ex,displayMode:Y},G)),(null==eh?void 0:eh.sponsored)&&Y!==m.Co&&a.createElement(s.lK,{place:"content"},"Patrocinado"),Y!==m.Co&&a.createElement(s.Dx,{as:en,displayMode:Y,"data-testid":"product-title"},q),P({displayMode:Y,count:eZ,score:eC,allowEmptyRating:H,showRating:W,format:"score-count"}),a.createElement(y,{geoLocTags:Z,displayMode:Y}),a.createElement(R.Z,{hide:"hide"===S,hiddenPrice:z,displayMode:Y,installment:Q,showInCashInfo:v,showDiscount:B,showDiscountOnlyCashInfo:F,price:J,hidePriceButtonAction:D,product:U}),a.createElement(d.rE,{mt:1,tags:ew}),a.createElement(d.lF,{displayMode:Y,costDescription:ec.costDescription,cost:ec.cost}),a.createElement(k,{allGeoLocTags:C,displayMode:Y}),a.createElement($.Z,{showShippingTags:Y!==m.Co,shippingTag:eu,price:J}),!!eb&&!!(null!=eb&&eb.active)&&a.createElement(d.QP,{icon:null==eb?void 0:eb.icon,message:null==eb?void 0:eb.message,intent:null==eb?void 0:eb.intent,styleContainer:null==eb?void 0:eb.styleContainer,styleMessage:null==eb?void 0:eb.styleMessage})))};var M=D;D.defaultProps={variationId:"",url:"",displayMode:m.IY,domain:m.RW,title:"",image:"",index:0,price:{},installment:{},geoLocTags:{},allGeoLocTags:[],rating:{},badges:[],brand:{},onClick(){},onView(){},imgLazyLoading:!1,fullHeight:!1,percentBadge:30,lazyLoadingOffset:50,showInCashInfo:!0,hideLinkBorder:!1,titleAs:"h2",enableShadow:!0,enableHover:!1,imageAltPrefix:"",hidePriceMode:"blur",hidePrice:!1,hidePriceButtonAction:null,showPreview:!1,previewAction(){},isOnWishlist:!1,showWishBtn:!1,onClickWishBtn(){},showRating:!0,showDiscount:!1,showDiscountOnlyCashInfo:!0,shippingCost:{},ads:{},shippingTag:{},allowEmptyRating:!1,onThumbnailClick:null,colorMinLength:3,attributeStyle:{width:"42px",height:"42px",bg:"background.lighter",color:"background.primary",shouldHover:!0},offerTimerProps:{}}},57862:function(e,t,i){i.d(t,{AH:function(){return w},Dx:function(){return x},Mn:function(){return b},RJ:function(){return f},Tl:function(){return E},VY:function(){return v},W2:function(){return m},dO:function(){return y},lK:function(){return u},mo:function(){return h}});var l=i(99673),n=i(68054),a=i(55403),r=i(90749),o=i(12468),s=i(27439),d=i(87043);let c=(e,t)=>{let i={miniature:l.iv`
      display: grid;
      padding: 8px 2px;
    `,list:l.iv`
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      ${t>=500&&l.iv`
        ${(0,a.aK)("small")} {
          grid-template-columns: 180px 2fr;
          grid-column-gap: 20px;
        }
      `}
      padding: 16px;
    `,gallery:l.iv`
      grid-template-rows: auto auto 1fr;
    `};return i[e]},u=(0,l.ZP)(d.xv).attrs(e=>Object.assign({fontSize:13,fontWeight:"regular",lineHeight:"display"},e))`
  justify-self: left;
  color: ${(0,a.uu)("light")};

  ${n.cp}
`;(0,l.ZP)(r.iG).attrs(e=>Object.assign({width:20,height:20},e))`
  justify-self: end;
  max-width: 20px;
`;let m=(0,l.ZP)(s.ZP)`
  position: relative;
  padding: 10px;
  justify-content: unset;
  background-color: ${e=>e.hideLinkBorder?"unset":(0,a.ow)("background.lighter")(e)};
  ${({displayMode:e,containerWidth:t})=>e&&c(e,t)};
  display: grid;

  ${({fullHeight:e})=>e&&`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`,p={miniature:l.iv`
    height: 20vw;
    justify-content: flex-end;
    ${(0,a.aK)("small")} {
      height: 120px;
    }
  `,list:l.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
    & > img {
      max-height: 160px;
    }
    ${(0,a.aK)("small")} {
      min-height: initial;
      max-height: 210px;
    }
  `,gallery:l.iv`
    height: 32vw;
    justify-content: flex-end;
    ${(0,a.aK)("small")} {
      max-height: 210px;
    }
  `},h=l.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
  ${({displayMode:e})=>e&&p[e]}
`,g={miniature:l.iv`
    justify-content: center;
  `,list:l.iv`
    justify-content: flex-start;
  `,gallery:l.iv`
    justify-content: flex-end;
  `},f=l.ZP.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 5%;
  ${({displayMode:e})=>e&&g[e]}
`,x=(0,l.ZP)(d.xv).attrs(e=>Object.assign({fontSize:[1,1,1],lineHeight:"display",fontWeight:"regular"},e))`
  ${({displayMode:e})=>e!==o.IY?"height: 52px;":"height: 32px;"};
  color: ${(0,a.uu)("base")};
  -webkit-line-clamp: ${({displayMode:e})=>e!==o.IY?3:2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  margin: 4px 0 4px 0;
  ${(0,a.aK)("small")} {
    ${({displayMode:e})=>e===o.IY&&"height: 40px;"};
  }
  ${n.cp}
`,v=l.ZP.div`
  ${({displayMode:e})=>e===o.IY&&"padding-left: 8px"}
  ${({displayMode:e})=>e!==o.IY&&`
    display: grid;
    padding-top: 8px;
  `}
`,b=l.ZP.div`
  width: 100%;
  height: 15px;
  position: relative;
`,w=(0,l.ZP)(d.zx)`
  opacity: 0.7;
  visibility: hidden;
  position: absolute;
  width: 50%;
  min-width: 90px;

  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  &:hover {
    opacity: 1;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${m}:hover & {
    visibility: visible;
  }
`,E=(0,l.ZP)(d.Af).attrs(e=>Object.assign({},e))`
  width: 66px;
`,y=(0,l.ZP)(d.xv).attrs(()=>({fontSize:0,fontWeight:"medium",marginTop:1}))`
  color: ${(0,a.uu)("primary")};
`},3018:function(e,t,i){i.d(t,{Z:function(){return y}});var l=i(7896),n=i(31461),a=i(2784),r=i(33279),o=i(13980),s=i(87043),d=i(3310),c=i(62458),u=i(99673),m=i(55403),p=i(68054);let h=u.ZP.a`
  display: flex;
  cursor: pointer;
  padding: 16px;
  border-radius: 12px;
  height: 100%;
  background-color: #fff;
  max-width: 560px;
  text-decoration: none;
  ${({showBorder:e})=>e&&u.iv`
      &,
      &:active,
      &:focus,
      &:hover {
        border: solid 1px ${(0,m.dF)("primary")};
      }
    `}
`,g=(0,u.ZP)(s.kC)`
  flex-direction: column;
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`,f=(0,u.ZP)(s.kC)`
  padding-left: 12px;
  flex-basis: 70%;
  flex-direction: column;
  justify-content: center;
`,x=(0,u.ZP)(s.xv).attrs(e=>Object.assign({fontSize:[1,1,1],lineHeight:"big",fontWeight:"regular"},e))`
  max-height: 44px;
  color: ${(0,m.uu)("base")};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  ${(0,m.aK)("small")} {
    max-height: 44px;
  }
  ${p.cp}
`,v=(0,u.ZP)(s.zx).attrs(e=>Object.assign({},e))`
  background-color: #4ea900;
  border-radius: 8px;
  margin-top: 12px;
  max-width: 264px;
  height: 40px;

  ${({empty:e})=>e&&`
    pointer-events: none;
  `}
`;var b=i(1939),w=i(12795);function E(e){let{imgLazyLoading:t,showInCashInfo:i,showDiscount:o,showOfferTimer:u,onView:m,index:p,onClick:E,showDiscountOnlyCashInfo:y,lazyLoadingOffset:Z,hidePriceButtonAction:C,showBorder:P,restrictions:k,buttonProps:$,showButton:S,hideOriginalPrice:z}=e,I=(0,n.Z)(e,["imgLazyLoading","showInCashInfo","showDiscount","showOfferTimer","onView","index","geoLocTags","onClick","showDiscountOnlyCashInfo","lazyLoadingOffset","hidePriceButtonAction","showBorder","restrictions","buttonProps","showButton","hideOriginalPrice"]),{title:R,price:O,image:D,installment:M,url:A,titleAs:T,shippingTag:L,imageWidth:j,imageHeight:W,imageAltPrefix:B,hidePrice:F,tagCoupon:H}=I,V=B?`${B}${I.title}`:I.title,_=Boolean((null==k?void 0:k.timer_start_date)&&(null==k?void 0:k.timer_end_date)),N=Boolean(H&&(null==H?void 0:H.discountValue)),[K,G]=(0,r.YD)({triggerOnce:!0,threshold:.5,delay:1e3});(0,a.useEffect)(()=>{G&&m(Object.assign({index:p},I))},[G]);let U=!!(null!=M&&M.amount&&null!=M&&M.totalAmount&&(null==M?void 0:M.quantity)>1);return a.createElement(h,{ref:K,href:A,index:p,onClick:e=>E(e,Object.assign({},I,{index:p})),"data-testid":"product-card-horizontal",showBorder:P},a.createElement(g,{width:j,height:W},a.createElement(s.Ee,{src:D,alt:V,width:j,height:W,title:R,lazy:t,offset:Z})),a.createElement(f,null,a.createElement(x,{as:T,"data-testid":"product-title"},R),u&&_&&!N&&a.createElement(d.Z,{mt:1,mr:0,mb:0,restrictions:{timer_start_date:null==k?void 0:k.timer_start_date,timer_end_date:null==k?void 0:k.timer_end_date},height:"20px",fontSize:"14px"}),a.createElement(s.xu,{mt:U?0:2},a.createElement(w.Z,{hiddenPrice:F,displayMode:"list",installment:M,showInCashInfo:i,showDiscount:o,showDiscountOnlyCashInfo:y,price:O,hidePriceButtonAction:C,hideOriginalPrice:z,product:I})),a.createElement(c.Z,{mt:1,tags:H}),a.createElement(b.Z,{showShippingTags:!0,shippingTag:{cost:null==L?void 0:L.cost},price:O}),S&&a.createElement(v,(0,l.Z)({},$,{empty:!(null!=$&&$.onClick),onClick:null==$?void 0:$.onClick,uppercase:!1,"data-testid":"better-offer-btn"}),(null==$?void 0:$.title)||"Ver oferta")))}E.defaultProps={imgLazyLoading:!1,showInCashInfo:!0,showDiscount:!1,url:"",onClick(){},onView(){},geoLocTags:{},index:0,showDiscountOnlyCashInfo:!0,lazyLoadingOffset:50,hidePriceButtonAction(){},showBorder:!1,restrictions:{timer_end_date:o.string,timer_start_date:o.string},showButton:!1,hideOriginalPrice:!1};var y=E},12795:function(e,t,i){i.d(t,{Z:function(){return m}});var l=i(7896),n=i(2784),a=i(12468),r=i(90749),o=i(99673),s=i(87043);let d=o.ZP.div`
  position: relative;

  span {
    filter: blur(3px);
  }
`,c=(0,o.ZP)(s.zx)`
  visibility: hidden;
  position: absolute;
  bottom: 0;

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${d}:hover & {
    visibility: visible;
  }
`,u=({hide:e,hiddenPrice:t,displayMode:i,installment:a,showInCashInfo:o,showDiscount:s,showDiscountOnlyCashInfo:u,price:m,hidePriceButtonAction:p,hideOriginalPrice:h,product:g})=>e?null:n.createElement(n.Fragment,null,!t&&n.createElement(r.tA,(0,l.Z)({style:{mt:"0px"},display:i,installment:a,showInCashInfo:o,showDiscount:s,showDiscountOnlyCashInfo:u,hideOriginalPrice:h},m)),t&&n.createElement(d,null,n.createElement("span",{"data-testid":"hided-price"},n.createElement(r.tA,{style:{mt:"0px"},display:i,installment:null,price:0,showInCashInfo:o})),p&&n.createElement(c,{full:!0,size:"small",m:"10px 0","data-testid":"show-price-button",onClick(e){e.preventDefault(),p(g)}},"Ver Pre\xe7o")));var m=u;u.defaultProps={hide:!1,hiddenPrice:!1,displayMode:a.IY,installment:{},showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!0,price:{},hidePriceButtonAction:null,product:{},hideOriginalPrice:!1}},4720:function(e,t,i){i.d(t,{Z:function(){return s}});var l=i(7896),n=i(2784),a=i(43125),r=i(90749),o=i(3018);function s({products:e,displayMode:t,onClick:i,onProductView:s,onChange:d,gutter:c,showInCashInfo:u,slidesPerView:m,interval:p,auto:h,showPartialNextSlide:g,transitionDuration:f,productTitleAs:x,imageAltPrefix:v,imgLazyLoading:b,imageWidth:w,imageHeight:E,showControls:y,showArrowControls:Z,showRating:C,enableHover:P,showPreview:k,showDiscount:$,showOfferTimer:S,showDiscountOnlyCashInfo:z,fullHeight:I,previewAction:R,cardType:O,offerTimerProps:D,showBorder:M,showButton:A,buttonProps:T,hideOriginalPrice:L}){let j=t=>{let i=Array(m).fill().map((i,l)=>e[l+t]);d(i)},W=Z&&m<=(null==e?void 0:e.length),B={horizontal:o.Z,vertical:a.Z},F=B[O];return n.createElement(r.lr,{onChange:j,slidesPerView:m,gutter:c,auto:h,interval:p,showPartialNextSlide:g,transitionDuration:f,isProductCarousel:!0,showControls:y,showArrowControls:W},null==e?void 0:e.map((e,a)=>n.createElement(F,(0,l.Z)({},e,{displayMode:t,onClick:i,onView:s,showInCashInfo:u,titleAs:x,fullHeight:I,imageAltPrefix:v,imgLazyLoading:b,imageWidth:w,imageHeight:E,showRating:C,showOfferTimer:S,key:`product-carousel-${e.variationId||e.id}-${a}`,enableHover:P,showPreview:k,previewAction:R,showDiscount:$,showDiscountOnlyCashInfo:z,offerTimerProps:D,showBorder:M,showButton:A,buttonProps:T,hideOriginalPrice:L}))))}s.defaultProps={displayMode:"gallery",onClick(){},onProductView(){},onChange(){},showInCashInfo:!0,showPartialNextSlide:!0,auto:!0,slidesPerView:2,interval:5e3,fullHeight:!0,transitionDuration:400,gutter:2,productTitleAs:"h2",imageAltPrefix:"",imgLazyLoading:!0,showControls:!0,showArrowControls:!1,showRating:!0,enableHover:!0,showPreview:!1,showDiscount:!1,showDiscountOnlyCashInfo:!1,previewAction(){},cardType:"vertical",showBorder:!1,showOfferTimer:!1,showButton:!1,buttonProps:{},hideOriginalPrice:!1}},98284:function(e,t,i){i.d(t,{Z:function(){return $}});var l=i(7896),n=i(31461),a=i(2784),r=i(43125),o=i(99673),s=i(34490),d=i(55403),c=i(68054),u=i(19527),m=i(84546),p=i(78012);let h=({displayMode:e})=>{let t={gallery:o.iv`
      grid-template-columns: 1fr 1fr;
      ${(0,d.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      }
    `,list:o.iv`
      grid-template-columns: 1fr;
    `,miniature:o.iv`
      grid-template-columns: 1fr 1fr 1fr;
      ${(0,d.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      }
    `};return t[e]},g=(0,o.ZP)(u.Z).attrs(e=>Object.assign({fontSize:[1,2,2,2],py:3,px:2,color:"text.scratched",borderRadius:"medium",bg:"transparent",textAlign:["center","left","left","left"],boxShadow:[4,"none","none","none"]},e))`
  min-width: 280px;
  margin: 0 auto;
  border-radius: 4px;
  transition: width 0.2s ease;
  word-break: break-word;

  ${c.AF}
  ${d.$_}
  ${c.Dh}
  ${c.cp}
`,f=o.ZP.h1.attrs(e=>Object.assign({fontSize:[3,5,5,5],fontWeight:"regular"},e))`
  text-align: center;
  color: ${e=>(0,d.uu)("base")(e)};
  line-height: normal;
  margin-bottom: 18px;
  span {
    color: ${e=>(0,d.ow)("primary.base")(e)};
    display: inline-flex;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 2.4em;
    line-height: 1.2em;
  }

  ${(0,d.aK)("small")} {
    text-align: left;
  }

  ${c.cp}
`,x=o.ZP.span.attrs(()=>({mr:3}))`
  display: none;

  ${(0,d.aK)("small")} {
    display: block;
  }

  ${c.Dh}
`,v=(0,o.ZP)(s.olm).attrs(e=>Object.assign({width:60,height:60,color:"primary.base"},e))`
  ${d.$_}
`,b=(0,o.ZP)(m.Z).attrs(e=>Object.assign({},e))`
  margin: 0;
  overflow: hidden;
  transition: width 0.2s ease;
`,w=(0,o.ZP)(p.Z).attrs(e=>Object.assign({gridGap:["2px","1px","1px"]},e))`
  ${({displayMode:e})=>h({displayMode:e})}
  ${c.eC}
`,E=(0,o.ZP)(w.Action).attrs(()=>({fontWeight:"regular",color:"background.primary",fill:"background.primary"}))`
  border-top: ${(0,d.R)("borders.0")};
`,y=o.ZP.li`
  list-style: none;
  > * {
    min-height: 100%;
  }
`,Z=({message:e,messageSecondary:t})=>a.createElement(g,{"data-testid":"product-list-empty"},a.createElement(x,null,a.createElement(v,null)),a.createElement("div",null,a.createElement(f,null,e),t||""));Z.defaultProps={messageSecondary:"",message:""};var C=i(66228),P=i(12468);let k=(0,a.forwardRef)(function(e,t){var i;let{hidePriceButtonAction:o,lazyLoadingOffset:s,onClickLoadMore:d,imgLazyLoading:c,showInCashInfo:u,showDiscount:m,showDiscountOnlyCashInfo:p,imageAltPrefix:h,imageWidth:g,imageHeight:f,onClickWishBtn:x,previewAction:v,showFullListBtn:k,enableShadow:$,displayMode:S,enableHover:z,showPreview:I,showWishBtn:R,showMoreBtn:O,hidePrice:D,notFound:M,onClick:A,onProductView:T,partial:L,titleAs:j,domain:W,jsonLD:B,allowEmptyRating:F,data:H,gridGap:V,onThumbnailClick:_,colorMinLength:N,attributeStyle:K,offerTimerProps:G}=e,U=(0,n.Z)(e,["hidePriceButtonAction","lazyLoadingOffset","onClickLoadMore","imgLazyLoading","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","imageAltPrefix","imageWidth","imageHeight","onClickWishBtn","previewAction","showFullListBtn","enableShadow","displayMode","enableHover","showPreview","showWishBtn","showMoreBtn","hidePrice","notFound","onClick","onProductView","partial","titleAs","domain","jsonLD","allowEmptyRating","data","gridGap","onThumbnailClick","colorMinLength","attributeStyle","offerTimerProps"]);null!==(i=t)&&void 0!==i||(t=(0,a.useRef)(null));let[Y,q]=(0,a.useState)(0),[J,X]=(0,a.useState)(Boolean(L));if(a.useEffect(()=>{var e;return null!=(e=t)&&e.current&&q(t.current.clientWidth),X(Boolean(L)),()=>X(!1)},[L]),M)return a.createElement(Z,M);let Q=null==H?void 0:H.map((e,t)=>a.createElement(y,{key:`product-item-${t}`},a.createElement(r.Z,(0,l.Z)({key:`product-${e.variationId||e.id}-${t}`,hidePriceButtonAction:o,lazyLoadingOffset:s,imgLazyLoading:c,showInCashInfo:u,imageAltPrefix:h,imageWidth:g,imageHeight:f,enableShadow:$,displayMode:S,domain:W,enableHover:z,showPreview:I,showWishBtn:R,hidePrice:D,onClick:A,onView:T,titleAs:j,index:t,showDiscount:m,showDiscountOnlyCashInfo:p,onClickWishBtn:t=>x(t,e),previewAction:()=>v(e),allowEmptyRating:F,containerWidth:Y,onThumbnailClick:_,colorMinLength:N,attributeStyle:K,offerTimerProps:G},e)))),ee=k?{label:P.dz,props:P.Bl}:{label:P.K9,props:P.Uh};return a.createElement(b,(0,l.Z)({ref:t,"data-testid":"product-list"},U),a.createElement(w,(0,l.Z)({},L&&!k&&{collapse:!0,trigger:J,collapsedIn:L},{variant:"light",displayMode:S,gridGap:V,renderAction:(J||k||O)&&L<H.length&&a.createElement(E,(0,l.Z)({onClick(){d(),X(!J)}},ee.props),ee.label)}),Q),B&&H&&a.createElement(C.ZP,{schema:H.filter(e=>{var t;return null==(t=e.price)?void 0:t.price}).map(e=>(0,C.Iy)({product:e,isList:!0},W)),type:"ItemList"}))});k.defaultProps={hidePriceButtonAction:null,showFullListBtn:!1,displayMode:"gallery",domain:P.RW,lazyLoadingOffset:50,showInCashInfo:!0,imgLazyLoading:!0,showWishBtn:!1,showPreview:!1,showMoreBtn:!1,imageAltPrefix:"",hidePrice:!1,showDiscountOnlyCashInfo:!1,showDiscount:!1,titleAs:"h2",jsonLD:!0,partial:0,allowEmptyRating:!1,onThumbnailClick:null,colorMinLength:3,attributeStyle:{},onClickLoadMore(){},onClickWishBtn(){},previewAction(){},onClick(){},onProductView(){}};var $=k},99970:function(e,t,i){i.d(t,{Z:function(){return c}});var l=i(2784),n=i(49542),a=i(99673),r=i(87043);let o=(0,a.ZP)(r.rj)`
  overflow-x: auto;
  padding: 16px 0;
`,s=(0,a.ZP)(r.rj)`
  gap: 12px;
  display: flex;
  flex-wrap: nowrap;
`,d=({children:e,isMobile:t})=>{let[i,a]=(0,l.useState)(2);if((0,l.useEffect)(()=>{t||a(5)},[]),e.length>i){var r;return l.createElement(n.Z,{showArrowControls:!0,showControls:!1,auto:!1,slidesPerView:i},e)}return l.createElement(o,{"data-testid":"gallery-without-carousel"},l.createElement(s,null,e))};var c=d},77576:function(e,t,i){i.d(t,{Z:function(){return er}});var l=i(2784),n=i(42952),a=i(99673),r=i(7029);let o=(0,a.ZP)("video")`
  width: 100%;
  margin: auto;
  max-height: 55vh;
  border-radius: 15px;

  @media screen and (max-width: 499px) {
    max-height: 60vh;
  }
`,s=a.ZP.div`
  height: 100%;
  border-radius: 15px;
  overflow: hidden;

  @media screen and (max-width: 499px) {
    border-radius: 12px;
  }
`,d=(0,a.ZP)(r.Z)`
  display: block;
  max-height: 55vh;
  object-fit: cover;
  width: auto;
  max-width: 100%;
  border-radius: 15px;

  @media screen and (max-width: 499px) {
    max-height: 60vh;
  }
`,c=a.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,u=({media:e,alt:t,currentSlide:i,index:n})=>{let a=(0,l.useRef)(null);return(0,l.useEffect)(()=>{a.current&&i!==n&&(a.current.pause(),a.current.currentTime=0)},[i,n]),l.createElement(c,null,"image"===e.mediaType?l.createElement(s,null,l.createElement(d,{alt:t,lazy:!0,src:e.mediaUrl})):l.createElement(o,{ref:a,muted:!0,controls:!0,type:"video/mp4",src:e.mediaUrl,disablePictureInPicture:!0,controlsList:"nodownload noplaybackrate"}))};var m=i(34490),p=i(60861),h=i(78045),g=i(49542),f=i(73172),x=i(55403),v=i(84546),b=i(19527),w=i(63825);let E=a.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px 16px;
  z-index: ${(0,x.R)("zIndices.4")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 500px) {
    display: none;
  }
`,y=a.ZP.div`
  color: white;
  text-align: start;
  width: 100%;
`;a.ZP.div`
  margin: auto;
  ${(0,x.aK)("medium")} {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 720px;
    gap: 30px;
  }
`;let Z=a.ZP.div`
  position: relative;
  display: flex;
  justify-content: end;
  width: 100%;
`,C=a.ZP.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,P=(0,a.ZP)(v.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,k=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 80px);
  margin: auto;
  ${(0,x.aK)("medium")} {
    max-width: 280px;
  }
`,$=(0,a.ZP)(v.Z)``,S=(0,a.ZP)(b.Z)`
  padding: 0 0 ${e=>(0,x.R)("space.2")(e)}px;
  ${(0,x.aK)("large")} {
    padding: 0 0 ${e=>(0,x.R)("space.3")(e)}px;
  }
`,z=(0,a.ZP)(w.Z).attrs(()=>({fontSize:2}))`
  color: ${e=>(0,x.uu)("white")(e)};
  font-weight: ${e=>(0,x.R)("fontWeights.regular")(e)};
  padding: ${e=>(0,x.R)("space.2")(e)}px;
  line-height: ${e=>(0,x.R)("lineHeights.plus")(e)}px;
`,I=a.ZP.span`
  width: 80px;
`,R=(0,a.ZP)(b.Z)`
  width: 100%;
  height: 32px;
  margin: 18px 0 0;
`;var O=i(71180);let D=(e,t)=>(null==e?void 0:e.length)<=t,M=(e,t)=>null==e?void 0:e.substring(0,t).concat("..."),A=e=>/^\d+$/.test(e),T=e=>e&&!A(e)&&(0,O.jL)(new Date(e),new Date),L=e=>(null==e?void 0:e.map((e,t)=>0===t?`${e.label}: ${e.value}`:` | ${e.label}: ${e.value}`))||[],j=({charLimit:e,children:t,closePopup:i,selectedMedia:n,review:a,changeCaroulsel:r,showRotateButton:o,onRotateImage:s})=>{let[d,c]=(0,l.useState)(!1),{rating:u,description:x,userData:v}=a,b=D(x,e),w=M(x,e);return l.createElement(E,null,l.createElement(Z,null,l.createElement(C,{"data-testid":"close-popup","aria-label":"fechar popup",onClick:i},l.createElement(m.JO$,{name:"Close",color:"#FFF"}))),l.createElement(k,null,l.createElement(g.Z,{auto:!1,goTo:n,verticalAlign:"center",onChange:r},t),l.createElement(R,{justifyContent:"center",alignItems:"center"},o&&l.createElement(p.Z,{variation:"outline",size:"small",onClick:s,startIcon:l.createElement(m.tnm,{width:20,height:20}),centered:!0},"Girar imagem"))),l.createElement($,{container:!0},l.createElement(S,null,l.createElement(h.Z,null),l.createElement(z,null,v.name),l.createElement(I,null,l.createElement(f.Z,{score:u}))),l.createElement(y,{"data-testid":"review-description"},d||b?x:w,"\xa0",!b&&l.createElement(P,{onClick:()=>c(!d),role:"button"},d?"ver menos":"ver mais"))))};j.defaultProps={charLimit:110,changeCaroulsel:()=>0};var W=i(97949),B=i(99970),F=i(66762);let H=(0,a.ZP)(b.Z)`
  align-items: center;
  padding: 0 0 ${e=>(0,x.R)("space.2")(e)}px;

  ${(0,x.aK)("large")} {
    padding: 0 0 ${e=>(0,x.R)("space.3")(e)}px;
  }
`,V=(0,a.ZP)(w.Z).attrs(()=>({fontSize:2}))`
  color: ${e=>(0,x.R)("colors.darkSilver")(e)};
  font-weight: ${e=>(0,x.R)("fontWeights.regular")(e)};
  padding: ${e=>(0,x.R)("space.2")(e)}px;
  line-height: ${e=>(0,x.R)("lineHeights.plus")(e)}px;
`,_=(0,a.ZP)(v.Z).attrs(()=>({fontSize:2}))`
  color: ${(0,x.uu)("davysGray")};
  font-weight: ${e=>(0,x.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,x.R)("lineHeights.plus")(e)}px;
`,N=(0,a.ZP)(v.Z).attrs(()=>({fontSize:2}))`
  color: ${(0,x.uu)("davysGray")};
  font-weight: ${e=>(0,x.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,x.R)("lineHeights.tall")(e)}px;
`,K=(0,a.ZP)(v.Z).attrs(()=>({fontSize:3}))`
  color: ${(0,x.R)("colors.black")};
  font-weight: ${(0,x.R)("fontWeights.regular")};
  line-height: 24px;
  padding: ${(0,x.R)("space.3")}px 0 ${(0,x.R)("space.3")}px;
  word-break: break-word;
  width: 100%;
`,G=a.ZP.div`
  margin: 25px 0;
  display: flex;
  width: 100%;
  gap: 40px;
`,U=(0,a.ZP)(v.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,Y=a.ZP.span`
  width: 80px;
`,q=(0,a.ZP)(b.Z)`
  gap: 18px;
  width: 50%;
`,J=(0,a.ZP)(v.Z)`
  width: 50%;
`,X=(0,a.ZP)(F.Z)`
  width: 720px;
  background-color: ${(0,x.ow)("background.lighter")};
  padding: 20px;
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`,Q=(0,a.ZP)(b.Z)`
  min-height: 400px;
`,ee=(0,a.ZP)(v.Z)`
  width: 100%;
`,et=(0,a.ZP)(p.Z)`
  width: 50%;
`,ei=(0,a.ZP)(b.Z)`
  width: 100%;
  height: 32px;
`,el={color:"#51585C",fontWeight:"bold"},en=({changeCaroulsel:e,charLimit:t,children:i,closePopup:n,review:a,selectedMedia:r,thumbnails:o,showRotateButton:s,onRotateImage:d})=>{let[c,u]=(0,l.useState)(!1),[p,x]=(0,l.useState)(r),{rating:v,description:b,submissionDate:w,attributes:E,userData:y}=a,Z=D(b,t),C=M(b,t),P=T(w),k=L(E);return l.createElement(X,{position:"center",showClose:!0,type:"responsive",onClickOutside:n,title:"Avalia\xe7\xf5es com m\xeddias",titleStyle:el},l.createElement(Q,{flexDirection:"column",justifyContent:"space-between"},l.createElement(G,null,l.createElement(q,{flexDirection:"column",justifyContent:"center",alignItems:"center"},l.createElement(g.Z,{showSlideCount:!0,showArrowControls:!0,showControls:!1,auto:!1,goTo:p,verticalAlign:"center",onChange:e},i),l.createElement(ei,{justifyContent:"center",alignItems:"center"},s&&l.createElement(et,{variation:"outline",size:"small",onClick:d,startIcon:l.createElement(m.tnm,{width:20,height:20}),centered:!0},"Girar imagem"))),l.createElement(J,{container:!0},l.createElement(H,null,l.createElement(h.Z,null),l.createElement(V,null,y.name),l.createElement(Y,null,l.createElement(f.Z,{score:v}))),k.length>0&&l.createElement(_,{"data-testid":"review-sub-title"},k),l.createElement(K,{"data-testid":"review-description"},c||Z?b:C,"\xa0",!Z&&l.createElement(U,{onClick:()=>u(!c),role:"button"},c?"ver menos":"ver mais")),P&&l.createElement(N,{"data-testid":"review-date"},`h\xe1 ${P}`))),l.createElement(ee,null,(()=>{let e=o.map((e,t)=>l.createElement(W.Z,{key:`caroulsel-card-${e.mediaUrl}`,media:e,onClick:()=>x(t)}));return l.createElement(B.Z,null,e)})())))};en.defaultProps={charLimit:110,reviewDate:null,subtitle:""};let ea=({review:e,charLimit:t,mediaProps:i,selectedMedia:a,closePopup:r,changeCaroulsel:o})=>{let[s,d]=(0,l.useState)(a),[c,m]=(0,l.useState)(!1),[p,h]=(0,l.useState)(0),g=i.filter(e=>e.thumbnails),f=i.filter(e=>e.processed),x=e=>{m("video"!==f[e].mediaType)},v=e=>{d(e),x(e),o(e)},b=async()=>{try{f[s].mediaUrl=await (0,n.N)(f[s].mediaUrl,90),h(e=>e+90)}catch(e){console.error(`Falha ao rotacionar imagem: ${e}`)}},w=(0,l.useCallback)(()=>f.map((e,t)=>l.createElement(u,{key:`slide-item-${e.mediaUrl}`,media:e,alt:"",currentSlide:s,index:t})),[i,s,p]),E=()=>{document.body.style.overflow="visible",r()};return window.innerWidth>=500?l.createElement(en,{charLimit:t,closePopup:r,review:e,selectedMedia:a,changeCaroulsel:v,thumbnails:g,showRotateButton:c,onRotateImage:b},w()):(document.body.style.overflow="hidden",l.createElement(j,{charLimit:t,closePopup:E,review:e,selectedMedia:a,changeCaroulsel:v,showRotateButton:c,onRotateImage:b},w()))};ea.defaultProps={charLimit:110,changeCaroulsel:()=>0};var er=ea},79534:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(31461),n=i(2784),a=i(87043),r=i(90749),o=i(99673),s=i(55403),d=i(63825),c=i(84546);let u=(0,o.ZP)(c.Z)`
  padding-bottom: ${(0,s.R)("space.2")}px;
`;function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p({agreedError:e,agreedLabel:t,buttonLabel:i,onSubmit:o,ratingError:s,ratingLabel:d,recommendedError:c,recommendedLabel:p,reviewCharacteristics:h,minTextSize:g,textError:f,textLabel:x,textPlaceholder:v,titleError:b,titleLabel:w,titlePlaceholder:E,focus:y}){let[Z,C]=(0,n.useState)(!1),[P,k]=(0,n.useState)(""),[$,S]=(0,n.useState)(""),[z,I]=(0,n.useState)(""),[R,O]=(0,n.useState)(""),[D,M]=(0,n.useState)(h||[]),[A,T]=(0,n.useState)({}),L=Object.assign({rating:(0,n.useRef)(),title:(0,n.useRef)(),text:(0,n.useRef)(),recommended:(0,n.useRef)()},D.reduce((e,{id:t})=>Object.assign({},e,{[t]:(0,n.useRef)()}),{}),{agreed:(0,n.useRef)()}),j=(0,n.useCallback)((e,t,i=y)=>{T(n=>{let a=(0,l.Z)(n,[e].map(m)),r=Object.assign({},a,t),o=Object.keys(r);if(i&&o.includes(e)&&t){let{current:s}=L[o[0]];window.scroll({top:s.offsetTop-35,left:0,behavior:"smooth"})}return r})},[A]),W=(0,n.useCallback)((e,t,i,l,n)=>{let a=e.length<i?{[t]:l}:void 0;return j(t,a,n),a},[$,z,R,P,D,Z]),B=(0,n.useCallback)((e,t,i,l)=>{let n=e?void 0:{[t]:i};return j(t,n,l),n},[$,z,R,P,D,Z]),F=(0,n.useCallback)(()=>{S(""),I(""),O(""),k(""),C(!1),M(h.map(e=>(0,l.Z)(e,["value"])))},[h]),H=(0,n.useCallback)(t=>{let i=Object.assign({},B($,"rating",s),B(z,"title",b),W(R,"text",g,f),B(P,"recommended",c),D.reduce((e,t)=>Object.assign({},e,B(t.value,t.id,s)),{}),B(Z,"agreed",e));Object.keys(i).length||o({rating:$,title:z,text:R,recommended:P,characteristics:D},F),t.preventDefault()},[$,z,R,P,Z,D]);return n.createElement(a.xu,{as:"form","data-testid":"review-form"},n.createElement(u,null,n.createElement(r.qr,{onChange(e){B(e.target.value,"rating",s,!1),S(e.target.value)},ref:L.rating,value:$,error:A.rating,type:"rating",label:d,height:[40,30],width:[40,30],gap:[0,30],fontSize:[4,2],fontWeight:["bold","regular"],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"],name:"rating"})),n.createElement(u,null,n.createElement(r.qr,{onChange:e=>I(e.target.value),onFocus:()=>T(e=>(0,l.Z)(e,["title"])),onBlur:e=>B(e.target.value,"title",b,!1),ref:L.title,value:z,error:A.title,type:"text",label:w,placeholder:E,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"]})),n.createElement(u,null,n.createElement(r.qr,{onChange:e=>O(e.target.value),onFocus:()=>T(e=>(0,l.Z)(e,["text"])),onBlur:e=>W(e.target.value,"text",50,f,!1),ref:L.text,value:R,error:A.text,type:"textarea",label:x,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"],placeholder:v})),n.createElement(u,{borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},n.createElement(r.qr,{onChange(e){B(e.target.value,"recommended",c,!1),k(e.target.value)},ref:L.recommended,value:P,error:A.recommended,type:"recommendation",label:p,gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})),null==D?void 0:D.map(({id:e,label:t,value:i})=>n.createElement(u,{key:e,borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},n.createElement(r.qr,{onChange(t){B(t.target.value,e,s,!1),M(D.map(i=>i.id===e?Object.assign({},i,{value:t.target.value}):i))},name:e,ref:L[e],value:i,error:A[e],label:t,type:"rating",height:[30,24],width:[30,24],gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]}))),n.createElement(a.kC,{m:20,flexDirection:["column","row"],gap:[0,30]},n.createElement(a.kC,{flex:"0.75"}),n.createElement(a.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},n.createElement(a.XZ,{ref:L.agreed,checked:Z,onChange(t){B(t.target.checked,"agreed",e,!1),C(t.target.checked)}},t),A.agreed&&n.createElement(a.xv,{color:"error.base"},A.agreed))),n.createElement(a.kC,{mY:20,flexDirection:["column","row"],gap:[0,30]},n.createElement(a.kC,{flex:"0.75"}),n.createElement(a.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},n.createElement(a.zx,{onClick:H,full:!0},i))))}(0,o.ZP)(d.Z)`
  text-decoration: underline;
  cursor: pointer;
`,p.defaultProps={agreedError:"Por favor verifique os termos.",agreedLabel:"Concordo com os termos e condi\xe7\xf5es",buttonLabel:"Enviar avalia\xe7\xe3o",ratingError:"Clique nas estrelas para classificar!",ratingLabel:"Avalia\xe7\xe3o Geral",recommendedError:"Por favor selecione uma op\xe7\xe3o.",recommendedLabel:"Voc\xea recomenda esse produto?",minTextSize:50,textError:"M\xednimo de 50 caracteres.",textLabel:"Avalia\xe7\xe3o",titleError:"Insira o t\xedtulo completo corretamente.",titleLabel:"T\xedtulo da avalia\xe7\xe3o",titlePlaceholder:"Ex. Produto Maravilhoso",textPlaceholder:"Ex: Escreva exclusivamente sobre o produto. Para sugest\xf5es, reclama\xe7\xf5es ou problemas em geral, acesse nossa Central de Atendimento",focus:!0};var h=p},4506:function(e,t,i){i.d(t,{Z:function(){return v}});var l=i(2784),n=i(34490),a=i(99673),r=i(55403),o=i(19527),s=i(84546),d=i(63825);let c=(0,a.ZP)(o.Z)`
  display: flex;
  justify-content: center;
  align-items: center;
`,u=(0,a.ZP)(o.Z)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
`,m=(0,a.ZP)(d.Z)`
  font-weight: ${e=>(0,r.R)("fontWeights.bold")(e)};
  font-size: ${e=>(0,r.R)("fontSizes.7")(e)}px;
`,p=(0,a.ZP)(d.Z)`
  font-size: ${e=>(0,r.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,r.uu)("light")(e)};
`,h=(0,a.ZP)(s.Z)`
  border-left: 3px solid ${e=>(0,r.kJ)("light")(e)};
  height: 90px;
  margin: 0px 24px;
`;var g=i(60861),f=i(90749);function x({average:e,count:t,distribution:i,actionLabel:a,onReviewButtonClick:r}){let o=t>1?`${t} avalia\xe7\xf5es`:`${t} avalia\xe7\xe3o`;return i.sort((e,t)=>t.value-e.value),l.createElement(l.Fragment,null,l.createElement(c,{mb:[3,3,3]},l.createElement(u,null,l.createElement("div",null,l.createElement(m,{"data-testid":"stat-score"},e.toFixed(1)),l.createElement(n.Uxw,{width:"50px",height:"50px",color:"#FFCC03"})),l.createElement(p,{"data-testid":"stat-desc"},o)),l.createElement(h,null),l.createElement("ul",null,null==i?void 0:i.map(e=>l.createElement(f.me,{key:e.value,id:e.value,score:e.count,count:e.count,max:t})))),!!a&&l.createElement(g.Z,{full:!0,variation:"fill",size:"medium",color:"primary",onClick:l=>r(l,{average:e,distribution:i,desc:o,total:t})},a))}x.defaultProps={actionLabel:"Quero avaliar",average:0,count:0,distribution:[],onReviewButtonClick:()=>({})};var v=x},30143:function(e,t,i){i.d(t,{Z:function(){return O}});var l=i(7896),n=i(31461),a=i(2784),r=i(34490),o=i(25164),s=i(87043),d=i(99673),c=i(55403),u=i(63825);let m=(0,d.ZP)(u.Z)`
  color: ${e=>e.color||(0,c.uu)("scratched")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.regular")(e)};
  margin-right: 4px;
  line-height: ${e=>e.lineHeight||"20px"};
`,p=d.ZP.label`
  color: ${e=>(0,c.uu)("base")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  text-decoration: ${({disableClick:e})=>e?"none":"underline"};
  cursor: ${({disableClick:e})=>e?"default":"pointer"};
`,h=d.ZP.a`
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`,g=(0,d.ZP)(r.ZGh).attrs(e=>({color:`${e.logoIconColor||(0,c.ow)("base")(e)}`,width:60,height:14,viewBox:"0 0 60 14"}))`
  vertical-align: middle;
  margin-top: 4px;
`,f=d.ZP.div`
  padding: 15px 15px;
`,x=(0,d.ZP)(u.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.5")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
`,v=d.ZP.a`
  height: 20px;
  display: flex;
  align-items: center;
  margin: 28px 0;
  text-decoration: none;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};
  color: ${e=>(0,c.uu)("primary")(e)};
  cursor: pointer;
`,b=(0,d.ZP)(r._Qn).attrs(e=>({color:(0,c.uu)("primary")(e)}))`
  vertical-align: middle;
  width: 20px;
  height: 20px;
`,w=d.ZP.div`
  margin: 0 0 15px;
`,E=(0,d.ZP)(u.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.3")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  padding: 0 0 5px;
`,y=d.ZP.p`
  font-size: ${e=>(0,c.R)("fontSizes.2")(e)}px;
  color: ${e=>(0,c.uu)("greyish")(e)};
  padding: 0 0 5px;
`,Z={bg:"#f0f0f2",borderRadius:8,p:2,mb:2,alignItems:"center"},C=e=>{let{id:t,delivery:i,handleLabelName:r,internationalPartner:o,partnerColor:d}=e,c=(0,n.Z)(e,["id","delivery","handleLabelName","internationalPartner","partnerColor"]);return i||t?i&&(null==t?void 0:t.toUpperCase())!==(null==i?void 0:i.toUpperCase())?a.createElement(s.xu,c,a.createElement(m,{"data-testid":"label"},"Vendido por ",r(t)),a.createElement(m,{"data-testid":"label"},"Entregue por ",r(i))):a.createElement(s.xu,o?Z:c,a.createElement(m,(0,l.Z)({},o?{color:d,lineHeight:"16px"}:{},{"data-testid":"label"}),"Vendido e entregue por ",r(i))):null};C.defaultProps={id:"magazineluiza",delivery:"magazineluiza",handleLabelName(){},internationalPartner:!1};var P=i(86349);let k=e=>{let{address:t,number:i,district:l,city:n,state:a,zipcode:r}=e,o=[];return t&&i&&o.push(`${t}, ${i}`),n&&a&&o.push(`${l?`${l} - `:""}${n}/${a}`),r&&o.push(`CEP: ${r}`),o},$=({seller:e,product:t,onOffersClick:i})=>{let{id:l,description:n,deliveryId:r,details:o,href:s}=e,d=(0,P.xx)(null==t?void 0:t.price),c=k((null==o?void 0:o.address)||{}),u=[(null==o?void 0:o.legalName)&&{label:"Raz\xe3o Social",id:"legalName",value:null==o?void 0:o.legalName},d?{label:"ID do Lojista",id:"shippingDocumentNumber",value:null==o?void 0:o.shippingDocumentNumber}:{label:"CNPJ",id:"documentNumber",value:null==o?void 0:o.documentNumber},c.length&&{label:"Endere\xe7o",id:"address",value:k(null==o?void 0:o.address)}];return a.createElement(f,null,a.createElement(x,null,n),a.createElement(v,{href:s,onClick:e=>i(e,{id:l,delivery:r}),"data-testid":"offers-link"},"Veja todas as ofertas dessa loja ",a.createElement(b,null)),u.map((e,t)=>a.createElement(w,{key:`seller-detail-${t}`,"data-testid":"details"},a.createElement(E,null,null==e?void 0:e.label),Array.isArray(null==e?void 0:e.value)?null==e?void 0:e.value.map(e=>a.createElement(y,{"data-testid":"details-value",key:`seller-value-${e}`},e)):a.createElement(y,null,null==e?void 0:e.value))))};$.defaultProps={seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu",details:{}},product:{},onOffersClick(){}};var S={zattini:{id:"zattini",logo:r.fOR},netshoes:{id:"netshoes",logo:r.fOD},kabum:{id:"kabum",logo:r.M0M},"epocacosmeticos-integra":{id:"epoca",logo:r.uE5}},z=i(12468),I=i(83179);let R=e=>{let{showSellerDetailContent:t,onCloseModalContent:i,seller:d,product:c,onSellerClick:u,onOffersClick:m,disableSellerClick:f,disableSellerDetails:x,logoIconColor:v,showDialog:b,modal:w,internationalPartner:E,partnerColor:y,partnerLogo:Z}=e,P=(0,n.Z)(e,["showSellerDetailContent","onCloseModalContent","seller","product","onSellerClick","onOffersClick","disableSellerClick","disableSellerDetails","logoIconColor","showDialog","modal","internationalPartner","partnerColor","partnerLogo"]),{id:k,description:R,deliveryId:O}=d,[D,M]=(0,a.useState)(t),A=e=>{u(e,{id:k,delivery:O}),M(!x)},T=()=>{M(!1),i()};a.useEffect(()=>{M(t)},[t]);let L=e=>{if(E&&Z)return a.createElement(h,{title:`Logo ${O}`,"data-testid":`${O}logo`,children:a.createElement(r.RdR,{href:Z,width:77,height:16}),onClick:f?null:A});if(e===z.ig)return a.createElement(g,{title:"Logo magalu","data-testid":"magalogo",logoIconColor:v});if(S[e]){let{id:t,logo:i}=S[e];return a.createElement(h,{title:`Logo ${t}`,"data-testid":`${t}logo`,children:a.createElement(i,{preserveAspectRatio:!0}),onClick:f?null:A})}return a.createElement(p,{onClick:f?null:A,disableClick:f,children:R||O,"data-testid":"link"})};return a.createElement(a.Fragment,null,a.createElement(C,(0,l.Z)({id:k,delivery:O,handleLabelName:L,internationalPartner:E,partnerColor:y},P)),!f&&!b&&a.createElement(o.YE,{direction:"right",visible:D,onClickOutside:T,fullScreen:!0,portal:!0},a.createElement(I.Z,{label:w.title||"Informa\xe7\xf5es da loja parceira",align:"left",leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:T}}),w.content||a.createElement($,{seller:d,product:c,onOffersClick:m})),!f&&!x&&b&&a.createElement(s.Vq,{visible:D,onClickOutside:T,position:"center",type:"responsive",showClose:!0,title:w.title,titleStyle:w.titleStyle},w.content||a.createElement($,{seller:d,product:c,onOffersClick:m})))};R.defaultProps={product:{},seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu"},onSellerClick(){},onOffersClick(){},disableSellerClick:!1,onCloseModalContent:()=>({}),showSellerDetailContent:!1,disableSellerDetails:!1,logoIconColor:"",showDialog:!1,modal:{title:""},internationalPartner:!1};var O=R},2334:function(e,t,i){i.d(t,{Z:function(){return d}});var l=i(7896),n=i(31461),a=i(2784),r=i(90749),o=i(87043);let s=e=>{let{items:t,currency:i}=e,s=(0,n.Z)(e,["items","currency"]);return a.createElement(o.xu,s,t.map((e,t)=>a.createElement(o.xu,{key:`shipping-item-${t}`},!!t&&a.createElement(o.bo,null),a.createElement(r.KI,(0,l.Z)({currency:i},e)))))};s.defaultProps={items:[],currency:"BRL"};var d=s},75335:function(e,t,i){i.d(t,{Z:function(){return H}});var l=i(7896),n=i(31461),a=i(2784),r=i(99673),o=i(68054),s=i(55403),d=i(19527),c=i(63825),u=i(27439);let m=r.iv`
  color: ${e=>(0,s.uu)("base")(e)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,p={miniature:r.iv`
    display: grid;
    padding: 8px 2px;
  `,list:r.iv`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 16px;
  `,gallery:r.iv``,none:r.iv`
    display: contents;
  `,button:r.iv`
    display: block;
    padding: 16px 16px 6px;
  `},h={miniature:r.iv`
    height: 20vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,list:r.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
  `,gallery:r.iv`
    height: 32vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `},g=(0,r.ZP)(u.ZP)`
  background-color: ${e=>(0,s.ow)("background.lighter")(e)};
  padding: 0;
  ${({displayMode:e})=>e&&p[e]}
`,f=r.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: ${e=>(0,s.R)("space.2")(e)}px;
  ${({displayMode:e})=>e&&h[e]}
`,x=r.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  grid-column-start: ${({betterOffer:e})=>e&&2};
  ${({highlight:e,highlightType:t,sponsored:i})=>e&&!t?r.iv`
          margin: ${(0,s.R)("space.0")}px ${(0,s.R)("space.2")}px;
        `:r.iv`
          margin-bottom: ${i?(0,s.R)("space.2"):(0,s.R)("space.3")}px;
        `};
`,v=(0,r.ZP)(c.Z).attrs(({highlight:e,fontSize:t})=>({fontSize:null!=t?t:[e?1:2,4,5],lineHeight:"display",fontWeight:"medium"}))`
  ${m}
  ${o.cp}

  & > span {
    font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  }
`,b=r.ZP.h2`
  ${m}
  height: 32px;
  line-height: ${e=>(0,s.R)("lineHeights.plus")(e)}px;
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.regular")(e)};
  margin: 0 0 4px 0;
`,w=r.ZP.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`,E=(0,r.ZP)(c.Z).attrs(()=>({fontSize:[1,4,5],lineHeight:"display",fontWeight:"regular"}))`
  ${m}
  ${o.cp}
`,y=r.ZP.div`
  display: grid;
`,Z=r.ZP.div`
  box-shadow: ${({exhibition:e})=>"highlight"===e?"0 4px 10px 0 rgba(0, 0, 0, 0.11)":"unset"};
  border-radius: ${({exhibition:e})=>"highlight"===e&&"4px"};
  overflow: hidden;
  ${({exhibition:e})=>"betteroffer"===e&&r.iv`
      display: grid;
      grid-template-rows: auto auto;
      padding: 24px 0;
      grid-template-columns: 1fr minmax(auto, 1376px) 1fr;
    `}
  ${o.Dh}
  ${o.$_}
  ${o.bK}
  ${o.Cg}
`,C=(0,r.ZP)(d.Z)`
  flex: 1;
  flex: 0 0 calc(100% / 4);
  border-right: ${(0,s.R)("borders.0")};
  border-width: 2px;
`,P=(0,r.ZP)(c.Z).attrs(()=>({fontSize:0,color:"light",marginTop:1}))``,k=r.ZP.div`
  grid-column-start: 2;
`;var $=i(98284);let S=({title:e,titleAs:t,titleSize:i,highlightType:l,showSponsoredSubTitle:n,betterOffer:r})=>{let[o,s="",d=""]=e.split('"'),c=d.replace(", ","");return a.createElement(x,{highlight:s,highlightType:l,sponsored:n,betterOffer:r},l?a.createElement(v,{as:t,fontSize:i,"data-testid":"product-title-head"},o," ",a.createElement("span",null,s)," ",c):a.createElement(a.Fragment,null,a.createElement(v,{as:t,fontSize:i,highlight:s,"data-testid":"product-title-head"},o),!!s&&a.createElement(E,{as:t,fontSize:i,"data-testid":"text-highlight"},s),!!c&&a.createElement(v,{as:t,fontSize:i,"data-testid":"text-suffix"},c)),n&&a.createElement(P,{"data-testid":"sponsored-tag"},"Patrocinados"))};S.defaultProps={title:"",titleAs:"h2",highlightType:!1,showSponsoredSubTitle:!1,betterOffer:!1};let z=e=>{let{data:t,title:i,titleAs:r,titleSize:o,imageAltPrefix:s,productTitleAs:d,showDiscountOnlyCashInfo:c,showDiscount:u}=e,m=(0,n.Z)(e,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscountOnlyCashInfo","showDiscount"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:i,titleSize:o,titleAs:r}),a.createElement($.Z,(0,l.Z)({data:t,displayMode:"list",enableShadow:!1,exhibition:"rank",imageAltPrefix:s,titleAs:d,showInCashInfo:!0,showDiscountOnlyCashInfo:c,showDiscount:u},m)))},I=e=>{let{data:t,title:i,titleAs:r,titleSize:o,imageAltPrefix:s,productTitleAs:d,showFullListBtn:c,showMoreBtn:u,onClickLoadMore:m,showDiscountOnlyCashInfo:p,showDiscount:h,showSponsoredSubTitle:g}=e,f=(0,n.Z)(e,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showDiscountOnlyCashInfo","showDiscount","showSponsoredSubTitle"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:i,titleSize:o,titleAs:r,showSponsoredSubTitle:g}),a.createElement($.Z,(0,l.Z)({data:t,displayMode:"gallery",enableShadow:!1,exhibition:"list",imageAltPrefix:s,titleAs:d,showFullListBtn:c,showMoreBtn:u,onClickLoadMore:m,showInCashInfo:!0,showDiscount:h,showDiscountOnlyCashInfo:p},f)))};var R=i(7029);let O=e=>{let{data:t,highlight:i,title:r,titleAs:o,titleSize:s,imageAltPrefix:d,productTitleAs:c,showDiscount:u,showDiscountOnlyCashInfo:m}=e,p=(0,n.Z)(e,["data","highlight","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscount","showDiscountOnlyCashInfo"]),h=d?`${d}${i.title}`:i.title;return a.createElement(a.Fragment,null,a.createElement(g,{as:"div",displayMode:"list","data-testid":"product-card-container",hideLinkBorder:!1},a.createElement(f,{displayMode:"list"},a.createElement(R.Z,{src:i.image,alt:h,lazy:!0,offset:2})),a.createElement(y,{displayMode:"gallery","data-testid":"product-card-content"},a.createElement(S,{title:r,titleAs:o,titleSize:s}))),a.createElement($.Z,(0,l.Z)({data:t,displayMode:"gallery",enableShadow:!1,exhibition:"highlight",imageAltPrefix:d,titleAs:c,showInCashInfo:!0,showDiscountOnlyCashInfo:m,showDiscount:u},p)))};var D=i(34490),M=i(87043);let A=({data:e,button:t,title:i,titleAs:l,titleSize:n,imageAltPrefix:r,productTitleAs:o,onClick:s})=>{let[d]=e,c=r?`${r}${d.title}`:null==d?void 0:d.title;return a.createElement(g,{displayMode:"button","data-testid":"product-card-container",hideLinkBorder:!1,as:"div"},a.createElement(S,{title:i,titleAs:l,titleSize:n}),a.createElement(w,null,a.createElement(f,{displayMode:"list"},a.createElement(R.Z,{src:null==d?void 0:d.image,alt:c,lazy:!0,offset:2})),a.createElement(y,{displayMode:"none","data-testid":"product-card-content"},a.createElement(x,{as:o},a.createElement(b,null,null==d?void 0:d.title)))),a.createElement(M.zx,{"data-testid":"showcase-button",onClick:e=>s(e,d),color:"secondary",startIcon:a.createElement(D.tuM,{width:32,height:32}),m:"10px 0",full:!0},(null==t?void 0:t.label)||"RETOMAR SUA COMPRA"))};var T=i(4720),L=i(43125);let j=e=>{let{title:t,titleAs:i,titleSize:r,data:o,highlight:s,slidesPerView:c,showDiscount:u,showDiscountOnlyCashInfo:m,showSponsoredSubTitle:p,offerTimerProps:h}=e,g=(0,n.Z)(e,["title","titleAs","titleSize","data","highlight","slidesPerView","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","offerTimerProps"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:t,titleAs:i,titleSize:r,highlightType:!!s,showSponsoredSubTitle:p}),a.createElement(d.Z,null,s&&a.createElement(C,{slidesPerView:c},a.createElement(L.Z,(0,l.Z)({},s,{displayMode:"gallery",showInCashInfo:!0,titleAs:"h3",fullHeight:!0,imageAltPrefix:"",imgLazyLoading:!0,imageWidth:g.imageWidth,imageHeight:g.imageHeight,showRating:!1,showDiscountOnlyCashInfo:m,showDiscount:u,key:`product-hightlight${s.variationId||s.id}`,offerTimerProps:h,enableHover:!0}))),a.createElement(T.Z,(0,l.Z)({products:o,slidesPerView:s?c-1:c,enableHover:!s,showDiscountOnlyCashInfo:m,showDiscount:u,offerTimerProps:h},g))))};j.defaultProps={slidesPerView:4};let W=e=>{let{title:t,titleAs:i,titleSize:r,data:o,highlight:s,slidesPerViewBetterOffer:d,showSponsoredSubTitle:c,showButton:u,buttonProps:m}=e,p=(0,n.Z)(e,["title","titleAs","titleSize","data","highlight","slidesPerViewBetterOffer","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","showButton","buttonProps"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:t,titleAs:i,titleSize:r,highlightType:!!s,showSponsoredSubTitle:c,betterOffer:!0}),a.createElement(k,null,a.createElement(T.Z,(0,l.Z)({products:o,slidesPerView:d,enableHover:!s,showDiscountOnlyCashInfo:!1,showDiscount:!1,fullHeight:!1,exhibition:"betteroffer",gutter:24,displayMode:"list",showRating:!1,showOfferTimer:!0,showPartialNextSlide:!0,cardType:"horizontal",show:!0,showBorder:!0,showButton:u,buttonProps:m,hideOriginalPrice:!0},p))))};W.defaultProps={slidesPerViewBetterOffer:2,showButton:!1,buttonProps:{}};var B={rank:z,list:I,highlight:O,button:A,carousel:j,betteroffer:W};let F=(0,a.forwardRef)((e,t)=>{var i;let{data:r,onClick:o,onProductView:s,jsonLD:d,exhibition:c,titleAs:u,titleSize:m,imageAltPrefix:p,productTitleAs:h,showFullListBtn:g,showMoreBtn:f,onClickLoadMore:x,showInCashInfo:v,showDiscount:b,showDiscountOnlyCashInfo:w,showSponsoredSubTitle:E,slidesPerViewBetterOffer:y,showButton:C,buttonProps:P}=e,k=(0,n.Z)(e,["data","onClick","onProductView","jsonLD","exhibition","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","slidesPerViewBetterOffer","showButton","buttonProps"]);null!==(i=t)&&void 0!==i||(t=(0,a.useRef)(null));let $=void 0===B[c]?B.rank:B[c];return a.createElement(Z,(0,l.Z)({ref:t,exhibition:c},k),a.createElement($,(0,l.Z)({data:r.products,title:r.title,highlight:r.highlight,button:r.button,onClick:o,onProductView:s,jsonLD:d,titleAs:u,titleSize:m,productTitleAs:h,imageAltPrefix:p,showFullListBtn:g,slidesPerViewBetterOffer:y,showMoreBtn:f,onClickLoadMore:x,showInCashInfo:v,showDiscount:b,showDiscountOnlyCashInfo:w,showSponsoredSubTitle:E,showButton:C,buttonProps:P},k)))});F.defaultProps={data:{title:null,products:[]},onClick:()=>!1,onProductView(){},exhibition:"rank",jsonLD:!0,titleAs:"h2",productTitleAs:"h3",imageAltPrefix:"",showFullListBtn:!1,showMoreBtn:!1,showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1,showSponsoredSubTitle:!1,slidesPerViewBetterOffer:2,showButton:!1,buttonProps:{}},F.displayName="Showcase";var H=F},83179:function(e,t,i){i.d(t,{Z:function(){return x}});var l=i(7896),n=i(31461),a=i(2784),r=i(34490),o=i(99673),s=i(55403),d=i(68054),c=i(63825);let u={left:o.iv`
    grid-template-columns: auto repeat(1, auto) 1fr;
  `,right:o.iv`
    grid-template-columns: 1fr repeat(1, auto) auto;
  `,default:o.iv`
    grid-template-columns: 1fr repeat(1, auto) 1fr;
  `},m=(0,o.ZP)(c.Z)`
  align-self: center;
  font-weight: 500;
`,p=o.ZP.div`
  margin-right: auto;
`,h=o.ZP.div`
  display: grid;
  ${e=>u[null==e?void 0:e.align]||u.default}
  gap: 0 10px;
  padding: 20px 16px;
  border-bottom: 1px solid ${e=>(0,s.dF)("darker")(e)};
  ${d.Dh}
  ${d.$_}
  ${d.bK}
  ${d.Cg}
  ${d.J4}
  ${d.$u}
`,g={close:r.x8P,back:r.xhZ},f=e=>{let{label:t,align:i,fontSize:r,leftButton:o,showCloseButton:s}=e,d=(0,n.Z)(e,["label","align","fontSize","leftButton","showCloseButton"]),{icon:c,title:u,onClick:f,iconColor:x="#8c8c8c"}=o,v=g[c||"close"];return a.createElement(h,(0,l.Z)({},d,{align:i,"data-testid":"sidebar-header"}),a.createElement(p,null,s&&a.createElement(v,{color:x,role:"button",title:u,"data-testid":`${c}-button`,onClick:f})),a.createElement(m,(0,l.Z)({fontSize:r},d,{"data-testid":"title"}),t))};f.defaultProps={align:"center",fontSize:1,leftButton:{icon:"close",onClick(){}},showCloseButton:!0};var x=f},70615:function(e,t,i){i.d(t,{$:function(){return v.Z},Z:function(){return C}});var l=i(7896),n=i(31461),a=i(2784),r=i(39879),o=i(99673),s=i(68054),d=i(55403),c=i(81572),u=i(84546);let m={left:o.iv`
    left: 0;
    transform: ${({visible:e})=>e?"translateX(0)":"translateX(-100%)"};
  `,right:o.iv`
    right: 0;
    transform: ${({visible:e})=>e?"translateX(0)":"translateX(100%)"};
  `},p=o.ZP.aside`
  z-index: ${e=>(0,d.R)("zIndices.2")(e)};
  visibility: ${({visible:e})=>e?"visible":"hidden"};
`,h=(0,o.ZP)(c.Z).attrs(e=>({borderBottom:`1px solid ${(0,d.dF)("darker")(e)}`}))``,g=(0,o.ZP)(u.Z).attrs(e=>{let{fullScreen:t}=e,i=(0,n.Z)(e,["visible","fullScreen"]);return{backgroundColor:(0,d.dF)((null==i?void 0:i.bg)||"lighter")(i),zIndex:(0,d.R)("zIndices.3")(i),width:t?"100%":"80%",overflowX:"hidden",position:"fixed",overflowY:"auto",textAlign:"left",display:"block",height:"100vh",height:"100svh",top:0}})`
  ${s.$_}

  ${({direction:e})=>m[e]||m.right}
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: ${({timeTransition:e})=>`transform ${e}s ease-in-out`};

  /* mobile native toolbar */
  padding-bottom: 54px;
`,f=(0,o.ZP)(u.Z).attrs(e=>{let{visible:t}=e,i=(0,n.Z)(e,["visible"]);return{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:(0,d.R)("zIndices.2")(i),opacity:Number(t),position:"fixed",bottom:0,right:0,left:0,top:0}})`
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: visibility 0s, opacity 0.3s linear;
`;var x=i(75851),v=i(83179),b=i(34490);let w=e=>{let{children:t,variant:i,startIcon:r,fontSize:o,fontWeight:s,textAlign:d,ariaLabel:c,fill:u,onClick:m}=e,p=(0,n.Z)(e,["children","variant","startIcon","fontSize","fontWeight","textAlign","ariaLabel","fill","onClick"]);return a.createElement(h,(0,l.Z)({variant:i,scale:"large",startIcon:r&&a.createElement(b.JO$,{name:r,"aria-label":c,fill:u,onClick:m,"data-testid":"sidebar-header-icon"}),textAlign:d,fontSize:o,fontWeight:s,"data-testid":"sidebar-header"},p),t)};w.defaultProps={children:null,variant:"transparent",startIcon:"ArrowBack",fontSize:1,fontWeight:"medium",textAlign:"center",ariaLabel:"fechar sidebar",fill:"currentColor",onClick(){}};let E=e=>a.createElement(x.Z,{id:"portal-sidebar"},e),y=e=>{let{portal:t=!1}=e,i=(0,n.Z)(e,["portal"]),l=a.createElement(Z,i);return t?E(l):l},Z=e=>{let{children:t,visible:i,direction:o,timeTransition:s,onClickOutside:d,headerTitle:c,fullScreen:u}=e,m=(0,n.Z)(e,["children","visible","direction","timeTransition","onClickOutside","headerTitle","fullScreen"]),h=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var e;let t=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=i?"hidden":t,null!=h&&null!=(e=h.current)&&e.scrollTop&&(h.current.scrollTop=0),()=>{document.body.style.overflow=t}},[i]),(0,a.useEffect)(()=>{(0,r.Iq)()},[t]),a.createElement(p,{visible:i,"data-testid":"sidebar"},a.createElement(g,(0,l.Z)({forwardRef:h,visible:i,direction:o,timeTransition:s,fullScreen:u,"data-testid":"content"},m),c&&a.createElement(v.Z,{label:c,leftButton:{onClick:d}}),t),a.createElement(f,{"aria-hidden":"true",visible:i,onClick:d,"data-testid":"overlay"}))};Z.defaultProps={direction:"left",timeTransition:.3,headerTitle:null,fullScreen:!1,visible:!1,onClickOutside(){}},y.Header=w;var C=y},37215:function(e,t,i){i.d(t,{Z:function(){return c}});var l=i(2784),n=i(34490),a=i(99673),r=i(17781);let o={xsmall:{size:"xsmall",width:"15px",height:"15px",minWidth:"152px",maxWidth:"152px",fontSize:0},small:{size:"small",width:"17px",height:"17px",minWidth:"153px",maxWidth:"153px",fontSize:1},medium:{size:"medium",width:"20px",height:"18px",minWidth:"160px",maxWidth:"160px",fontSize:1}},s=(0,a.ZP)(r.Z).attrs(({variant:e,startIcon:t})=>({bg:"magabluLight",fontSize:0,startIcon:t,fontWeight:"medium",gridGap:1,borderRadius:8,mb:2,mt:2,color:"primary",justify:"start",padding:"2px 8px",minWidth:o[e].minWidth,maxWidth:o[e].maxWidth,textMaxWidth:"auto",size:o[e].size}))``;function d({variant:e}){return l.createElement(s,{variant:e,"data-testid":"productCard-international-tag",startIcon:l.createElement(n.JO$,{name:"Airplane",fill:"#0086FF",width:o[e].width,height:o[e].height})},"Compra Internacional")}d.defaultProps={variant:"xsmall"};var c=d},35306:function(e,t,i){i.d(t,{Z:function(){return b}});var l=i(7896),n=i(31461),a=i(2784),r=i(90749),o=i(87043),s=i(99673),d=i(55403);let c={default:s.iv`
    flex-direction: column;
    word-break: break-word;
    min-width: 280px;
  `,flex:s.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    ${(0,d.aK)("small")} {
      justify-content: left;
    }
  `,inline:s.iv`
    display: inline;
    font-size: inherit;
    line-height: normal;
  `},u={flex:s.iv`
    display: inline-block;
    padding: ${(0,d.R)("space.3")}px ${(0,d.R)("space.2")}px;
    ${(0,d.aK)("small")} {
      width: 150px;
      padding: unset;
    }
  `,inline:s.iv`
    display: inline-block;
    margin-right: ${(0,d.R)("space.4")}px;
    font-size: inherit;
    & a {
      display: inline-block;
      font-size: inherit;
      line-height: normal;
    }
  `},m={default:s.iv`
    color: ${e=>(0,d.uu)("base")(e)};
    padding-bottom: ${(0,d.R)("space.3")}px;
    line-height: normal;
  `,inline:s.iv`
    display: inline-block;
    margin-right: ${(0,d.R)("space.3")}px;
    font-size: inherit;
  `},p=(0,s.ZP)(o.xu).attrs(e=>Object.assign({p:3,textAlign:"left",borderRadius:"default"},e))``,h=(0,s.ZP)(o.X6)`
  ${e=>m[e.variation]||m.default};
`,g=(0,s.ZP)(o.bo)`
  ${(0,d.aK)("small")} {
    display: none;
  }
`,f=s.ZP.ul`
  list-style-position: inside;
  display: flex;
  justify-content: space-around;
  ${e=>c[e.variation]||c.default};
`,x=(0,s.ZP)(o.xv).attrs(()=>({forwardedAs:"li",fontSize:2,color:"scratched",lineHeight:"big"}))`
  list-style-type: ${({hideListPoint:e})=>e?"none":"disc"};
  ${e=>u[e.variation]||u.default};
`,v=e=>{let{hideListPoint:t,limitListItems:i,list:s,handleClickLink:d,showAllItems:c,showMoreLabel:u,title:m,titleAs:v,typeList:b}=e,w=(0,n.Z)(e,["hideListPoint","limitListItems","list","handleClickLink","showAllItems","showMoreLabel","title","titleAs","typeList"]),[E,y]=(0,a.useState)(c),[Z,C]=(0,a.useState)(s.slice(0,i)),P=()=>{y(!0),C(s)};return a.createElement(p,(0,l.Z)({"data-testid":"text-list-container"},w,{variation:b}),m&&a.createElement(a.Fragment,null,a.createElement(h,{"data-testid":"text-list-title",as:v,variation:b},m),"inline"!==b&&a.createElement(g,{variation:b})),a.createElement(f,{"data-testid":"text-list-ul",variation:b},Z.map((e,l)=>a.createElement(x,{variation:b,hide:!E&&l>=i,key:l,"data-testid":"text-list-text",hideListPoint:t},a.createElement(r.g0,{data:e,handleClickLink:d})))),!E&&Z.length>=i&&a.createElement(a.Fragment,null,a.createElement(g,null),a.createElement(o.ck,{fontWeight:"medium",fontSize:1,color:"text.primary",fill:"text.primary",startIcon:"ChevronDownCircle",variant:"transparent",gap:1,centered:!0,onClick:P,"data-testid":"term-list-more"},u)))};v.defaultProps={hideListPoint:!1,limitListItems:20,list:[],handleClickLink(){},showAllItems:!0,showMoreLabel:"veja mais",title:null,titleAs:"h1",typeList:"default"};var b=v},41323:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(7896),n=i(31461),a=i(2784),r=i(1587),o=i(99673),s=i(55403),d=i(34490),c=i(19527);let u=(0,o.ZP)(c.Z).attrs(()=>({alignItems:"center",justifyContent:"space-between",backgroundColor:"background.primaryDark",padding:1}))``,m=(0,o.ZP)(d._Qn).attrs(e=>({color:(0,s.uu)("lightest")(e)}))``,p=e=>{let{text:t,defaultText:i,zipcode:o,state:s,city:d,onClick:c}=e,p=(0,n.Z)(e,["text","defaultText","zipcode","state","city","onClick"]);return a.createElement(u,(0,l.Z)({onClick:c,"data-testid":"container"},p),a.createElement(r.Z,{city:d,defaultText:i,state:s,text:t,zipcode:o,iconHeight:18,iconWidth:20}),a.createElement(m,null))};p.defaultProps={zipcode:void 0,state:void 0,city:void 0};var h=p},25164:function(e,t,i){i.d(t,{dO:function(){return l.Z},G4:function(){return W},jm:function(){return A},aw:function(){return N},pZ:function(){return V},f4:function(){return ed},DH:function(){return el},Il:function(){return en.Z},zT:function(){return eD.Z},Qp:function(){return eI.Z},Ak:function(){return ez},Ym:function(){return eb},fP:function(){return eR.Z},u0:function(){return eO.Z},YE:function(){return y.Z}}),i(5530),i(92877);var l=i(36103),n=i(31461),a=i(2784),r=i(34490),o=i(71180),s=i(68054),d=i(99673),c=i(55403),u=i(19527),m=i(8341),p=i(63825);let h=d.ZP.section`
  padding: 12px;
  border: solid 1px ${e=>(0,c.dF)("whisper")(e)};
  border-radius: 4px;
  ${s.Dh}
`,g=(0,d.ZP)(u.Z)`
  justify-content: space-between;
`,f=(0,d.ZP)(p.Z)`
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};
  cursor: pointer;
  text-decoration: underline;
`,x=(0,d.ZP)(p.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.0")(e)}px;
  line-height: ${e=>(0,c.R)("lineHeights.input")(e)}em;
`,v=(0,d.ZP)(m.Z)`
  padding: 12px;
  border-bottom: 1px solid ${e=>(0,c.dF)("darker")(e)};
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 1em;
  margin-bottom: 20px;
`,b=(0,d.ZP)(p.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.2")(e)}px;
`,w=`Cart\xe3o de cr\xe9dito`;var E=i(563),y=i(70615);let Z=e=>{let{plan:t,payments:i,onClick:l,onClose:s,onPaymentMethodChange:d}=e,c=(0,n.Z)(e,["plan","payments","onClick","onClose","onPaymentMethodChange"]),[u,m]=(0,a.useState)(!1),p=()=>{m(!0),l(t)},Z=()=>{m(!1),s()},{paymentMethodDescription:C,totalAmount:P,quantity:k,amount:$}=t;return a.createElement(h,c,a.createElement(g,null,a.createElement("div",null,a.createElement(f,{onClick:p,role:"button","aria-hidden":!0,"aria-label":"abrir m\xe9todos de pagamento"},w),a.createElement(x,null,C)),a.createElement("div",null,a.createElement(x,{textAlign:"right"},(0,o.oB)({value:P})),a.createElement(x,{fontWeight:"500"},k,"x ",(0,o.oB)({value:$})))),a.createElement(y.Z,{visible:u,direction:"right",onClickOutside:Z,"data-testid":"sidebar-payments"},a.createElement(v,null,a.createElement(r.x8P,{color:"#bcbcbc",onClick:Z,role:"button",title:"fechar m\xe9todos de pagamento"}),a.createElement(b,{fontWeight:"normal"},"Formas de pagamento")),a.createElement(E.Z,{payments:i,onChange:d})))};Z.defaultProps={plan:{},payments:{},onClick:()=>({}),onClose:()=>({}),onPaymentMethodChange:()=>({})},i(28426),i(63486);var C=i(7896),P=i(1729),k=i(99554),$=i(84546);let S=(0,d.ZP)($.Z)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>(0,c.dF)("lighter")(e)};
  border-bottom: 1px solid ${e=>(0,c.dF)("darker")(e)};
  border-top: 1px solid ${e=>(0,c.dF)("darker")(e)};
  padding: 14px 16px;
`,z=d.ZP.div``,I=(0,d.ZP)(p.Z)``,R=(0,d.ZP)(p.Z)`
  margin: 4px 0;
  color: ${e=>(0,c.uu)("scratched")(e)};
`,O=d.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 16px;
  border-bottom: 1px solid ${e=>(0,c.dF)("darker")(e)};
  margin-bottom: 0.5em;
`,D=d.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,M=e=>{let{onClick:t,label:i,position:l,filterSelected:o,fullScreen:s,showFilterInput:d,onChangeFilterInput:c,onClearInput:u,children:m}=e,p=(0,n.Z)(e,["onClick","label","position","filterSelected","fullScreen","showFilterInput","onChangeFilterInput","onClearInput","children"]),[h,g]=(0,a.useState)(!1),f=()=>{g(!0),t({label:i,position:l})};return a.createElement(a.Fragment,null,a.createElement(S,(0,C.Z)({},p,{onClick:f,"data-testid":"filter-item-container"}),a.createElement(z,null,a.createElement(I,{fontSize:1,"data-testid":"filter-item-container"},i),o&&a.createElement(R,{as:"string"!=typeof o?"div":"p",fontSize:0,"data-testid":"filter-item-selected"},o)),a.createElement(z,null,a.createElement(r.olP,{width:"12px",height:"12px"}))),a.createElement(z,null,a.createElement(y.Z,{direction:"right",visible:h,onClickOutside:()=>g(!1),fullScreen:s},a.createElement(z,null,a.createElement(O,null,a.createElement(z,null,a.createElement(r.xhZ,{color:"#8c8c8c","data-testid":"close-filter-detail",role:"button",title:"Fechar filtro",onClick:()=>g(!1)})),a.createElement(D,null,a.createElement(I,{fontSize:1,textAlign:"center",fontWeight:"500"},i))),a.createElement("div",null,d&&a.createElement(k.Z,{m:"20px",onChange:c,onClearInput:u,label:i})),m))))};M.defaultProps={filterSelected:"",onClick:()=>({}),fullScreen:!1};var A=M,T=i(41869);let L=(e="",t=[])=>t.filter(t=>{var i,l;return null==(i=t.label)?void 0:null==(l=i.toUpperCase())?void 0:l.includes(e.toUpperCase())}),j=e=>{let{fullScreen:t,label:i,position:l,filterSelected:r,items:o,showFilterInput:s,onItemClick:d}=e,c=(0,n.Z)(e,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[u,m]=(0,a.useState)((0,T.Z)(o));(0,a.useEffect)(()=>(m((0,T.Z)(o)),()=>m([])),[o]);let p=()=>{m(o)},h=e=>{m((0,T.Z)(L(e.target.value,o)))};return a.createElement(A,(0,C.Z)({},c,{label:i,position:l,fullScreen:t,onChangeFilterInput:h,onClearInput:p,filterSelected:r,showFilterInput:s}),a.createElement("ul",null,u.map((e,t)=>a.createElement(P.Z,{item:e,key:(null==e?void 0:e.slug)||t,onClick:d}))))};j.defaultProps={label:"",filterSelected:"",items:[],showFilterInput:!1,onItemClick:()=>({})};var W=j,B=i(90749),F=i(82260);let H=e=>{let{fullScreen:t,label:i,position:l,filterSelected:r,items:o,onItemClick:s}=e,d=(0,n.Z)(e,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[c,u]=(0,a.useState)((0,F.Z)(o));return(0,a.useEffect)(()=>(u(o),()=>u({})),[o]),a.createElement(A,(0,C.Z)({position:l,label:i,fullScreen:t,filterSelected:r&&Object.keys(r).length?a.createElement(B.Cq,{min:0,max:5,score:null==r?void 0:r.value,label:null==r?void 0:r.hint,format:"label",fontSize:"14px",width:"20px",height:"20px"}):void 0},d),c.map((e,t)=>a.createElement("ul",{key:(null==e?void 0:e.slug)||t},a.createElement(B.L2,{onClick:s,item:e},a.createElement(B.Cq,{min:0,max:5,score:null==e?void 0:e.value,label:null==e?void 0:e.hint,format:"label",fontSize:"14px",width:"20px",height:"20px","data-testid":"review-item"})))))};H.defaultProps={filterSelected:[],items:[],showFilterInput:!1,onItemClick(){},onClick(){}};var V=H;let _=e=>{let{fullScreen:t,label:i,position:l,onApply:r,min:s,max:d,selectedMin:c,selectedMax:u,item:m}=e,p=(0,n.Z)(e,["fullScreen","label","position","onApply","min","max","selectedMin","selectedMax","item"]);return a.createElement(A,(0,C.Z)({id:"filter-item-price-container",position:l,label:i,fullScreen:t,filterSelected:c||u?`${(0,o.oB)({value:c})} - ${(0,o.oB)({value:u})}`:void 0},p),a.createElement(B.MS,{min:s,max:d,initialMin:c,initialMax:u,onApply:r,item:m}))};_.defaultProps={onApply(){},onClick(){},item:{}};var N=_;i(66608),i(75057);var K=i(86349),G=i(10200);let U=d.ZP.nav.attrs(e=>Object.assign({bg:"background.primary"},e))`
  text-align: left;

  ${c.$_}
`,Y=d.ZP.ul.attrs(e=>Object.assign({my:0,pl:0},e))`
  display: flex;
  align-items: center;
  line-height: 45px;
  list-style: none;
  white-space: nowrap;
  justify-content: space-between;

  ${s.Dh}
`,q=(0,d.ZP)(G.Z).attrs(e=>Object.assign({color:"text.white",px:"10px",underlineOnHover:!1},e))`
  ${c.$_}
`,J=d.ZP.div`
  position: absolute;
  background-color: ${e=>(0,c.dF)("white")(e)};
  z-index: ${e=>(0,c.R)("zIndices.4")(e)};
  ${e=>`display: ${e.show?"block":"none"}`};
  ${s.FK}
  ${c.$_}
  ${s.Dh}
`,X=d.ZP.li`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  z-index: ${e=>e.selected&&(0,c.R)("zIndices.1")(e)};
  background-color: ${e=>e.selected&&(0,c.dF)("white")(e)};

  &:hover {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    & path {
      fill: ${e=>e.colorOnHover?e.colorOnHover:(0,c.uu)("base")(e)};
    }
  }
  &:hover > div > a {
    color: ${e=>e.colorOnHover?e.colorOnHover:(0,c.uu)("base")(e)};
  }
`,Q=d.ZP.div`
  background: rgba(0, 0, 0, 0.6);
  animation: ${K.Ji} 0.2s linear;

  position: fixed;
  z-index: ${e=>(0,c.R)("zIndices.0")(e)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${e=>e.show?d.iv`
          display: block;
        `:d.iv`
          display: none;
        `};
`;var ee=i(48919);let et=e=>{let{banner:t,subcategoriesList:i}=e||{},{component:l}=t||{},{props:n}=l||{},{static:a}=n||{},r=Boolean(null==a?void 0:a.path),o=Boolean(null==a?void 0:a.slot),s=Array.isArray(i)&&i.length>0;return r||o||s},ei=({data:e,enableHoverDelay:t,onMenuItemClick:i,onHoverMenuItem:l,onClickMenuItem:n})=>{let{categoryList:o,specialLinks:s,externalLinks:d,allCategories:c}=e,{orderBy:m=[],list:p=[],show:h}=o,g=(0,K.IC)(p,m),f=g.slice(0,h||m.length),x=(0,a.useRef)(null),v={},b={},[w,E]=(0,a.useState)(0),[y,Z]=(0,a.useState)(null),[C,P]=(0,a.useState)(null);(0,K.O)(v,x,"inline-block");let k=e=>{let t=b[e].current;if(t){t.style.display="block";let i=t.clientWidth,l=v[e].current.offsetLeft,n=x.current.offsetWidth+x.current.offsetLeft,a=l+i-n;E(a>=0?-a:0),t.style.display=null}},$=(e,i,l)=>{let n=et(i);if(n){if("open"===e&&t){let a=setTimeout(()=>{k(l),Z(l)},300);P(a)}else"close"===e?(Z(null),clearTimeout(C)):Z(l)}},S=(e={},t)=>a.createElement(J,{marginLeft:w,show:y===t,"data-testid":"nav-submenu",ref:b[t]},a.createElement(ee.Z,{data:e,onMenuItemClick(t,l,n){i(t,l,e.label,n)}})),z=({menuType:e,index:t,menu:i,icon:o,chevronDown:s=!1})=>{let{color:d,label:c,url:m}=i,p=`${e}-item-${t}`;v[p]=(0,a.useRef)(null),b[p]=(0,a.useRef)(null);let h=et(i);return a.createElement(X,{selected:h&&y===p,"data-testid":"link-menu-item",key:p,colorOnHover:h?"":d,onMouseEnter(e){e.stopPropagation(),$("open",i,p),l(i)},onMouseLeave:()=>$("close",i,p),ref:v[p]},a.createElement(u.Z,{mx:"2px",justifyContent:"center",alignItems:"center"},o&&a.createElement(r.JO$,{name:o,"data-testid":`link-icon-${t}`,color:"text.lightest"}),a.createElement(q,{onClick(e){e.stopPropagation(),n(c)},href:m},c),s&&a.createElement(r.JO$,{name:"ChevronDown",color:"text.lightest"})),S(i,p))};return a.createElement(U,{"data-testid":"links-menu",ref:x},a.createElement(Y,null,z({menuType:"main",index:0,icon:"Burger",menu:c,chevronDown:!0}),s.map((e,t)=>z({menuType:"special",index:t,menu:e})),f.map((e,t)=>z({menuType:"category",index:t,menu:e})),d.map((e,t)=>z({menuType:"external",index:t,menu:e,icon:e.id}))),a.createElement(Q,{"data-testid":"menu-overlay",show:!!y}))};ei.defaultProps={data:{categoryList:{},specialLinks:[],externalLinks:[],allCategories:{}},enableHoverDelay:!0};var el=ei;i(99075),i(60857),i(56337);var en=i(43125);i(4720),i(98284);let ea={height:"auto",fontSize:0,flexWrap:"no-wrap",mt:0,overflow:"auto",px:"9px",pb:"5px"},er={height:"16px",fontSize:1,flexWrap:"wrap",mt:1,overflow:"hidden"},eo=(0,d.ZP)(u.Z).attrs(e=>Object.assign({bg:"background.primary"},e.isMobile?Object.assign({},ea):Object.assign({},er),e))`
  white-space: pre;
  line-height: ${e=>(0,c.R)("lineHeights.plus")(e)}px;

  a {
    font-size: inherit;
  }
`,es=e=>{let{data:t,onClick:i,isMobile:l,isRendered:r}=e,o=(0,n.Z)(e,["data","onClick","isMobile","isRendered"]),{links:s,title:d}=t;return(null==s?void 0:s.length)>=1&&d?a.createElement(eo,(0,C.Z)({display:r?"flex":"none","data-testid":"header-links-list",isMobile:l},o,{color:"text.lightest"}),a.createElement(p.Z,{color:"text.lightest"},`${d}: `),null==s?void 0:s.map((e,t)=>{let l=0!==t&&a.createElement("span",null," | ");return a.createElement(a.Fragment,null,l,a.createElement(G.Z,{"data-testid":"header-link",key:e.value,href:e.href,onClick:t=>i(t,e),hover:!1,color:"text.lightest"},(0,K.kC)(e.value)))})):null};es.defaultProps={data:{links:[],title:""},onClick(){},isMobile:!1,isRendered:!0};var ed=es,ec=i(41544),eu=i(87043);let em=d.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ul {
    width: 100%;
    margin-top: 20px;
  }

  ${(0,c.aK)("large")} {
    flex-direction: row;
    width: 100%;

    > ul {
      width: ${({showScoreDesc:e})=>e?"50%":"100%"};
    }
  }
`,ep=d.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(0,c.aK)("large")} {
    flex-direction: column-reverse;
    flex: 1;
  }
`,eh=d.ZP.div`
  margin-left: 8px;

  > div {
    margin-left: -4px;
  }
`,eg=d.ZP.li`
  display: grid;
  grid-template-columns: 2fr 2fr auto;
  align-items: center;
  grid-gap: 8px;

  & > p:first-child {
    font-size: ${(0,c.R)("fontSizes.1")}px;
    line-height: ${(0,c.R)("lineHeights.display")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p:last-child {
    font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  }

  ${(0,c.aK)("large")} {
    grid-template-columns: 1fr 2fr auto;
  }
`,ef=(0,d.ZP)(p.Z)`
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.7")(e)}px;

  & > span {
    display: none;
  }

  ${(0,c.aK)("large")} {
    line-height: ${e=>(0,c.R)("lineHeights.fontSize")(e)};

    & > span {
      display: inline-block;
    }
  }
`,ex=(0,d.ZP)(p.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,c.uu)("light")(e)};

  ${(0,c.aK)("large")} {
    margin-top: ${e=>(0,c.R)("space.3")(e)}px;
  }
`;function ev({average:e,count:t,characteristics:i,showScoreDesc:l}){let n=t>1?`${t} avalia\xe7\xf5es`:`${t} avalia\xe7\xe3o`;return a.createElement(em,{showScoreDesc:l},l&&a.createElement(ep,null,a.createElement(ef,{"data-testid":"stat-score"},a.createElement("span",null,"Nota:"),` ${e.toFixed(1)}`),a.createElement(eh,null,a.createElement(B.Cq,{score:e,width:"20px",height:"20px"}),a.createElement(ex,{"data-testid":"stat-desc"},n))),a.createElement("ul",null,null==i?void 0:i.map(e=>a.createElement(eg,{key:e.label},a.createElement(p.Z,null,e.label),a.createElement(eu.uk,{height:"8px",color:"#0086ff",value:e.value,max:5}),a.createElement(p.Z,null,e.value.toFixed(1))))))}ev.defaultProps={average:0,count:0,characteristics:[],showScoreDesc:!0};var eb=ev;let ew=d.ZP.div`
  ${(0,c.aK)("large")} {
    display: flex;
  }
`,eE=(0,d.ZP)(p.Z)`
  margin-top: 4px;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)(e.bold?"fontWeights.medium":"fontWeights.regular")(e)};
  color: ${e=>(0,c.uu)("base")(e)};

  > span {
    color: ${e=>(0,c.uu)("lighter")(e)};
  }
`,ey=(0,d.ZP)(p.Z)`
  margin-top: 12px;
  font-size: ${e=>(0,c.R)("fontSizes.5")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};
  color: ${e=>(0,c.uu)("base")(e)};
  line-height: ${e=>(0,c.R)("lineHeights.display")(e)};
`,eZ=(0,d.ZP)(p.Z)`
  margin: 12px 0;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,c.uu)("scratched")(e)};
  line-height: ${e=>(0,c.R)("lineHeights.plus")(e)}px;
  text-align: justify;
`,eC=(0,d.ZP)($.Z)`
  border-bottom: 3px solid ${e=>(0,c.kJ)("light")(e)};
  margin: 16px 0px;
  width: 100%;
`,eP=(0,d.ZP)(p.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};

  color: ${e=>e.reviewOK?(0,c.R)("baseColors.lima.base")(e):(0,c.R)("baseColors.vermillion.base")(e)};
`,ek=(0,d.ZP)($.Z)`
  ${(0,c.aK)("large")} {
    width: 50%;
    flex: 1;
    margin-right: 32px;
  }
`,e$=(0,d.ZP)($.Z)`
  ${(0,c.aK)("large")} {
    align-self: center;
    width: 50%;
  }
`;function eS({title:e,text:t,rating:i,recommended:l,user:n,date:r,characteristics:o,showScoreDesc:s}){let d=r&&(0,ec.Z)(new Date(r),new Date);return a.createElement(a.Fragment,null,a.createElement(ew,{"data-testid":"review-card"},a.createElement(ek,null,a.createElement(B.Cq,{score:i,width:"20px",height:"20px"}),a.createElement(eE,null,(null==n?void 0:n.name)||"An\xf4nimo"," - ",a.createElement("span",null,"H\xe1 ",d)),a.createElement(ey,{bold:!0},e),a.createElement(eZ,null,t),a.createElement(eP,{reviewOK:l},l?"Sim, eu recomendo esse produto":"N\xe3o, eu n\xe3o recomendo esse produto")),a.createElement(e$,null,a.createElement(eb,{characteristics:o,showScoreDesc:s}))),a.createElement(eC,null))}eS.defaultProps={user:{name:"An\xf4nimo"},showScoreDesc:!1};var ez=eS;i(4506);var eI=i(77576),eR=i(30143),eO=i(2334);i(75335),i(35306),i(41323),i(90713),i(37215);var eD=i(99970);i(3018)}}]);
//# sourceMappingURL=8350-e31046c1db31fed5.js.map