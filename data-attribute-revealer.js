// D.A.R. Data Attribute Revealer by Murray Roke
// =============================================
// todo: load jQuery (currently requires jquery to already exists)

var $body = $('body');
var $reveals = $('.__d_a_r_item');
if($reveals.length)
{
	$reveals.remove();
}
else
{
	$('body *:not(iframe *,script *)').each(function(){ 
		var $el = $(this);
		var j=''; 
		try{ 
			j =JSON.stringify($el.data()); 
		}catch(e){} 
		if(j.length>2) 
		{
			var $r = $('<div class="__d_a_r_item" style="background-color:#ACE;">'+j+'</div>');
			$el.prepend($r);
		} 
	});
}