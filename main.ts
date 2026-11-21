f=require('fs')
F=(u,o,c,e,f)=>{S[0]=b=u;s=1;e[u]=c;f&&(W[u]='');while(s){g=S[--s];g<b&&(b=g);for(x=4;x--;){j=g+D[x];if(t[j]!='#'&&!o[j]&&e[j]!=c){e[j]=c;f&&(W[j]=W[g]+'udlr'[x]);S[s++]=j}}}return b}
Y=(a,j)=>{for(b of a){k=((b%P)/7|0)*2+(b/P>8);(R[k]=R[k]||[[],[]])[j].push(b)}}
Z=(B,G)=>{Q=[[B,-1,U,'']];o={};o[F(U,O,++C,E,0)+','+B]=1;p=0;for(h=0;!p&&h<Q.length;h++){u=Q[h][0];for(a of u)O[a]=1;F(Q[h][2],O,++C,A,1);e=C;for(i in u){a=u[i];for(k=4;k--;){d=D[k];y=a+d;q=a-d;if(A[q]!=e||O[y]||!V[y])continue;O[a]=0;O[y]=1;z=W[q];T=u.slice();T[i]=y;T.sort((a,c)=>a-c);l=F(a,O,++C,E,0);N=l+','+T;O[y]=0;O[a]=1;if(o[N])continue;o[N]=1;Q.push([T,h,a,z+'UDLR'[k]]);if(T.every(b=>G.includes(b))){p=Q.length;break}}if(p)break}for(a of u)O[a]=0}if(!p)return'';m='';h=p-1;while(h>0){m=Q[h][3]+m;h=Q[h][1]}U=Q[p-1][2];return m}
for(n=1;n<6;n++){
t=f.readFileSync('/input/i00'+n+'/level.txt')+''
P=t.indexOf('\n')+1
D=[-P,P,-1,1]
O=[];V=[];A=[];E=[];W=[];S=[];C=0
G=[];X=[];U=0
i=0;for(c of t){if('.+*'.includes(c))G.push(i);if(c=='$'||c=='*')X.push(i);if(c=='@'||c=='+')U=i;i++}
q=[...G]
for(g of G)V[g]=1
for(i=0;i<q.length;i++){for(d of D){y=q[i]-d;if(t[y]!='#'&&t[y-d]!='#'&&!V[y]){V[y]=1;q.push(y)}}}
R=[]
Y(X,0);Y(G,1)
for(b of X)O[b]=1
M=''
v='/output/i00'+n
for(r of R){M+=Z(r[0],r[1]);for(g of r[1])O[g]=1}
f.mkdirSync(v,{recursive:true})
f.writeFileSync(v+'/solution.txt',M)
}
