const tag = 'a,i,address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,span,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,table' + 'title,tr,track,nuxt-link,nuxt,img,template,svg,path' + 's,samp,small,span,strong,sub,sup,time,u,ul,p,ol,i' + 'button,datalist,input,label,meter,pre';

const makeMap = tag.split(',').reduce((result, item) => {
    result[item] = true;
    return result;
}, Object.create(null));

export default makeMap;
