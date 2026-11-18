const PHOTO = {
  bench:"https://images.unsplash.com/photo-1534368270820-9de3d8053204?auto=format&fit=crop&w=900&q=80",
  incline:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  chest:"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  cable:"Imagem/Tríceps pulley.jpg",
  CrossoverNaPolia: "Imagem/Tríceps pulley.jpg",
  back:"https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&w=900&q=80",
  row:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  curl:"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  squat:"https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80",
  legs:"https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80",
  shoulder:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  abs:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  glute:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
};

const workouts = [
 {day:"SEG",label:"Segunda",title:"Peito + Tríceps",subtitle:"Movimentos de empurrar: desenvolva peitoral e tríceps.",groups:["PEITO","TRÍCEPS"],items:[
  ["Supino reto","Peito",4,"8–12","90–120 s","bench","Deite no banco, mantenha os pés firmes no chão e segure a barra um pouco além da largura dos ombros. Desça controlando até próximo ao peito e empurre sem tirar os ombros do banco.","Mantenha as escápulas apoiadas e evite quicar a barra no peito."],
  ["Supino inclinado com halteres","Peito",3,"10–12","90 s","incline","Ajuste o banco entre 30° e 45°. Com os halteres alinhados ao peito, desça até uma amplitude confortável e empurre para cima.","Não deixe os halteres baterem no topo; controle a descida."],
  ["Crucifixo na máquina","Peito",3,"12–15","60–90 s","chest","Ajuste o banco para que os cotovelos fiquem na linha do peito. Feche os braços à frente e retorne lentamente.","Use carga moderada e mantenha uma leve flexão nos cotovelos."],
  ["Crossover na polia","Peito",3,"12–15","60 s","CrossoverNaPolia","Com uma perna à frente, segure as alças e traga as mãos em arco à frente do tronco. Retorne sem perder o controle.","Evite usar o impulso do corpo para fechar as mãos."],
  ["Crossover na polia","Peito",3,"12–15","60 s","cable","Com uma perna à frente, segure as alças e traga as mãos em arco à frente do tronco. Retorne sem perder o controle.","Evite usar o impulso do corpo para fechar as mãos."],
  ["Tríceps pulley","Tríceps",3,"10–12","60 s","cable","Com os cotovelos junto ao corpo, empurre a barra para baixo até estender os braços. Retorne sem movimentar os ombros.","Mantenha os cotovelos fixos ao lado do tronco."],
  ["Tríceps francês","Tríceps",3,"10–12","60 s","curl","Segure um halter acima da cabeça, flexione os cotovelos levando o peso atrás da cabeça e estenda novamente.","Não abra excessivamente os cotovelos; use carga controlável."],
  ["Tríceps corda","Tríceps",2,"12–15","60 s","cable","Empurre a corda para baixo e, no final, afaste levemente as pontas. Volte devagar até os cotovelos flexionarem.","Não balance o tronco para completar as repetições."]
 ]},
 {day:"TER",label:"Terça",title:"Costas + Bíceps",subtitle:"Puxadas e remadas para costas fortes e braços.",groups:["COSTAS","BÍCEPS"],items:[
  ["Puxada frontal","Costas",4,"8–12","90 s","back","Sente-se com as coxas apoiadas. Puxe a barra em direção à parte superior do peito, conduzindo os cotovelos para baixo, e retorne controlando.","Evite puxar a barra atrás da nuca ou inclinar demais o tronco."],
  ["Remada baixa","Costas",3,"10–12","90 s","row","Sente-se com a coluna neutra. Puxe o pegador em direção ao abdômen aproximando as escápulas e retorne sem arredondar as costas.","Não transforme a remada em balanço do tronco."],
  ["Remada unilateral com halter","Costas",3,"10–12 cada lado","60–90 s","row","Apoie uma mão e um joelho no banco. Puxe o halter em direção ao quadril e desça até alongar o braço.","Mantenha o tronco estável e evite girar o corpo."],
  ["Remada articulada","Costas",3,"10–12","90 s","back","Ajuste o banco e apoie o peito quando houver suporte. Puxe as alças até os cotovelos passarem levemente pelo tronco.","Priorize a contração das costas, sem encolher os ombros."],
  ["Rosca direta","Bíceps",3,"10–12","60 s","curl","Segure a barra com as palmas para frente. Flexione os cotovelos até aproximar a barra do peito e desça devagar.","Mantenha os cotovelos próximos ao corpo."],
  ["Rosca alternada","Bíceps",3,"10–12","60 s","curl","Com um halter em cada mão, flexione um braço de cada vez, girando a palma para cima durante a subida.","Evite jogar o ombro para frente ou balançar o tronco."],
  ["Rosca martelo","Bíceps",2,"12","60 s","curl","Segure os halteres com as palmas voltadas uma para a outra. Flexione os cotovelos e retorne lentamente.","Mantenha os punhos neutros durante todo o movimento."]
 ]},
 {day:"QUA",label:"Quarta",title:"Quadríceps + Panturrilhas",subtitle:"Ênfase na parte anterior das pernas e panturrilhas.",groups:["QUADRÍCEPS","PANTURRILHAS"],items:[
  ["Agachamento livre ou guiado","Quadríceps",3,"8–10","120 s","legs","Afaste os pés aproximadamente na largura dos ombros. Flexione quadris e joelhos, mantendo os pés apoiados, e suba empurrando o chão.","Use amplitude confortável e mantenha a coluna estável."],
  ["Leg press 45°","Quadríceps",3,"10–12","90–120 s","legs","Posicione os pés na plataforma. Desça até onde consiga manter o quadril apoiado no encosto e empurre sem travar os joelhos.","Não deixe a lombar arredondar no fundo do movimento."],
  ["Cadeira extensora","Quadríceps",3,"12–15","60 s","legs","Ajuste o eixo da máquina próximo ao joelho. Estenda as pernas e desça controlando o peso.","Evite dar impulso ou bater a carga no final."],
  ["Afundo com halteres","Quadríceps",2,"10 cada perna","90 s","legs","Dê um passo à frente e flexione os joelhos mantendo o tronco estável. Empurre o chão para voltar e alterne as pernas.","Comece sem peso se precisar desenvolver equilíbrio."],
  ["Panturrilha em pé","Panturrilhas",3,"12–15","60 s","legs","Apoie a parte da frente dos pés, desça os calcanhares com controle e suba o máximo confortável.","Faça uma pausa breve no alto e evite quicar."],
  ["Panturrilha sentada","Panturrilhas",3,"15–20","60 s","legs","Com os joelhos apoiados na máquina, abaixe os calcanhares e eleve-os até contrair as panturrilhas.","Use amplitude completa sem movimentos bruscos."]
 ]},
 {day:"QUI",label:"Quinta",title:"Ombros + Abdômen",subtitle:"Estabilidade, desenvolvimento dos ombros e fortalecimento do core.",groups:["OMBROS","ABDÔMEN"],items:[
  ["Desenvolvimento com halteres","Ombros",3,"8–12","90 s","shoulder","Sentado ou em pé, posicione os halteres na altura dos ombros. Empurre para cima e desça até a posição inicial.","Evite arquear excessivamente a lombar."],
  ["Elevação lateral","Ombros",3,"12–15","60 s","shoulder","Com halteres ao lado do corpo, eleve os braços lateralmente até próximo à altura dos ombros e desça devagar.","Use pouco peso e não balance o tronco."],
  ["Crucifixo inverso","Ombros",3,"12–15","60 s","shoulder","Na máquina ou inclinado com halteres, abra os braços para os lados levando as mãos para trás, sem encolher os ombros.","Concentre o movimento na parte posterior dos ombros."],
  ["Face pull na polia","Ombros",2,"12–15","60 s","cable","Com a corda na altura do rosto, puxe em direção à testa separando as mãos e mantendo os cotovelos elevados.","Use carga leve e controle a rotação dos ombros."],
  ["Abdominal na polia","Abdômen",3,"12–15","60 s","abs","Ajoelhe-se diante da polia, segure a corda e flexione o tronco aproximando as costelas da pelve.","O movimento vem do abdômen, não de puxar com os braços."],
  ["Elevação de pernas","Abdômen",3,"10–12","60 s","abs","Deitado, mantenha o abdômen contraído e eleve as pernas sem tirar a lombar do controle. Desça lentamente.","Dobre os joelhos para facilitar se necessário."],
  ["Prancha","Abdômen",3,"20–40 s","45–60 s","abs","Apoie antebraços e pontas dos pés. Mantenha o corpo alinhado e contraia abdômen e glúteos.","Pare antes de perder o alinhamento da lombar."]
 ]},
 {day:"SEX",label:"Sexta",title:"Posterior de coxa + Glúteos",subtitle:"Cadeia posterior, força de quadril e estabilidade.",groups:["POSTERIOR","GLÚTEOS"],items:[
  ["Mesa flexora","Posterior de coxa",3,"10–12","60–90 s","legs","Deite na máquina com o eixo alinhado ao joelho. Flexione os joelhos levando o apoio em direção aos glúteos e retorne devagar.","Evite tirar o quadril do banco."],
  ["Stiff com halteres","Posterior de coxa",3,"10–12","90 s","glute","Segure os halteres à frente das coxas. Leve o quadril para trás com joelhos levemente flexionados e desça mantendo a coluna neutra.","Desça até sentir alongar a parte posterior sem arredondar as costas."],
  ["Cadeira flexora","Posterior de coxa",2,"12–15","60 s","legs","Ajuste os apoios e flexione os joelhos contra a resistência. Retorne lentamente.","Não deixe a carga despencar na volta."],
  ["Elevação pélvica","Glúteos",3,"8–12","90 s","glute","Apoie a parte superior das costas no banco, pés firmes no chão. Eleve o quadril até alinhar tronco e coxas e desça controlando.","Finalize contraindo os glúteos, sem hiperestender a lombar."],
  ["Cadeira abdutora","Glúteos",3,"12–15","60 s","glute","Sente-se com as pernas apoiadas e abra os joelhos contra a resistência. Retorne devagar.","Evite usar impulso e mantenha o tronco estável."],
  ["Coice na polia","Glúteos",2,"12 cada perna","60 s","glute","Com o tornozelo preso à polia, leve a perna para trás sem girar o quadril e retorne lentamente.","Use amplitude controlada, sem arquear a lombar."]
 ]}
];

