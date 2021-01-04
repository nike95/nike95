<?php include('components/header.php') ?>
	<main class="checkout">
		<div class="container">
			<form class="checkout__form">
				<div class="checkout__title">Оформление заказа</div>
				<div class="checkout-box">
					<div class="checkout-box__title">Контактные данные</div>
					<div class="checkout-box__flex">
						<div class="checkout-box__inputbox">
							<span>Фамилия</span>
							<input type="text" class="checkout-box__input">
						</div>
						<div class="checkout-box__inputbox">
							<span>Имя</span>
							<input type="text" class="checkout-box__input">
						</div>
						<div class="checkout-box__inputbox">
							<span>Номер телефона</span>
							<input type="text" class="checkout-box__input">
						</div>
					</div>
				</div>
				<div class="checkout-box__title">Адрес доставки</div>
				<div class="checkout-box__textareabox">
					<span>Улица, дом, квартира</span>
					<textarea class="checkout-box__textarea"></textarea>
				</div>
				<div class="checkout-box__title">Кто получит заказ?</div>
				<div class="checkout-box__flex">
					<label class="checkbox">
						<input type="checkbox" />
						<div class="checkbox__text">Я сам</div>
					</label>
					<label class="checkbox">
						<input type="checkbox" />
						<div class="checkbox__text">Консьерж</div>
					</label>
					<label class="checkbox">
						<input type="checkbox" />
						<div class="checkbox__text">Помощник</div>
					</label>
					<label class="checkbox">
						<input type="checkbox" />
						<div class="checkbox__text">Охранник</div>
					</label>
					<label class="checkbox">
						<input type="checkbox" />
						<div class="checkbox__text">Другое</div>
					</label>
				</div>
				<div class="checkout-box__textareabox checkout-box__textareabox--min">
					<span>Введите кто будет получать заказ</span>
					<textarea class="checkout-box__textarea"></textarea>
				</div>
				<div class="checkout-box">
					<div class="checkout-box__title">Коментарии</div>
					<div class="checkout-box__textareabox">
						<span>Пожелания по заказу</span>
						<textarea class="checkout-box__textarea"></textarea>
					</div>
				</div>
				<div class="final-price">
					<div class="final-price__left">Итого:</div>
					<div class="final-price__right"><span>7 500</span> руб</div>
				</div>
				<div class="checkout__flex">
					<a href="#" class="checkout__btn">Оформить заказ</a>
					<div class="checkout__text">Нажимая на кнопку "Оформить заказ", я даю согласие на <a href="#">обработку персональных данных</a></div>
				</div>
			</form>
		</div>
	</main>
<?php include('components/footer.php') ?>