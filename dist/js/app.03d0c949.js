(function(t){function e(e){for(var c,n,s=e[0],a=e[1],u=e[2],p=0,l=[];p<s.length;p++)n=s[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&l.push(o[n][0]),o[n]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],c=!0,s=1;s<r.length;s++){var a=r[s];0!==o[a]&&(c=!1)}c&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var c={},o={app:0},i=[];function n(e){if(c[e])return c[e].exports;var r=c[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=c,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(r,c,function(e){return t[e]}.bind(null,c));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=a;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0b7b":function(t,e,r){"use strict";r("511a")},"126b":function(t,e,r){},"15b7":function(t,e,r){"use strict";r("b6ba")},"33e8":function(t,e,r){},"39a1":function(t,e,r){},"49c2":function(t,e,r){},"4c0e":function(t,e,r){"use strict";r("39a1")},"511a":function(t,e,r){},5309:function(t,e,r){"use strict";r("49c2")},5551:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("d3b7"),r("159b"),r("b0c0");var c=r("7a23");function o(t,e,r,o,i,n){var s=Object(c["A"])("router-view");return Object(c["t"])(),Object(c["f"])(s)}var i={},n=(r("15b7"),r("6b0d")),s=r.n(n);const a=s()(i,[["render",o]]);var u=a,d=function(t){return Object(c["w"])("data-v-2695fbe6"),t=t(),Object(c["u"])(),t},p=d((function(){return Object(c["i"])("option",{selected:""},"По умолчанию",-1)})),l=["value"];function b(t,e,r,o,i,n){return Object(c["t"])(),Object(c["h"])("select",{onChange:e[0]||(e[0]=function(){return n.handleOptionChange&&n.handleOptionChange.apply(n,arguments)})},[p,(Object(c["t"])(!0),Object(c["h"])(c["a"],null,Object(c["z"])(r.options,(function(t){return Object(c["t"])(),Object(c["h"])("option",{key:t.value,value:t.value},Object(c["D"])(t.name),9,l)})),128))],32)}var f={name:"custom-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}}},methods:{handleOptionChange:function(t){this.$emit("update:modelValue",t.target.value)}}};r("e55f");const m=s()(f,[["render",b],["__scopeId","data-v-2695fbe6"]]);var h=m,O=r("ad3d"),j=[O["a"],h],g={beforeMount:function(t,e){t.clickOutsideEvent=function(r){t===r.target||t.contains(r.target)||e.value()},document.addEventListener("click",t.clickOutsideEvent)},unmounted:function(t){document.removeEventListener("click",t.clickOutsideEvent)},name:"click-outside"},v=[g],x=r("6c02"),y={class:"main-page"},w={class:"main-page_content"},M={class:"main-page_content-header"};function _(t,e,r,o,i,n){var s=Object(c["A"])("font-awesome-icon"),a=Object(c["A"])("product-form"),u=Object(c["A"])("search-input"),d=Object(c["A"])("custom-select"),p=Object(c["A"])("product-list");return Object(c["t"])(),Object(c["h"])("div",y,[Object(c["i"])("div",{class:"main-page_open-form-icon",onClick:e[0]||(e[0]=function(){return n.openMobileForm&&n.openMobileForm.apply(n,arguments)})},[Object(c["j"])(s,{icon:"plus"})]),Object(c["j"])(a),Object(c["i"])("div",w,[Object(c["i"])("div",M,[Object(c["j"])(u),Object(c["j"])(d,{"model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,options:t.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),Object(c["j"])(p,{products:t.sortedAndSearchedProducts},null,8,["products"])])])}var S=r("5530"),A=(r("a4d3"),r("e01a"),function(t){return Object(c["w"])("data-v-6446766e"),t=t(),Object(c["u"])(),t}),P={class:"product-form_header"},H=A((function(){return Object(c["i"])("h3",null,"Добавление товара",-1)})),D={class:"product-form_close-icon"},G={class:"product-form_form-item"},C=["for"],B={key:0,class:"product-form_form-error"},I={class:"product-form_form-item"},k=["for"],q={class:"product-form_form-item"},V=["for"],F={key:0,class:"product-form_form-error"},Q={class:"product-form_form-item"},L=["for"],U={key:0,class:"product-form_form-error"},Y=A((function(){return Object(c["i"])("button",{class:"product-form_form-submit-button",type:"submit",value:""},"Добавить товар",-1)})),W={key:0,class:"product-form_success-message"};function E(t,e,r,o,i,n){var s=Object(c["A"])("font-awesome-icon"),a=Object(c["B"])("maska"),u=Object(c["B"])("click-outside");return Object(c["I"])((Object(c["t"])(),Object(c["h"])("div",{class:Object(c["p"])([t.isMobileFormOpened?"active":"","product-form"])},[Object(c["i"])("div",P,[H,Object(c["i"])("div",D,[Object(c["j"])(s,{icon:"times",onClick:n.closeMobileForm},null,8,["onClick"])])]),Object(c["i"])("form",{class:"product-form_form",onSubmit:e[7]||(e[7]=Object(c["J"])((function(){return n.submit&&n.submit.apply(n,arguments)}),["prevent"]))},[Object(c["i"])("p",G,[Object(c["i"])("label",{for:t.product.title},"Наименование товара",8,C),Object(c["I"])(Object(c["i"])("input",{class:Object(c["p"])([t.errors.title.length?"error":"","product-form_form-input"]),"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.product.title=e}),onInput:e[1]||(e[1]=function(){return n.validateTitle&&n.validateTitle.apply(n,arguments)}),type:"text",placeholder:"Введите наименование товара"},null,34),[[c["F"],t.product.title]]),t.errors.title?(Object(c["t"])(),Object(c["h"])("span",B,Object(c["D"])(t.errors.title[0]),1)):Object(c["g"])("",!0)]),Object(c["i"])("p",I,[Object(c["i"])("label",{for:t.product.description},"Описание товара",8,k),Object(c["I"])(Object(c["i"])("textarea",{class:"product-form_form-textarea","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.product.description=e}),placeholder:"Введите описание товара"},"\r\n        ",512),[[c["F"],t.product.description]])]),Object(c["i"])("p",q,[Object(c["i"])("label",{for:t.product.description},"Ссылка на изображение товара",8,V),Object(c["I"])(Object(c["i"])("input",{class:Object(c["p"])([t.errors.image.length?"error":"","product-form_form-input"]),"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.product.image=e}),onInput:e[4]||(e[4]=function(){return n.validateImage&&n.validateImage.apply(n,arguments)}),type:"text",placeholder:"Введите ссылку"},null,34),[[c["F"],t.product.image]]),t.errors.image?(Object(c["t"])(),Object(c["h"])("span",F,Object(c["D"])(t.errors.image[0]),1)):Object(c["g"])("",!0)]),Object(c["i"])("p",Q,[Object(c["i"])("label",{for:t.product.price},"Цена товара",8,L),Object(c["I"])(Object(c["i"])("input",{class:Object(c["p"])([t.errors.price.length?"error":"","product-form_form-input"]),"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.product.price=e}),onInput:e[6]||(e[6]=function(){return n.validatePrice&&n.validatePrice.apply(n,arguments)}),type:"text",placeholder:"Введите цену"},null,34),[[c["F"],t.product.price],[a,t.formattedInputPrice]]),t.errors.price?(Object(c["t"])(),Object(c["h"])("span",U,Object(c["D"])(t.errors.price[0]),1)):Object(c["g"])("",!0)]),Y,Object(c["j"])(c["b"],{name:"message"},{default:Object(c["H"])((function(){return[t.isProductCreated?(Object(c["t"])(),Object(c["h"])("div",W," Товар успешно добавлен в список ")):Object(c["g"])("",!0)]})),_:1})],32)],2)),[[u,n.onClickOutside]])}r("d81d"),r("b64b"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("00b4"),r("5319");var z=r("5502"),R=["#","##","###","# ###","## ###","### ###","# ### ###","## ### ###","### ### ###","# ### ### ###","## ### ### ###","### ### ### ###","# ### ### ### ###","## ### ### ### ###","### ### ### ### ###"],N=r("ecee"),T=r("c074");N["c"].add(T["c"]);var J={data:function(){return{formattedInputPrice:R,product:{title:null,description:null,image:null,price:null},errors:{title:[],image:[],price:[]}}},computed:Object(S["a"])({},Object(z["d"])({isMobileFormOpened:function(t){return t.products.isMobileFormOpened},isProductCreated:function(t){return t.products.isProductCreated}})),methods:Object(S["a"])(Object(S["a"])({},Object(z["c"])({createProduct:"products/createProduct",setIsMobileFormOpened:"products/setIsMobileFormOpened",setIsProductCreated:"products/setIsProductCreated"})),{},{onClickOutside:function(){var t=this;Object.keys(this.errors).map((function(e){return t.errors[e]=[]}))},closeMobileForm:function(){this.setIsMobileFormOpened(!1),document.body.style.overflow="auto"},validateTitle:function(t){var e=t.target.value;this.errors.title=[],this.product.title=e,e||this.errors.title.push("Поле является обязательным")},validateImage:function(t){var e=t.target.value;this.errors.image=[];var r=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");e||this.errors.image.push("Поле является обязательным"),r.test(e)||this.errors.image.push("Пожалуйста, добавьте ссылку")},validatePrice:function(t){var e=t.target.value;this.errors.price=[],e||this.errors.price.push("Поле является обязательным")},submit:function(){var t=this;this.product.title||this.errors.title.length||this.errors.title.push("Поле является обязательным"),this.product.image||this.errors.image.length||this.errors.image.push("Поле является обязательным"),this.product.price||this.errors.price.length||this.errors.price.push("Поле является обязательным"),this.product.title&&this.product.image&&this.product.price&&!this.errors.image.length&&(this.product.id=Date.now(),this.product.price=this.product.price.replace(/\s/g,""),this.createProduct(this.product),this.setIsProductCreated(!0),setTimeout((function(){t.setIsProductCreated(!1)}),3e3),this.product={title:null,description:null,image:null,price:null})}})};r("795a");const X=s()(J,[["render",E],["__scopeId","data-v-6446766e"]]);var Z=X,$={key:0,class:"product-list"},K={key:1};function tt(t,e,r,o,i,n){var s=Object(c["A"])("product-card");return Object(c["t"])(),Object(c["h"])(c["a"],null,[r.products.length>0?(Object(c["t"])(),Object(c["h"])("div",$,[Object(c["j"])(c["c"],{name:"product-list"},{default:Object(c["H"])((function(){return[(Object(c["t"])(!0),Object(c["h"])(c["a"],null,Object(c["z"])(r.products,(function(t){return Object(c["t"])(),Object(c["f"])(s,{key:t.id,product:t},null,8,["product"])})),128))]})),_:1})])):Object(c["g"])("",!0),0===r.products.length?(Object(c["t"])(),Object(c["h"])("h3",K," В списке больше нет товаров ")):Object(c["g"])("",!0)],64)}var et=["src","alt"],rt={class:"product-card_content"},ct={class:"product-card_title"},ot={class:"product-card_description"},it={class:"product-card_price"};function nt(t,e,r,o,i,n){var s=Object(c["A"])("font-awesome-icon");return Object(c["t"])(),Object(c["h"])("div",{class:"product-card",onClick:e[1]||(e[1]=function(e){return t.$router.push("/products/".concat(r.product.id))})},[Object(c["i"])("img",{class:"product-card_image",src:r.product.image,alt:r.product.title},null,8,et),Object(c["i"])("div",rt,[Object(c["i"])("div",ct,Object(c["D"])(r.product.title),1),Object(c["i"])("div",ot,Object(c["D"])(r.product.description),1),Object(c["i"])("div",it,Object(c["D"])(n.priceWithThousandthSpaces)+" руб.",1)]),Object(c["i"])("div",{class:"product-card_delete-icon",onClick:e[0]||(e[0]=Object(c["J"])((function(){return n.removeProduct&&n.removeProduct.apply(n,arguments)}),["stop"]))},[Object(c["j"])(s,{icon:["far","trash-alt"]})])])}var st=r("b702");N["c"].add(st["a"]);var at={props:{product:{type:Object,required:!0}},methods:Object(S["a"])(Object(S["a"])({},Object(z["c"])({deleteProduct:"products/deleteProduct"})),{},{removeProduct:function(){this.deleteProduct(this.product)}}),computed:{priceWithThousandthSpaces:function(){return this.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}};r("69b2");const ut=s()(at,[["render",nt],["__scopeId","data-v-7d5d13f1"]]);var dt=ut,pt={components:{ProductCard:dt},props:{products:{type:Array,required:!0}}};r("e65e");const lt=s()(pt,[["render",tt],["__scopeId","data-v-10396b76"]]);var bt=lt,ft={class:"search-input"};function mt(t,e,r,o,i,n){return Object(c["t"])(),Object(c["h"])("div",ft,[Object(c["i"])("input",{type:"text",onInput:e[0]||(e[0]=function(){return n.searchQueryVal&&n.searchQueryVal.apply(n,arguments)}),placeholder:"Поиск..."},null,32)])}var ht={methods:Object(S["a"])(Object(S["a"])({},Object(z["c"])({setSearchQuery:"products/setSearchQuery"})),{},{searchQueryVal:function(t){this.setSearchQuery(t.target.value)}}),computed:Object(S["a"])({},Object(z["d"])({searchQuery:function(t){return t.products.searchQuery}}))};r("4c0e");const Ot=s()(ht,[["render",mt],["__scopeId","data-v-870ee4f2"]]);var jt=Ot;N["c"].add(T["b"]);var gt={components:{ProductForm:Z,ProductList:bt,SearchInput:jt,CustomSelect:h},methods:Object(S["a"])(Object(S["a"])({},Object(z["c"])({setSelectedSort:"products/setSelectedSort",setIsMobileFormOpened:"products/setIsMobileFormOpened"})),{},{openMobileForm:function(){this.setIsMobileFormOpened(!0),document.body.style.overflow="hidden"}}),computed:Object(S["a"])(Object(S["a"])({},Object(z["d"])({selectedSort:function(t){return t.products.selectedSort},sortOptions:function(t){return t.products.sortOptions}})),Object(z["b"])({sortedAndSearchedProducts:"products/sortedAndSearchedProducts"}))};r("0b7b");const vt=s()(gt,[["render",_],["__scopeId","data-v-698efb22"]]);var xt=vt,yt={class:"product-page"},wt={class:"product-page_content"},Mt=["src","alt"],_t={class:"product-page_title"},St={class:"product-page_description"},At={class:"product-page_price"};function Pt(t,e,r,o,i,n){var s=Object(c["A"])("font-awesome-icon");return Object(c["t"])(),Object(c["h"])("div",yt,[Object(c["i"])("div",{class:"product-page_arrow-icon",onClick:e[0]||(e[0]=function(e){return t.$router.push("/")})},[Object(c["j"])(s,{icon:"arrow-left"})]),Object(c["i"])("div",wt,[Object(c["i"])("h3",null,"Страница товара с id: "+Object(c["D"])(t.$route.params.id),1),Object(c["i"])("img",{class:"product-page_image",src:n.product.image,alt:n.product.title},null,8,Mt),Object(c["i"])("div",_t,Object(c["D"])(n.product.title),1),Object(c["i"])("div",St,Object(c["D"])(n.product.description),1),Object(c["i"])("div",At,Object(c["D"])(n.priceWithThousandthSpaces)+" ₽",1)])])}var Ht=r("2909");r("4de4"),r("a9e3"),r("e9c4");N["c"].add(T["a"]);var Dt={computed:Object(S["a"])(Object(S["a"])({},Object(z["d"])({products:function(t){return t.products.products}})),{},{product:function(){var t=this,e=this.products.filter((function(e){return e.id===Number(t.$route.params.id)}));return JSON.parse(JSON.stringify.apply(JSON,Object(Ht["a"])(e)))},priceWithThousandthSpaces:function(){return this.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}})};r("5309");const Gt=s()(Dt,[["render",Pt],["__scopeId","data-v-0f9d7eea"]]);var Ct=Gt,Bt=[{path:"/",component:xt},{path:"/products/:id",component:Ct}],It=Object(x["a"])({routes:Bt,history:Object(x["b"])("/vue-test/")}),kt=(r("4e82"),r("caad"),r("2532"),[{id:1,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"Тайтл",description:"Описание товара тут. Описание товара тут",price:99900},{id:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi63L9dEcL_RfoX0GHY1MjtSORZDU76B4A8g&usqp=CAU",title:"Наименование товара 1",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1900},{id:3,image:"https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",title:"Наименование товара 2",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:12e3},{id:4,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/articles/2016/06/old-tv-shows-1488909967.jpg?crop=1xw:0.786xh;center,top&resize=1200:*",title:"Товар",description:"Описание товара тут. Описание товара тут",price:1e5},{id:5,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"Телефон",description:"абвгдабвгд",price:99},{id:6,image:"https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",title:"Название 1",description:"Описание товара тут. Описание товара тут",price:5900},{id:7,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi63L9dEcL_RfoX0GHY1MjtSORZDU76B4A8g&usqp=CAU",title:"ццццц",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",price:3e4},{id:8,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"ббфв",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",price:200},{id:9,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi63L9dEcL_RfoX0GHY1MjtSORZDU76B4A8g&usqp=CAU",title:"товар абвгд",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",price:6e4},{id:10,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк.",price:19e4},{id:11,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"Тайтл",description:"Описание товара тут. Описание товара тут",price:99900},{id:12,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi63L9dEcL_RfoX0GHY1MjtSORZDU76B4A8g&usqp=CAU",title:"Наименование товара 1",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1900},{id:13,image:"https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",title:"Наименование товара 2",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:12e3},{id:14,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/articles/2016/06/old-tv-shows-1488909967.jpg?crop=1xw:0.786xh;center,top&resize=1200:*",title:"Товар",description:"Описание товара тут. Описание товара тут",price:1e5},{id:15,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"Телефон",description:"абвгдабвгд",price:99},{id:16,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"аааввв",description:"Описание товара тут. Описание товара тут",price:5900},{id:17,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi63L9dEcL_RfoX0GHY1MjtSORZDU76B4A8g&usqp=CAU",title:"ццццц",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",price:3e4},{id:18,image:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",title:"ббфв",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",price:200},{id:19,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi63L9dEcL_RfoX0GHY1MjtSORZDU76B4A8g&usqp=CAU",title:"товар абвгд",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",price:6e4},{id:20,image:"https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",title:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк.",price:19e4}]),qt={state:function(){return{products:kt,searchQuery:"",selectedSort:"",isMobileFormOpened:!1,isProductCreated:!1,sortOptions:[{value:"title",name:"По названию"},{value:"descPrice",name:"Цена по убыванию"},{value:"ascPrice",name:"Цена по возрастанию"}]}},getters:{sortedProducts:function(t){switch(t.selectedSort){case"title":return Object(Ht["a"])(t.products).sort((function(e,r){var c;return null===(c=e[t.selectedSort])||void 0===c?void 0:c.localeCompare(r[t.selectedSort])}));case"descPrice":return Object(Ht["a"])(t.products).sort((function(t,e){return e.price-t.price}));case"ascPrice":return Object(Ht["a"])(t.products).sort((function(t,e){return t.price-e.price}));default:return t.products}},sortedAndSearchedProducts:function(t,e){return e.sortedProducts.filter((function(e){var r;return e.title.toLowerCase().includes(t.searchQuery.toLowerCase())||e.price.toString().includes(t.searchQuery.toString())||(null===(r=e.description)||void 0===r?void 0:r.toLowerCase().includes(t.searchQuery.toLowerCase()))}))}},mutations:{setIsMobileFormOpened:function(t,e){t.isMobileFormOpened=e},setIsProductCreated:function(t,e){t.isProductCreated=e},setSearchQuery:function(t,e){t.searchQuery=e},setSelectedSort:function(t,e){t.selectedSort=e},createProduct:function(t,e){t.products.unshift(e)},deleteProduct:function(t,e){t.products=t.products.filter((function(t){return t.id!==e.id}))}},actions:{},namespaced:!0},Vt=r("0e44"),Ft=Object(Vt["a"])({paths:["products.products"],key:"vue-test"}),Qt=Object(z["a"])({modules:{products:qt},plugins:[Ft]}),Lt=r("795b"),Ut=Object(c["e"])(u);j.forEach((function(t){Ut.component(t.name,t)})),v.forEach((function(t){Ut.directive(t.name,t)})),Ut.use(It).use(Qt).use(Lt["a"]).mount("#app")},"69b2":function(t,e,r){"use strict";r("5551")},"795a":function(t,e,r){"use strict";r("33e8")},b631:function(t,e,r){},b6ba:function(t,e,r){},e55f:function(t,e,r){"use strict";r("126b")},e65e:function(t,e,r){"use strict";r("b631")}});
//# sourceMappingURL=app.03d0c949.js.map