<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Диапазон цен</title>
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="ui/jquery-ui.css">
	<link rel="stylesheet" href="style.css">
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body>

	<div class="container content">
<form class="form-horizontal" method="post" id="form">
	<div class="form-group">
		<label for="name" class="col-sm-2 control-label">Диапазон цены</label>
		<div class="col-sm-6">
			<input class="form-control" name="price" id="price">
			<div id="slider-range"></div>
		</div>
	</div>
	<div class="form-group">
		<div class="col-sm-offset-2 col-sm-6">
			<button type="submit" id="submit" class="btn btn-primary">Отправить</button>
			<div></div>
		</div>
	</div>
</form>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="ui/jquery-ui.js"></script>

	<script>
$(function(){

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 0, 300 ],
		step: 10,
		slide: function( event, ui ) {
			$( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#price" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );

});
	</script>

</body>
</html>