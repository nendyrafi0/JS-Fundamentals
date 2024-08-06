//students average scores
function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    const average = sum / scores.length;
    return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
//=================================================================
//students grade
function getGrade(score) {
    let grade;
    if (score == 100) {
        return grade = "A++";
    } else if (score >= 90 && score < 100) {
        return grade = "A";
    } else if (score >= 80 && score < 90) {
        return grade = "B";
    } else if (score >= 70 && score < 80) {
        return grade = "C";
    } else if (score >= 60 && score < 70) {
        return grade = "D";
    } else {
        return grade = "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
//==========================================
//students passed
function hasPassingGrade(score) {
    let passed;
    if (score < 60) {
        return passed = false;
    } else {
        return passed = true;
    }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
//=================================
//student final report
function studentMsg(totalScores, studentScore) {
    let classAverage = getAverage(totalScores);
    let grade = getGrade(studentScore);  
    // Determine if the student passed or failed
    let message = "Class average: " + classAverage + ". Your grade: " + grade + ". ";
    
    if (studentScore >= 60) {
        message += "You passed the course.";
    } else {
        message += "You failed the course.";
    }
    return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));