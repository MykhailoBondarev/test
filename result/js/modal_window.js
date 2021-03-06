	var	$tab_btn = $('.tab-btn'),
		$person = $('.person'),	
		$left_side = $('.left-side'),
		$left_person_click = $('.person a'),		
		$left_person = $('.left-side .person'),		
		$person_copy = $('.flaticon-arrow-right'),
		$r_side = $('.right-side .person-box'),		
		$search = $('.search-person'),
		$person_name = $('.left-side .person-box .person .person-name'),
		$icon_arrow = 'flaticon-arrow-right',
		$icon_cross = 'flaticon-cross108',
		id_num = 0;

$(document).ready(function(){
	$person.hover(		
			function(){					
					if ($(this).css('opacity') === '1'){						
						$(this).find('a').addClass($icon_arrow);	
					}
			},
			function(){				
				$(this).find('a').removeClass($icon_arrow);				
	});

	$left_person_click.click(function(){	
			$(this).removeClass($icon_arrow);
			id_num++;
			$(this).parent().parent().attr('id', id_num);	
			$(this).parent().parent().clone().prependTo($r_side);	
			$(this).parent().parent().css('opacity', '.5');			
			$('.right-side .person').addClass('person-copied');
			$(this).find('a').removeClass($icon_arrow);
	});

	$tab_btn.click(function(){
		$tab_btn.removeClass('active');
		$(this).addClass('active');
	});

});

$(document).on('click', function(){
	$('.person-copied').hover(		
			function(){	
				$(this).find('a').addClass($icon_cross);				
			},
			function(){						
				$(this).find('a').removeClass($icon_cross);	
	});

	$('.person-copied a').click(function(){
		var this_id = '#' + $(this).parent().parent().attr('id');
				$(this).parent().parent().remove();
				$left_side.find(this_id).css('opacity', '1');
	});

});

$search.keyup(function(){
	var filter = $(this).val(); 
		count = 0;
	$person_name.each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).parent().parent().fadeOut();           
            } else {
                $(this).parent().parent().show();
                count++;
            }
		});	
});