/* 搜索框下拉提示 */
$(function() {
	var sval = '';
	setTimeout(function() {
		$(".search_account").autocomplete({
			delay: 0,
			source: function(request, response) {
				var search_account = $(".search_account").val();
				sval = search_account;
				$.ajax({
					url: '/Search/Suggester',
					dataType: 'json',
					data: {type:astype,query:search_account},
					success: function(data) {
						var html = '';
						if(data.status == 1) {
							for (var i = 0; i < data.suggestions.length; i++) {
								html += "<p>"+data.suggestions[i]+"</p>";
							}
							if (html) {
								$('#Suggester').show().html(html);
							} else {
								$('#Suggester').hide().html('');
							}
						}
					}
				});
			}
		}).on("input.autocomplete", function () {
			// 修复在Firefox中不支持中文的BUG
			var search_account = $(".search_account").val();
			if ( ! search_account) {
				$('#Suggester').hide().html('');
			}
			$(".search_account").autocomplete("search", search_account);
		}).on('.search_account focus', function(){
			var search_account = $(".search_account").val();
			if (search_account) {
				if (search_account == sval && $('#Suggester').html()) {
					$('#Suggester').show();
				} else {
					sval = search_account;
					$(".search_account").autocomplete("search", search_account);
				}
			}
		}).on(".search_account keydown", function(event){
			if(event.which == 9) {
				var text = $('#Suggester p:first').text();
				sval = text;
				$('.search_account').val(text);
				$('#Suggester').hide();
				$('#search').click();
			}
		});
	}, 0);
	$(document).click(function(e){
		$('#Suggester').hide();
	});
	$('#Suggester').delegate('p', 'click', function(e){
		var text = $(this).text();
		sval = text;
		$('.search_account').val(text);
		$('#Suggester').hide();
		$('#search').click();
        e.stopPropagation();
	});
});
