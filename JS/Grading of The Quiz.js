function getGrade(){

    const passingScore = 825
    const correctAnswer = 142.86
    var cuurentScore = 0
    

    const ssh = document.getElementById('ssh').value
    const smtp = document.getElementById('smtp').value
    const ntp = document.getElementById('ntp').value
    const snmp = document.getElementById('snmp').value
    const syslog = document.getElementById('syslog').value
    const dns = document.getElementById('dns').value

    if (ssh === "22" && smtp === "25" && ntp === "123" && snmp === "161" && syslog === "514" && dns === "53") 
        cuurentScore += correctAnswer
    

    const wireless = document.getElementById('wireless')
    if(wireless.checked)
       cuurentScore += correctAnswer

    const fcs = document.getElementById("fcs")
    if(fcs.checked)
        cuurentScore += correctAnswer

    const cdp = document.getElementById("cdp")
    const chdlc = document.getElementById("chdlc")
    if(cdp.checked && chdlc.checked)
         cuurentScore += correctAnswer

    const deletesql = document.getElementById("deletesql")
         if(deletesql.checked)
             cuurentScore += correctAnswer

    const info = document.getElementById("info")
        if(info.checked)
            cuurentScore += correctAnswer  

    const eui64 = document.getElementById("eui64")
        if(eui64.checked)
            cuurentScore += correctAnswer          
            
    if(cuurentScore >= passingScore){
        window.alert("Passed !" + " Your score is " + Math.floor(cuurentScore) + " out of " + 1000)  
        window.prompt("Were the hints helpful ?")
        window.alert("Thank you for your feedback !")  

    }
    else
        window.alert("Try again ):" + " Your score is " + Math.floor(cuurentScore) + " out of " + 1000)  
          
    
    


}