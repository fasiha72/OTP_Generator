function generateOTP() {
  const length = document.getElementById("length").value;
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  document.getElementById("otp").textContent = otp;
}
