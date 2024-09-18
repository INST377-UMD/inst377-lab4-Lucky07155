//Alert ME
function alertMe()
{
    alert("hi" + " " +document.getElementById("name").value + "!")
}

//Color Change 
function changeColor()
{
    if(document.body.style.backgroundColor == "green")
    {
        const t = document.body.style.backgroundColor = "lightPink";
    }
    else
    {
        const t = document.body.style.backgroundColor = "green";
    }
}

//Text Validate 
function testText()
{
    const validationRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\?]+/;
    if(validationRegex.test(document.textTest.textTester.value))
    {
        alert("Text has special characters!")
        return false
    }
    return true 
}

//Add Text
function addText()
{
    document.getElementById("header").textContent += " - Adding Text"
}