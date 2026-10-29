(function(){
  var code=document.getElementById('code'), out=document.getElementById('out');
  var java='<span class="k">public class</span> Pooja {\n'+
  '  String role   = <span class="s">"Software Developer"</span>;\n'+
  '  String degree = <span class="s">"MCA (pursuing)"</span>;\n'+
  '  String[] skills = {\n    <span class="s">"Java"</span>, <span class="s">"Python"</span>, <span class="s">"JavaScript"</span>,\n    <span class="s">"PHP"</span>, <span class="s">"Node.js"</span>\n  };\n\n'+
  '  <span class="k">boolean</span> openToWork() {\n    <span class="k">return true</span>;\n  }\n}';
  var py='<span class="k">class</span> Pooja:\n'+
  '    role   = <span class="s">"Software Developer"</span>\n'+
  '    degree = <span class="s">"MCA (pursuing)"</span>\n'+
  '    skills = [\n        <span class="s">"Java"</span>, <span class="s">"Python"</span>, <span class="s">"JavaScript"</span>,\n        <span class="s">"PHP"</span>, <span class="s">"Node.js"</span>,\n    ]\n\n'+
  '    <span class="k">def</span> open_to_work(self):\n        <span class="k">return True</span>';
  var tj=document.getElementById('t-java'), tp=document.getElementById('t-py');
  function show(l){
    var j=l==='java';
    code.innerHTML=j?java:py;
    tj.setAttribute('aria-selected',j); tp.setAttribute('aria-selected',!j);
    code.setAttribute('aria-labelledby',j?'t-java':'t-py');
    out.textContent=j?'true':'True';
  }
  tj.onclick=function(){show('java')}; tp.onclick=function(){show('py')};
  show('java');
  document.querySelectorAll('button.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.getAttribute('data-copy');
      function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1500)}
      try{navigator.clipboard.writeText(t).then(done,function(){sel(b)})}catch(e){sel(b)}
    });
  });
  function sel(b){
    var v=b.parentNode.querySelector('.v'),r=document.createRange();
    r.selectNodeContents(v);var s=getSelection();s.removeAllRanges();s.addRange(r);
    b.textContent='Selected';setTimeout(function(){b.textContent='Copy'},1500);
  }
})();
