import f from"node:fs";
let w,W,D,F,G,{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
function B(o,s){let q=[s],p=[];p[s]=-1;for(let x of q)for(let dd of D){let n=x+dd;if(W[n]||o.has(n)||p[n])continue;p[n]=x;q.push(n)}return p}
function W2(p,s,t){let r="",x=t;while(x!=s&&x!=null){r="udlr"[D.indexOf(x-p[x])]+r;x=p[x]}return r}
function S(b0,s){
 let a=new Int32Array(999).fill(99),q=G.map(x=>(a[x]=0,x));
 for(let x of q)for(let dd of D){let m=x+dd;if(F(m)&&a[m]>90){a[m]=a[x]+1;q.push(m)}}
 let H=b=>b.reduce((s,x)=>s+a[x],0);
 let N=[],M={},Bk=[],mn=0;
 N.push([b0,s,-1,0,0]);
 let f0=H(b0);Bk[f0]=[0];
 for(;;){
  while(!Bk[mn]?.length)if(++mn>999)return null;
  let ni=Bk[mn].pop(),[bx,pl,,,gg]=N[ni];
  if(!H(bx)){let r="",x=ni;while(x>0){r=N[x][3]+r;x=N[x][2]}return[r,pl]}
  let o=new Set(bx),p=B(o,pl);
  for(let u of bx){
   for(let dd of D){let be=u-dd,t=u+dd;
    if(!F(t)||o.has(t)||!p[be])continue;
    let nb=bx.map(v=>v^u?v:t);nb.sort();
    let wk=W2(p,pl,be);
    let ng=gg+1,ky=nb+"/"+u;
    if((M[ky]??1e9)<=ng)continue;
    M[ky]=ng;
    let nf=ng+H(nb);(Bk[nf]=Bk[nf]||[]).push(N.push([nb,u,ni,wk+"udlr"[D.indexOf(dd)],ng])-1);if(nf<mn)mn=nf;
   }
  }
 }
}
function L(t){
 let r=t.split("\n");w=r[0].length;D=[-w,w,-1,1];let h=r.length-1;W=new Uint8Array(w*h).fill(1);let Gl=[],b=[],p=-1;
 r.forEach((y,j)=>{for(let x=0;x<w;x++){let ch=y[x],i=j*w+x;if(ch!="#")W[i]=0;if(ch>="*"&&ch<=".")Gl.push(i);if("$*".includes(ch))b.push(i);if("@+".includes(ch))p=i}});
 let mv="",cp=p,cb=new Set(b);
 for(let dr of[7,9])for(let x=1;x<w-1;x++){
  if(W[dr*w+x])continue;
  let d=dr*w+x,fl=dr>8?h-7:1,s0=x-(x-1)%7,e2=8*w+x;
  let st=cb.has(e2)?e2-1:e2;
  F=c=>!W[c]&&(c==d||c==e2||c==st||(c/w|0)-fl>>>0<6&&c%w-s0>>>0<6);
  let rb=b.filter(F);G=Gl.filter(F);
  let wk=W2(B(cb,cp),cp,st);
  mv+=wk;cp=st;
  let sm=S(rb,st);
  rb.forEach(v=>cb.delete(v));G.forEach(v=>cb.add(v));
  cp=sm[1];mv+=sm[0];
 }
 return mv;
}
for(let k=0;++k<6;){
 let id="i00"+k,m=L(f.readFileSync(I+"/"+id+"/level.txt","utf8")),o=O+"/"+id;
 f.mkdirSync(o,{recursive:true});f.writeFileSync(o+"/solution.txt",m);
}