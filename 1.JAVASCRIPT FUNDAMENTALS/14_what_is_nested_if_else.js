// nested if

let website = "udemy"
let course_name ="javascript"
let code_challenge = true 
if(website === "udemy"){
    if(course_name==="javascript"){
        if(code_challenge === true){
            console.log("i want to learn javascript course");
        }
        else{
            console.log("i dont want to learn this course becouse the code challenge is not present")
        }
        
    }
    else{
        console.log("i dont want to lern this course because this course is not javascript")
    }
}
else{
    console.log("i dont want to lern this course because this course is not from udemy")
}