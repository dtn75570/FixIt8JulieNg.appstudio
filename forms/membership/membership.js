
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnGo.onclick=function(){
  let nameInput = inptMember.value
  for (i = 0; i <= members.length-1; i++)
    if (members[i] === nameInput) 
      ChangeForm(memberConfirm)
    else 
      members.push(nameInput)
      ChangeForm(memberDeny)
      
}


