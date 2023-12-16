let a=(prompt("Enter the word"))
let b=prompt("Which letter you want to delete")
document.write("Given = "+a+"<br><br>")
document.write("Ans"+"<br>")


for(i=0;i<a.length;i++){
	if(a[i]!==b){
		document.write(a[i])
	}
}
