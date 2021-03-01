/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
sendEvent(petaGA_FormCategory, Action, 'Label'); 
******************************************************/ 

//Get the current page's URL and convert it to lowercase.
var currentPage = window.location.toString().toLowerCase();

//Check to see if currentPage matches a given URL and submit a GA Event if it does.
if (currentPage.indexOf('subscribe-to-enews/') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'Subscribe to E-News');
}
else if (currentPage.indexOf('subscribe-to-enews-thanks/') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'Subscribe to E-News');
}
else if (currentPage.indexOf('volunteer/') > 0) {
	sendEvent(petaGA_FormCategory_Volunteer, petaGA_FormAction_Initiated, 'Volunteer');
}
else if (currentPage.indexOf('volunteer-thanks/') > 0) {
	sendEvent(petaGA_FormCategory_Volunteer, petaGA_FormAction_Submitted, 'Volunteer');
}
else if (currentPage.indexOf('sp-fishing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is Fishing Cruel');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1698') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is Fishing Cruel');
}
else if (currentPage.indexOf('sp-hunting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Hunting Be Illegal');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1699') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Hunting Be Illegal');
}
else if (currentPage.indexOf('sp-shooting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Shooting Be Banned');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1700') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Shooting Be Banned');
}
else if (currentPage.indexOf('sp-endangered.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should We Try to Save Endangered Species');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1696') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should We Try to Save Endangered Species');
}
else if (currentPage.indexOf('sp-testing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Animal Testing Be Illegal');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1701') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Animal Testing Be Illegal');
}
else if (currentPage.indexOf('sp-factoryfarming.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Factory Farming Be Banned');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1702') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Factory Farming Be Banned');
}
else if (currentPage.indexOf('sp-veg.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should More People Try to Go Vegetarian');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1703') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should More People Try to Go Vegetarian');
}
else if (currentPage.indexOf('sp-zoos.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is it Fair to Lock Animals in Cages, Pits or Pens');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1704') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is it Fair to Lock Animals in Cages, Pits or Pens');
}
else if (currentPage.indexOf('poll_results.asp?poleid=1705') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Animals Be Used in Circuses');
}
else if (currentPage.indexOf('sp-circuses.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Animals Be Used in Circuses');
}
else if (currentPage.indexOf('sk-fishing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is Fishing Cruel');
}
else if (currentPage.indexOf('sk-fishing-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is Fishing Cruel');
}
else if (currentPage.indexOf('sk-hunting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Do You Support the Ban on Hunting');
}
else if (currentPage.indexOf('sk-hunting-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Do You Support the Ban on Hunting');
}
else if (currentPage.indexOf('sk-shooting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Shooting, Like Hunting, Be Banned');
}
else if (currentPage.indexOf('sk-shooting-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Shooting, Like Hunting, Be Banned');
}
else if (currentPage.indexOf('sk-endangered-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should We Try to Save Endangered Species');
}
else if (currentPage.indexOf('sk-endangered.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should We Try to Save Endangered Species');
}
else if (currentPage.indexOf('sk-testing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should We Find Ways to Test Products Without Causing Harm to Animals?');
}
else if (currentPage.indexOf('sk-testing-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should We Find Ways to Test Products Without Causing Harm to Animals?');
}
else if (currentPage.indexOf('sk-factoryfarming.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Factory Farming Be Banned');
}
else if (currentPage.indexOf('sk-factoryfarming-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Factory Farming Be Banned');
}
else if (currentPage.indexOf('sk-veg.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should More People Try to Become Vegetarian');
}
else if (currentPage.indexOf('sk-veg-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should More People Try to Become Vegetarian');
}
else if (currentPage.indexOf('sk-zoos.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is it Fair to Lock Animals in Cages, Pits or Pens');
}
else if (currentPage.indexOf('sk-zoos-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is it Fair to Lock Animals in Cages, Pits or Pens');
}
else if (currentPage.indexOf('sk-circuses.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Animals Be Used in Circuses');
}
else if (currentPage.indexOf('sk-circuses-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Animals Be Used in Circuses');
}
else if (currentPage.indexOf('sk3-fishing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is Fishing Cruel Results');
}
else if (currentPage.indexOf('sk3-fishing-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is Fishing Cruel Results');
}
else if (currentPage.indexOf('sk3-hunting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Do Your Support the Ban on Hunting Results');
}
else if (currentPage.indexOf('sk3-hunting-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Do Your Support the Ban on Hunting Results');
}
else if (currentPage.indexOf('sk3-shooting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Shooting, Like Hunting, Be Banned Results');
}
else if (currentPage.indexOf('sk3-shooting-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Shooting, Like Hunting, Be Banned Results');
}
else if (currentPage.indexOf('sk3-endangered.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should We All Try Harder Results');
}
else if (currentPage.indexOf('sk3-endangered-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should We All Try Harder Results');
}
else if (currentPage.indexOf('sk3-testing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Experiments for Medical Research Results');
}
else if (currentPage.indexOf('sk3-testing-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Experiments for Medical Research Results');
}
else if (currentPage.indexOf('sk3-science.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Cruelty-Free Science Results');
}
else if (currentPage.indexOf('sk3-science-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Cruelty-Free Science Results');
}
else if (currentPage.indexOf('sk3-factoryfarming.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Factory Farming Be Banned Results');
}
else if (currentPage.indexOf('sk3-factoryfarming-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Factory Farming Be Banned Results');
}
else if (currentPage.indexOf('sk3-veg.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should We All Try to Go Vegetarian Results');
}
else if (currentPage.indexOf('sk3-veg-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should We All Try to Go Vegetarian Results');
}
else if (currentPage.indexOf('sk3-zoos.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is It Fair Results');
}
else if (currentPage.indexOf('sk3-zoos-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is It Fair Results');
}
else if (currentPage.indexOf('sk3-freedomfighters.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is It Acceptable to Break the Law Results');
}
else if (currentPage.indexOf('sk3-freedomfighters-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is It Acceptable to Break the Law Results');
}
else if (currentPage.indexOf('sk2-fishing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Is Fishing Cruel Results');
}
else if (currentPage.indexOf('sk2-fishing-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Is Fishing Cruel Results');
}
else if (currentPage.indexOf('sk2-hunting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Ban on Hunting Results');
}
else if (currentPage.indexOf('sk2-hunting-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Ban on Hunting Results');
}
else if (currentPage.indexOf('sk2-shooting.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Should Shooting, Like Hunting, Be Banned Results');
}
else if (currentPage.indexOf('sk2-shooting-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Should Shooting, Like Hunting, Be Banned Results');
}
else if (currentPage.indexOf('sk2-endangered.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Save Endangered Species Results');
}
else if (currentPage.indexOf('sk2-endangered-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Save Endangered Species Results');
}
else if (currentPage.indexOf('sk2-testing.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Experiments without the Use of Animals Results');
}
else if (currentPage.indexOf('sk2-testing-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Experiments without the Use of Animals Results');
}
else if (currentPage.indexOf('sk2-factoryfarming.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Factory Farming Be Banned Results');
}
else if (currentPage.indexOf('sk2-factoryfarming-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Factory Farming Be Banned Results');
}
else if (currentPage.indexOf('sk2-veg.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'All Try to go Vegetarian Results');
}
else if (currentPage.indexOf('sk2-veg-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'All Try to go Vegetarian Results');
}
else if (currentPage.indexOf('sk2-zoos.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Fair to Animals Results');
}
else if (currentPage.indexOf('sk2-zoos-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Fair to Animals Results');
}
else if (currentPage.indexOf('sk2-circuses.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Animals Used in Circus Results');
}
else if (currentPage.indexOf('sk2-circuses-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Animals Used in Circus Results');
}
else if (currentPage.indexOf('sk2-bullying.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Take Action Results');
}
else if (currentPage.indexOf('sk2-bullying-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Take Action Results');
}
else if (currentPage.indexOf('sk2-freedomfighters.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Break the Law Results');
}
else if (currentPage.indexOf('sk2-freedomfighters-results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Break the Law Results');
}

