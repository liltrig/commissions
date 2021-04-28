function slideshow() {
	if (document.querySelector('.slideshow')) {
		let slideshows = document.querySelectorAll('.slideshow')

		for (let i = 0; i < slideshows.length; i++) {

			let slideshow = slideshows[i]
			let index = 0
			let imgs, next, prev

			if (slideshow.querySelector('img')) {
				imgs = slideshow.querySelectorAll('img')
				imgs[index].classList.add('active-slide')
			}

			if (slideshow.querySelector('.next')) {
				next = slideshow.querySelector('.next')
				next.addEventListener('click', function() {
					if (index < imgs.length - 1) {
						index += 1
					} else {
						index = 0
					}
					slideshow.querySelector('.active-slide').classList.remove('active-slide')
					imgs[index].classList.add('active-slide')
				})
			}

			if (slideshow.querySelector('.prev')) {
				prev = slideshow.querySelector('.prev')
				prev.addEventListener('click', function() {
					if (index <= 0) {
						index = imgs.length - 1

					} else {
						index -= 1
					}

					slideshow.querySelector('.active-slide').classList.remove('active-slide')
					imgs[index].classList.add('active-slide')
				})
			}


		}

	}
}

slideshow()
