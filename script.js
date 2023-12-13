function calGrades(){
    let hindi = parseInt(document.getElementById('subj1').value);
    let eng = parseInt(document.getElementById('subj2').value);
    let math = parseInt(document.getElementById('subj3').value);
    let sci = parseInt(document.getElementById('subj4').value);
    let itech = parseInt(document.getElementById('subj5').value);
    
        const totalMarks = 500;
        const obtainMarks = hindi+eng+math+sci+itech;
        const stdPercentage = (obtainMarks * 100) / totalMarks;
        
        let gradeName;
        
        if(stdPercentage<=75 && stdPercentage>80){
            gradeName = "A";
        }

        else if(stdPercentage<75 && stdPercentage>=50){
            gradeName = "B";
        }
        else if(stdPercentage<50 && stdPercentage>=35){
            gradeName = "C";
        }
        else{
            gradeName = "Fail"
        }

    document.getElementById('showGrade').innerHTML = `Out of <strong>500</strong>, obtained marks is = <strong>${obtainMarks}</strong> and Percentage = ${stdPercentage.toFixed(2)} % <br/> Your grade is: <strong>${gradeName}</strong>`;
}