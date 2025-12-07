async function calculate() {
    const add1 = document.getElementById("add1").value;
    const add2 = document.getElementById("add2").value;

    const resAdd = await fetch(`/add?a=${add1}&b=${add2}`);
    const dataAdd = await resAdd.json();
    document.getElementById("addResult").innerText = dataAdd.result;

    const sub1 = document.getElementById("sub1").value;
    const sub2 = document.getElementById("sub2").value;

    const resSub = await fetch(`/sub?a=${sub1}&b=${sub2}`);
    const dataSub = await resSub.json();
    document.getElementById("subResult").innerText = dataSub.result;

    const mul1 = document.getElementById("mul1").value;
    const mul2 = document.getElementById("mul2").value;

    const resMul = await fetch(`/mul?a=${mul1}&b=${mul2}`);
    const dataMul = await resMul.json();
    document.getElementById("mulResult").innerText = dataMul.result;

    const div1 = document.getElementById("div1").value;
    const div2 = document.getElementById("div2").value;

    const resDiv = await fetch(`/div?a=${div1}&b=${div2}`);
    const dataDiv = await resDiv.json();
    document.getElementById("divResult").innerText = dataDiv.result;
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculate);
});

calculate();
