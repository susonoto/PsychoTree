const categories=[
["All Tips","✦"],["Men","♂"],["Women","♀"],["Sigma Male","♛"],["Sigma Girl","♢"],["Boys & Girls","♧"],["Relationships","♡"],["Confidence","△"],["Motivation","♨"],["Social Skills","☷"],["Body Language","◉"],["Communication","☏"],["Emotional Intelligence","♧"],["Discipline","◎"],["Overthinking","☯"],["Boundaries","▣"],["Dating","♡"],["Friendship","♧"],["Introverts","☾"],["Extroverts","☀"],["Teenagers","✧"],["Students","▤"],["Leadership","♜"],["Persuasion","◇"],["Self Improvement","↗"],["Stress","≈"],["Mindfulness","❋"],["Resilience","⛰"],["Assertiveness","➤"],["Listening","耳"],["Empathy","♡"],["Family","⌂"],["Workplace","▥"],["Negotiation","⇄"],["Decision Making","⊞"],["Habits","⟳"],["Focus","⊙"],["Personal Growth","✦"],["Digital Wellbeing","▧"],["Creativity","✎"],["Learning","⌘"],["Sleep Routines","☾"],["Healthy Confidence","✦"],["Online Safety","⌑"],["Psychology Myths","⌁"],["Breakups","☂"],["Conflict","⚖"],["Money Mindset","◈"],["Anxiety Tools","≈"],["Self Awareness","◎"],["Respect","♥"],["Purpose","✧"],["New Habits","⟳"],["Emotional Boundaries","▣"],["Study Psychology","▤"],["Career Growth","↗"],["Personal Space","☁"],["Public Speaking","◉"],["Critical Thinking","⌘"],["Healthy Masculinity","♂"],["Healthy Femininity","♀"]];
const seeds=[
{title:"Confidence isn't about thinking you're better",body:"It's about not comparing yourself to others. Real confidence grows when you focus on your own progress instead of someone else's highlight reel.",try:"Choose one skill to practice for ten minutes today.",tags:["Confidence","Men","Women","Sigma Male","Sigma Girl","Healthy Confidence"]},
{title:"Healthy relationships aren't about finding the right person",body:"They're also about building the habits that make trust possible: honesty, curiosity, repair, respect, and room for both people to be themselves.",try:"Ask someone you care about what support would feel useful this week.",tags:["Relationships","Dating","Friendship","Men","Women"]},
{title:"You can't control everything, so stop trying to",body:"Your attention is valuable. Put it toward your choices, boundaries, and next steps instead of trying to manage every outcome or another person's reaction.",try:"Write down what is in your control and one thing you can release.",tags:["Overthinking","Stress","Mindfulness","Self Improvement"]},
{title:"Progress, not perfection",body:"Small, consistent steps compound. Don't wait for the perfect moment or a perfect plan before taking a useful first step.",try:"Make the next action so small you can begin in five minutes.",tags:["Personal Growth","Discipline","Motivation","Habits","Students"]},
{title:"Listen more, speak with intention",body:"Most people don't always need advice; sometimes they need to feel heard. Listening means staying curious rather than rehearsing your reply.",try:"Ask: “Would you like advice, help, or someone to listen?”",tags:["Communication","Listening","Empathy","Relationships"]},
{title:"Discipline is self-respect in action",body:"Discipline is not punishing yourself. It is making your environment and routines support what matters to you, even when motivation changes.",try:"Remove one distraction before starting your next task.",tags:["Discipline","Focus","Habits","Sigma Male","Sigma Girl"]},
{title:"A pause can change the conversation",body:"When emotions rise, a short pause can help you respond to the issue instead of reacting to the intensity. Return to the conversation when you are ready.",try:"Try: “I want to answer thoughtfully. Can we take five minutes?”",tags:["Emotional Intelligence","Conflict","Stress","Relationships"]},
{title:"A boundary is a clear statement, not a threat",body:"A healthy boundary describes what you can do and what you will do next. It cannot force someone else to agree, but it can make your limits clear.",try:"Try: “I can't talk during work, but I can call at six.”",tags:["Boundaries","Assertiveness","Women","Men","Family"]},
{title:"Body language isn't a mind-reading tool",body:"Eye contact, posture, and gestures differ across cultures, personalities, and situations. One cue cannot reliably prove attraction, confidence, or dishonesty.",try:"Ask a respectful question instead of guessing what a gesture means.",tags:["Body Language","Dating","Social Skills","Psychology Myths"]},
{title:"Being independent doesn't mean doing everything alone",body:"Self-reliance includes knowing when to ask for help, share responsibility, or learn from someone else. Healthy connection and independence can coexist.",try:"Ask for one specific bit of help you would otherwise struggle through alone.",tags:["Sigma Male","Sigma Girl","Men","Women","Healthy Confidence"]},
{title:"Ask a curious follow-up",body:"People often feel heard when you respond to what they said instead of planning your next reply. A thoughtful follow-up can open a better conversation.",try:"Ask: “What was the most important part of that for you?”",tags:["Social Skills","Communication","Friendship","Relationships"]},
{title:"Don't confuse a guess with a fact",body:"A delayed reply or a quiet mood can have many explanations. Notice the story your mind creates, then look for evidence before deciding what it means.",try:"Write down two explanations besides your first assumption.",tags:["Overthinking","Dating","Self Awareness","Emotional Intelligence"]},
{title:"Make your goal easier to start",body:"A goal becomes more actionable when you decide when and where it will happen. Pair a specific cue with a tiny behavior instead of relying only on motivation.",try:"Write: “After I ___, I will ___ for five minutes.”",tags:["Habits","Students","Focus","Motivation"]},
{title:"Be direct without being harsh",body:"Assertiveness combines clarity with respect. Describe the situation, explain its effect, and make a specific request without attacking someone's character.",try:"Use one calm sentence to say what you need and why.",tags:["Assertiveness","Workplace","Communication","Negotiation"]},
{title:"A mistake is an event, not your identity",body:"“I made a mistake” leaves room to repair and learn. “I'm a failure” turns one event into a sweeping judgment about who you are.",try:"Write one lesson and one repair step from a recent mistake.",tags:["Resilience","Self Awareness","Students","Personal Growth"]},
{title:"Make focus easier than distraction",body:"Attention is easier to protect when distractions are less available. Define what finished means for one session, and make the next step visible.",try:"Put your phone away and work for 15 minutes on one task.",tags:["Focus","Digital Wellbeing","Students","Workplace"]},
{title:"Respect beats mind games",body:"Trying to make someone jealous or anxious can damage trust. Healthy influence is transparent: explain what you want, listen, and leave room for a genuine no.",try:"Replace one indirect hint with a clear, respectful request.",tags:["Dating","Persuasion","Relationships","Sigma Male"]},
{title:"Curiosity beats instant judgment",body:"Unexpected behavior can have context you don't know. Curiosity means gathering information before making avoidable assumptions; it doesn't mean accepting harmful behavior.",try:"Ask one neutral question before deciding what happened.",tags:["Empathy","Conflict","Family","Workplace"]},
{title:"Confidence can be quiet",body:"You don't have to dominate a room to have presence. Keeping your word, knowing your values, and being able to admit uncertainty are also signs of confidence.",try:"State one opinion clearly without apologizing for having it.",tags:["Sigma Male","Sigma Girl","Confidence","Leadership"]},
{title:"Build a reset into your day",body:"Brief pauses can help you notice tension before it builds. Use them to check what you need, then choose a small action that fits the situation.",try:"Take three slow breaths and name your next useful action.",tags:["Stress","Mindfulness","Resilience","Anxiety Tools"]},
{title:"A good apology names the impact",body:"A useful apology acknowledges what happened, recognizes its effect, and says what will change. It is not a demand that the other person forgive you immediately.",try:"Try: “I did ___. I can see it affected you by ___. Next time I'll ___.”",tags:["Relationships","Conflict","Communication","Family"]},
{title:"Protect your energy, not your ego",body:"You can choose where to spend your time without needing to prove that you are superior. Boundaries are for wellbeing, not a way to punish people.",try:"Decline one nonessential commitment kindly and clearly.",tags:["Boundaries","Sigma Male","Sigma Girl","Self Improvement"]},
{title:"Make room for recovery",body:"Rest is part of sustainable effort. Short breaks, regular sleep routines, and realistic expectations can support attention and emotional regulation.",try:"Plan one short break before your next demanding task.",tags:["Sleep Routines","Stress","Focus","Students"]},
{title:"A disagreement can still be respectful",body:"Focus on the issue, describe your perspective, and stay open to information that might change your view. Understanding is not the same as surrendering your position.",try:"Summarize the other person's view before giving yours.",tags:["Conflict","Negotiation","Communication","Leadership"]}
];
const variations=[
"Try noticing the pattern for a week before drawing a conclusion.",
"Small actions tend to be more sustainable than dramatic promises.",
"Context matters: treat this as a prompt to reflect, not a universal rule.",
"Give yourself permission to experiment and adjust what doesn't work.",
"Consistency matters more than getting every attempt perfect.",
"Other people have their own perspectives; ask rather than assume.",
"Use this as a starting point, then adapt it to your situation.",
"Progress can be quiet and still be meaningful."
];
const icons=["✦","♡","◉","↗","♧","△","☾","♨","◇","◎"];
let selected="All Tips",query="",page=0,saved=new Set(JSON.parse(localStorage.getItem("psychotree-saved")||"[]")),liked=new Set(JSON.parse(localStorage.getItem("psychotree-liked")||"[]")),history=[],toastTimer=0;
const $=id=>document.getElementById(id);
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function makeTip(n,cat){
 const seed=seeds[(n*7+hash(cat))%seeds.length],variant=Math.floor(n/seeds.length),topic=cat==="All Tips"?(seed.tags[(n+hash(seed.title))%seed.tags.length]||"Self Improvement"):cat;
 let title=seed.title,body=seed.body;
 if(variant>0){const v=variations[(variant+hash(cat+seed.title))%variations.length];title += [""," — a daily practice"," — a fresh perspective"," — one small experiment"," — a better question"][variant%5];body+=" "+v;}
 return {id:`${cat}|${n}|${seed.title}`,title,body,try:seed.try,topic,icon:icons[hash(topic)%icons.length],minutes:variant%3===0?1:2,seed:seed.title};
}
function makeBatch(start,count){return Array.from({length:count},(_,i)=>makeTip(start+i,selected))}
function renderCategories(){
 const popular=categories.slice(0,8),items=categories.length>8&&window.showAllCategories?categories:popular;
 $("categoryGrid").innerHTML="";
 items.forEach(([name,icon])=>{const b=document.createElement("button");b.className="category-card"+(selected===name?" active":"");b.innerHTML=`<span class="cat-icon">${icon}</span><strong>${esc(name)}</strong>`;b.onclick=()=>chooseCategory(name);$("categoryGrid").appendChild(b)});
}
function chooseCategory(name){selected=name;query="";$("search").value="";page=0;renderCategories();$("tipsHeading").textContent=name==="All Tips"?"Latest Psychology Tips":name+" Tips";renderTips(true);toast(name+" selected");}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function card(t){
 const el=document.createElement("article");el.className="tip-card";const isSaved=saved.has(t.id),isLiked=liked.has(t.id);
 el.innerHTML=`<div class="tip-top"><span class="tip-tag"><span class="mini-icon">${esc(t.icon)}</span>${esc(t.topic)}</span><button class="bookmark ${isSaved?"saved":""}" title="${isSaved?"Remove saved tip":"Save tip"}" aria-label="Save tip">${isSaved?"▣":"♧"}</button></div><h3>${esc(t.title)}</h3><p>${esc(t.body)}</p><div class="try"><strong>Try this:</strong> ${esc(t.try)}</div><div class="tip-foot"><span>◷ ${t.minutes} min read</span><div class="tip-actions"><button class="tiny-action like">${isLiked?"♥":"♡"} ${isLiked?"Liked":"Like"}</button><button class="tiny-action share">↗ Share</button></div></div>`;
 el.querySelector(".bookmark").onclick=()=>{if(saved.has(t.id)){saved.delete(t.id);toast("Removed from saved tips")}else{saved.add(t.id);toast("Saved to your tree")}localStorage.setItem("psychotree-saved",JSON.stringify([...saved]));renderSaved();renderTips(true)};
 el.querySelector(".like").onclick=()=>{if(liked.has(t.id))liked.delete(t.id);else liked.add(t.id);localStorage.setItem("psychotree-liked",JSON.stringify([...liked]));renderTips(true)};
 el.querySelector(".share").onclick=async()=>{const text=t.title+"\n\n"+t.body+"\n\n— Psychotree";try{if(navigator.share)await navigator.share({title:t.title,text});else if(navigator.clipboard){await navigator.clipboard.writeText(text);toast("Tip copied to clipboard")}else toast(text)}catch(e){}};
 return el;
}
function matches(t){const text=[t.title,t.body,t.try,t.topic,t.seed].join(" ").toLowerCase();return(!query||text.includes(query.toLowerCase()))&&(selected==="All Tips"||t.topic===selected||t.seed.toLowerCase().includes(selected.toLowerCase())||t.title.toLowerCase().includes(selected.toLowerCase()))}
function renderTips(reset=false){
 if(reset){page=0;$("tipGrid").innerHTML=""}
 let pool=[];for(let i=0;i<5;i++)pool.push(...makeBatch(page*18+i*18,18));
 let list=pool.filter(matches);
 if(!list.length&&query){$("tipGrid").innerHTML='<div class="empty">No exact match in this batch. Try another phrase or category.</div>';return}
 const sort=$("sort").value;if(sort==="quick")list.sort((a,b)=>a.minutes-b.minutes);if(sort==="action")list.sort((a,b)=>a.try.localeCompare(b.try));if(sort==="newest")list.sort((a,b)=>hash(b.id)-hash(a.id));
 list.slice(0,18).forEach(t=>{$("tipGrid").appendChild(card(t));history.unshift(t.id)});
 $("feedNote").textContent=query?"Searching across generated tips and topic paths.":"New variations are generated as you browse. No account needed.";
 if(!list.length&&page===0)$("tipGrid").innerHTML='<div class="empty">No tips found in this category yet. Generate more or choose another category.</div>';
}
function renderSaved(){
 $("savedGrid").innerHTML="";
 const ids=[...saved].reverse();
 if(!ids.length){$("savedGrid").innerHTML='<div class="empty">Save a tip using its bookmark icon and it will appear here.</div>';return}
 ids.forEach((id,i)=>{const parts=id.split("|"),n=Number(parts[1])||i,cat=parts[0]||"All Tips";const t=makeTip(n,cat);t.id=id;$("savedGrid").appendChild(card(t))});
}
function renderTrending(){const names=[["Sigma Male","2.4k"],["Relationships","2.1k"],["Confidence","1.8k"],["Women","1.6k"],["Self Improvement","1.3k"],["Mental Health","1.1k"],["Motivation","980"],["Life Advice","860"]];$("trendingList").innerHTML="";names.forEach(([name,count],i)=>{const b=document.createElement("button");b.className="trending-item";b.innerHTML=`<span class="trend-icon">${icons[i%icons.length]}</span><span class="trend-name">${esc(name)}</span><span class="trend-count">${count}</span>`;b.onclick=()=>chooseCategory(categories.some(c=>c[0]===name)?name:"Self Improvement");$("trendingList").appendChild(b)})}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),1700)}
function randomTip(){const t=makeTip(Math.floor(Math.random()*10000),selected);$("tipGrid").prepend(card(t));$("tipGrid").firstElementChild.scrollIntoView({behavior:"smooth",block:"center"});toast("A fresh tip grew on your tree")}
function infiniteTip(){page++;renderTips(false);toast("Fresh psychology variations generated")}
$("search").addEventListener("input",e=>{query=e.target.value.trim();selected="All Tips";renderCategories();$("tipsHeading").textContent=query?"Search Results":"Latest Psychology Tips";renderTips(true)});
$("sort").addEventListener("change",()=>renderTips(true));$("moreBtn").onclick=infiniteTip;$("infiniteBtn").onclick=infiniteTip;$("heroGenerate").onclick=()=>{randomTip();$("tipsSection").scrollIntoView({behavior:"smooth"})};
$("randomBtn").onclick=randomTip;$("allCategories").onclick=()=>{window.showAllCategories=!window.showAllCategories;$("allCategories").textContent=window.showAllCategories?"Show Less ‹":"View All ›";renderCategories()};
function jumpSaved(){ $("savedSection").scrollIntoView({behavior:"smooth"}); }
$("savedButton").onclick=jumpSaved;$("savedJump").onclick=jumpSaved;$("favJump").onclick=()=>{const first=seeds[Math.floor(Math.random()*seeds.length)];query="";selected="All Tips";$("search").value="";renderCategories();renderTips(true);$("tipsHeading").textContent="Favorites & feel-good insights";toast("Like or save tips to keep them close");$("tipsSection").scrollIntoView({behavior:"smooth"})};
$("clearSaved").onclick=()=>{saved.clear();localStorage.removeItem("psychotree-saved");renderSaved();renderTips(true);toast("Saved tips cleared")};
$("themeBtn").onclick=()=>{document.body.classList.toggle("high-contrast");toast("Contrast updated")};
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>{document.querySelectorAll(".nav-item").forEach(x=>x.classList.remove("active"));b.classList.add("active");const nav=b.dataset.nav;if(nav==="Explore Categories")$("categoriesSection").scrollIntoView({behavior:"smooth"});else if(["Saved Tips","Favorites","History"].includes(nav))jumpSaved();else if(nav==="Daily Dose"){selected="All Tips";query="";$("search").value="";renderTips(true);toast("Your daily dose is ready");$("tipsSection").scrollIntoView({behavior:"smooth"})}else if(nav==="Top Rated"||nav==="Trending"){selected=nav==="Trending"?"Motivation":"Confidence";chooseCategory(selected)}else if(nav==="New Categories"){$("allCategories").click();$("categoriesSection").scrollIntoView({behavior:"smooth"})}});
document.addEventListener("keydown",e=>{if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();$("search").focus()}});
$("year").textContent=new Date().getFullYear();renderCategories();renderTips(true);renderSaved();renderTrending();
