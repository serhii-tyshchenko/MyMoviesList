(this["webpackJsonpmy-movies-list"]=this["webpackJsonpmy-movies-list"]||[]).push([[0],Array(46).concat([function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a={};s.r(a),s.d(a,"loadState",(function(){return O})),s.d(a,"saveState",(function(){return b})),s.d(a,"clearState",(function(){return h}));var n=s(1),i=s(17),c=s.n(i),l=s(4),o=s(18),r=s(20);s(43),s(76),s(77);const u={apiKey:"AIzaSyA6XUq8nOL2vre9ZU4EJShlxA_MOQqjmN4",authDomain:"mymovieslist-86230.firebaseapp.com",databaseURL:"https://mymovieslist-86230.firebaseio.com",projectId:"mymovieslist-86230",storageBucket:"mymovieslist-86230.appspot.com",messagingSenderId:"137868625948",appId:"1:137868625948:web:1409fc04a3064b5cb937d9",measurementId:"G-QEHSQDNN70"};var d=new class{constructor(){this.signInWithEmail=(e,t)=>this.auth.signInWithEmailAndPassword(e,t),this.signUpWithEmail=(e,t)=>this.auth.createUserWithEmailAndPassword(e,t),this.signInWithGoogle=()=>r.a.auth().signInWithPopup(new r.a.auth.GoogleAuthProvider),this.signOut=()=>this.auth.signOut(),this.addItem=(e,t,s=this.dataCollection)=>this.db.collection(this.rootCollection).doc(e).collection(s).doc(t.id).set(t),this.updateItem=(e,t,s=this.dataCollection)=>this.db.collection(this.rootCollection).doc(e).collection(s).doc(t.id).set(t,{merge:!0}),this.removeItem=(e,t,s=this.dataCollection)=>this.db.collection(this.rootCollection).doc(e).collection(s).doc(t).delete(),this.getItems=(e,t=this.dataCollection)=>this.db.collection(this.rootCollection).doc(e).collection(t).get(),this.getSettings=e=>this.db.collection(this.rootCollection).doc(e).collection(this.settingsCollection).doc(this.commonSettingsDoc).get(),this.updateSettings=(e,t)=>this.db.collection(this.rootCollection).doc(e).collection(this.settingsCollection).doc(this.commonSettingsDoc).set(t,{merge:!0}),r.a.initializeApp(u),this.auth=r.a.auth(),this.db=r.a.firestore(),this.rootCollection="data",this.dataCollection="movies-list",this.settingsCollection="settings",this.commonSettingsDoc="common"}};var m=new class{constructor(e){this.searchMovie=e=>fetch(`${this.baseUrl}&s=${e}`).then((e=>e.json())).then((e=>e)),this.getMovieInfo=e=>fetch(`${this.baseUrl}&i=${e}`).then((e=>e.json())).then((e=>e)),this.apiKey=e,this.baseUrl=`https://www.omdbapi.com/?apikey=${this.apiKey}`}}("c1b17339");const j="MyMoviesList",O=()=>{try{const e=localStorage.getItem(j);if(null===e)return;return JSON.parse(e)}catch(e){return}},b=e=>{try{const t=JSON.stringify(e);localStorage.setItem(j,t)}catch{}},h=()=>{localStorage.removeItem(j)},_=d;var p=s(31);function E(e,t,s="asc"){return[...e.sort(((e,a)=>{const n=e[t].toUpperCase(),i=a[t].toUpperCase();return n<i?"asc"===s?-1:1:n>i?"asc"===s?1:-1:0}))]}const C="ADD_ITEM",N="UPDATE_ITEM",x="REMOVE_ITEM",v="GET_ITEMS",g="SORT_MOVIES",T="SEARCH_MOVIE",f="GET_MOVIE_INFO",S="SIGN_IN",y="SIGN_OUT",I="GET_SETTINGS",A="UPDATE_SETTINGS",R="SHOW_NOTIFICATION",U="HIDE_NOTIFICATION",k="API_REQUEST_STARTED",L="API_REQUEST_ENDED",D="DB_REQUEST_STARTED",G="DB_REQUEST_ENDED",w="SHOW_MODAL",M="HIDE_MODAL",Y=[],H={data:{},isLoading:!1},P=[],V={uid:null,isLogged:!1},W={error:"",isLoading:!1},F={language:"en",theme:"light"},B={auth:{isVisible:!1,data:null},fav:{isVisible:!1,data:null}},$={type:"",message:""};var q=Object(o.c)({data:(e=Y,t)=>{const{type:s,payload:a}=t;switch(s){case C:return[...e,a];case N:return e.filter((e=>e.id===a.id)).length?e.map((e=>e.id===a.id?{...e,...a}:e)):[...e,a];case x:return e.filter((e=>e.id!==a));case v:return[...a];case g:switch(a){case"title-asc":return E(e,"Title","asc");case"title-dsc":return E(e,"Title","dsc");case"year-asc":return E(e,"Year","asc");case"year-dsc":return E(e,"Year","dsc");default:return e}case y:return[];default:return e}},movieInfo:(e=H,t)=>{const{type:s,payload:a}=t;switch(s){case f:return{...e,data:a};case k:return{...e,isLoading:!0};case L:return{...e,isLoading:!1};default:return e}},searchResults:(e=P,t)=>{const{type:s,payload:a}=t;switch(s){case T:return[...a];default:return e}},user:(e=V,t)=>{switch(t.type){case S:return{uid:t.payload.uid,email:t.payload.email,isLogged:!0};case y:return V;default:return e}},settings:(e=F,t)=>{const{type:s,payload:a}=t;switch(s){case I:case A:return{...e,...a};default:return e}},api:(e=W,t)=>{const{type:s}=t;switch(s){case k:return{...e,isLoading:!0};case L:return{...e,isLoading:!1};default:return e}},modals:(e=B,t)=>{const{type:s,payload:a}=t;switch(s){case w:return{...e,[a.modalName]:{isVisible:!0,data:a.data}};case M:return{...e,[a]:{isVisible:!1}};default:return e}},notifications:(e=$,t)=>{switch(t.type){case R:return{...e,type:t.payload.type,message:t.payload.message};case U:return $;default:return e}}});const Z=a.loadState(),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,z=Object(o.e)(q,Z,Q(Object(o.a)(p.a)));z.subscribe((()=>{const{data:e,user:t,settings:s}=z.getState();a.saveState({data:e,user:t,settings:s})}));var J=z;s(46);const K=e=>{const{onClick:t,extraClassName:s,type:a,btnType:i,size:c,text:l}=e,o=`ui-button ui-button--${i} ui-button--${c} ${s}`;return Object(n.jsx)("button",{type:a,className:o,onClick:t,children:l})};K.defaultProps={extraClassName:"",onClick:null,size:"normal",type:"button",btnType:"default",text:"Some Text"};s(47);s(48);const X=e=>{const{icon:t,onClick:s,extraClassName:a,title:i,type:c}=e,l=a?`ui-icon-button icon-${t} ${a}`:`ui-icon-button icon-${t}`;return Object(n.jsx)("button",{type:c,className:l,onClick:s,title:i,children:Object(n.jsx)("span",{className:"ui-icon-button__text",children:i})})};X.defaultProps={icon:"",extraClassName:"",title:"Click me",onClick:null,type:"button"};s(49);const ee=e=>{const{type:t,name:s,value:a,onChange:i,extraClassName:c,placeholder:l,required:o,autofocus:r}=e,u=c?`ui-input ${c}`:"ui-input";return Object(n.jsx)("input",{type:t,name:s,value:a,className:u,onChange:i,placeholder:l,required:o,autoFocus:r})};ee.defaultProps={extraClassName:"",onChange:null,value:"",type:"text",name:"ui-input",placeholder:"",required:!1,autofocus:!1};s(50);const te=e=>{const{value:t,onChange:s,options:a,extraClassName:i,title:c,required:l}=e,o=i?`ui-select ${i}`:"ui-select";return Object(n.jsx)("select",{onChange:s,value:t,required:l,className:o,title:c,children:a.map((e=>Object(n.jsx)("option",{value:e.value,disabled:e.disabled,className:"ui-select__option",children:e.label},e.value)))})};te.defaultProps={extraClassName:"",onChange:null,value:"",title:"Select me",options:[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"}],required:!1};var se=s(2),ae=s.n(se);s(51);const ne=e=>{const{extraClassName:t,labels:s,children:a,activeTab:i,onTabClick:c}=e,l=`ui-tabs ${t}`,[o,r]=Object(se.useState)(i);function u(e){r(s.indexOf(e.target.value)),c&&c()}function d(e){return e===o?"ui-tabs__item ui-tabs__item--active":"ui-tabs__item"}return Object(n.jsxs)("div",{className:l,children:[Object(n.jsx)("ol",{className:"ui-tabs__list",children:s.map(((e,t)=>Object(n.jsx)("li",{className:d(t),children:Object(n.jsx)("input",{className:"ui-tabs__btn",type:"button",onClick:u,value:e})},e)))}),Object(n.jsx)("div",{className:"ui-tabs__content",children:a.map(((e,t)=>t!==o?null:e))})]})};ne.defaultProps={extraClassName:"",activeTab:0,labels:[],children:null,onTabClick:null};var ie=s(23);const ce=e=>e.data,le=e=>e.user.isLogged,oe=e=>e.user.uid,re=e=>e.modals.auth.isVisible,ue=e=>e.modals.fav.isVisible,de=e=>e.settings.language,me=e=>e.settings.theme,je=e=>e.searchResults,Oe=e=>e.movieInfo,be=e=>e.notifications,he=(e,t)=>e.find((e=>e.imdbID===t)),_e=Object(ie.a)(ce,((e,t)=>t),he),pe=Object(ie.a)(je,((e,t)=>t),he),Ee=Object(ie.a)(ce,((e,t)=>t),((e,t)=>e.filter((e=>e.lists.includes(t))))),Ce=[{value:"en",label:"EN"},{value:"ua",label:"UA"},{value:"ru",label:"RU"}],Ne={en:{SIGN_IN:"Sign In",SIGN_UP:"Sign Up",SIGN_OUT:"Sign Out",SEARCH_MOVIE:"Search",SEARCH_MOVIE_PLACEHOLDER:"Enter movie title",AUTHENIFICATION:"Authenification",YOUR_EMAIL:"Your email",YOUR_PASSWORD:"Your password",CREATE_AN_ACCOUNT:"Create an Account",CONNECT_WITH:"or connect with",TOGGLE_THEME:"Change theme",TOGGLE_LANGUAGE:"Change language",MOVIE_INFO:"Movie info",HOME:"Home",FAVOURITES:"Favourites",WATCH_LATER:"Watch later",WATCHED:"Watched",GENRE:"Genre",CAST:"Cast",DIRECTOR:"Director",COUNTRY:"Country",DURATION:"Duration",RELEASE:"Release",RATING:"Rating",CLOSE:"Close",SORT_MOVIES:"Sort",SORT_BY_TITLE_A_Z:"Title A-Z",SORT_BY_TITLE_Z_A:"Title Z-A",SORT_BY_YEAR_ASC:"Year \u2191",SORT_BY_YEAR_DSC:"Year \u2193"},ua:{SIGN_IN:"\u0423\u0432\u0456\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c",SIGN_OUT:"\u0412\u0438\u0439\u0442\u0438",SEARCH_MOVIE:"\u0428\u0443\u043a\u0430\u0442\u0438",SEARCH_MOVIE_PLACEHOLDER:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0430",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0456\u0444\u0456\u043a\u0430\u0446\u0456\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441",CONNECT_WITH:"\u0430\u0431\u043e \u0443\u0432\u0456\u0439\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e",TOGGLE_THEME:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0442\u0435\u043c\u0443",TOGGLE_LANGUAGE:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u043c\u043e\u0432\u0443",MOVIE_INFO:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0444\u0456\u043b\u044c\u043c",HOME:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",FAVOURITES:"\u0423\u043b\u044e\u0431\u043b\u0435\u043d\u0435",WATCH_LATER:"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044c \u043f\u0456\u0437\u043d\u0456\u0448\u0435",WATCHED:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0435",GENRE:"\u0416\u0430\u043d\u0440",CAST:"\u0423 \u0440\u043e\u043b\u044f\u0445",DIRECTOR:"\u0420\u0435\u0436\u0438\u0441\u0435\u0440",COUNTRY:"\u041a\u0440\u0430\u0457\u043d\u0430",DURATION:"\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c",RELEASE:"\u0420\u0456\u043a",RATING:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",CLOSE:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",SORT_MOVIES:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438",SORT_BY_TITLE_A_Z:"\u041d\u0430\u0437\u0432\u0430 \u0410-\u042f",SORT_BY_TITLE_Z_A:"\u041d\u0430\u0437\u0432\u0430 \u042f-\u0410",SORT_BY_YEAR_ASC:"\u0420\u0456\u043a \u2191",SORT_BY_YEAR_DSC:"\u0420\u0456\u043a \u2193"},ru:{SIGN_IN:"\u0412\u043e\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",SIGN_OUT:"\u0412\u044b\u0439\u0442\u0438",SEARCH_MOVIE:"\u0418\u0441\u043a\u0430\u0442\u044c",SEARCH_MOVIE_PLACEHOLDER:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c",CONNECT_WITH:"\u0438\u043b\u0438 \u0432\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e",TOGGLE_THEME:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443",TOGGLE_LANGUAGE:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u044f\u0437\u044b\u043a",MOVIE_INFO:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0444\u0438\u043b\u044c\u043c\u0435",HOME:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",FAVOURITES:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",WATCH_LATER:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0437\u0436\u0435",WATCHED:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u043e\u0435",GENRE:"\u0416\u0430\u043d\u0440",CAST:"\u0412 \u0440\u043e\u043b\u044f\u0445",DIRECTOR:"\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440",COUNTRY:"\u0421\u0442\u0440\u0430\u043d\u0430",DURATION:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",RELEASE:"\u0413\u043e\u0434",RATING:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",CLOSE:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",SORT_MOVIES:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",SORT_BY_TITLE_A_Z:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0410-\u042f",SORT_BY_TITLE_Z_A:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u042f-\u0410",SORT_BY_YEAR_ASC:"\u0413\u043e\u0434 \u2191",SORT_BY_YEAR_DSC:"\u0413\u043e\u0434 \u2193"}},xe=Object(se.createContext)();xe.displayName="Localization";const ve=({children:e})=>{const t=Object(l.c)(de);return Object(n.jsx)(xe.Provider,{value:(s=t,Ne[s]),children:e});var s};s(52);const ge=({title:e,isVisible:t,onClose:s,children:a,extraClassName:c})=>{const l=Object(se.useContext)(xe),o=c?`ui-modal ${c}`:"ui-modal",r=document.getElementById("modal-root");var u,d;return u="Escape",d=s,Object(se.useEffect)((()=>{function e(e){e.key===u&&d()}return window.addEventListener("keyup",e),()=>{window.removeEventListener("keyup",e)}}),[]),t&&Object(i.createPortal)(Object(n.jsx)("div",{className:"ui-modal__backdrop",children:Object(n.jsxs)("div",{role:"dialog","aria-labelledby":"ui-modal-title","aria-modal":"true",className:o,children:[Object(n.jsxs)("div",{className:"ui-modal__header",children:[Object(n.jsx)("h4",{id:"ui-modal-title",className:"ui-modal__title",children:e}),Object(n.jsx)(X,{extraClassName:"ui-modal__btn-close",icon:"cancel",onClick:s,title:l.CLOSE})]}),Object(n.jsx)("div",{className:"ui-modal__content",children:a})]})}),r)};ge.defaultProps={title:"Modal title",isVisible:!1};s(53);s(54);const Te={error:"Error",warning:"Warning",success:"Succes"},fe=e=>{const{message:t,type:s,extraClassName:a,isVisible:c,onCloseClick:l,autoclose:o}=e,r=document.getElementById("modal-root");let u="ui-notification";s&&(u+=` ui-notification--${s}`),a&&(u+=` ${a}`);const d=o&&c?setTimeout((()=>l()),3e3):null;return c?Object(i.createPortal)(Object(n.jsxs)("div",{className:u,children:[Object(n.jsxs)("main",{className:"ui-notification__content",children:[Te[s]&&Object(n.jsx)("h4",{className:"ui-notification__title",children:Te[s]}),Object(n.jsx)("span",{className:"ui-notification__message",children:t})]}),Object(n.jsx)(X,{icon:"cancel",onClick:function(){clearTimeout(d),l()},title:"Close",extraClassName:"ui-notification__close-btn"})]}),r):null};fe.defaultProps={message:"Info message",type:"info",extraClassName:"",isVisible:!1,onCloseClick:null,autoclose:!0};s(55);class Se extends ae.a.Component{constructor(...e){super(...e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){const{errorInfo:e,error:t}=this.state;return e?Object(n.jsxs)("div",{className:"error-boundary",children:[Object(n.jsx)("h2",{className:"error-boundary__title",children:"Sorry. Something went wrong :("}),Object(n.jsx)("div",{className:"error-boundary__details",children:Object(n.jsxs)("p",{children:[t&&Object(n.jsx)("strong",{children:t.toString()}),Object(n.jsx)("br",{}),e.componentStack]})})]}):this.props.children}}var ye=s(15);s(56);const Ie=()=>{const e=Object(se.useContext)(xe),[t,s]=Object(se.useState)(!1);return Object(n.jsx)("nav",{className:t?"nav":"nav nav--collapsed",children:Object(n.jsxs)("div",{className:"nav__content",children:[Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{className:"nav-links__item",children:Object(n.jsx)(ye.c,{to:"/",exact:!0,className:"nav-links__link icon-home",title:e.HOME,children:e.HOME})}),Object(n.jsx)("li",{className:"nav-links__item",children:Object(n.jsx)(ye.c,{to:"favourites",className:"nav-links__link icon-heart",title:e.FAVOURITES,children:e.FAVOURITES})}),Object(n.jsx)("li",{className:"nav-links__item",children:Object(n.jsx)(ye.c,{to:"watched",className:"nav-links__link icon-history",title:e.WATCHED,children:e.WATCHED})}),Object(n.jsx)("li",{className:"nav-links__item",children:Object(n.jsx)(ye.c,{to:"watch-later",className:"nav-links__link icon-clock",title:e.WATCH_LATER,children:e.WATCH_LATER})})]}),Object(n.jsx)(X,{icon:t?"left-open":"right-open",onClick:function(){s(!t)},extraClassName:"nav__toggler"})]})})};s(60);const Ae=({children:e})=>Object(n.jsx)("main",{className:"main",children:Object(n.jsx)("div",{className:"main__content",children:e})});s(61);const Re=()=>Object(n.jsx)("header",{className:"header",children:Object(n.jsxs)("div",{className:"header__content",children:[Object(n.jsx)(ye.b,{to:"/",className:"header__logo",children:"MyMoviesList"}),Object(n.jsx)(Pe,{}),Object(n.jsxs)("div",{className:"header__menu",children:[Object(n.jsx)(Qe,{}),Object(n.jsx)(ze,{}),Object(n.jsx)(Je,{})]})]})});var Ue=s(7);function ke(e){return{type:R,payload:{type:"error",message:e}}}function Le(e){return{type:R,payload:{type:"error",message:e}}}function De(e){return{type:R,payload:{type:"error",message:e}}}function Ge(e){return{type:S,payload:{uid:e.user.uid,email:e.user.email}}}function we(e){return{type:R,payload:{type:"error",message:e}}}const Me=(e,t)=>s=>{e?(s({type:D}),_.updateSettings(e,t).then((()=>s({type:A,payload:t}))).catch((e=>s(we(e.message)))).finally((()=>s({type:G})))):s({type:A,payload:t})},Ye=e=>({type:w,payload:e}),He=e=>({type:M,payload:e});s(62);const Pe=ae.a.memo((()=>{const e=Object(se.useContext)(xe),t=Object(l.b)(),s=Object(Ue.d)(),[a,i]=Object(se.useState)(""),[c,o]=Object(se.useState)(!1);function r(e){a&&(e.preventDefault(),t((e=>t=>{t({type:k}),m.searchMovie(e).then((e=>{(null===e||void 0===e?void 0:e.Search)?t({type:T,payload:e.Search}):t(ke(e.Error))})).catch((e=>t(ke(e.message)))).finally((()=>t({type:L})))})(a)),s.push("/"))}function u(){o(!c)}return Object(n.jsxs)("div",{className:"search-movie-form-container"+(c?" visible":""),children:[Object(n.jsx)(X,{icon:"left-open",extraClassName:"search-movie-form__btn-hide",onClick:u}),Object(n.jsxs)("form",{className:"search-movie-form",onSubmit:r,children:[Object(n.jsx)(ee,{type:"search",value:a,onChange:function(e){i(e.target.value)},extraClassName:"search-movie-form__input",placeholder:e.SEARCH_MOVIE_PLACEHOLDER,required:!0}),Object(n.jsx)(X,{type:"submit",icon:"search",title:e.SEARCH_MOVIE,extraClassName:"search-movie-form__btn",onClick:r})]}),Object(n.jsx)(X,{icon:"search",extraClassName:"search-movie-form__btn-show",onClick:u})]})}));s(63);const Ve=()=>{const e=Object(se.useContext)(xe),t=Object(l.b)(),[s,a]=Object(se.useState)("none"),i=[{value:"none",label:"\u2014 \u2014 \u2014",disabled:!0},{value:"title-asc",label:e.SORT_BY_TITLE_A_Z},{value:"title-dsc",label:e.SORT_BY_TITLE_Z_A},{value:"year-asc",label:e.SORT_BY_YEAR_ASC},{value:"year-dsc",label:e.SORT_BY_YEAR_DSC}],c=Object(Ue.e)().pathname.slice(1),o=c?Object(l.c)((e=>Ee(e,c))):Object(l.c)(je);function r(e){t((e=>t=>{t({type:k}),m.getMovieInfo(e).then((e=>{t(e?{type:f,payload:e}:Le(e.Error))})).catch((e=>t(Le(e.message)))).finally((()=>t({type:L})))})(e)),t(Ye({modalName:"fav"}))}return Object(n.jsxs)("section",{className:"movie-list-container",children:[o.length>0&&c&&Object(n.jsx)(Be,{options:i,onChange:function(e){const s=e.target.value;t((e=>({type:g,payload:e}))(s)),a(s)},title:e.SORT_MOVIES,value:s}),Object(n.jsx)("ul",{className:"movie-list",children:o.map((e=>Object(n.jsx)(Fe,{data:e,onShowInfoClick:r},e.imdbID)))}),Object(n.jsx)(qe,{})]})};var We=s.p+"static/media/no-image.fa16a0f2.svg";s(64);const Fe=ae.a.memo((e=>{const{data:{Title:t,Poster:s,Year:a,imdbID:i},onShowInfoClick:c}=e,l="N/A"!==s?s:We;return Object(n.jsxs)("li",{id:i,className:"movie-list-item",children:[Object(n.jsx)(Ze,{id:i}),Object(n.jsx)("img",{src:l,alt:t,width:"320",height:"480",className:"movie-list-item__poster",onClick:function(){c(i)},loading:"lazy"}),Object(n.jsxs)("div",{className:"movie-list-item__details",children:[Object(n.jsx)("span",{className:"movie-list-item__title",children:t}),Object(n.jsx)("span",{className:"movie-list-item__year",children:a})]})]})}));s(65);const Be=e=>{const{onChange:t,value:s,options:a,title:i}=e;return Object(n.jsxs)("div",{className:"movie-list-sorter",children:[Object(n.jsx)("span",{className:"movie-list-sorter__label",children:i}),Object(n.jsx)(te,{options:a,onChange:t,value:s,title:i,extraClassName:"movie-list-sorter__select"})]})};Be.defaultProps={title:""};s(66);const $e=()=>Object(n.jsxs)("div",{className:"movie-modal-skeleton",children:[Object(n.jsx)("div",{className:"movie-modal-skeleton__poster skeleton"}),Object(n.jsxs)("div",{className:"movie-modal-skeleton__details",children:[Object(n.jsx)("div",{className:"movie-modal-skeleton__title skeleton"}),Object(n.jsx)("div",{className:"movie-modal-skeleton__plot skeleton"}),Object(n.jsx)("div",{className:"movie-modal-skeleton__info skeleton"})]})]});s(67);const qe=()=>{const e=Object(l.c)(ue),{isLoading:t,data:{Title:s,Year:a,Poster:i,Runtime:c,Genre:o,Director:r,Country:u,Plot:d,imdbRating:m,Actors:j,imdbID:O}}=Object(l.c)(Oe),b=Object(l.b)(),h=Object(se.useContext)(xe),_=i&&"N/A"!==i?i:We;return e?Object(n.jsx)(ge,{isVisible:e,onClose:function(){b(He("fav"))},title:h.MOVIE_INFO,extraClassName:"movie-modal",children:t?Object(n.jsx)($e,{}):Object(n.jsxs)("div",{className:"movie-modal__content",children:[Object(n.jsxs)("div",{className:"movie-modal__poster",children:[Object(n.jsx)("img",{src:_,alt:s,width:"240",height:"350",onError:function(e){e.target.onerror=null,e.target.src=We}}),Object(n.jsx)(Ze,{id:O})]}),Object(n.jsxs)("div",{className:"movie-modal__details",children:[Object(n.jsx)("h4",{className:"movie-modal__title",children:s}),Object(n.jsx)("p",{className:"movie-modal__plot",children:d}),Object(n.jsxs)("ul",{className:"movie-modal__info",children:[Object(n.jsxs)("li",{children:[Object(n.jsxs)("strong",{children:[h.GENRE,":"]}),o]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("strong",{children:[h.CAST,":"]}),j]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("strong",{children:[h.DIRECTOR,":"]}),r]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("strong",{children:[h.COUNTRY,":"]}),u]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("strong",{children:[h.DURATION,":"]}),c]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("strong",{children:[h.RELEASE,":"]}),a]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("strong",{children:[h.RATING,":"]}),m]})]})]})]})}):null};qe.defaultProps={STR:{MOVIE_INFO:"Movie info"}};s(68);const Ze=e=>{const{id:t}=e,s=Object(l.b)(),a=Object(l.c)(oe),i=Object(l.c)((e=>_e(e,t))),c=Object(l.c)((e=>pe(e,t))),o=Object(se.useContext)(xe),[r,u]=Object(se.useState)(!1),d=i||c;let m=(null===d||void 0===d?void 0:d.lists)?d.lists:[];function j(e){const n=e.target.value;m=m.includes(n)?m.filter((e=>e!==n)):[...m,n],m.length?s(((e,t)=>s=>{e?(s({type:D}),_.updateItem(e,t).then((()=>s({type:N,payload:t}))).catch((e=>s(ke(e.message)))).finally((()=>s({type:G})))):s({type:N,payload:t})})(a,{...d,id:t,lists:m})):s(((e,t)=>s=>{e?(s({type:D}),_.removeItem(e,t).then((()=>s({type:x,payload:t}))).catch((e=>s(ke(e.message)))).finally((()=>s({type:G})))):s({type:x,payload:t})})(a,t)),u(!r)}return Object(n.jsxs)("div",{className:"movie-menu",children:[Object(n.jsx)(X,{onClick:function(){u(!r)},icon:r?"cancel":"ellipsis-vert",extraClassName:"movie-menu__toggler"}),r&&Object(n.jsxs)("ul",{className:"movie-menu__items",children:[Object(n.jsx)("li",{className:"movie-menu__item",children:Object(n.jsxs)("label",{htmlFor:"watch-later",children:[Object(n.jsx)("input",{type:"checkbox",id:"watch-later",value:"watch-later",onChange:j,checked:m.includes("watch-later")}),o.WATCH_LATER]})}),Object(n.jsx)("li",{className:"movie-menu__item",children:Object(n.jsxs)("label",{htmlFor:"watched",children:[Object(n.jsx)("input",{type:"checkbox",id:"watched",value:"watched",onChange:j,checked:m.includes("watched")}),o.WATCHED]})}),Object(n.jsx)("li",{className:"movie-menu__item",children:Object(n.jsxs)("label",{htmlFor:"favourites",children:[Object(n.jsx)("input",{type:"checkbox",id:"favourites",value:"favourites",onChange:j,checked:m.includes("favourites")}),o.FAVOURITES]})})]})]})};s(69);const Qe=()=>{const e=Object(l.b)(),t=Object(se.useContext)(xe),s=Object(l.c)(de),a=Object(l.c)(oe);return Object(n.jsx)(te,{value:s,onChange:function(t){const s=t.target.value;e(Me(a,{language:s}))},options:Ce,extraClassName:"language-selector",title:t.TOGGLE_LANGUAGE})},ze=()=>{const e=Object(se.useContext)(xe),t=Object(l.b)(),s=Object(l.c)(me),a=Object(l.c)(oe),i="light"===s?"moon":"sun";return Object(n.jsx)(X,{icon:i,onClick:function(){t(Me(a,{theme:"light"===s?"dark":"light"}))},title:e.TOGGLE_THEME})},Je=()=>{const e=Object(se.useContext)(xe),t=Object(l.b)(),s=Object(l.c)(le);return Object(n.jsx)(X,{icon:s?"user":"user-o",title:s?e.SIGN_OUT:e.SIGN_IN,onClick:function(){t(s?e=>{e({type:D}),_.signOut().then((()=>e({type:y}))).then((()=>a.clearState())).catch((t=>e(De(t.message)))).finally((()=>e({type:G})))}:Ye({modalName:"auth",data:null}))}})};s(70);const Ke=e=>{const{onSubmit:t,onChange:s,data:{email:a,password:i},STR:c}=e;return Object(n.jsxs)("form",{onSubmit:t,className:"signin-form",children:[Object(n.jsx)(ee,{type:"email",name:"email",value:a,extraClassName:"signin-form__input",placeholder:c.YOUR_EMAIL,onChange:s,autofocus:!0,required:!0}),Object(n.jsx)(ee,{type:"password",name:"password",extraClassName:"signin-form__input",value:i,placeholder:c.YOUR_PASSWORD,onChange:s,required:!0}),Object(n.jsx)("div",{className:"signin-form__btns",children:Object(n.jsx)(K,{type:"submit",btnType:"primary",text:c.SIGN_IN,onClick:t})})]})};Ke.defaultProps={STR:{YOUR_EMAIL:"Your Email",YOUR_PASSWORD:"Your password",SIGN_IN:"Sign In"}};s(71);const Xe=e=>{const{onSubmit:t,onChange:s,data:{email:a,password:i},STR:c}=e;return Object(n.jsxs)("form",{onSubmit:t,className:"signup-form",children:[Object(n.jsx)(ee,{type:"email",name:"email",value:a,extraClassName:"signup-form__input",placeholder:c.YOUR_EMAIL,onChange:s,required:!0}),Object(n.jsx)(ee,{type:"password",name:"password",value:i,extraClassName:"signup-form__input",placeholder:c.YOUR_PASSWORD,onChange:s,required:!0}),Object(n.jsx)("div",{className:"signup-form__btns",children:Object(n.jsx)(K,{type:"submit",btnType:"primary",text:c.CREATE_AN_ACCOUNT,onClick:t})})]})};Xe.defaultProps={STR:{YOUR_EMAIL:"Your Email",YOUR_PASSWORD:"Your password",CREATE_AN_ACCOUNT:"Create an account"}};s(72);const et=e=>{const{onSignInWithGoogle:t,STR:s}=e;return Object(n.jsxs)("div",{className:"social-login",children:[Object(n.jsx)("div",{className:"social-login__label",children:s.CONNECT_WITH}),Object(n.jsx)("div",{className:"social-login__btns",children:Object(n.jsx)(X,{icon:"google",onClick:t,extraClassName:"social-login__btn"})})]})};et.defaultProps={STR:{CONNECT_WITH:"or connect with"}};s(73);const tt=()=>{const e=Object(se.useContext)(xe),t=Object(l.b)(),s=Object(l.c)(le),a=Object(l.c)(re),i={email:"",password:""},[c,o]=Object(se.useState)(i);function r(e){const{name:t,value:s}=e.target;o({...c,[t]:s})}return Object(se.useEffect)((()=>{s&&(o(i),t(He("auth")))}),[s]),a?Object(n.jsxs)(ge,{isVisible:a,onClose:function(){o(i),t(He("auth"))},title:e.AUTHENIFICATION,children:[Object(n.jsxs)(ne,{labels:[e.SIGN_IN,e.SIGN_UP],extraClassName:"auth-form__tabs",onTabClick:function(){o(i)},children:[Object(n.jsx)(Ke,{onSubmit:function(e){var s,a;c.email&&c.password&&(e.preventDefault(),t((s=c.email,a=c.password,e=>{e({type:D}),_.signInWithEmail(s,a).then((t=>e(Ge(t)))).catch((t=>e(De(t.message)))).finally((()=>e({type:G})))})))},onChange:r,data:c,STR:e}),Object(n.jsx)(Xe,{onSubmit:function(e){var s,a;c.email&&c.password&&(e.preventDefault(),t((s=c.email,a=c.password,e=>{e({type:D}),_.signUpWithEmail(s,a).then((t=>e(Ge(t)))).catch((t=>e(De(t.message)))).finally((()=>e({type:G})))})))},onChange:r,data:c,STR:e})]}),Object(n.jsx)(et,{onSignInWithGoogle:function(){t((e=>{e({type:D}),_.signInWithGoogle().then((t=>e(Ge(t)))).catch((t=>e(De(t.message)))).finally((()=>e({type:G})))}))},STR:e})]}):null},st=()=>{const e=Object(l.b)(),{message:t,type:s}=Object(l.c)(be),a=!!t;return Object(n.jsx)(fe,{isVisible:a,type:s,message:t,onCloseClick:function(){e({type:U})}})};s(74);const at=({children:e})=>Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(Re,{}),Object(n.jsx)(Ie,{}),Object(n.jsx)(Ae,{children:e})]});at.defaultProps={children:null};const nt=()=>Object(n.jsx)(at,{children:Object(n.jsx)(Ve,{})});var it=()=>{const e=Object(l.c)(oe),t=Object(l.c)(le),s=Object(l.c)(me);document.documentElement.setAttribute("data-theme",s);const a=Object(l.b)();return Object(se.useEffect)((()=>{t&&(a((e=>t=>{t({type:D}),_.getItems(e).then((e=>{const s=[];e.forEach((e=>s.push(e.data()))),t({type:v,payload:s})})).catch((e=>t(ke(e.message)))).finally((()=>t({type:G})))})(e)),a((e=>t=>{t({type:D}),_.getSettings(e).then((e=>{e.data()&&t({type:I,payload:e.data()})})).catch((e=>t(we(e.message)))).finally((()=>t({type:G})))})(e)))}),[t]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ye.a,{children:Object(n.jsx)(nt,{})}),Object(n.jsx)(tt,{}),Object(n.jsx)(st,{})]})};c.a.render(Object(n.jsx)(l.a,{store:J,children:Object(n.jsx)(Se,{children:Object(n.jsx)(ve,{children:Object(n.jsx)(it,{})})})}),document.getElementById("root"))}]),[[75,1,2]]]);
//# sourceMappingURL=main.bc34927c.chunk.js.map