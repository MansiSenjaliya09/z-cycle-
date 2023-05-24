(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[81856],{823493:(e,t,r)=>{var n=r(23279),o=r(513218);e.exports=function(e,t,r){var i=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,s="trailing"in r?!!r.trailing:s),n(e,t,{leading:i,maxWait:t,trailing:s})}},782677:(e,t,r)=>{function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){return!(!e||"function"!=typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function c(e,t,r){return Object.keys(e).reduce((function(t,n){var o=""+n;return t.has(o)?t.set(o,r(t.get(o),e[o])):t}),t)}r.d(t,{Fv:()=>x,cY:()=>A,fK:()=>I});var l=function(){function e(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var n=r,o=n.idAttribute,s=void 0===o?"id":o,c=n.mergeStrategy,l=void 0===c?function(e,t){return i({},e,t)}:c,d=n.processStrategy,u=void 0===d?function(e){return i({},e)}:d,h=n.fallbackStrategy,p=void 0===h?function(e,t){}:h;this._key=e,this._getId="function"==typeof s?s:function(e){return function(t){return a(t)?t.get(e):t[e]}}(s),this._idAttribute=s,this._mergeStrategy=l,this._processStrategy=u,this._fallbackStrategy=p,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce((function(t,r){var n,o=e[r];return i({},t,((n={})[r]=o,n))}),this.schema||{})},t.getId=function(e,t,r){return this._getId(e,t,r)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.fallback=function(e,t){return this._fallbackStrategy(e,t)},t.normalize=function(e,t,r,n,o,i){var s=this,a=this.getId(e,t,r),c=this.key;if(c in i||(i[c]={}),a in i[c]||(i[c][a]=[]),i[c][a].some((function(t){return t===e})))return a;i[c][a].push(e);var l=this._processStrategy(e,t,r);return Object.keys(this.schema).forEach((function(t){if(l.hasOwnProperty(t)&&"object"==typeof l[t]){var r=s.schema[t],a="function"==typeof r?r(e):r;l[t]=n(l[t],l,t,a,o,i)}})),o(this,l,e,t,r),a},t.denormalize=function(e,t){var r=this;return a(e)?c(this.schema,e,t):(Object.keys(this.schema).forEach((function(n){if(e.hasOwnProperty(n)){var o=r.schema[n];e[n]=t(e[n],o)}})),e)},o(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),d=function(){function e(e,t){t&&(this._schemaAttribute="string"==typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,r){return!this.isSingleSchema&&this._schemaAttribute(e,t,r)},t.inferSchema=function(e,t,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(e,t,r);return this.schema[n]},t.normalizeValue=function(e,t,r,n,o,i){var s=this.inferSchema(e,t,r);if(!s)return e;var a=n(e,t,r,s,o,i);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(e,t,r)}},t.denormalizeValue=function(e,t){var r=a(e)?e.get("schema"):e.schema;return this.isSingleSchema||r?t((this.isSingleSchema?void 0:a(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[r]):e},o(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),u=function(e){function t(t,r){if(!r)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,r)||this}s(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,o,i){return this.normalizeValue(e,t,r,n,o,i)},r.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(d),h=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,o,s){var a=this;return Object.keys(e).reduce((function(t,r,c){var l,d=e[r];return null!=d?i({},t,((l={})[r]=a.normalizeValue(d,e,r,n,o,s),l)):t}),{})},r.denormalize=function(e,t){var r=this;return Object.keys(e).reduce((function(n,o){var s,a=e[o];return i({},n,((s={})[o]=r.denormalizeValue(a,t),s))}),{})},t}(d),p=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},f=function(e){return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t]}))},_=function(e,t,r,n,o,i,s){return e=p(e),f(t).map((function(t,a){return o(t,r,n,e,i,s)}))},b=function(e,t,r){return e=p(e),t&&t.map?t.map((function(t){return r(t,e)})):t},m=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,o,i){var s=this;return f(e).map((function(e,a){return s.normalizeValue(e,t,r,n,o,i)})).filter((function(e){return null!=e}))},r.denormalize=function(e,t){var r=this;return e&&e.map?e.map((function(e){return r.denormalizeValue(e,t)})):e},t}(d),y=function(e,t,r,n,o,s,a){var c=i({},t);return Object.keys(e).forEach((function(r){var n=e[r],i="function"==typeof n?n(t):n,l=o(t[r],t,r,i,s,a);null==l?delete c[r]:c[r]=l})),c},g=function(e,t,r){if(a(t))return c(e,t,r);var n=i({},t);return Object.keys(e).forEach((function(t){null!=n[t]&&(n[t]=r(n[t],e[t]))})),n},v=function e(t,r,n,o,i,s){return"object"==typeof t&&t?"object"!=typeof o||o.normalize&&"function"==typeof o.normalize?o.normalize(t,r,n,e,i,s):(Array.isArray(o)?_:y)(o,t,r,n,e,i,s):t},I={Array:m,Entity:l,Object:function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce((function(t,r){var n,o=e[r];return i({},t,((n={})[r]=o,n))}),this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return y.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return g.apply(void 0,[this.schema].concat(t))},e}(),Union:u,Values:h},x=function(e,t){if(!e||"object"!=typeof e)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var r={},n=function(e){return function(t,r,n,o,i){var s=t.key,a=t.getId(n,o,i);s in e||(e[s]={});var c=e[s][a];e[s][a]=c?t.merge(c,r):r}}(r);return{entities:r,result:v(e,e,null,t,n,{})}},w=function(e){var t={},r=S(e);return function e(n,o){return"object"!=typeof o||o.denormalize&&"function"==typeof o.denormalize?null==n?n:o instanceof l?function(e,t,r,n,o){var s=n(e,t);if(void 0===s&&t instanceof l&&(s=t.fallback(e,t)),"object"!=typeof s||null===s)return s;if(o[t.key]||(o[t.key]={}),!o[t.key][e]){var c=a(s)?s:i({},s);o[t.key][e]=c,o[t.key][e]=t.denormalize(c,r)}return o[t.key][e]}(n,o,e,r,t):o.denormalize(n,e):(Array.isArray(o)?b:g)(o,n,e)}},S=function(e){var t=a(e);return function(r,n){var o=n.key;return"object"==typeof r?r:t?e.getIn([o,r.toString()]):e[o]&&e[o][r]}},A=function(e,t,r){if(void 0!==e)return w(r)(e,t)}},139176:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(667294),o=(r(470623),r(755742)),i=r(883119),s=r(898781),a=r(785893);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l extends n.Component{constructor(...e){super(...e),c(this,"setInputRef",(e=>{e&&(this._input=e)})),c(this,"handleKeyDown",(e=>{const{disabled:t,indexManager:r}=this.props;if(!t)switch(e.which){case o.Z.ENTER:case o.Z.NUMPAD_ENTER:e.preventDefault(),r.select();break;case o.Z.UP:e.preventDefault(),r.prev();break;case o.Z.DOWN:e.preventDefault(),r.next()}}))}componentDidMount(){this._input&&this._input.focus()}render(){const{onChange:e,value:t}=this.props;return(0,a.jsx)("div",{onKeyDown:this.handleKeyDown,role:"presentation",style:{width:"100%"},children:(0,a.jsx)(i.Um,{accessibilityLabel:"",id:"pickerSearchField",onChange:({value:t})=>e(t),placeholder:this.props.i18n._('Search', 'search bar placeholder text', 'search bar placeholder text'),ref:this.setInputRef,size:"lg",value:t})})}}const d=function(e){const t=(0,s.ZP)();return(0,a.jsx)(l,{...e,i18n:t})}},957119:(e,t,r)=>{r.d(t,{j:()=>i});const n={"á":"a","à":"a","â":"a","ä":"a","ã":"a","å":"a","æ":"a","ç":"c","é":"e","è":"e","ê":"e","ë":"e","í":"i","ì":"i","î":"i","ï":"i","ñ":"n","ó":"o","ò":"o","ô":"o","ö":"o","õ":"o","ø":"o","œ":"o","ß":"s","ú":"u","ù":"u","û":"u","ü":"u"},o=e=>{if(!e)return"";let t="";for(let r=0;r<e.length;r+=1)t+=n[e.charAt(r)]||e.charAt(r);return t},i=(e,t,r="name")=>{const n=t.toLowerCase();return e.filter((e=>((e,t)=>{const r=t.split(" "),n=e.split(" ");let i=0;for(let s=0;s<n.length;s+=1)(o(n[s]).includes(r[i])||n[s].includes(r[i]))&&(i+=1);return i===r.length})(e[r].toLowerCase(),n)))}},526524:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(667294),o=r(823493),i=r.n(o);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends n.PureComponent{constructor(...e){super(...e),s(this,"setContainerRef",(e=>{this.containerRef=e})),s(this,"fetchMoreIfNecessary",i()((()=>{const{fetchMore:e,scrollBuffer:t}=this.props;e&&this.containerRef&&(({scrollTop:e,clientHeight:t,scrollHeight:r},n)=>e+t+(n?n(t):2*t)>r)(this.containerRef,t)&&e()}),200))}componentDidMount(){setTimeout(this.fetchMoreIfNecessary)}componentDidUpdate(){this.fetchMoreIfNecessary()}render(){const{children:e}=this.props;return e({onScroll:this.fetchMoreIfNecessary,setRef:this.setContainerRef})}}},917311:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(693456),o=r(693797),i=r(883119),s=r(785893);const a=({collaborator_count:e,useLegoLayout:t,type:r})=>t?(0,s.jsx)(i.xu,{marginEnd:e?2:0,children:(0,s.jsx)(n.Z,{type:r})}):(0,s.jsx)(n.Z,{type:r}),c=({board:e,showCollaborativeIcon:t,showPrivateIcon:r,showProtectedIcon:c,showSectionsIcon:l,useLegoLayout:d})=>{var u;const h=(null==e||null===(u=e.collaborating_users)||void 0===u?void 0:u.length)||0;return t||r||c||l?(0,s.jsxs)(i.xu,{display:"flex",direction:"row",marginEnd:d?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[r&&(0,s.jsx)(a,{collaborator_count:h,useLegoLayout:d,type:"secret"}),c&&(0,s.jsx)(a,{collaborator_count:h,useLegoLayout:d,type:"protected"}),t&&(d?(0,s.jsx)(o.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,s.jsx)(n.Z,{type:"group"})),l&&(0,s.jsx)(n.Z,{type:"sections"})]}):null}},130053:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(883119),o=r(785893);const i=({image_url:e,naturalHeight:t,naturalWidth:r})=>(0,o.jsx)(n.xu,{"aria-hidden":"true",marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:(0,o.jsx)(n.zd,{wash:!0,width:48,height:48,rounding:2,children:(0,o.jsx)(n.Ee,{src:e,alt:"",naturalHeight:t,naturalWidth:r})})})},470623:(e,t,r)=>{r.d(t,{Z:()=>s});const n={row:0,section:0},o={row:-1,section:-1},i=()=>{};class s{constructor(e){this.index=Object.assign({},n),this.sections=e,this.updateCallback=i,this.selectItem=i}getIndex(){return this.index}isAtStart(){const{row:e,section:t}=this.index;return 0===e&&0===t}isAtEnd(){const{row:e,section:t}=this.index,r=this.sections[t]||[];return this.sections.length===t+1&&r.length===e+1}next(){if(this.isAtEnd())return;const{row:e,section:t}=this.index;e===o.row&&t===o.section?this.index=Object.assign({},n):this.sections[t].length>e+1?this.index.row+=1:(this.index.section+=1,this.index.row=0),this.updateCallback(!0)}prev(){if(this.isAtStart())return;const{row:e,section:t}=this.index;if(e===o.row&&t===o.section)this.index=Object.assign({},n);else if(e>0)this.index.row-=1;else{const e=this.index.section-1;this.index={section:e,row:this.sections[e].length-1}}this.updateCallback(!0)}select(){const{row:e,section:t}=this.index;this.selectItem((this.sections[t]||[])[e])}setInactive(){this.index=Object.assign({},o),this.updateCallback()}setSelectItem(e){this.selectItem=e}setUpdateCallback(e){this.updateCallback=e}updateIndex(e){this.index=e,this.updateCallback()}}},603174:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(667294),o=r(526524),i=(r(470623),r(883119)),s=r(785893);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class c extends n.Component{constructor(e){super(e),a(this,"setSelectedItemRef",(e=>{this.selectedItemRef=e})),a(this,"handleIndexUpdate",(e=>{const{indexManager:t}=this.props;this.setState({selectedIndex:t.getIndex(),selectionMovedByKeyboard:!!e})})),a(this,"handleSelectItem",(e=>()=>{const{disabled:t,onSelectItem:r}=this.props;t||r(e)})),a(this,"handleMouseEnter",(e=>()=>{const{disabled:t,indexManager:r}=this.props;t||r.updateIndex(e)})),a(this,"handleMouseLeave",(()=>{const{disabled:e,indexManager:t}=this.props;e||t.setInactive()})),a(this,"renderItems",((e,t)=>{const{renderItem:r}=this.props,{selectedIndex:n}=this.state,{row:o,section:a}=n||{},{customProps:c={},items:l,renderItem:d}=e,{isDisabled:u=(e=>!1)}=c,h=t===a,p=d||r;return p&&l.map(((e,r)=>{const n=u(e),a={section:t,row:r},l=h&&r===o;return(0,s.jsx)(i.xu,{"data-test-id":"board-selection",ref:!n&&l?this.setSelectedItemRef:null,children:n?p({item:e,hovered:l,sectionProps:c}):(0,s.jsx)(i.iP,{fullWidth:!1,onMouseEnter:this.handleMouseEnter(a),onMouseLeave:this.handleMouseLeave,onTap:this.handleSelectItem(e),rounding:2,children:p({item:e,hovered:l,sectionProps:c})})},r)}))})),a(this,"renderSections",(()=>{const{renderSectionHeader:e,sections:t}=this.props;return t.map(((t,r)=>(0,s.jsxs)(i.xu,{children:[e&&e(t,r),this.renderItems(t,r)]},r)))}));const{indexManager:t}=this.props;this.state={selectedIndex:t.getIndex(),selectionMovedByKeyboard:!1},t.setUpdateCallback(this.handleIndexUpdate)}componentDidUpdate(e){const{containerRef:t}=this;if(this.selectedItemRef&&this.state.selectionMovedByKeyboard&&t){const e=this.selectedItemRef;if(!(e instanceof HTMLElement))return;const r=e.getBoundingClientRect(),n=r.top,o=r.bottom,i=t.getBoundingClientRect(),s=i.top;o>=i.bottom?e.scrollIntoView(!1):n<=s&&e.scrollIntoView(!0)}e.indexManager!==this.props.indexManager&&this.props.indexManager.setUpdateCallback(this.handleIndexUpdate)}render(){const{grow:e=!1,maxHeight:t,fetchMore:r}=this.props;return(0,s.jsx)(o.Z,{fetchMore:r,children:({setRef:r,onScroll:n})=>(0,s.jsx)(i.xu,{flex:e?"grow":void 0,height:e?"100%":void 0,maxHeight:t,onScroll:n,overflow:"auto",ref:e=>{this.containerRef=e,r(e)},children:this.renderSections()})})}}},693797:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(189734),o=r.n(n),i=r(898781),s=r(19121),a=r(883119),c=r(349700),l=r(785893);function d(e){var t,r;const n=null!==(t=e.imageMediumUrl)&&void 0!==t?t:e.image_medium_url;return{name:null!==(r=e.fullName)&&void 0!==r?r:e.full_name,src:"https://s.pinimg.com/images/user/default_75.png"===n?void 0:n}}function u({board:e,forceViewer:t,isCompact:r,ownerOnly:n}){const u=(0,i.ZP)(),h=(0,s.Z)(),p=n?[d(e.owner)]:function(e,t,r){const{collaborated_by_me:n,collaborating_users:i=[],owner:s}=e,a=[s];if(n||r){const e=i.findIndex((e=>t.isAuth&&e.id===t.id));if(-1!==e){const t=i.splice(e,1)[0];a.push(t)}else a.push(t)}const c=o()(i,"full_name");return[...a,...c]}(e,h,t).map(d),f=p.slice(0,3).map((e=>e.name));let _="";switch(p.length){case 3:_=(0,c.Wc)(`${u._('{{ first }}, {{ second }}, and {{ last }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars', 'List of three usernames')}`,{first:`${f[0]}`,second:`${f[1]}`,last:`${f[2]}`});break;case 2:_=(0,c.Wc)(`${u._('{{ first }} and {{ second }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars', 'List of two usernames.')}`,{first:`${f[0]}`,second:`${f[1]}`});break;default:_=f.join(", ")}const b=p.length>3?(0,c.Wc)(`, ${u.ngettext('Collaborators: {{ userNames }} and {{ leftCount }} more.', 'Collaborators: {{ userNames }} and {{ leftCount }} more.', p.length - 3, 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree', 'Accessibility label that lists the names of collaborators and a final count of non-displayed avatars')}`,{userNames:_,leftCount:""+(p.length-3)}):(0,c.Wc)(`, ${u._('Collaborators: {{ userNames }}.', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree', 'Accessibility label that lists the names of collaborators')}`,{userNames:_});return(0,l.jsx)(a.HE,{accessibilityLabel:b,collaborators:p,size:r?"xs":"sm"})}},310204:(e,t,r)=>{function n(e,t,r){return{privacy_filter:t?"secret":"public",sort:r||"last_pinned_to",field_set_key:"profile_grid_item",username:e}}r.d(t,{Z:()=>n})},501817:(e,t,r)=>{r.d(t,{O:()=>a,Q:()=>c});var n=r(588028),o=r(280773),i=r(414327);const s=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],a={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:t,mixPublicSecret:r,username:n},o)=>({privacy_filter:"all",sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:n,page_size:25,group_by:r?"mix_public_private":"visibility",include_archived:!0,redux_normalize_feed:!0,...o?{orbac_subject_id:o}:Object.freeze({})})},c=e=>s.reduce(((t,r)=>{const s=[(0,o.Z)("profileBoards",(0,n.O)(e,r))];return[!0,!1].forEach((t=>{[!0,!1].forEach((n=>{s.push((0,i.jB)(a.name,a.options({username:e,boardOrder:r,mixPublicSecret:t,filterStories:n})))}))})),t.concat(s)}),[])},108391:(e,t,r)=>{r.d(t,{W:()=>d,Z:()=>u});var n=r(693456),o=r(917311),i=r(27255),s=r(130053),a=r(898781),c=r(883119),l=r(785893);function d(e,t=""){const r=e&&e.length>1?new RegExp(e,"i"):"";return e&&e.length>1?t.split(r).reduce(((r,n,o)=>{if(r.length>0&&e&&e.length){const i=t.toLowerCase().indexOf(e.toLowerCase());return r.concat((0,l.jsx)("em",{style:{borderBottom:"1px solid #333",fontStyle:"normal",paddingBottom:"1px"},children:t.substring(i,i+e.length)},o),n)}return[n]}),[]):t}const u=function(e){var t,r,u,h,p,f;const _=(0,a.ZP)(),{disabled:b,item:m,isSection:y,isSelectMode:g,isWithinSectionPicker:v,saveState:I,searchQuery:x,selected:w}=e,S=y?null:m,A=y?m:null,P=A&&A.title||S&&S.name||"";let j="",E=!1,k="",O=0;S&&({image_cover_url:j,is_collaborative:E,privacy:k,section_count:O=0}=S);const z=d(x,P),C=k===i.Z.BoardPrivacy.SECRET,R=!b&&(w||!!I),D=!v&&"number"==typeof O&&O>0,B="number"==typeof O&&O>0?"boardWithSection":"boardWithoutSection",Z=g?_._('Select', 'Board select button label', 'Board select button label'):_._('Save', 'Pin save button label', 'Pin save button label');return(0,l.jsxs)(c.xu,{alignItems:"center",color:R?"lightGray":"white",display:"flex",height:64,marginStart:2,marginEnd:2,marginTop:1,padding:2,rounding:3,"data-test-id":B,children:[S&&(0,l.jsx)(c.xu,{height:48,width:48,color:"lightGray",overflow:"hidden",rounding:2,marginEnd:2,flex:"none",children:j?(0,l.jsx)(c.Ee,{src:j,alt:P,fit:"cover",naturalWidth:1,naturalHeight:1}):(0,l.jsx)("span",{})}),A&&!(null===(t=A.preview_pins)||void 0===t||!t.length)&&(0,l.jsx)(s.Z,{image_url:null!==(r=A.preview_pins[0].image_square_url)&&void 0!==r?r:"",naturalHeight:null!==(u=null===(h=A.preview_pins[0].image_square_size_pixels)||void 0===h?void 0:h.height)&&void 0!==u?u:1,naturalWidth:null!==(p=null===(f=A.preview_pins[0].image_square_size_pixels)||void 0===f?void 0:f.width)&&void 0!==p?p:1}),(0,l.jsxs)(c.kC,{alignItems:"center",flex:"grow",justifyContent:"between",children:[(0,l.jsx)(c.xv,{color:b?"subtle":"default",size:"300",lineClamp:1,weight:"bold",children:z}),(D||!R)&&(0,l.jsxs)(c.kC,{alignItems:"center",justifyContent:"start",children:[C&&(0,l.jsx)(n.Z,{type:"secret"}),E&&(0,l.jsx)(o.Z,{board:S,showCollaborativeIcon:E,useLegoLayout:!0}),D&&(0,l.jsx)(n.Z,{type:"sections"})]}),!D&&R&&!I&&(0,l.jsx)(c.xu,{alignItems:"center",color:"red","data-test-id":"BoardPickerSaveButton",display:"flex",flex:"none",paddingX:3,paddingY:2,rounding:4,children:(0,l.jsx)(c.xv,{color:"inverse",overflow:"normal",size:"300",weight:"bold",children:Z})}),!D&&R&&"loading"===I&&(0,l.jsx)(c.xu,{dangerouslySetInlineStyle:{__style:{transform:"scale(0.7)"}},maxHeight:35,children:(0,l.jsx)(c.$j,{accessibilityLabel:_._('Saving', 'Accessibility label for saving a pin to a board', 'Accessibility label for saving a pin to a board'),show:!0})})]})]})}},693456:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(898781),o=r(883119),i=r(785893);const s=function({type:e}){const t=(0,n.ZP)(),r={group:{accessibilityLabel:t._('group board', 'Board picker group board icon', 'Board picker group board icon'),icon:"people"},protected:{accessibilityLabel:t._('protected board', 'Board picker protected board icon', 'Board picker protected board icon'),icon:"protect"},secret:{accessibilityLabel:t._('secret board', 'Board picker secret board icon', 'Board picker secret board icon'),icon:"lock"},sections:{accessibilityLabel:t._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:t._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-down"}}[e];return(0,i.jsx)(o.xu,{marginStart:1,children:(0,i.jsx)(o.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,i.jsx)(o.JO,{accessibilityLabel:r.accessibilityLabel,icon:r.icon,size:"12",color:"default"}):(0,i.jsx)(o.JO,{accessibilityLabel:r.accessibilityLabel,icon:r.icon,size:16,color:"default"})})})}},683190:(e,t,r)=>{r.d(t,{Fi:()=>m,K8:()=>u,Tq:()=>l,YV:()=>_,eo:()=>p,oL:()=>d,wN:()=>h,xH:()=>b,xk:()=>f});var n=r(280773),o=r(6637),i=r(203997),s=r(281615),a=r(379725),c=r(501817);function l(e,t){return(0,a.U2)("BoardResource",{options:{board_id:e,field_set_key:t}})}function d(e={},t,r){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:t},error:r}}function u(e){return t=>{e&&(0,c.Q)(e).forEach((e=>{t(e)}))}}function h(e,t){return r=>{const n=void 0===e.collaborator_requests_enabled||null===e.collaborator_requests_enabled?{}:{collaborator_requests_enabled:e.collaborator_requests_enabled},s={board_id:e.id,name:e.name,description:e.description,category:e.category,collaborator_permissions_setting:e.collaborator_permissions_setting,privacy:e.privacy,collab_board_email:e.collab_board_email,collaborator_invites_enabled:e.collaborator_invites_enabled,allow_homefeed_recommendations:e.allow_homefeed_recommendations,...t?{orbac_subject_id:t}:Object.freeze({}),...n};return r({type:"BOARD_UPDATE",payload:{boardUpdateOptions:s}}),o.ZP.create("BoardResource",s).callUpdate().then((t=>{const n=t&&t.resource_response&&t.resource_response.data||e;r((0,i.y)(n))}))}}function p(e){return{type:"BOARD_DELETE",payload:{boardId:e}}}function f(e){return t=>(t(function(e){return{type:"BOARD_ARCHIVED",payload:{boardId:e}}}(e)),o.ZP.create("BoardArchiveResource",{boardId:e}).callUpdate())}function _(e){return t=>(t(function(e){return{type:"BOARD_UNARCHIVED",payload:{boardId:e}}}(e)),o.ZP.create("BoardArchiveResource",{boardId:e}).callDelete())}function b(e,t){return r=>o.ZP.create("BoardsMergeResource",{source_board_id:e,target_board_id:t}).callUpdate().then((()=>Promise.all([r(p(e)),r(l(t,"pin_count")),r((0,n.Z)(s.DV.BOARD_SECTIONS,t))])))}function m(e){return{type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}}},280773:(e,t,r)=>{function n(e,t){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:t}}}r.d(t,{Z:()=>n})},843747:(e,t,r)=>{r.d(t,{Z:()=>_,S:()=>f});var n=r(417498),o=r(280773),i=r(820384),s=r(674578),a=r(6637),c=r(683190),l=r(281615),d=r(834849);const u=e=>t=>{d.Z.showError(function(e,t){switch(e.api_error_code){case 2171:case 2172:case 2173:return t._('Please wait until the previous board action finishes.', ' - ', ' -- ');default:return e.message}}(t,e))},h=e=>(0,o.Z)(e.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,e.sectionId||e.boardId);function p(e,t){const{source:r,target:o}=e;o.boardId!==r.boardId?(t((0,c.Tq)(r.boardId,"pin_count")),t((0,c.Tq)(o.boardId,"pin_count"))):r.sectionId&&o.sectionId||t((0,c.Tq)(o.boardId,"pin_count")),r.sectionId&&t((0,n.Z)(r.sectionId)),o.sectionId&&t((0,n.Z)(o.sectionId))}function f(e){return t=>{const{selectedPinIds:r,source:n,target:o}=e;t((0,s.Z)({feedId:n.sectionId||n.boardId,feedType:n.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:r,itemType:"pin"})),t((0,i.Z)({feedId:o.sectionId||o.boardId,feedType:o.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:r,itemType:"pin"})),p(e,t)}}function _(e,t){return r=>function(e,t,r){const{inverseSelection:n,selectedPinIds:o,source:c,target:d}=e;if(c.boardId===d.boardId&&(c.sectionId||null)===(d.sectionId||null))return Promise.reject();if(n){const e={board_id:c.boardId,new_board_id:d.boardId,old_section_id:c.sectionId||void 0,new_section_id:d.sectionId||void 0,pin_ids:o};return a.ZP.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then((()=>Promise.all([t(h(c)),t(h(d))]))).catch(u(r))}{const e=(e,r)=>{t((0,s.Z)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:o,itemType:"pin"})),t((0,i.Z)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:o,itemType:"pin"}))};e(c,d);const n=()=>e(d,c);if(d.boardId===c.boardId){if(d.sectionId){const e={section_id:d.sectionId,pins:o};return a.ZP.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch((e=>{n(),u(r)(e)}))}{const e={section_id:c.sectionId,pins:o};return a.ZP.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch((e=>{n(),u(r)(e)}))}}{const e={board_id:d.boardId,section_id:d.sectionId||void 0,pin_ids:o};return a.ZP.create("BulkEditResource",e).callUpdate({showError:!1}).catch((e=>{n(),u(r)(e)}))}}}(e,r,t).then((()=>p(e,r)))}},4392:(e,t,r)=>{r.d(t,{Z:()=>u,h:()=>d});var n=r(280773),o=r(820384),i=r(843747),s=r(6637),a=r(683190),c=r(281615),l=r(414327);function d(e,t){return{type:"SECTION_ADDED",payload:{boardId:e,section:t}}}function u({boardId:e,name:t,nameSource:r,pinImport:u,initialPinIds:h=[]},p,f){let _=0;"RECOMMENDATION"===r?_=1:"EDITED_RECOMMENDATION"===r&&(_=2);const b={board_id:e,initial_pins:u&&!u.all?u.pinIds:h,name:t,name_source:_,...f?{orbac_subject_id:f}:Object.freeze({})};return t=>s.ZP.create("BoardSectionResource",b).callCreate({showError:!1}).then((({resource_response:{data:r}})=>{t(d(e,r)),t((0,o.Z)({feedId:e,feedType:c.DV.BOARD_SECTIONS,itemIds:[r.id],itemType:"board_section"})),t((0,a.Tq)(e,"pin_count")),t((0,l.jB)("BoardSectionsRepinResource",{board_id:e}));const{all:s,pinIds:h}=u||{all:!1,pinIds:[]};return s?new Promise(((n,o)=>t((0,i.Z)({inverseSelection:!0,selectedPinIds:h,source:{boardId:e,sectionId:null},target:{boardId:e,sectionId:r.id}},p)).then((()=>n(r))).catch(o))):(h.length>0&&t((0,n.Z)(c.DV.BOARD_PINS,e)),r)}))}},417498:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(379725);function o(e,t){return r=>r((0,n.U2)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}},887831:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(667294);let o=null,i=!1,s=0;const a=()=>{o&&clearTimeout(o),i=!0,o=setTimeout((()=>{i=!1}),100)},c=()=>{const[e,t]=(0,n.useState)(!1),r=(0,n.useRef)(null);(0,n.useEffect)((()=>(0===s&&window.addEventListener("scroll",a),s+=1,()=>{r.current&&clearTimeout(r.current),s-=1,s||window.removeEventListener("scroll",a)})),[]);const o=e=>{r.current&&clearTimeout(r.current),r.current=e&&i?setTimeout((()=>o(!0)),100):setTimeout((()=>{t(e)}),32)};return{isHovering:e,hoverHandlers:(0,n.useRef)({onMouseOver:()=>o(!0),onMouseLeave:()=>o(!1)}).current}}},232843:(e,t,r)=>{r.d(t,{H:()=>o,W:()=>i});var n=r(425288);const{Provider:o,useMaybeHook:i}=(0,n.Z)("PinCreateDeleteContext")},756777:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(883119),o=r(785893);const i={__style:{margin:"0 10px",borderRight:"3px solid transparent",borderTop:"3px solid #fff",animation:"spin .8s linear infinite"}};function s(){return(0,o.jsx)(n.xu,{alignItems:"center",color:"red",display:"flex",height:"100%",justifyContent:"center",position:"absolute",width:"100%",rounding:8,children:(0,o.jsx)(n.xu,{dangerouslySetInlineStyle:i,display:"inlineBlock",height:18,position:"relative",rounding:"circle",width:18})})}function a({disabled:e,name:t,onClick:r,size:i,submitting:a,text:c}){return(0,o.jsxs)(n.xu,{display:"flex",position:"relative",children:[a&&(0,o.jsx)(s,{}),(0,o.jsx)(n.zx,{color:"red",disabled:e||a,name:t,onClick:r,size:i,type:"submit",text:c})]})}},223123:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(966338),o=r(6637),i=r(332611),s=r(886858),a=r(379725),c=r(414327),l=r(782677);function d(){const e=(0,n.useDispatch)(),t=(0,n.useSelector)((e=>e.resources));return async function({boardCreateOptions:r,deprecatedSchemaForNormalization:n}){var d,u;const h=await o.ZP.create("BoardResource",r).callCreate(),p=null===(d=h.resource_response)||void 0===d?void 0:d.data,f=n?(0,l.Fv)(p,n):void 0;e((0,c.XM)("BoardResource",r,h,f)),e((0,i.fO)({event_type:20})),null!==(u=p.owner)&&void 0!==u&&u.id&&e((0,a.bi)("UserResource",{options:{user_id:p.owner.id,field_set_key:"save_behavior"}}));const _=t.BoardsResource||{},b=t.BoardsFeedResource||{};return Object.keys(_).forEach((t=>{var r;(0,s.k)(t).username===(null===(r=p.owner)||void 0===r?void 0:r.username)&&e((0,c.jB)("BoardsResource",t))})),Object.keys(b).forEach((t=>{var r;(0,s.k)(t).username===(null===(r=p.owner)||void 0===r?void 0:r.username)&&e((0,c.jB)("BoardsFeedResource",t))})),p}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/81856-95f72be34dafab8c.mjs.map