

 document.getElementById("demo").innerHTML = "Chlamydia and Gonorrhea Form";

try{
 function validatepersonalinfo(){
  let DOT = document.forms.personalinfo.DOT.value;
  let PCF = document.forms.personalinfo.PCF.value;
  let healthprovider = document.forms.personalinfo.healthprovider.value;
  let contactnumber = document.forms.personalinfo.contactnumber.value;
  let fullname = document.forms.personalinfo.fullname.value;
  let DOB = document.forms.personalinfo.DOB.value;
  let gender = document.forms.personalinfo.gender.value; 
  let ethnicity = document.forms.personalinfo.ethnicity.value;
  let race= document.forms.personalinfo.race.value;
  let partnergender = document.forms.personalinfo.partnergender.value;
  let prehivtest = document.forms.personalinfo.prehivtest.value;
  let reason = document.forms.personalinfo.reason.value;  
  let diagnosis = document.forms.personalinfo.diagnosis.value; 
  let sites = document.forms.personalinfo.sites.value; 
  
 
  if(!DOT){
    document.getElementById('DOTErr').innerHTML="Today's Date Is Required"; 
    document.forms.personalinfo.DOT.focus();
    return false;
  }
  
  if(!PCF){
      document.getElementById('DOTErr').innerHTML="This Field Is Required";
      document.forms.personalinfo.PCF.focus();
      return false;
    }
  
    if(!healthprovider){
      document.getElementById('healthproviderErr').innerHTML="This Field Is Required";
      document.forms.personalinfo.healthprovider.focus();
      return false;
    }
    if(!contactnumber){
      document.getElementById('contactnumberErr').innerHTML="This Field Is Required";
      document.forms.personalinfo.contactnumber.focus();
      return false;
    }

    if(!fullname){
      document.getElementById('fullnameErr').innerHTML="This Field Is Required";
      document.forms.personalinfo.fullname.focus();
      return false;
    }

    if(!DOB){
      document.getElementById('DOBErr').innerHTML="This Field Is Required";
      document.forms.personalinfo.DOB.focus();
      return false;
    }

    if(!gender){
      document.getElementById('genderErr').innerHTML="This Field Is Required";
      document.forms.personalinfo.gender.focus();
      return false;
    }

    if(!ethnicity){
      document.getElementById('ethnicityErr').innerHTML="This Field Is Required";
      document.forms.personalinfo.ethnicity.focus();
      return false;
    }
    
    
 if(!race){
  document.getElementById('raceErr').innerHTML="This Field Is Required";
  document.forms.personalinfo.race.focus();
  return false;
}

if(!partnergender){
  document.getElementById('partnergenderErr').innerHTML="This Field Is Required";
  document.forms.personalinfo.partnergender.focus();
  return false;
}

if(!prehivtest){
  document.getElementById('prehivtestErr').innerHTML="This Field Is Required";
  document.forms.personalinfo.prehivtest.focus();
  return false;
}

if(!reason){
  document.getElementById('reasonErr').innerHTML="This Field Is Required";
  document.forms.personalinfo.reason.focus();
  return false;
}

if(!diagnosis){
  document.getElementById('diagnosisErr').innerHTML="This Field Is Required";
  document.forms.personalinfo.diagnosis.focus();
  return false;
}

if(!sites){
  document.getElementById('sitesErr').innerHTML="This Field Is Required";
  document.forms.personalinfo.sites.focus();
  return false;
}

 }

 function validatePCF(){
  let PCFpattern = /^[A-Za-z\s]+$/;
  let PCF = document.forms.personalinfo.PCF.value;
  if (PCF){
      let x = PCFpattern.test(PCF);
      if (x==false){
          document.getElementById(PCFErr).innerHTML = "First name can only contain letters"
          document.forms.personalinfo.PCF.focus();
  }
  else{
      document.getElementbyID('PCFErr').innerHTML="";
      document.forms.personalinfo.PCF.style.bordercolor ='green';  
}
}
 }
}
catch(invalid){
  window.alert(err.message);
}
finally{

}

 






 
