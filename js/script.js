$(document).ready(function() {
    

	var width = document.body.clientWidth;
	if (width <= 1024){
		$('body').css('background-size', width+80+'px ');
	}
	
	
	/*
	var menuLink = 
	'   https://drive.google.com/viewerng/viewer?url=http://sham62.ru/menu.pdf   '
	;
	
	
	
	$('menu li:eq(1) a').attr('href', menuLink);
	*/
	

	
	
	
	$("a.grouped_elements").fancybox({
		prevEffect : 'fade',
		nextEffect : 'fade',
	});


	ymaps.ready(init);
	var myMap, 
		myPlacemark;

	function init(){ 

		myMap = new ymaps.Map ("yandex_map", {
			center: [54.631706, 39.739006],
			zoom: 17/*,
            behaviors: ['scrollZoom']*/
		}); 
		
		myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector')
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });
		
		myPlacemark = new ymaps.Placemark([54.631707, 39.739006], {
			content: 'Шервуд',
			balloonContent: 'Кафе-бар "Шервуд"'
		});
		
		myMap.geoObjects.add(myPlacemark);
	}
	
});