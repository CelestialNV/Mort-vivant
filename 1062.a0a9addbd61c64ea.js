"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1062],{1062:(x,u,r)=>{r.r(u),r.d(u,{IndexPageModule:()=>v});var g=r(4755),p=r(5030),l=r(7002),d=r(2852),e=r(3020);function m(i,s){if(1&i){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Aide"),e.qZA(),e.TgZ(4,"ion-buttons",14)(5,"ion-button",15),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.setOpen(!1))}),e._uU(6,"Fermer"),e.qZA()()()(),e.TgZ(7,"ion-content",11)(8,"ion-card")(9,"ion-card-content")(10,"p"),e._uU(11," Vous devez deviner le nombre g\xe9n\xe9r\xe9 al\xe9atoirement. L'application vous dira si votre supposition a des chiffres pr\xe9sents dans le nombre mais que sa position est fausse, c'est-\xe0-dire vivant, et si vous avez des chiffres pr\xe9sents et que leur position est correcte dans le nombre, c'est-\xe0-dire mort. "),e.qZA()()()()}}const h=[{path:"",component:(()=>{class i{constructor(){this.number=this.Random(),this.answer=0,this.message="Taper votre r\xe9ponse",this.isModalOpen=!1}getValue(n){this.answer=n.target.value,console.log(this.answer)}onClickFunction(n){console.log(this.answer),console.log(this.number);let t=this.Decompose(this.answer);console.log(t);let o=this.HandleCase(this.Dead(this.number,t),this.Alive(this.number,t));this.message=o,console.log(o)}onReset(n){window.location.reload()}setOpen(n){this.isModalOpen=n}ngOnInit(){}Alive(n,t){let o=0;for(let a=0;a<4;a++)for(let c=0;c<4;c++)if(t.get(a)===n.get(c)){o+=1;break}return o}Dead(n,t){let o=0,a=0;for(a=0;a<4;a++)t.get(a)===n.get(a)&&(o+=1);return o}Decompose(n){let t,o=new Map;return t=Math.round(n/1e3),o.set(0,t),n-=1e3*t,t=Math.round(n/100),o.set(1,t),n-=100*t,t=Math.round(n/10),o.set(2,t),t=n-=10*t,o.set(3,t),o}HandleCase(n,t){return 4==n?"F\xe9licitations, vous avez r\xe9ussi \xe0 deviner le nombre":"Vous avez attrap\xe9 "+n+" mort et "+t+" vivant"}Random(){let n=new Map;const t=[0,1,2,3,4,5,6,7,8,9];let o=0,a=0;for(let c=0;c<4;c++)o=Math.floor(Math.random()*t.length),a=t[o],n.set(c,a),t.splice(o,1);return n}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-index"]],decls:24,vars:3,consts:[[3,"fullscreen"],[1,"flex-center"],[1,"layer"],["alt","Scrumy Robot","src","../../../assets/Cats.png"],["color","primary"],[1,"subtitle"],[1,"value"],["type","tel","maxlength","4","label","Value input","label-placement","floating","fill","outline","placeholder","Entrer votre nombre",3,"ionChange"],[1,"buttons"],["shape","round","color","success",3,"click"],["shape","round","color","warning",3,"click"],[1,"ion-padding"],["expand","block",3,"click"],[3,"isOpen"],["slot","end"],[3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-card")(3,"div",2),e._UZ(4,"img",3),e.TgZ(5,"ion-card-header")(6,"ion-card-title",4),e._uU(7,"Mort/Vivant"),e.qZA()(),e.TgZ(8,"ion-card-subtitle",5),e._uU(9,"Essayez de deviner le nombre"),e.qZA(),e.TgZ(10,"ion-card-content")(11,"div",6),e._uU(12),e.qZA(),e.TgZ(13,"ion-input",7),e.NdJ("ionChange",function(a){return t.getValue(a)}),e.qZA(),e.TgZ(14,"div",8)(15,"ion-button",9),e.NdJ("click",function(a){return t.onClickFunction(a)}),e._uU(16,"R\xe9pondre"),e.qZA(),e.TgZ(17,"ion-button",10),e.NdJ("click",function(a){return t.onReset(a)}),e._uU(18,"R\xe9initialiser"),e.qZA()()()()()()(),e.TgZ(19,"ion-content",11)(20,"ion-button",12),e.NdJ("click",function(){return t.setOpen(!0)}),e._uU(21,"Aide"),e.qZA(),e.TgZ(22,"ion-modal",13),e.YNc(23,m,12,0,"ng-template"),e.qZA()()),2&n&&(e.Q6J("fullscreen",!0),e.xp6(12),e.hij(" ",t.message," "),e.xp6(10),e.Q6J("isOpen",t.isModalOpen))},dependencies:[l.YG,l.Sm,l.PM,l.FN,l.Zi,l.tO,l.Dq,l.W2,l.Gu,l.pK,l.wd,l.sr,l.ki,l.j9],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}ionic-input[_ngcontent-%COMP%]{max-width:150px;text-align:center;margin:auto}.buttons[_ngcontent-%COMP%]{text-align:center;margin:24px}.value[_ngcontent-%COMP%]{margin:32px;text-align:center}ion-content[_ngcontent-%COMP%]{--background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 18%, rgba(0,212,255,1) 100%)}ion-card[_ngcontent-%COMP%]{--background: white}ion-card-title[_ngcontent-%COMP%]{text-align:center}ion-card-subtitle[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{max-height:300px;min-width:100%}ion-button[_ngcontent-%COMP%]{margin:24px}"]}),i})()}];let f=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(h),d.Bz]}),i})(),v=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,p.u5,l.Pc,f]}),i})()}}]);