
var s = "";
for (var i = 1; i <= 20; i++) {
	s += i;
	if(i % 2 == 0)
		// console.log(i+"是偶数")；
		s += "是偶数";
	else
		// console.log(i+"是奇数")；
		s += "是奇数";
	console.log(s);
	s="";
}
