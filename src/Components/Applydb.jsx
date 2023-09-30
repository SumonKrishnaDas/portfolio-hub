
export const apply =(id)=>{

 const applied =JSON.parse(localStorage.getItem('AppliedJob'));
 
 if(applied && applied.includes(id)) return 0

 let data =[]
if(applied) data = [...applied,id]
else data = [id]
localStorage.setItem("AppliedJob",JSON.stringify(data))
return 1
}

export const getApplied = () => JSON.parse(localStorage.getItem('AppliedJob'))


