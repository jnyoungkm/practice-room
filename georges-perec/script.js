$(function(){
	alert('여전히 헤매는 중');
	alert("'다음'과 '예'만 눌러주세요");
})

$('#li1 .btn').click(function(){
	$(this).addClass('active');
	$('#li2').clone().appendTo('ol').show().children('.btn:first').click(function(){
		$(this).addClass('active');
		$(this).siblings().addClass('active');
		$('#li2y').clone().appendTo('ol').show().children('.btn').click(function(){
			$(this).addClass('active');
			$('#li3').clone().appendTo('ol').show().children('.btn:first').click(function(){
				$(this).addClass('active');
				$(this).siblings().addClass('active');
				$('#li3y').clone().appendTo('ol').show().children('.btn:first').click(function(){
					$(this).addClass('active');
					$(this).siblings().addClass('active');
					$('#li3yy').clone().appendTo('ol').show().children('.btn').click(function(){
						$(this).addClass('active');
						$('#li4').clone().appendTo('ol').show().children('.btn:first').click(function(){
							$(this).addClass('active');
							$(this).siblings().addClass('active');
							$('#li4y').clone().appendTo('ol').show().children('.btn').click(function(){
								$(this).addClass('active');
								$('#li5').clone().appendTo('ol').show().children('.btn').click(function(){
									$(this).addClass('active');
									$('#li6').clone().appendTo('ol').show().children('.btn:first').click(function(){
										$(this).addClass('active');
										$(this).siblings().addClass('active');
										$('#li6y').clone().appendTo('ol').show().children('.btn').click(function(){
											$(this).addClass('active');
											$('#li7').clone().appendTo('ol').show().children('.btn').click(function(){
												$(this).addClass('active');
												$('#li8').clone().appendTo('ol').show().children('.btn').click(function(){
													$(this).addClass('active');
													$('#li9').clone().appendTo('ol').show().children('.btn').click(function(){
														$(this).addClass('active');
														$('#li1').clone().appendTo('ol').show().text('...계속');
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	}) 
})
// $('#li2 .btn:first').click(function(){
// 	$(this).addClass('active');
// 	$('#li2y').clone().appendTo('ul').show();
// })


