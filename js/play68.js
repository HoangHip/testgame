function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "Lost";
	if(score > 0)
		shareTitle = '#Lost#I have passed' + score +'Fight for survival on the lost desert island！';
	else
		shareTitle = "#Lost#Fight for survival on the lost desert island！";
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	// document.title = shareTitle;
}