const $ = (s, root=document) => root.querySelector(s);
const dayTabs=$("#dayTabs"), overview=$("#workoutOverview"), grid=$("#exerciseGrid");
let activeDay=0, currentExercise=null;
let doneState={};try{doneState=JSON.parse(localStorage.getItem("forgeDone")||"{}")||{}}catch{doneState={}}
const keyFor=(day,index)=>`${day}-${index}`;
function renderTabs(){
 dayTabs.innerHTML=workouts.map((w,i)=>`<button class="day-tab ${i===activeDay?"active":""}" role="tab" aria-selected="${i===activeDay}" data-day="${i}"><span>${w.day}</span><b>${w.label}</b></button>`).join("");
 dayTabs.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{activeDay=Number(btn.dataset.day);$("#exerciseSearch").value="";renderAll()}));
}
function renderOverview(){
 const w=workouts[activeDay];
 overview.innerHTML=`<div><h3>${w.title}</h3><p>${w.subtitle}</p></div><div class="muscle-tags">${w.groups.map(g=>`<span class="tag">${g}</span>`).join("")}</div>`;
 $("#exerciseHeading").textContent=w.title;
}
function renderExercises(){
 const w=workouts[activeDay], q=$("#exerciseSearch").value.trim().toLocaleLowerCase("pt-BR");
 const filtered=w.items.map((item,i)=>({item,i})).filter(x=>x.item[0].toLocaleLowerCase("pt-BR").includes(q)||x.item[1].toLocaleLowerCase("pt-BR").includes(q));
 grid.innerHTML=filtered.map(({item,i})=>{
  const done=!!doneState[keyFor(activeDay,i)];
  const photo=PHOTO[item[5]]||PHOTO.legs;
  return `<article class="exercise-card ${done?"completed":""}">
   <div class="exercise-photo" role="img" aria-label="Foto ilustrativa de treino: ${item[0]}" style="background-image:url('${photo}')" data-open="${i}"><span class="photo-label">${item[1].toUpperCase()}</span></div>
   <div class="exercise-body"><h4>${item[0]}</h4><div class="exercise-meta"><span>${item[2]} séries</span><span>${item[3]} reps</span><span>${item[4]}</span></div>
    <div class="card-actions"><button class="details-button" type="button" data-open="${i}">Ver execução ↗</button><label class="check-label"><input type="checkbox" data-check="${i}" ${done?"checked":""}> Feito</label></div>
   </div></article>`;
 }).join("");
 $("#emptyState").hidden=filtered.length>0;
 grid.querySelectorAll("[data-open]").forEach(el=>el.addEventListener("click",()=>openModal(Number(el.dataset.open))));
 grid.querySelectorAll("[data-check]").forEach(el=>el.addEventListener("change",()=>{doneState[keyFor(activeDay,Number(el.dataset.check))]=el.checked;saveDone();renderExercises();updateProgress()}));
 updateProgress();
}
function updateProgress(){
 const total=workouts[activeDay].items.length;
 const count=workouts[activeDay].items.filter((_,i)=>doneState[keyFor(activeDay,i)]).length;
 const pct=Math.round(count/total*100);
 $("#progressLabel").textContent=`${count} de ${total} exercícios concluídos`;
 $("#progressPercent").textContent=`${pct}%`;
 $("#progressBar").style.width=`${pct}%`;
}
function saveDone(){localStorage.setItem("forgeDone",JSON.stringify(doneState))}
function renderAll(){renderTabs();renderOverview();renderExercises()}
function openModal(index){
 const item=workouts[activeDay].items[index];currentExercise=index;
 $("#modalPhoto").style.backgroundImage=`url('${PHOTO[item[5]]||PHOTO.legs}')`;
 $("#modalGroup").textContent=item[1].toUpperCase();
 $("#modalTitle").textContent=item[0];
 $("#modalMetrics").innerHTML=[`${item[2]} séries`,`${item[3]} repetições`,`Descanso: ${item[4]}`].map(x=>`<span>${x}</span>`).join("");
$("#modalDescription").textContent=item[6];$("#modalTip").textContent=item[7];
if($("#modalCare"))$("#modalCare").textContent="Use carga controlável e amplitude confortável. Interrompa o exercício se houver dor aguda, tontura ou mal-estar; retome somente quando estiver bem.";
 $("#modalDone").textContent=doneState[keyFor(activeDay,index)]?"Concluído ✓":"Marcar como concluído ✓";
 $("#exerciseModal").classList.add("open");$("#exerciseModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){$("#exerciseModal").classList.remove("open");$("#exerciseModal").setAttribute("aria-hidden","true");document.body.style.overflow=""}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2600)}
$("#exerciseSearch").addEventListener("input",renderExercises);
$("#resetDay").addEventListener("click",()=>{workouts[activeDay].items.forEach((_,i)=>delete doneState[keyFor(activeDay,i)]);saveDone();renderExercises();toast("Progresso deste treino reiniciado.")});
$("#finishDay").addEventListener("click",()=>{const total=workouts[activeDay].items.length;const count=workouts[activeDay].items.filter((_,i)=>doneState[keyFor(activeDay,i)]).length;if(count===total){saveActivity({sport:"strength",date:today(),title:workouts[activeDay].title,minutes:60,day:activeDay});toast("Sessão concluída e registrada.")}else toast("Você concluiu "+count+" de "+total+". Continue no seu ritmo!")});
$("#modalClose").addEventListener("click",closeModal);
$("#exerciseModal").addEventListener("click",e=>{if(e.target===$("#exerciseModal"))closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$("#modalDone").addEventListener("click",()=>{if(currentExercise===null)return;doneState[keyFor(activeDay,currentExercise)]=true;saveDone();renderExercises();closeModal();toast("Exercício marcado como concluído.")});
$("#themeToggle").addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("forgeTheme",document.body.classList.contains("light")?"light":"dark")});
if(localStorage.getItem("forgeTheme")==="light")document.body.classList.add("light");
renderAll();

const ACTIVITY_KEY="forgeActivities";
function today(){return new Date().toISOString().slice(0,10)}
function readActivities(){try{return JSON.parse(localStorage.getItem(ACTIVITY_KEY)||"[]")}catch(e){return []}}
let activities=readActivities();
function persist(){localStorage.setItem(ACTIVITY_KEY,JSON.stringify(activities));renderDashboard()}
function saveActivity(entry){const at=activities.findIndex(a=>a.sport==="strength"&&a.date===entry.date&&a.day===entry.day);if(at>=0)activities[at]=Object.assign({},activities[at],entry);else activities.unshift(Object.assign({id:String(Date.now())},entry));persist()}
function pace(km,mins){const p=Math.round(mins/km);return Math.floor(p/60)+":"+String(p%60).padStart(2,"0")+" / km"}
function setup(formId,sport){const form=$(formId);const recalc=()=>{const km=Number(form.elements.distance.value),mins=sport==="bike"?Number(form.elements.minutes.value):Number(form.elements.hours.value)*60+Number(form.elements.minutes.value);if(km>0&&mins>0){if(sport==="bike")form.elements.speed.value=(km/(mins/60)).toFixed(1);else{form.elements.pace.value=pace(km,mins);form.elements.speed.value=(km/(mins/60)).toFixed(1)+" km/h"}}};["distance","minutes","hours"].forEach(k=>{if(form.elements[k])form.elements[k].addEventListener("input",recalc)});form.addEventListener("submit",e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form),km=Number(d.get("distance")),mins=sport==="bike"?Number(d.get("minutes")):Number(d.get("hours"))*60+Number(d.get("minutes"));if(!Number.isFinite(km)||km<=0||!Number.isFinite(mins)||mins<=0){toast("Informe distância e tempo válidos.");return}const old=activities.findIndex(a=>a.id===d.get("id"));const a={id:d.get("id")||String(Date.now()),sport,date:d.get("date"),distance:km,minutes:mins,type:d.get("type"),notes:d.get("notes").trim(),speed:(km/(mins/60)).toFixed(1),pace:sport==="run"?pace(km,mins):""};if(old>=0)activities[old]=a;else activities.unshift(a);persist();form.reset();form.elements.id.value="";toast("Atividade salva no histórico.")})}
setup("#bikeForm","bike");setup("#runForm","run");
const bikePlans=[["Iniciantes","Criar hábito com conforto","12–20 km","45–75 min","leve","18–22 km/h","10 min leves","30–50 min contínuos","5 min leves"],["Resistência","Sustentar ritmo constante","25–45 km","1h15–2h30","leve/moderada","20–26 km/h","15 min progressivos","45–120 min estáveis","10 min leves"],["Velocidade","Mudanças controladas de ritmo","18–30 km","60–100 min","moderada/alta","22–30 km/h","15 min leves","6 × 2 min firme, 3 min leve","10 min leves"],["Subida","Força específica em aclives","15–30 km","60–120 min","moderada","18–25 km/h","15 min leves","4–6 subidas controladas","10 min leves"],["Recuperação","Pedalar leve entre sessões","10–18 km","35–60 min","muito leve","16–21 km/h","10 min fáceis","20–35 min leves","5 min fáceis"],["Longa distância","Praticar resistência","40–80 km","2–4 h","leve","20–26 km/h","15 min leves","Pedal contínuo com pausas","10 min leves"]];
const runPlans=[["Iniciantes · 5 km","Construir consistência","3–5 km","25–45 min","7:00–9:00/km","leve"],["Intermediário · 10 km","Desenvolver base aeróbica","5–8 km","35–65 min","5:45–7:00/km","leve/moderada"],["Avançado · 15 km","Ritmo progressivo controlado","7–12 km","40–85 min","4:45–6:00/km","moderada"],["Intervalado · 5 a 10 km","Mudanças de ritmo","4–7 km","35–60 min","variável","moderada/alta"],["Resistência · até 21 km","Sustentar ritmo conversável","8–14 km","50–100 min","confortável","leve/moderada"],["Longão · até 21 km","Preparar provas longas","10–18 km","65–150 min","confortável","leve"],["Recuperação","Facilitar retorno","3–6 km","20–45 min","conversa fácil","muito leve"]];
function renderPlanCards(id,rows,bike){$(id).innerHTML=rows.map((p,i)=>"<article class='plan-card'><span class='plan-index'>"+String(i+1).padStart(2,"0")+"</span><h3>"+p[0]+"</h3><p>"+p[1]+"</p><div class='plan-metrics'><span><b>Distância</b>"+p[2]+"</span><span><b>Duração</b>"+p[3]+"</span><span><b>Intensidade</b>"+p[bike?4:5]+"</span><span><b>"+(bike?"Velocidade":"Pace")+"</b>"+p[bike?5:4]+"</span></div><details><summary>Orientações do treino</summary><p>Aquecimento: "+(bike?p[6]:"10 min leves + mobilidade")+"<br>Parte principal: "+(bike?p[7]:p[0])+"<br>Desaquecimento: "+(bike?p[8]:"5–10 min leves")+"<br>Hidratação: ajuste à duração, ao clima e à sede. Interrompa se sentir dor ou mal-estar.</p></details></article>").join("")}
renderPlanCards("#bikePlans",bikePlans,true);renderPlanCards("#runPlans",runPlans,false);
function inPeriod(date,period){const d=new Date(date+"T12:00:00"),n=new Date();if(period==="month")return d.getMonth()===n.getMonth()&&d.getFullYear()===n.getFullYear();if(period==="week"){const ago=new Date();ago.setDate(n.getDate()-6);return d>=ago&&d<=n}return true}
function escapeText(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
function renderDashboard(){if(!$("#dashboardStats"))return;const sport=$("#filterSport").value,period=$("#filterPeriod").value,shown=activities.filter(a=>(sport==="all"||sport===a.sport)&&inPeriod(a.date,period)),runs=activities.filter(a=>a.sport==="run"),bikes=activities.filter(a=>a.sport==="bike"),sum=a=>a.reduce((n,x)=>n+(Number(x.distance)||0),0);const allMinutes=activities.reduce((n,a)=>n+(Number(a.minutes)||0),0);$("#dashboardStats").innerHTML=[[activities.length,"Atividades realizadas"],[sum(runs).toFixed(1)+" km","Corrida acumulada"],[sum(bikes).toFixed(1)+" km","Ciclismo acumulado"],[Math.floor(allMinutes/60)+" h","Tempo total"],[activities.filter(a=>a.sport==="strength").length,"Treinos de musculação" ]].map(x=>"<article class='stat-card'><strong>"+x[0]+"</strong><span>"+x[1]+"</span></article>").join("");const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const iso=d.toISOString().slice(0,10),km=shown.filter(a=>a.date===iso).reduce((n,a)=>n+(Number(a.distance)||0),0);days.push({label:d.toLocaleDateString("pt-BR",{weekday:"short"}),km})}const max=Math.max(1,...days.map(x=>x.km));$("#activityChart").innerHTML=days.map(x=>"<div class='chart-day'><span>"+(x.km?x.km.toFixed(1):"")+"</span><i style='height:"+Math.max(4,x.km/max*100)+"%'></i><small>"+x.label+"</small></div>").join("");$("#activityHistory").innerHTML=activities.length?activities.map(a=>"<article class='history-item'><div><b>"+({run:"Corrida",bike:"Ciclismo",strength:"Musculação"}[a.sport])+(a.title?" · "+a.title:"")+"</b><span>"+new Date(a.date+"T12:00:00").toLocaleDateString("pt-BR")+" · "+(a.type||"Treino")+(a.distance?" · "+a.distance+" km":"")+(a.minutes?" · "+Math.floor(a.minutes/60)+"h "+a.minutes%60+"min":"")+(a.pace?" · "+a.pace:"")+"</span><small>"+escapeText(a.notes||"")+"</small></div><div><button data-edit='"+a.id+"' "+(a.sport==="strength"?"disabled":"")+">Editar</button> <button data-delete='"+a.id+"'>Excluir</button></div></article>").join(""):"<p class='empty-state'>Nenhuma atividade registrada ainda.</p>";$("#runTotals").innerHTML="<span>Semana: <b>"+sum(runs.filter(a=>inPeriod(a.date,"week"))).toFixed(1)+" km</b></span><span>Mês: <b>"+sum(runs.filter(a=>inPeriod(a.date,"month"))).toFixed(1)+" km</b></span>";$("#activityHistory").querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{if(confirm("Excluir este registro?")){activities=activities.filter(a=>a.id!==b.dataset.delete);persist()}})}
function editActivity(id){const a=activities.find(x=>x.id===id);if(!a||a.sport==="strength")return;const f=a.sport==="bike"?bikeForm:runForm;f.elements.id.value=a.id;f.elements.date.value=a.date;f.elements.distance.value=a.distance;f.elements.type.value=a.type;f.elements.notes.value=a.notes;if(a.sport==="bike")f.elements.minutes.value=a.minutes;else{f.elements.hours.value=Math.floor(a.minutes/60);f.elements.minutes.value=a.minutes%60}f.elements.distance.dispatchEvent(new Event("input"));f.querySelector(".cancel-edit").hidden=false;document.getElementById(a.sport==="bike"?"ciclismo":"corrida").scrollIntoView({behavior:"smooth"})}
$("#activityHistory").addEventListener("click",e=>{if(e.target.matches("[data-edit]"))editActivity(e.target.dataset.edit)});
document.querySelectorAll(".cancel-edit").forEach(b=>b.addEventListener("click",()=>{const f=b.closest("form");f.reset();f.elements.id.value="";b.hidden=true}));
$("#clearRecords").addEventListener("click",()=>{if(activities.length&&confirm("Apagar todo o histórico salvo neste navegador?")){activities=[];persist();toast("Histórico limpo.")}});
["#filterSport","#filterPeriod"].forEach(s=>$(s).addEventListener("change",renderDashboard));
renderDashboard();
