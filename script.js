let string = document.querySelector(".details");
let boxs=document.querySelector(".box");

submit.addEventListener("click", async () => {
  let value = input.value;
  if(value=='' && value.replaceAll(" ",'')=='')
  {
    alert("Enter a Mail...");
  }
  else
  {
    img.style.display = "block";
  let response = await fetch(
    `https://emailvalidation.abstractapi.com/v1/?api_key=eb009451b76e410dbc0f4f3c6adc963d&email=${value}`
  );
  let result = await response.json();
  img.style.display = "none";
  boxs.style.display="flex";
  if(result.deliverability=='DELIVERABLE')
  {
    string.innerHTML = `
            <div class="data">
                <li>Email</li>
                <p>:</p>
                <li>${result.email}</li>
            </div>
            <div class="data">
                <li>Deliverability</li>
                <p>:</p>
                <li>${result.deliverability}</li>
            </div>
            <div class="data">
                <li>Quality Score</li>
                <p>:</p>
                <li>${result.quality_score}</li>
            </div>`;
  }
  else if (result.deliverability=='UNDELIVERABLE')
  {
    right.src="cancel.svg";
    string.innerHTML = `
            <div class="data">
                <li>Email</li>
                <p>:</p>
                <li>${result.email}</li>
            </div>
            <div class="data">
                <li>Deliverability</li>
                <p>:</p>
                <li>${result.deliverability}</li>
            </div>
            <div class="data">
                <li>Quality Score</li>
                <p>:</p>
                <li>${result.quality_score}</li>
            </div>`;
  }
  }
  input.value='';
});
