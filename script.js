
function solution(p, q, r){
    const a =[0,1,3,-2,0,1,0,-3,2,3];
   

     hasil =(a[q]>a[r] ? pq=a[p]-a[q] : pq=a[p]+a[q] ) -
      (a[q]<a[r] ? pr=a[r]+a[q] : pr=a[r]-a[q]);
     console.log(pq,pr);

    return hasil;
}
console.log(solution(2,3,4));


