window.addEventListener('DOMContentLoaded', function(){
    'use strick';
    let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');
	
	function hideTabContent(a){
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.add('hide');
			tabContent[i].classList.remove('show');
		}
	}

	hideTabContent(1);

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			tabContent[b].classList.add('show');
			tabContent[b].classList.remove('hide');
		}
	}

	info.addEventListener('click', function(e){
		e.preventDefault();
		let target = e.target;
		if(target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});


});