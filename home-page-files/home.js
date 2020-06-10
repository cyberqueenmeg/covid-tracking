function changeWebPage() {
	console.log("function is running");
	var zipcode = document.getElementById("zip-code").value;
	
	if (zipcode === "06903") {
		window.location.assign("../zip-code-files/06903.html");
	} else if (zipcode === "85028") {
		window.location.assign("../zip-code-files/85028.html");
	} else if (zipcode === "85032") {
		window.location.assign("../zip-code-files/85032.html");
	} else if (zipcode === "85254") {
		window.location.assign("../zip-code-files/85254.html");
	} else if (zipcode === "94538") {
		window.location.assign("../zip-code-files/94538.html");
	} else {
		print("Error");
	}
}
